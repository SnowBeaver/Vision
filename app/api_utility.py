from app.diagnostic.models import *
from app.users.models import User, Role
from datetime import datetime

equipment_schema = {'id': {'readonly': True},
                    'name': {'type': 'string', 'maxlength': 50, 'required': True},
                    'equipment_number': {'type': 'string', 'maxlength': 50, 'required': True},
                    'equipment_type_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'location_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'visual_inspection_by_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'assigned_to_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'norm_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'manufacturer_id': {'type': 'integer', 'coerce': int},
                    'serial': {'type': 'string', 'maxlength': 50},
                    'manufactured': {'type': 'integer', 'min': 1900, 'max': datetime.now().year, 'coerce': int},
                    'frequency': {'type': 'string', 'allowed': ['25', '50', '60', 'DC']},
                    'description': {'type': 'string'},
                    'modifier':  {'type': 'boolean', 'coerce': bool},
                    'comments':  {'type': 'string'},
                    'visual_date':   {'type': 'string'},
                    'visual_inspection_comments':    {'type': 'string'},
                    'nbr_of_tap_change_ltc': {'type': 'string'},
                    'upstream1': {'type': 'string', 'maxlength': 100},
                    'upstream2': {'type': 'string', 'maxlength': 100},
                    'upstream3': {'type': 'string', 'maxlength': 100},
                    'upstream4': {'type': 'string', 'maxlength': 100},
                    'upstream5': {'type': 'string', 'maxlength': 100},
                    'downstream1':   {'type': 'string', 'maxlength': 100},
                    'downstream2':   {'type': 'string', 'maxlength': 100},
                    'downstream3':   {'type': 'string', 'maxlength': 100},
                    'downstream4':   {'type': 'string', 'maxlength': 100},
                    'downstream5':   {'type': 'string', 'maxlength': 100},
                    'tie_location':  {'type': 'boolean', 'coerce': bool},
                    'tie_maintenance_state': {'type': 'integer', 'coerce': int},
                    'tie_status':    {'type': 'integer', 'coerce': int},
                    'phys_position': {'type': 'integer', 'coerce': int},
                    'tension4':  {'type': 'float', 'coerce': float},
                    'validated': {'type': 'boolean', 'coerce': bool},
                    'invalidation':  {'type': 'boolean', 'coerce': bool},
                    'prev_serial_number':    {'type': 'string', 'maxlength': 50},
                    'prev_equipment_number': {'type': 'string', 'maxlength': 50},
                    'sibling':   {'type': 'integer', 'coerce': int},
                    }
equipment_type_schema = {'id': {'readonly': True},
                         'name': {'type': 'string', 'maxlength': 50},
                         'code': {'type': 'string', 'maxlength': 50},
                         'table_name': {'type': 'string', 'maxlength': 50},
                         }
