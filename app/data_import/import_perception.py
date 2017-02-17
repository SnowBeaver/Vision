import os
import pypyodbc
import datetime

from sqlalchemy import or_, and_

from app.diagnostic.models import EquipmentType, Equipment, Location, Manufacturer, \
    NormPhysic, NormPhysicData, NormFuran, NormFuranData, NormGas, NormGasData, \
    Transformer, GasSensor, ElectricalProfile, FluidProfile, Lab, Campaign, TestResult,\
    Contract, ContractStatus, TestType, FluidType, SamplingPoint, TestReason, TestStatus
from app.users.models import User
from app import db


DB_PATH = os.path.abspath('./Example_English.MDB')
odbc_connection_str = 'DRIVER={MDBTools};DBQ=%s;unicode_results=True;ansi=True;' % (DB_PATH,)


# Helper functions
def timestamp_to_date(val):
    if not val:
        return ''
    else:
        return datetime.datetime.strptime(val, '%m/%d/%y %H:%M:%S')


def clean_duplicates(data):
    return list(set(data) - set([None, '']))


def strip(data):
    return map(lambda x: x.strip() if isinstance(x, str) else None, data)


def get_admin_id():
    user_id = db.session.query(User).filter_by(email='admin@visiondiagnostic.org').first().id
    return user_id


def get_key_by_val(items, value):
    try:
        return items.keys()[items.values().index(value)]
    except:
        return None


# Equipment records
def get_equipment(cursor):
    query = __equipment_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_additional_data(equipments):
    data = {
        'manufacturer': [],
        'location': []
    }
    for equipment in equipments:
        data['manufacturer'].append(equipment[7])   # Manufacturier
        data['location'].append(equipment[3])       # Localisation

    data['manufacturer'] = clean_duplicates(strip(data['manufacturer']))
    data['location'] = clean_duplicates(strip(data['location']))
    return data


def fetch_equipment_data(equipments):
    data = {
        'items': []
    }
    user_id = get_admin_id()
    for equipment in equipments:
        data['items'].append(
            {
                'equipment_number': equipment[0],
                'equipment_type_id': equipment[1].strip() if equipment[1] else None,   # Get type id
                'location_id': equipment[3].strip() if equipment[3] else None,         # Get location id
                'modifier': bool(equipment[9]),
                'comments': equipment[14],
                'assigned_to_id': user_id,
                'nbr_of_tap_change_ltc': equipment[60],     # Nbr_Change_Prise
                'status': None,
                'phys_position': equipment[97],             #PosPhys
                'tension4': equipment[104],                 #Tension4   - TODO: Why is it in equipment not transformer table
                'validated': equipment[150],                #Valider
                'invalidation': equipment[151],             #EnValidation
                'prev_serial_number': equipment[152],       #NoSerieEquipeAnc
                'prev_equipment_number': equipment[153],    #NoEquipementAnc
                'sibling': equipment[154],                  #Fratrie
                'name': None,
                'serial': equipment[6],                     #NoSerieEquipe
                'manufacturer_id': equipment[7].strip() if equipment[7] else None,    #get id
                'manufactured': equipment[8],               #annee
                'description': equipment[5],                #Description
                'frequency': equipment[54],                 #Frequence
                'tie_status': equipment[93],                #LocTie
                'norm_physic': equipment[61],               #NormePhy
                'norm_furan': equipment[63],                #NormeFur
                'norm_gas': equipment[62],                  #NormeGD
                'transformer_data': {
                    'fluid_volume': equipment[4],           #LitreHuile
                    'sealed': equipment[11],                #Scelle
                    'welded_cover': equipment[12],          #CouvSoude
                    'windings': equipment[28],              #Bobine
                    'cooling_rating': None,                 #TODO
                    'autotransformer': equipment[29],       #Auto_Transfo
                    'threephase': equipment[13],            #TriPhase
                    'gassensor_id': equipment[15],          #Capteur
                    'phase_number': None,                   #TODO
                    'frequency': str(equipment[54]),        #Frequence
                    'primary_tension': equipment[22],       #Tension1
                    'secondary_tension': equipment[23],     #Tension2
                    'tertiary_tension': equipment[24],      #Tension3
                    'based_transformerp_ower': equipment[25],             #Puissance1 - ?
                    'first_cooling_stage_power': equipment[26],           #Puissance2 - ?
                    'second_cooling_stage_power': equipment[27],          #Puissance3 - ?
                    'primary_winding_connection': equipment[30],          #Raccord_Bobine1
                    'secondary_winding_connection': equipment[31],        #Raccord_Bobine2
                    'tertiary_winding_connection': equipment[32],         #Raccord_Bobine3
                    'windind_metal': equipment[49],         #Bobine_Materiel
                    'bil1': equipment[33],                  #BIL1
                    'bil2': equipment[34],                  #BIL2
                    'bil3': equipment[35],                  #Bil3
                    'static_shield1': equipment[36],        #Ecran_Electro1
                    'static_shield2': equipment[37],        #Ecran_Electro2
                    'static_shield3': equipment[38],        #Ecran_Electro3
                    'bushing_neutral1': equipment[42],      #Bushing_Neutre1
                    'bushing_neutral2': equipment[43],      #Bushing_Neutre2
                    'bushing_neutral3': equipment[44],      #Bushing_Neutre3
                    'bushing_neutral4': equipment[110],     #Bushing_Neutre4
                    'ltc1': equipment[39],                  #ChangeurP1 (load tap changer)
                    'ltc2': equipment[40],                  #ChangeurP2
                    'ltc3': equipment[41],                  #ChangeurP3
                    'temperature_rise': equipment[59],      #Temp_elevation
                    'impedance1': equipment[55],            #Impedance1
                    'imp_base1': equipment[56],             #Imp_Base1
                    'impedance2': equipment[57],            #Impedance2
                    'imp_base2': equipment[58],             #Imp_Base2
                    'mvaforced11': equipment[116],          #PuisForce11
                    'mvaforced12': equipment[117],          #PuisForce12
                    'mvaforced13': equipment[118],          #PuisForce13
                    'mvaforced14': equipment[119],          #PuisForce14
                    'mvaforced21': equipment[120],          #PuisForce21
                    'mvaforced22': equipment[121],          #PuisForce22
                    'mvaforced23': equipment[122],          #PuisForce23
                    'mvaforced24': equipment[123],          #PuisForce24
                    'impedance3': equipment[124],           #Impedance3
                    'impbasedmva3': equipment[125],         #Imp_Base3
                    'formula_ratio2': equipment[64],        #Formule_Ratio2
                    'formula_ratio': equipment[50],         #Formule_Ratio
                    'ratio_tag1': equipment[51],            #Etiquette1
                    'ratio_tag2': equipment[52],            #Etiquette2
                    'ratio_tag3': equipment[53],            #Etiquette3
                    'ratio_tag4': equipment[65],            #Etiquette4
                    'ratio_tag5': equipment[66],            #Etiquette5
                    'ratio_tag6': equipment[67],            #Etiquette6
                    'mvaactual': equipment[98],             #MWActuel
                    'mvaractual': equipment[99],            #MVARActuel
                    'mwreserve': equipment[100],            #MWReserve
                    'mvarreserve': equipment[101],          #MVARReserve
                    'mwultime': equipment[102],             #MWUltime
                    'mvarultime': equipment[103],           #MVARUltime
                    'mva4': equipment[105],                 #Puissance4 - ?
                    'quaternary_winding_connection': equipment[106], #Raccord_Bobine4
                    'bil4': equipment[107],                 #BIL4
                    'static_shield4': equipment[108],       #Ecran_Electro4
                    'ratio_tag7': equipment[112],           #Etiquette7
                    'ratiot_ag8': equipment[113],           #Etiquette8
                    'formula_ratio3': equipment[115],       #Formule_Ratio3
                    # 'fluid_type_id': equipment[68],         #TypeHuile  - This field is not in the model
                }
            }
        )
    return data


def generate_insert_migration(data):
    query = ''
    for key, values in data.items():
        query += 'INSERT INTO {} (name) VALUES {};\n'.format(key, ','.join(map(lambda x: "('{}')".format(x), values)))
    return query


def generate_insert_equipment_migration(data):
    query = ''
    items = data['items']
    for item in items:
        item = generate_additional_selects(item)
        query += 'INSERT INTO equipment ({}) VALUES ({}); \n'.format(
            ', '.join(item.keys()),
            ', '.join(map(format_value, item.values()))
        )
    return query


def generate_additional_selects(item):
    if item['equipment_type_id']:
        item['equipment_type_id'] = "(SELECT id FROM equipment_type WHERE code = '{}')".format(
            item['equipment_type_id'])
    if item['location_id']:
        item['location_id'] = "(SELECT id FROM location WHERE name = '{}')".format(item['location_id'])
    if item['manufacturer_id']:
        item['manufacturer_id'] = "(SELECT id FROM manufacturer WHERE name = '{}')".format(item['manufacturer_id'])
    return item


def format_value(val):
    if val is None:
        return 'NULL'
    else:
        return "'{}'".format(val)


def save_additional_data(data):
    inserted_data = {}
    for name in data['location']:
        db.session.add(Location(name=name))
    for name in data['manufacturer']:
        db.session.add(Manufacturer(name=name))
    try:
        db.session.commit()
        print("Added locations and manufacturers")
    except Exception as e:
        db.session.rollback()
    return inserted_data


def save_equipment(data):
    """
    Save equipment, related norms (physic, furan and gas),
    equipment data which depends on type
    """
    items = data['items']
    for item in items:
        item, equipment_norms = prepare_equipment_norms(item)   # Norms
        item, transformer = save_equipment_type_data(item)      # Equipment data depending on type
        item = get_additional_info(item)           # location_id, manufacturer_id and equipment_type_id
        equipment = Equipment(**item)              # Equipment
        equipment = add_equipment_to_norms(equipment_norms, equipment)

        # Add equipment to transformer record
        if transformer:
            transformer.equipment = equipment

        db.session.add(equipment)
    try:
        db.session.commit()
        print('Added equipment')
        print('Added furan, physic and gas norms of all equipment items')
    except Exception as e:
        print(e)
        db.session.rollback()
    return True


def add_equipment_to_norms(equipment_norms, equipment):
    # Add equipment to the physic norm
    if equipment_norms.get('norm_physic'):
        equipment_norms['norm_physic'].equipment = equipment

    # Add equipment to the furan norm
    if equipment_norms.get('norm_furan'):
        equipment_norms['norm_furan'].equipment = equipment

    # Add equipment to the gas norms
    # There are several gas norms with the same name in DB,
    # but different condition
    # Add them ALL to equipment
    if equipment_norms.get('norm_gas'):
        for norm in equipment_norms.get('norm_gas'):
            norm.equipment = equipment
    return equipment


def save_equipment_type_data(item):
    """ Save data related to equipment and which depends on type """
    # Transformer
    transformer = None
    if item['equipment_type_id'] == 'T':
        transformer = Transformer(**item['transformer_data'])
        db.session.add(transformer)
    del item['transformer_data']
    # TODO: L and S equipment types
    return item, transformer


def prepare_equipment_norms(item):
    """ Prepare (clone and modify, if needed) norms related to saved equipment """
    equipment_norms = {}
    # Norm Physic
    norm = get_and_clone_norm(item['norm_physic'], NormPhysic, NormPhysicData)
    if norm:
        equipment_norms['norm_physic'] = norm
    del item['norm_physic']

    # Norm Furan
    norm = get_and_clone_norm(item['norm_furan'], NormFuran, NormFuranData)
    if norm:
        equipment_norms['norm_furan'] = norm
    del item['norm_furan']

    # Norms Gas
    norms = get_and_clone_norms(item['norm_gas'], NormGas, NormGasData)
    if norms:
        equipment_norms['norm_gas'] = norms
    del item['norm_gas']

    return item, equipment_norms