campaign_schema = {'id': {'readonly': True},
                   'date': {'type': 'datetime', 'coerce': datetime, 'required': True},
                   'created_by_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'equipment_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'performed_by_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'lab_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'material_id': {'type': 'integer', 'coerce': int},
                   'analysis_number': {'type': 'string', 'maxlength': 15},
                   'percent_ratio': {'type': 'boolean', 'coerce': bool},
                   'fluid_type_id': {'type': 'integer', 'coerce': int},
                   'charge': {'type': 'float', 'coerce': float},
                   'date_prelevement': {'type': 'datetime', 'coerce': datetime},
                   'remark': {'type': 'string'},
                   'modifier': {'type': 'boolean', 'coerce': bool},
                   'transmission': {'type': 'boolean', 'coerce': bool},
                   'repair_date': {'type': 'datetime', 'coerce': datetime},
                   'repair_description': {'type': 'string'},
                   'if_rem': {'type': 'string', 'maxlength': 5},
                   'if_ok': {'type': 'string', 'maxlength': 5},
                   'recommandation_id': {'type': 'integer', 'coerce': int},
                   'recommendationNotes': {'type': 'string'},
                   'recommended_by_id': {'type': 'integer', 'coerce': int},
                   'date_application': {'type': 'datetime', 'coerce': datetime},
                   'comments': {'type': 'string'},
                   'mws': {'type': 'float', 'coerce': float},
                   'temperature': {'type': 'float', 'coerce': float},
                   'sampling_card_print': {'type': 'boolean', 'coerce': bool},
                   'contract_id': {'type': 'integer', 'coerce': int},
                   'containers': {'type': 'float', 'coerce': float},
                   'sampling_card_gathered': {'type': 'integer', 'coerce': int},
                   'gathered_test_type': {'type': 'string', 'maxlength': 50},
                   'lab_contract_id': {'type': 'integer', 'coerce': int},
                   'seringe_num': {'type': 'string', 'maxlength': 50},
                   'data_valid': {'type': 'integer', 'coerce': int},
                   'status1': {'type': 'integer', 'coerce': int},
                   'status2': {'type': 'integer', 'coerce': int},
                   'error_state': {'type': 'integer', 'coerce': int},
                   'error_code': {'type': 'integer', 'coerce': int},
                   'ambient_air_temperature': {'type': 'float', 'coerce': float},
                   'bushing': {'type': 'boolean', 'coerce': bool},
                   'winding': {'type': 'boolean', 'coerce': bool},
                   'insulation_pf': {'type': 'boolean', 'coerce': bool},
                   'insulation': {'type': 'boolean', 'coerce': bool},
                   'visual_inspection': {'type': 'boolean', 'coerce': bool},
                   'resistance': {'type': 'boolean', 'coerce': bool},
                   'degree': {'type': 'boolean', 'coerce': bool},
                   'turns': {'type': 'boolean', 'coerce': bool},
                   'gas': {'type': 'boolean', 'coerce': bool},
                   'water': {'type': 'boolean', 'coerce': bool},
                   'furans': {'type': 'boolean', 'coerce': bool},
                   'inhibitor': {'type': 'boolean', 'coerce': bool},
                   'pcb': {'type': 'boolean', 'coerce': bool},
                   'qty': {'type': 'integer', 'coerce': int},
                   'sampling': {'type': 'integer', 'coerce': int},
                   'dielec': {'type': 'boolean', 'coerce': bool},
                   'acidity': {'type': 'boolean', 'coerce': bool},
                   'density': {'type': 'boolean', 'coerce': bool},
                   'pcb_jar': {'type': 'boolean', 'coerce': bool},
                   'inhibitor_jar': {'type': 'boolean', 'coerce': bool},
                   'point': {'type': 'boolean', 'coerce': bool},
                   'dielec_2': {'type': 'boolean', 'coerce': bool},
                   'color': {'type': 'boolean', 'coerce': bool},
                   'pf': {'type': 'boolean', 'coerce': bool},
                   'particles': {'type': 'boolean', 'coerce': bool},
                   'metals': {'type': 'boolean', 'coerce': bool},
                   'viscosity': {'type': 'boolean', 'coerce': bool},
                   'dielec_d': {'type': 'boolean', 'coerce': bool},
                   'ift': {'type': 'boolean', 'coerce': bool},
                   'pf_100': {'type': 'boolean', 'coerce': bool},
                   'furans_f': {'type': 'boolean', 'coerce': bool},
                   'water_w': {'type': 'boolean', 'coerce': bool},
                   'corr': {'type': 'boolean', 'coerce': bool},
                   'dielec_i': {'type': 'boolean', 'coerce': bool},
                   'visual': {'type': 'boolean', 'coerce': bool},
                   'qty_jar': {'type': 'integer', 'coerce': int},
                   'sampling_jar': {'type': 'integer', 'coerce': int},
                   'pcb_vial': {'type': 'boolean', 'coerce': bool},
                   'antioxidant': {'type': 'boolean', 'coerce': bool},
                   'qty_vial': {'type': 'integer', 'coerce': int},
                   'sampling_vial': {'type': 'integer', 'coerce': int},
                   }