def get_and_clone_norm(norm_name, norm_model, norm_data_model):
    """ Clone one norm from DB """
    norm = db.session.query(norm_model).filter_by(name=norm_name).first()
    cloned_norm = None
    if norm:
        cloned_norm = modify_norm_before_clone(norm, norm_data_model)
        db.session.add(cloned_norm)
    return cloned_norm


def get_and_clone_norms(norm_name, norm_model, norm_data_model):
    """ Clone multiple norms from DB """
    norms = db.session.query(norm_model).filter_by(name=norm_name).all()
    cloned_norms = []
    for norm in norms:
        norm = modify_norm_before_clone(norm, norm_data_model)
        db.session.add(norm)
        cloned_norms.append(norm)
    return cloned_norms


def modify_norm_before_clone(norm, norm_data_model):
    """ Remove extra fields which are not in norm data tables"""
    norm = norm.serialize()
    norm['norm_id'] = norm.pop('id')
    if 'equipment_id' in norm:
        del norm['equipment_id']
    del norm['equipment_type']
    del norm['date_created']
    del norm['equipment_type_id']
    cloned_norm = norm_data_model(**norm)
    return cloned_norm


def get_additional_info(item):
    """ Getting foreign key ids """
    # TODO Get all items at once, not in the loop
    if item['frequency']:
        item['frequency'] = '{}'.format(item['frequency'])
    if item['equipment_type_id']:
        item['equipment_type_id'] = db.session.query(EquipmentType).filter_by(code=item['equipment_type_id']).first().id
    item['location_id'] = db.session.query(Location).filter_by(name=item['location_id']).first().id if item['location_id'] else 1
    item['manufacturer_id'] = db.session.query(Manufacturer).filter_by(name=item['manufacturer_id']).first().id if item['manufacturer_id'] else None
    return item


# Norms
def get_norms(cursor):
    query = __norm_physic_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_norm_physic(norms):
    data = {
        'items': []
    }
    norms_in_db = db.session.query(NormPhysic).all()
    existing_norms = [norm.name for norm in norms_in_db]

    for norm in norms:
        if norm[0] in existing_norms:
            continue

        data['items'].append(
            {
                'name': norm[0], #NORME
                'acid_min': norm[2],    #Acide_Min
                'acid_max': norm[3],    #Acide_Max
                'ift_min': norm[4],
                'ift_max': norm[5],
                'd1816_min': norm[6],
                'd1816_max': norm[7],
                'd877_min': norm[8],
                'd877_max': norm[9],
                'color_min': norm[10],
                'color_max': norm[11],
                'density_min': norm[12],
                'density_max': norm[13],
                'pf20_min': norm[14],   #FACTEURP_Min
                'pf20_max': norm[15],   #FACTEURP_Max
                'water_min': norm[16],  #EAU_Min
                'water_max': norm[17],  #EAU_Max
                'flashpoint_min': norm[18], #PECLAIR_Min
                'flashpoint_max': norm[19], #PECLAIR_Max
                'pourpoint_min': norm[20],  #PECOULEMENT_Min
                'pourpoint_max': norm[21],  #PECOULEMENT_Max
                'viscosity_min': norm[22],  #VISCOSITE_Min
                'viscosity_max': norm[23],  #VISCOSITE_Max
                'd1816_2_min': norm[24],
                'd1816_2_max': norm[25],
                'p100_min': norm[26],   #FacteurP100_MIN
                'p100_max': norm[27],   #FacteurP100_MAX
                'fluid_type_id': norm[28],  #TODO: TypeHuile - ?
                'equipment_id': -1,     #TODO: Why do we need equipment_id in the table - ?
                'cei156_min': norm[29],
                'cei156_max': norm[30],
                'equipment_type_id': db.session.query(EquipmentType).filter_by(code=norm[1]).first().id if norm[1] else None,
            }
        )
    return data


def save_items(data, model):
    items = data['items']
    for item in items:
        db.session.add(model(**item))
    try:
        db.session.commit()
        print('Added {}'.format(model))
    except Exception as e:
        print(e)
        db.session.rollback()
    return True


# Gas sensor
def get_gas_sensors(cursor):
    query = __gas_sensor_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_gas_sensor(items):
    data = {
        'items': []
    }
    items_in_db = db.session.query(GasSensor).all()
    existing_items = [item.model for item in items_in_db]

    for item in items:
        if item[0] in existing_items:
            continue

        data['items'].append(
            {
                'h2': item[2],      # H2
                'ch4': item[3],     # CH4
                'c2h2': item[4],    # C2H2
                'c2h4': item[5],    # C2H4
                'c2h6': item[6],    # C2H6
                'co': item[7],      # CO
                'co2': item[8],     # CO2
                'o2': item[9],      # O2
                'n2': item[10],     # N2
                'ppm_error': item[11],      # ErreurPPM
                'percent_error': item[12],  # ErreurPourcent
                'model': item[0],           # Capteur
                'equipment_id': None,       #
                #TODO MAnufacturier -?
            }
        )
    return data


# Electrical Profile
def get_el_profiles(cursor):
    query = __el_profiles_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_el_profiles(items):
    data = {
        'items': []
    }
    items_in_db = db.session.query(ElectricalProfile).all()
    existing_items = [item.name for item in items_in_db]

    for item in items:
        if item[0] in existing_items:
            continue

        data['items'].append(
            {
                'name': item[0],            # NoProfil
                'description': item[1],     # Description
                'shared': True,             #TODO
                'bushing': item[5],         #TODO
                'winding': item[5],         # BOB_PF
                'insulation_pf': item[8],   # BOB_RES
                'insulation': item[4],      # RES_ISOL
                'visual': item[9],          # INSP_VIS
                'resistance': item[10],     #TODO
                'degree': item[10],         #TODO
                'turns': item[10],          # TTR
            }
        )
    return data