contract_schema = {'id': {'readonly': True},
                   'name': {'type': 'string', 'maxlength': 50},
                   'code': {'type': 'string', 'maxlength': 50},
                   'contract_status_id': {'type': 'integer', 'required': True, 'coerce': int},
                   }
norm_schema = {'id': {'readonly': True},
               'name': {'type': 'string', 'maxlength': 50},
               'table_name': {'type': 'string', 'maxlength': 50},
               }
location_schema = {'id': {'readonly': True},
                   'name': {'type': 'string', 'maxlength': 50},
                   }
manufacturer_schema = {'id': {'readonly': True},
                       'name': {'type': 'string', 'maxlength': 50, 'required': True},
                       'markings': {'type': 'string'},
                       'location': {'type': 'string', 'maxlength': 256},
                       'description': {'type': 'string'},
                       }
user_schema = {'id': {'readonly': True},
               'name': {'type': 'string', 'maxlength': 50},
               'alias': {'type': 'string', 'maxlength': 50, 'required': True},
               'email': {'type': 'string', 'maxlength': 120, 'required': True},
               'password': {'type': 'string', 'maxlength': 50, 'required': True},
               'status': {'type': 'integer', 'coerce': int},
               'address': {'type': 'string', 'maxlength': 255},
               'mobile': {'type': 'string', 'maxlength': 50},
               'website': {'type': 'string', 'maxlength': 255},
               'country': {'type': 'string', 'maxlength': 255},
               'photo': {'type': 'string', 'maxlength': 255},
               'description': {'type': 'string'},
               'active': {'type': 'boolean', 'coerce': bool},
               'confirmed': {'type': 'boolean', 'coerce': bool},
               'confirmed_at': {'type': 'datetime', 'coerce': datetime},
               'created': {'type': 'datetime', 'coerce': datetime},
               'updated': {'type': 'datetime', 'coerce': datetime},
               }
electrical_profile_schema = {'id': {'readonly': True},
                             'selection': {'type': 'string', 'maxlength': 256},
                             'description': {'type': 'string', 'maxlength': 1204},
                             'bushing': {'type': 'boolean', 'coerce': bool},
                             'winding': {'type': 'boolean', 'coerce': bool},
                             'insulation_pf': {'type': 'boolean', 'coerce': bool},
                             'insulation': {'type': 'boolean', 'coerce': bool},
                             'visual': {'type': 'boolean', 'coerce': bool},
                             'resistance': {'type': 'boolean', 'coerce': bool},
                             'degree': {'type': 'boolean', 'coerce': bool},
                             'turns': {'type': 'boolean', 'coerce': bool},
                             }