# Fluid Profile
def get_fluid_profiles(cursor):
    query = __fluid_profiles_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_fluid_profiles(items):
    data = {
        'items': []
    }
    items_in_db = db.session.query(FluidProfile).all()
    existing_items = [item.name for item in items_in_db]

    for item in items:
        if item[0] in existing_items:
            continue

        data['items'].append(
            {
                'name': item[0],             # NoProfil
                'description': item[1],      # Description
                'shared': True,              #

                # syringe
                'gas': item[3],              #GD
                'water': item[4],            #EAU_SER
                'furans': item[35],          #FUR_SER
                'inhibitor': None,           #TODO
                'pcb': item[6],              #BPC_SER
                'qty': None,                 #TODO
                'sampling': item[7],         #Lieu_SER

                # jar
                'dielec': item[13],          #TestD1816
                'acidity': item[18],         #TestAcid
                'density': item[21],         #TestDensite
                'pcb_jar': None,             #TODO
                'inhibitor_jar': None,       #TODO
                'point': None,               #TODO
                'dielec_2': item[14],        #TestD1816_2
                'color': item[25],           #TestCouleur
                'pf': item[19],              #TestFacteurP
                'particles': item[11],       #PAR
                'metals': item[22],          #TestPEclair
                'viscosity': item[24],       #TestViscosite
                'dielec_d': item[15],        #TestD877
                'ift': item[17],             #TestIFT
                'pf_100': item[20],          #TestFacteurP100
                'furans_f': item[36],        #FUR_POT
                'water_w': item[8],          #EAU_POT
                'corr': item[29],            #TestSCorrosif
                'dielec_i': item[16],        #TestCEI156
                'visual': item[29],          #TestVisuel
                'qty_jar': None,             #TODO
                'sampling_jar': item[30],    #Lieu_POT

                # vial
                'pcb_vial': None,            #TODO
                'antioxidant': item[32],     #ANT_FIO
                'qty_vial': None,            #TODO
                'sampling_vial': item[34],   #Lieu_FIO
            }
        )
    return data


# Labs
def get_labs(cursor):
    query = __labs_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_labs(items):
    data = {
        'items': []
    }
    items_in_db = db.session.query(Lab).all()
    existing_items = [item.name for item in items_in_db]

    for item in items:
        if item[0] in existing_items:
            continue

        data['items'].append(
            {
                # 'code': item[1],         # CodeLaboratoire
                'analyser': None,        # -
                'name': item[0],         # Laboratoire
            }
        )
    return data


def process_equipment_records(cursor):
    # Get all equipment
    equipments = get_equipment(cursor)

    # Prepare and save additional data from equipment
    additional_data = fetch_additional_data(equipments)
    save_additional_data(data=additional_data)      # Location and manufacturers

    # Save equipment
    equipment_data = fetch_equipment_data(equipments)
    save_equipment(equipment_data)                  # Equipment and norms related to them


def process_norms(cursor):
    norm_physic = get_norms(cursor)
    norm_physic = fetch_norm_physic(norm_physic)
    save_items(norm_physic, NormPhysic)


def process_gas_sensor(cursor):
    gas_sensors = get_gas_sensors(cursor)
    gas_sensors = fetch_gas_sensor(gas_sensors)
    save_items(gas_sensors, GasSensor)


def process_electrical_profile(cursor):
    profiles = get_el_profiles(cursor)
    profiles = fetch_el_profiles(profiles)
    save_items(profiles, ElectricalProfile)


def process_fluid_profile(cursor):
    profiles = get_fluid_profiles(cursor)
    profiles = fetch_fluid_profiles(profiles)
    save_items(profiles, FluidProfile)


def process_labs(cursor):
    labs = get_labs(cursor)
    labs = fetch_labs(labs)
    save_items(labs, Lab)


def process_test_results_and_campaigns(cursor):
    # Get recommendations
    campaigns = get_campaigns(cursor)

    processed_campaigns = fetch_campaigns(campaigns)
    processed_test_results = fetch_test_results(campaigns)

    campaigns, test_results = process_additional_data(
        campaigns=processed_campaigns['items'],
        test_results=processed_test_results['items']
    )
    save_test_results_and_campaigns(campaigns, test_results)


def process_additional_data(campaigns, test_results):
    db_info = get_existing_db_info(test_results=test_results)

    # Map Test results, lab ids to equipment id
    for test_result in test_results:
        # Equipment id
        if test_result.get('equipment_number') and test_result.get('serial'):
            test_result['equipment_id'] = db_info['equipment_mapping'].get(
                '{}_{}'.format(test_result['equipment_number'].strip(), test_result['serial'].strip()))
            del test_result['equipment_number']
            del test_result['serial']

        # lab id
        if test_result.get('lab_id'):
            test_result['lab_id'] = db_info['lab_mapping'].get(test_result['lab_id'])

        # test_type_id
        if test_result.get('test_type_id'):
            test_result['test_type_id'] = db_info['test_types_mapping'].get(test_result['test_type_id'])

        # performed_by_id
        if test_result.get('performed_by_id'):
            test_result['performed_by_id'] = db_info['user_mapping'].get(test_result['performed_by_id'])

        # fluid_type_id
        if test_result.get('fluid_type_id') or test_result.get('fluid_type_id') == 0:
            test_result['fluid_type_id'] = db_info['fluid_types_mapping'].get(test_result['fluid_type_id'])

        # sampling_point_id
        if test_result.get('sampling_point_id') or test_result.get('sampling_point_id') == 0:
            test_result['sampling_point_id'] = db_info['sampling_point_mapping'].get(test_result['sampling_point_id'])

        # test_reason_id
        if test_result.get('test_reason_id') or test_result.get('test_reason_id') == 0:
            test_result['test_reason_id'] = db_info['test_reasons_mapping'].get(test_result['test_reason_id'])

        # test_status_id
        if test_result.get('test_status_id') or test_result.get('test_status_id') == 0:
            test_result['test_status_id'] = db_info['test_statuses_mapping'].get(test_result['test_status_id'])

    return campaigns, test_results