fluid_profile_schema = {'id': {'readonly': True},
                        'selection': {'type': 'string', 'maxlength': 256},
                        'description': {'type': 'string', 'maxlength': 1204},
                        'gas': {'type': 'boolean', 'coerce': bool},
                        'water': {'type': 'boolean', 'coerce': bool},
                        'furans': {'type': 'boolean', 'coerce': bool},
                        'inhibitor': {'type': 'boolean', 'coerce': bool},
                        'pcb': {'type': 'boolean', 'coerce': bool},
                        'qty': {'type': 'integer', 'coerce': int},
                        'sampling': {'type': 'integer', 'coerce': int},
                        'dielec': {'type': 'boolean', 'coerce': bool},
                        'acidity': {'type': 'boolean', 'coerce': bool},
                        'density': {'type': 'boolean', 'coerce': bool},
                        'pcb_jar': {'type': 'boolean', 'coerce': bool},
                        'inhibitor_jar': {'type': 'boolean', 'coerce': bool},
                        'point': {'type': 'boolean', 'coerce': bool},
                        'dielec_2': {'type': 'boolean', 'coerce': bool},
                        'color': {'type': 'boolean', 'coerce': bool},
                        'pf': {'type': 'boolean', 'coerce': bool},
                        'particles': {'type': 'boolean', 'coerce': bool},
                        'metals': {'type': 'boolean', 'coerce': bool},
                        'viscosity': {'type': 'boolean', 'coerce': bool},
                        'dielec_d': {'type': 'boolean', 'coerce': bool},
                        'ift': {'type': 'boolean', 'coerce': bool},
                        'pf_100': {'type': 'boolean', 'coerce': bool},
                        'furans_f': {'type': 'boolean', 'coerce': bool},
                        'water_w': {'type': 'boolean', 'coerce': bool},
                        'corr': {'type': 'boolean', 'coerce': bool},
                        'dielec_i': {'type': 'boolean', 'coerce': bool},
                        'visual': {'type': 'boolean', 'coerce': bool},
                        'qty_jar': {'type': 'integer', 'coerce': int},
                        'sampling_jar': {'type': 'integer', 'coerce': int},
                        'pcb_vial': {'type': 'boolean', 'coerce': bool},
                        'antioxidant': {'type': 'boolean', 'coerce': bool},
                        'qty_vial': {'type': 'integer', 'coerce': int},
                        'sampling_vial': {'type': 'integer', 'coerce': int},
                        }
test_result_schema = {'id': {'readonly': True},
                      'campaign_id': {'type': 'integer', 'coerce': int},
                      'reason_id': {'type': 'integer', 'coerce': int},
                      'date_analyse': {'type': 'datetime'},
                      'test_type_id': {'type': 'integer', 'coerce': int},
                      'sampling_point_id': {'type': 'integer', 'coerce': int},
                      'test_status_id': {'type': 'integer', 'coerce': int},
                      }
# TODO
role_schema = {'id': {'readonly': True},
               }
lab_schema = {'id': {'readonly': True},
              }
contract_status_schema = {'id': {'readonly': True},
                          }
sampling_point_schema = {'id': {'readonly': True},
                         }
material_schema = {'id': {'readonly': True},
                   }
fluid_type_schema = {'id': {'readonly': True},
                     }
gas_sensor_schema = {'id': {'readonly': True},
                     }
transformer_schema = {'id': {'readonly': True},
                      }
breaker_schema = {'id': {'readonly': True},
                  }
tap_changer_schema = {'id': {'readonly': True},
                      }
bushing_schema = {'id': {'readonly': True},
                  }
upstream_schema = {'id': {'readonly': True},
                   }
downstream_schema = {'id': {'readonly': True},
                     }
resistance_schema = {'id': {'readonly': True},
                     }
air_breaker_schema = {'id': {'readonly': True},
                      }
capacitor_schema = {'id': {'readonly': True},
                    }
powersource_schema = {'id': {'readonly': True},
                      }
switchgear_schema = {'id': {'readonly': True},
                     }
induction_machine_schema = {'id': {'readonly': True},
                            }
synchronous_machine_schema = {'id': {'readonly': True},
                              }
rectifier_schema = {'id': {'readonly': True},
                    }
inductance_schema = {'id': {'readonly': True},
                     }
tank_schema = {'id': {'readonly': True},
               }
switch_schema = {'id': {'readonly': True},
                 }
cable_schema = {'id': {'readonly': True},
                }
recommendation_schema = {'id': {'readonly': True},
                         }
gas_level_schema = {'id': {'readonly': True},
                    }
interrupting_medium_schema = {'id': {'readonly': True},
                              }
breaker_mechanism_schema = {'id': {'readonly': True},
                            }
insulation_schema = {'id': {'readonly': True},
                     }
syringe_schema = {'id': {'readonly': True},
                  }
test_reason_schema = {'id': {'readonly': True},
                      }