def get_existing_db_info(test_results):
    """Get equipment ids, lab ids, test_types in one query"""
    db_info = {
        'equipment_mapping': {},
        'lab_mapping': {},
        'test_types_mapping': {},
        'user_mapping': {},
        'fluid_types_mapping': {},
        'sampling_point_mapping': {},
        'test_reasons_mapping': {},
        'test_statuses_mapping': {}
    }
    # Equipment
    collected_info = collect_test_result_info_for_query(test_results)

    equipment_in_db = db.session.query(Equipment).filter(or_(*collected_info['equipments'])).all()
    db_info['equipment_mapping'] = {'{}_{}'.format(
        equipment.equipment_number.strip(), equipment.serial.strip()): equipment.id for equipment in equipment_in_db}
    db_info['lab_mapping'] = get_labs_by_names(collected_info['labs'])
    db_info['test_types_mapping'] = get_test_types_by_names(collected_info['test_types'])
    db_info['user_mapping'] = get_users_by_names(collected_info['users'])
    db_info['fluid_types_mapping'] = get_fluid_types_by_names(collected_info['fluid_types'])
    db_info['sampling_point_mapping'] = get_sampling_points_by_names(collected_info['sampling_points'])
    db_info['test_reasons_mapping'] = get_test_reasons_by_names(collected_info['test_reasons'])
    db_info['test_statuses_mapping'] = get_test_statuses_by_names(collected_info['test_statuses'])
    return db_info


def collect_test_result_info_for_query(test_results):
    # Collect all ids, names, etc
    result = {
        'equipments': [],
        'labs': [],
        'test_types': [],
        'users': [],
        'fluid_types': [],
        'sampling_points': [],
        'test_reasons': [],
        'test_statuses': []
    }
    for test_result in test_results:
        result['equipments'].append(and_(Equipment.equipment_number == test_result['equipment_number'],
                                         Equipment.serial == test_result['serial']))
        result['labs'].append(test_result['lab_id'])
        result['users'].append(test_result['performed_by_id'])

        if OldDBNotations.test_types_old_new().get(test_result['test_type_id']):
            result['test_types'].append(OldDBNotations.test_types_old_new()[test_result['test_type_id']])

        if OldDBNotations.fluid_type_old_new().get(test_result['fluid_type_id']):
            result['fluid_types'].append(OldDBNotations.fluid_type_old_new()[test_result['fluid_type_id']])

        if OldDBNotations.sampling_point_old_new().get(test_result['sampling_point_id']):
            result['sampling_points'].append(OldDBNotations.sampling_point_old_new()[test_result['sampling_point_id']])

        if OldDBNotations.test_reason_old_new().get(test_result['test_reason_id']):
            result['test_reasons'].append(OldDBNotations.test_reason_old_new()[test_result['test_reason_id']])

        if OldDBNotations.test_statuses_old_new().get(test_result['test_status_id']):
            result['test_statuses'].append(OldDBNotations.test_statuses_old_new()[test_result['test_status_id']])
    return result


def get_labs_by_names(names):
    # Labs
    lab_in_db = db.session.query(Lab).filter(Lab.name.in_(names))
    lab_mapping = {lab.name: lab.id for lab in lab_in_db}
    return lab_mapping


def get_test_types_by_names(names):
    # Test types
    test_types_in_db = db.session.query(TestType).filter(TestType.name.in_(names))
    test_types_mapping = {get_key_by_val(OldDBNotations.test_types_old_new(), test_type.name): test_type.id for test_type in
                          test_types_in_db}
    if None in test_types_mapping:
        del test_types_mapping[None]
    return test_types_mapping


def get_users_by_names(names):
    users_in_db = db.session.query(User).filter(User.name.in_(names))
    user_mapping = {user.name: user.id for user in users_in_db}
    return user_mapping


def get_fluid_types_by_names(names):
    # Fluid types
    fluid_types_in_db = db.session.query(FluidType).filter(FluidType.name.in_(names))
    fluid_types_mapping = {get_key_by_val(OldDBNotations.fluid_type_old_new(), fluid_type.name): fluid_type.id for
                           fluid_type in fluid_types_in_db}
    return fluid_types_mapping


def get_sampling_points_by_names(names):
    # Sampling points
    sampling_points_in_db = db.session.query(SamplingPoint).filter(SamplingPoint.name.in_(names))
    sampling_points_mapping = {
        get_key_by_val(OldDBNotations.sampling_point_old_new(), sampling_point.name): sampling_point.id for
        sampling_point in sampling_points_in_db}
    return sampling_points_mapping


def get_test_reasons_by_names(names):
    # Test reasons
    test_reasons_in_db = db.session.query(TestReason).filter(TestReason.name.in_(names))
    test_reasons_mapping = {
        get_key_by_val(OldDBNotations.test_reason_old_new(), test_reason.name): test_reason.id for
        test_reason in test_reasons_in_db}
    return test_reasons_mapping


def get_test_statuses_by_names(names):
    # Test statuses
    test_statuses_in_db = db.session.query(TestStatus).filter(TestStatus.name.in_(names))
    test_statuses_mapping = {
        get_key_by_val(OldDBNotations.test_statuses_old_new(), test_status.name): test_status.id for
        test_status in test_statuses_in_db}
    return test_statuses_mapping


def save_test_results_and_campaigns(campaigns, test_results):
    mapped_campaigns = {}

    test_results, campaigns = save_contracts(test_results, campaigns)

    for campaign in campaigns:
        campaign_id = campaign.pop('clef_analyse', None)
        added_campaign = Campaign(**campaign)
        db.session.add(added_campaign)
        mapped_campaigns[campaign_id] = added_campaign

    # Map campaigns to test results
    for test_result in test_results:
        test_result['campaign'] = mapped_campaigns.get(test_result.pop('clef_analyse', None))
        db.session.add(TestResult(**test_result))

    try:
        db.session.commit()
        print('Added campaigns and test results')
    except Exception as e:
        print(e)
        db.session.rollback()