test_status_schema = {'id': {'readonly': True},
                      }
schedule_schema = {'id': {'readonly': True},
                   }
test_type_schema = {'id': {'readonly': True},
                    }
test_type_result_table_schema = {'id': {'readonly': True},
                                 }
gasket_condition_schema = {'id': {'readonly': True},
                           }
gas_relay_schema = {'id': {'readonly': True},
                    }
fluid_level_schema = {'id': {'readonly': True},
                      }
pressure_unit_schema = {'id': {'readonly': True},
                        }
valve_condition_schema = {'id': {'readonly': True},
                          }
pump_condition_schema = {'id': {'readonly': True},
                         }
overall_condition_schema = {'id': {'readonly': True},
                            }
paint_types_schema = {'id': {'readonly': True},
                      }
tap_counter_status_schema = {'id': {'readonly': True},
                             }
tap_filter_condition_schema = {'id': {'readonly': True},
                               }
fan_condition_schema = {'id': {'readonly': True},
                        }
connection_condition_schema = {'id': {'readonly': True},
                               }
foundation_condition_schema = {'id': {'readonly': True},
                               }
heating_condition_schema = {'id': {'readonly': True},
                            }
bushing_test_schema = {'id': {'readonly': True},
                       }
winding_test_schema = {'id': {'readonly': True},
                       }
visual_inspection_test_schema = {'id': {'readonly': True},
                                 }
insulation_resistance_test_schema = {'id': {'readonly': True},
                                     }
polymerisation_degree_test_schema = {'id': {'readonly': True},
                                     }
transformer_turn_ratio_test_schema = {'id': {'readonly': True},
                                      }
winding_resistance_test_schema = {'id': {'readonly': True},
                                  }
dissolved_gas_test_schema = {'id': {'readonly': True},
                             }
water_test_schema = {'id': {'readonly': True},
                     }
furan_test_schema = {'id': {'readonly': True},
                     }
inhibitor_test_schema = {'id': {'readonly': True},
                         }
inhibitor_type_schema = {'id': {'readonly': True},
                         }
pcb_test_schema = {'id': {'readonly': True},
                   }
particle_test_schema = {'id': {'readonly': True},
                        }
metals_in_oil_test_schema = {'id': {'readonly': True},
                             }
fluid_test_schema = {'id': {'readonly': True},
                     }
norm_physic_schema = {'id': {'readonly': True},
                      }
norm_gas_schema = {'id': {'readonly': True},
                   }
particles_schema = {'id': {'readonly': True},
                    }
norm_isolation_schema = {'id': {'readonly': True},
                         }
norm_furan_schema = {'id': {'readonly': True},
                     }
model_dict = {'equipment': {'model': Equipment, 'schema': equipment_schema},
              'equipment_type': {'model': EquipmentType, 'schema': equipment_type_schema},
              'campaign': {'model': Campaign, 'schema': campaign_schema},
              'contract': {'model': Contract, 'schema': contract_schema},
              'norm': {'model': Norm, 'schema': norm_schema},
              'location': {'model': Location, 'schema': location_schema},
              'manufacturer': {'model': Manufacturer, 'schema': manufacturer_schema},
              'user': {'model': User, 'schema': user_schema},
              'assigned_to': {'model': User, 'schema': user_schema},
              'visual_inspection_by': {'model': User, 'schema': user_schema},
              'electrical_profile': {'model': ElectricalProfile, 'schema': electrical_profile_schema},
              'fluid_profile': {'model': FluidProfile, 'schema': fluid_profile_schema},
              'test_result': {'model': TestResult, 'schema': test_result_schema},

              'role': {'model': Role, 'schema': role_schema},
              'lab': {'model': Lab, 'schema': lab_schema},
              'contract_status': {'model': ContractStatus, 'schema': contract_status_schema},
              'sampling_point': {'model': SamplingPoint, 'schema': sampling_point_schema},
              'material': {'model': Material, 'schema': material_schema},
              'fluid_type': {'model': FluidType, 'schema': fluid_type_schema},
              'gas_sensor': {'model': GasSensor, 'schema': gas_sensor_schema},
              'transformer': {'model': Transformer, 'schema': transformer_schema},
              'breaker': {'model': Breaker, 'schema': breaker_schema},
              'tap_changer': {'model': LoadTapChanger, 'schema': tap_changer_schema},
              'bushing': {'model': Bushing, 'schema': bushing_schema},
              'upstream': {'model': Upstream, 'schema': upstream_schema},
              'downstream': {'model': Downstream, 'schema': downstream_schema},
              'resistance': {'model': NeutralResistance, 'schema': resistance_schema},
              'air_breaker': {'model': AirCircuitBreaker, 'schema': air_breaker_schema},
              'capacitor': {'model': Capacitor, 'schema': capacitor_schema},
              'powersource': {'model': PowerSource, 'schema': powersource_schema},
              'switchgear': {'model': SwitchGear, 'schema': switchgear_schema},
              'induction_machine': {'model': InductionMachine, 'schema': induction_machine_schema},
              'synchronous_machine': {'model': SynchronousMachine, 'schema': synchronous_machine_schema},
              'rectifier': {'model': Rectifier, 'schema': rectifier_schema},
              'inductance': {'model': Inductance, 'schema': inductance_schema},
              'tank': {'model': Tank, 'schema': tank_schema},
              'switch': {'model': Switch, 'schema': switch_schema},
              'cable': {'model': Cable, 'schema': cable_schema},
              'recommendation': {'model': Recommendation, 'schema': recommendation_schema},
              'gas_level': {'model': GasLevel, 'schema': gas_level_schema},
              'interrupting_medium': {'model': InterruptingMedium, 'schema': interrupting_medium_schema},
              'breaker_mechanism': {'model': BreakerMechanism, 'schema': breaker_mechanism_schema},
              'insulation': {'model': Insulation, 'schema': insulation_schema},
              'syringe': {'model': Syringe, 'schema': syringe_schema},
              'test_reason': {'model': TestReason, 'schema': test_reason_schema},
              'test_status': {'model': TestStatus, 'schema': test_status_schema},
              'schedule': {'model': TestSchedule, 'schema': schedule_schema},
              'test_type': {'model': TestType, 'schema': test_type_schema},
              'test_type_result_table': {'model': TestTypeResultTable, 'schema': test_type_result_table_schema},
              'gasket_condition': {'model': GasketCondition, 'schema': gasket_condition_schema},
              'gas_relay': {'model': GasRelay, 'schema': gas_relay_schema},
              'fluid_level': {'model': FluidLevel, 'schema': fluid_level_schema},
              'pressure_unit': {'model': PressureUnit, 'schema': pressure_unit_schema},
              'valve_condition': {'model': ValveCondition, 'schema': valve_condition_schema},
              'pump_condition': {'model': PumpCondition, 'schema': pump_condition_schema},
              'overall_condition': {'model': OverallCondition, 'schema': overall_condition_schema},
              'paint_types': {'model': PaintTypes, 'schema': paint_types_schema},
              'tap_counter_status': {'model': TapCounterStatus, 'schema': tap_counter_status_schema},
              'tap_filter_condition': {'model': TapFilterCondition, 'schema': tap_filter_condition_schema},
              'fan_condition': {'model': FanCondition, 'schema': fan_condition_schema},
              'connection_condition': {'model': ConnectionCondition, 'schema': connection_condition_schema},
              'foundation_condition': {'model': FoundationCondition, 'schema': foundation_condition_schema},
              'heating_condition': {'model': HeatingCondition, 'schema': heating_condition_schema},
              'bushing_test': {'model': BushingTest, 'schema': bushing_test_schema},
              'winding_test': {'model': WindingTest, 'schema': winding_test_schema},
              'visual_inspection_test': {'model': VisualInspectionTest, 'schema': visual_inspection_test_schema},
              'insulation_resistance_test': {'model': InsulationResistanceTest, 'schema': insulation_resistance_test_schema},
              'polymerisation_degree_test': {'model': PolymerisationDegreeTest, 'schema': polymerisation_degree_test_schema},
              'transformer_turn_ratio_test': {'model': TransformerTurnRatioTest, 'schema': transformer_turn_ratio_test_schema},
              'winding_resistance_test': {'model': WindingResistanceTest, 'schema': winding_resistance_test_schema},
              'dissolved_gas_test': {'model': DissolvedGasTest, 'schema': dissolved_gas_test_schema},
              'water_test': {'model': WaterTest, 'schema': water_test_schema},
              'furan_test': {'model': FuranTest, 'schema': furan_test_schema},
              'inhibitor_test': {'model': InhibitorTest, 'schema': inhibitor_test_schema},
              'inhibitor_type': {'model': InhibitorType, 'schema': inhibitor_type_schema},
              'pcb_test': {'model': PCBTest, 'schema': pcb_test_schema},
              'particle_test': {'model': ParticleTest, 'schema': particle_test_schema},
              'metals_in_oil_test': {'model': MetalsInOilTest, 'schema': metals_in_oil_test_schema},
              'fluid_test': {'model': FluidTest, 'schema': fluid_test_schema},
              'norm_physic': {'model': NormPhysic, 'schema': norm_physic_schema},
              'norm_gas': {'model': NormGas, 'schema': norm_gas_schema},
              'particles': {'model': NormParticles, 'schema': particles_schema},
              'norm_isolation': {'model': NormIsolation, 'schema': norm_isolation_schema},
              'norm_furan': {'model': NormFuran, 'schema': norm_furan_schema},
              }