def save_contracts(test_results, campaigns):
    # Save contracts
    existing_contracts = db.session.query(Contract).all()
    existing_contracts = {existing_contract.name: existing_contract for existing_contract in existing_contracts}

    existing_contract_statuses = db.session.query(ContractStatus).all()
    existing_contract_statuses = {existing_contract_status.name: existing_contract_status.id for existing_contract_status
                                  in existing_contract_statuses}

    test_results, existing_contracts, existing_contract_statuses = save_test_result_contracts(
        test_results=test_results,
        existing_contracts=existing_contracts,
        existing_contract_statuses=existing_contract_statuses
    )
    campaigns, existing_contracts, existing_contract_statuses = save_campaign_contracts(
        campaigns=campaigns,
        existing_contracts=existing_contracts,
        existing_contract_statuses=existing_contract_statuses
    )
    return test_results, campaigns


def save_test_result_contracts(test_results, existing_contracts, existing_contract_statuses):
    for test_result in test_results:
        contract_name = test_result['lab_contract_id']
        old_contract_status_id = test_result['lab_contract_status_id']
        # Map existing contract to test result
        if contract_name in existing_contracts.keys():
            test_result['lab_contract'] = existing_contracts[contract_name]
        else:
            # Create new contract and map it
            new_contract_status_id = existing_contract_statuses.get(
                OldDBNotations.contract_statuses_old()[old_contract_status_id])
            contract = Contract(name=contract_name, contract_status_id=new_contract_status_id)
            db.session.add(contract)
            existing_contracts[contract_name] = contract
            test_result['lab_contract'] = contract
        del test_result['lab_contract_id']
        del test_result['lab_contract_status_id']
    return test_results, existing_contracts, existing_contract_statuses


def save_campaign_contracts(campaigns, existing_contracts, existing_contract_statuses):
    for campaign in campaigns:
        contract_name = campaign['contract_id']
        # Map existing contract to test result
        if contract_name in existing_contracts.keys():
            campaign['contract'] = existing_contracts[contract_name]
        else:
            # Create new contract and map it
            contract = Contract(name=contract_name, contract_status_id=existing_contract_statuses.get('-'))
            db.session.add(contract)
            existing_contracts[contract_name] = contract
            campaign['contract'] = contract
        del campaign['contract_id']
    return campaigns, existing_contracts, existing_contract_statuses


# Campaigns
def get_campaigns(cursor):
    query = __campaigns_sql()
    cursor.execute(query)
    return cursor.fetchall()


def fetch_campaigns(items):
    data = {
        'items': []
    }
    for item in items:
        data['items'].append(
            {
                'clef_analyse': item[0],                            # ClefAnalyse
                'date_created': datetime.datetime.utcnow(),         # -
                'created_by_id': get_admin_id(),                    # -
                'contract_id': item[31],                            # NoContrat
                'date_sampling': item[12],                          # DatePrelevement
                'description': item[25],                            # Commentaire
                'status_id': None,                                  # TODO: EtatCommande
            }
        )
    return data


# Test results
def fetch_test_results(items):
    data = {
        'items': []
    }

    for item in items:
        data['items'].append(
            {
                'campaign_id': None,               # Added later
                'clef_analyse': item[0],           # ClefAnalyse
                'lab_contract_status_id': item[32],  # EtatCommande
                'serial': item[1],                 # NoSerieEquipe
                'equipment_number': item[2],       # NoEquipement
                'test_reason_id': item[7],         # CodeMotif
                'date_analyse': item[3],           # DateAnalyse
                'test_type_id': item[4],           # TypeAnalyse - get id
                'sampling_point_id': item[8],      # CodeLieu
                'test_status_id': item[26],        # EtatCodeAnalyse
                'equipment_id': None,              # Added later
                'fluid_profile_id': None,          #
                'electrical_profile_id': None,     #
                'percent_ratio': item[9],          # PourcentRatio

                # The CodeMatiere is used only for cases to analyse the repair/maintenance
                # area to evaluate contamination for instance.
                # It is not directly related to Equipment diagnostic.
                # It is related to Equipment repair byproducts
                'material_id': None,               # Bobine_Materiel from Equipement
                'fluid_type_id': item[10],         # TypeHuile
                'performed_by_id': item[14] or None,       # PrelevePar
                'lab_id': item[17],                # Laboratoire
                'lab_contract_id': item[36],       # NoContratLab
                'seringe_num': item[37],           # SeringueNum
                'mws': item[27],                   # MWs
                'temperature': item[28],           # Temperature
                'containers': item[33],            # NbrContenant
                'transmission': item[16],          # Transmission
                'charge': item[11],                # Charge
                'remark': item[13],                # Remarque
                'modifier': item[15],              # Modifier
                'repair_date': item[18],           # DateReparation
                'repair_description': item[19],    # Desc_Reparation
                'ambient_air_temperature': None,   # Ambient_Air_Temperature - #TODO: no such column in DB

                # electrical profile fields
                'bushing': None,                 #
                'winding': None,                 #
                'insulation_pf': None,           #
                'insulation': None,              #
                'visual_inspection': None,       #
                'resistance': None,              #
                'degree': None,                  #
                'turns': None,                   #

                # fluid profile field
                # syringe
                'gas': None,                     #
                'water': None,                   #
                'furans': None,                  #
                'inhibitor': None,               #
                'pcb': None,                     #
                'qty': None,                     #
                'sampling': None,                #

                # jar
                'dielec': None,                  #
                'acidity': None,                 #
                'density': None,                 #
                'pcb_jar': None,                 #
                'inhibitor_jar': None,           #
                'point': None,                   #
                'dielec_2': None,                #
                'color': None,                   #
                'pf': None,                      #
                'particles': None,               #
                'metals': None,                  #
                'viscosity': None,               #
                'dielec_d': None,                #
                'ift': None,                     #
                'pf_100': None,                  #
                'furans_f': None,                #
                'water_w': None,                 #
                'corr': None,                    #
                'dielec_i': None,                #
                'visual': None,                  #
                'qty_jar': None,                 #
                'sampling_jar': None,            #

                # vial
                'pcb_vial': None,                #
                'antioxidant': None,             #
                'qty_vial': None,                #
                'sampling_vial': None,           #
            }
        )
    return data