eq_type_dict = {1: 'air_bkr',
                2: 'bushing',
                3: 'capacitor',
                4: 'bkr',
                5: 'source',
                6: 'cable',
                # 7: 'Switchgear',
                # 8: 'Induction machine',
                9: 'synch',
                # 10: 'localization'
                11: 'tc',  # tap changer
                12: 'rect',
                # 13: 'site',
                14: 'transfo',
                15: 'tank',
                16: 'switch',
                17: 'induc',
                # 18: 'neutral resistance',
                # 19: 'gas sensor',
                }


class Tree(db.Model):
    __tablename__ = 'tree'

    id = db.Column(db.Integer(), primary_key=True, nullable=False, autoincrement=True)
    parent_id = db.Column('parent_id', db.ForeignKey("tree.id"), nullable=True)
    equipment_id = db.Column('equipment_id', db.ForeignKey(Equipment.id), nullable=False)
    equipment = db.relationship(Equipment, foreign_keys='Tree.equipment_id')
    icon = db.Column(db.String(126))
    opened = db.Column(db.Boolean)
    disabled = db.Column(db.Boolean)
    selected = db.Column(db.Boolean)
    type = db.Column(db.String(58))
    view = db.Column(db.String(126))
    status = db.Column(db.SMALLINT)

    #
    # def __repr__(self):
    #     return "{}".format(self.id)
    #
    # def serialize(self):
    #     """Return object data in easily serializeable format"""
    #     return {'id': self.id,
    #             'parent_id': self.parent_id,
    #             'icon': self.icon,
    #             'opened': self.opened,
    #             'disabled': self.disabled,
    #             'selected': self.selected,
    #             'type': self.type,
    #             'view': self.view,
    #             'status': self.status,
    #             }


class TreeTranslation(db.Model):
    __tablename__ = 'tree_translation'

    id = db.Column(db.Integer(), primary_key=True, nullable=False, autoincrement=True)
    locale = db.Column(db.String(10))
    text = db.Column(db.String(250))
    tooltip = db.Column(db.String(250))