def run_import():
    connection = pypyodbc.connect(odbc_connection_str)
    connection.add_output_converter(pypyodbc.SQL_TYPE_TIMESTAMP, timestamp_to_date)
    cursor = connection.cursor()

    # Save predefined norms
    process_norms(cursor)

    # Save gas sensor data (Capteur_GAZ)
    process_gas_sensor(cursor)

    # Save electrical profile
    process_electrical_profile(cursor)

    # Save fluid profile
    process_fluid_profile(cursor)

    # Save laboratories TODO: (get also labs from Analyse table -?)
    process_labs(cursor)

    # Save equipment and data related to it
    process_equipment_records(cursor)

    # Save test results
    process_test_results_and_campaigns(cursor)

    #TODO Save material_ids for test_results

    cursor.close()
    connection.close()


class OldDBNotations:
    """Contains items which were hard-coded in the old DB"""
    @staticmethod
    def test_reasons_old():
        # CodeMotif
        items = {
            0: 'Undetermined',
            1: 'Preventive',
            2: 'Reception',
            3: 'Commissioning',
            4: 'Study',
            5: 'Fault',
            6: 'After degassing',
            7: 'After Fuller earth',
            8: 'New oil',
            9: 'Replace the oil',
            10: 'Other'
        }
        return items

    @staticmethod
    def test_types_old_new():
        # TypeAnalyse
        # {old db value: new db value}
        items = {
            'GD': 'Dissolved gas',
            'DG': 'Dissolved gas',
            'PHY': 'Fluid',
            'EAU': 'Water',
            'H2O': 'Water',
            'TTR': 'Turns ratio test (TTR)',
            'BCD': '',  #TODO
            'ResI': 'Insulation resistance',
            'IRes': 'Insulation resistance',
            'WCD': 'Winding Cap. and PF',
            'VisI': 'Visual inspection',
            'FUR': 'Furans',
            'BUSH': 'Bushing Cap. and PF',
            'WRes': 'Resistance; winding/contact',
            'PCB': 'PCB',
            'MIO': 'Metals in oil',
            'PAR': 'Particles',
            'DBPC': 'Inhibitor',
            'DP': 'Degree of Polymerization (DP)',
        }
        return items

    @staticmethod
    def contract_statuses_old():
        # EtatCommande
        items = {
            0: 'Planned',
            1: 'Requisition',
            2: 'Contracted',
            3: 'Results Approved',
            4: 'Payed'
        }
        return items

    @staticmethod
    def test_statuses_old():
        # EtatCodeAnalyse
        items = {
            0: 'Been sampled',
            1: 'At lab facilities',
            2: 'In Diagnostic',
            3: 'In Recommendation',
            4: 'Completed'
        }
        return items

    @staticmethod
    def test_statuses_old_new():
        # EtatCodeAnalyse
        # {old db id: new db value}
        items = {
            0: 'Been sampled',
            1: 'Laboratory',
            2: 'Diagnosis',
            3: 'Recommendation',
            4: 'Completed',
        }
        return items

    @staticmethod
    def fluid_type_old():
        # TypeHuile
        items = {
            0: 'Huile',
            1: 'Silicone',
            2: 'EAU',
            3: 'solid',
            4: 'Gaz',
            5: 'Autre'
        }
        return items

    @staticmethod
    def fluid_type_old_new():
        # TypeHuile
        # {old db id: new db value}
        items = {
            0: 'Oil',
            1: 'Silicone',
            2: 'Water',
            3: 'Solid',
            4: 'Gaz',
            5: 'Other'
        }
        return items

    @staticmethod
    def sampling_point_old():
        # CodeLieu
        items = {
            0: 'Main tank - bottom',
            1: 'Main tank - top',
            2: 'Gaz relay',
            3: 'Other'
        }
        return items

    @staticmethod
    def sampling_point_old_new():
        # CodeLieu
        # {old db id: new db value}
        items = {
            0: 'Main tank-Bottom',
            1: 'Main tank-Top',
            2: 'Gas relay',
            3: 'Other'
        }
        return items

    @staticmethod
    def test_reason_old():
        # CodeMotif
        items = {
            0: 'Preventif',
            1: 'Mise en service',
            2: 'Etude',
            3: 'Urgent',
            4: 'Apres degazage',
            5: 'apres t. foulon',
            6: 'Autre',
        }
        return items

    @staticmethod
    def test_reason_old_new():
        # CodeMotif
        # {old db id: new db value}
        items = {
            0: 'Preventive',
            1: 'Commissioning',
            2: 'Study',
            3: 'Urgent',
            4: 'After degassing',
            5: 'After Fuller earth',
            6: 'Other',
        }
        return items


# SQL
def __equipment_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'NoEquipement,TypeEquipement,Site,Localisation,LitreHuile,Description,NoSerieEquipe,Manufacturier,Annee,Modifier,' \
               'NoExploitation,Scelle,CouvSoude,TriPhase,Commentaire,Capteur,NoClient,DateV,Ins_Vis_Par,CommentaireV,' \
               'Compteur,Filtreur,Tension1,Tension2,Tension3,Puissance1,Puissance2,Puissance3,Bobine,Auto_Transfo,' \
               'Raccord_Bobine1,Raccord_Bobine2,Raccord_Bobine3,BIL1,BIL2,BIL3,Ecran_Electro1,Ecran_Electro2,Ecran_Electro3,ChangeurP1,' \
               'ChangeurP2,ChangeurP3,Bushing_Neutre1,Bushing_Neutre2,Bushing_Neutre3,Resistance_Neutre1,ResInf1,Resistance_Neutre2,ResInf2,Bobine_Materiel,' \
               'Formule_Ratio,Etiquette1,Etiquette2,Etiquette3,Frequence,Impedance1,Imp_Base1,Impedance2,Imp_Base2,Temp_elevation,' \
               'Nbr_Change_Prise,NormePhy,NormeGD,NormeFur,Formule_Ratio2,Etiquette4,Etiquette5,Etiquette6,TypeHuile,Resistance_Neutre0,' \
               'ResInf0,Bush_Serie1,Bush_Serie2,Bush_Serie3,Bush_Serie4,Bush_Serie5,Bush_Serie6,Bush_Serie7,Bush_Serie8,Bush_Serie9,' \
               'Bush_Serie10,Bush_Serie11,Bush_Serie12,LocAmont1,LocAmont2,LocAmont3,LocAmont4,LocAmont5,LocAval1,LocAval2,' \
               'LocAval3,LocAval4,LocAval5,LocTie,LocEntretienEtat,LocAnalyseEtat,LocPos,PosPhys,MWActuel,MVARActuel,' \
               'MWReserve,MVARReserve,MWUltime,MVARUltime,Tension4,Puissance4,Raccord_Bobine4,BIL4,Ecran_Electro4,ChangeurP4,' \
               'Bushing_Neutre4,Resistance_Neutre3,Etiquette7,Etiquette8,ResInf3,Formule_Ratio3,PuisForce11,PuisForce12,PuisForce13,PuisForce14,' \
               'PuisForce21,PuisForce22,PuisForce23,PuisForce24,Impedance3,Imp_Base3,Bush_Mfr_H1,Bush_Mfr_H2,Bush_Mfr_H3,Bush_Mfr_HN,' \
               'Bush_Mfr_X1,Bush_Mfr_X2,Bush_Mfr_X3,Bush_Mfr_XN,Bush_Mfr_T1,Bush_Mfr_T2,Bush_Mfr_T3,Bush_Mfr_TN,Bush_Mfr_Q1,Bush_Mfr_Q2,' \
               'Bush_Mfr_Q3,Bush_Mfr_QN,Bush_Type_H,Bush_Type_HN,Bush_Type_X,Bush_Type_XN,Bush_Type_T,Bush_Type_TN,Bush_Type_Q,Bush_Type_QN,' \
               'Valider,EnValidation,NoSerieEquipeAnc,NoEquipementAnc,Fratrie'
    query = "SELECT {} FROM Equipement".format(all_cols)
    return query


def __norm_physic_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'NORME,TypeEquipement,Acide_Min,Acide_Max,IFT_Min,IFT_Max,D1816_Min,D1816_Max,D877_Min,D877_Max,' \
               'COULEUR_Min,COULEUR_Max,DENSITE_Min,DENSITE_Max,FACTEURP_Min,FACTEURP_Max,EAU_Min,EAU_Max,PECLAIR_Min,PECLAIR_Max,' \
               'PECOULEMENT_Min,PECOULEMENT_Max,VISCOSITE_Min,VISCOSITE_Max,D1816_2_MIN,D1816_2_MAX,FacteurP100_MIN,FacteurP100_MAX,TypeHuile,CEI156_Min,' \
               'CEI156_Max'
    query = "SELECT {} FROM NormePhysique".format(all_cols)
    return query


def __gas_sensor_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'Capteur,Manufacturier,H2,CH4,C2H2,C2H4,C2H6,CO,CO2,O2,' \
               'N2,ErreurPPM,ErreurPourcent'
    query = "SELECT {} FROM Capteur_GAZ".format(all_cols)
    return query


def __el_profiles_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'NoProfil,Description,Period,TRAV,RES_ISOL,BOB_PF,BOB_PF_DOB,DP,BOB_RES,INSP_VIS,' \
               'TTR'
    query = "SELECT {} FROM ProfilTestElec".format(all_cols)
    return query


def __fluid_profiles_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'NoProfil,Description,Period,GD,EAU_SER,ANT_SER,BPC_SER,Lieu_SER,EAU_POT,' \
               'ANT_POT,BPC_POT,PAR,MDH,TestD1816,TestD1816_2,TestD877,TestCEI156,TestIFT,TestAcid,' \
               'TestFacteurP,TestFacteurP100,TestDensite,TestPEclair,TestPEcoulement,TestViscosite,TestCouleur,TestFBoue,TestPAniline,TestSCorrosif,' \
               'TestVisuel,Lieu_POT,EAU_FIO,ANT_FIO,BPC_FIO,Lieu_FIO,FUR_SER,FUR_POT'
    query = "SELECT {} FROM ProfilEchantFluid".format(all_cols)
    return query


def __labs_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'Laboratoire,CodeLaboratoire'
    query = "SELECT {} FROM Laboratoire".format(all_cols)
    return query


def __campaigns_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'ClefAnalyse,NoSerieEquipe,NoEquipement,DateAnalyse,TypeAnalyse,NoAnalyse,CodeMatiere,CodeMotif,CodeLieu,PourcentRatio,' \
               'TypeHuile,Charge,DatePrelevement,Remarque,PrelevePar,Modifier,Transmission,Laboratoire,DateReparation,Desc_Reparation,' \
               'If_REM,If_OK,CodeRecommandation,RecommandationEcrite,DateApplication,Commentaire,EtatCodeAnalyse,MWs,Temperature,TestEquipNum,' \
               'CartEchantImp,NoContrat,EtatCommande,NbrContenant,CartEchantRassembler,RegroupEssaiType,NoContratLab,SeringueNum'
    query = "SELECT {} FROM Analyse".format(all_cols)
    return query


def __test_results_sql():
    # Name all column names because cannot get them from cursor
    # (they are fetched as Chinese letters)
    # to know exact position of column on retrieve
    all_cols = 'NoEquipement,NoSerieEquipe,TypeAnalyse,Site,Localisation,CodeGravite,Desc1,Desc2,Desc3'
    query = "SELECT {} FROM Analyse".format(all_cols)
    return query


if __name__ == '__main__':
    run_import()
