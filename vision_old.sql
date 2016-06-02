--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Analyse; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Analyse" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "DateAnalyse" timestamp without time zone,
    "TypeAnalyse" character varying(4),
    "NoAnalyse" character varying(15),
    "CodeMatiere" integer,
    "CodeMotif" integer DEFAULT 0,
    "CodeLieu" integer DEFAULT 0,
    "PourcentRatio" boolean,
    "TypeHuile" integer DEFAULT 0,
    "Charge" double precision,
    "DatePrelevement" timestamp without time zone,
    "Remarque" text,
    "PrelevePar" character varying(50),
    "Modifier" boolean,
    "Transmission" boolean,
    "Laboratoire" character varying(20),
    "DateReparation" timestamp without time zone,
    "Desc_Reparation" text,
    "If_REM" character varying(5),
    "If_OK" character varying(5),
    "CodeRecommandation" integer,
    "RecommandationEcrite" text,
    "DateApplication" timestamp without time zone,
    "Commentaire" text,
    "EtatCodeAnalyse" integer,
    "MWs" double precision DEFAULT 0,
    "Temperature" double precision,
    "TestEquipNum" character varying(25),
    "CartEchantImp" boolean,
    "NoContrat" character varying(25),
    "EtatCommande" integer,
    "NbrContenant" double precision DEFAULT 1,
    "CartEchantRassembler" integer,
    "RegroupEssaiType" character varying(50),
    "NoContratLab" character varying(50),
    "SeringueNum" character varying(50),
    "DataValid" integer DEFAULT 0,
    "Status1" integer DEFAULT 0,
    "Status2" integer DEFAULT 0,
    "ErrorState" integer DEFAULT 0,
    "ErrorCode" integer DEFAULT 0,
    "Ambient_Air_Temperature" double precision DEFAULT 0
);


ALTER TABLE public."Analyse" OWNER TO vision;

--
-- Name: BCD; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "BCD" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "TestKV1" double precision DEFAULT 0,
    "mMeter1" double precision DEFAULT 0,
    "mMultiplier1" double precision DEFAULT 0,
    "wMeter1" double precision DEFAULT 0,
    "wMultiplier1" double precision DEFAULT 0,
    "TestKV2" double precision DEFAULT 0,
    "mMeter2" double precision DEFAULT 0,
    "mMultiplier2" double precision DEFAULT 0,
    "wMeter2" double precision DEFAULT 0,
    "wMultiplier2" double precision DEFAULT 0,
    "TestKV3" double precision DEFAULT 0,
    "mMeter3" double precision DEFAULT 0,
    "mMultiplier3" double precision DEFAULT 0,
    "wMeter3" double precision DEFAULT 0,
    "wMultiplier3" double precision DEFAULT 0,
    "TestKV4" double precision DEFAULT 0,
    "mMeter4" double precision DEFAULT 0,
    "mMultiplier4" double precision DEFAULT 0,
    "wMeter4" double precision DEFAULT 0,
    "wMultiplier4" double precision DEFAULT 0,
    "TestKV5" double precision DEFAULT 0,
    "mMeter5" double precision DEFAULT 0,
    "mMultiplier5" double precision DEFAULT 0,
    "wMeter5" double precision DEFAULT 0,
    "wMultiplier5" double precision DEFAULT 0,
    "TestKV6" double precision DEFAULT 0,
    "mMeter6" double precision DEFAULT 0,
    "mMultiplier6" double precision DEFAULT 0,
    "wMeter6" double precision DEFAULT 0,
    "wMultiplier6" double precision DEFAULT 0,
    "TestKV7" double precision DEFAULT 0,
    "mMeter7" double precision DEFAULT 0,
    "mMultiplier7" double precision DEFAULT 0,
    "wMeter7" double precision DEFAULT 0,
    "wMultiplier7" double precision DEFAULT 0,
    "TestKV8" double precision DEFAULT 0,
    "mMeter8" double precision DEFAULT 0,
    "mMultiplier8" double precision DEFAULT 0,
    "wMeter8" double precision DEFAULT 0,
    "wMultiplier8" double precision DEFAULT 0,
    "TestKV9" double precision DEFAULT 0,
    "mMeter9" double precision DEFAULT 0,
    "mMultiplier9" double precision DEFAULT 0,
    "wMeter9" double precision DEFAULT 0,
    "wMultiplier9" double precision DEFAULT 0,
    "TestKV10" double precision DEFAULT 0,
    "mMeter10" double precision DEFAULT 0,
    "mMultiplier10" double precision DEFAULT 0,
    "wMeter10" double precision DEFAULT 0,
    "wMultiplier10" double precision DEFAULT 0,
    "Type_Doble" boolean,
    "Humidite" double precision DEFAULT 0
);


ALTER TABLE public."BCD" OWNER TO vision;

--
-- Name: BPC; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "BPC" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "Bpc1242" double precision DEFAULT 0,
    "Bpc1254" double precision DEFAULT 0,
    "Bpc1260" double precision DEFAULT 0,
    b1242 boolean,
    b1254 boolean,
    b1260 boolean,
    "BPCTotal" double precision DEFAULT 0,
    "bTotal" boolean
);


ALTER TABLE public."BPC" OWNER TO vision;

--
-- Name: Capteur_GAZ; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Capteur_GAZ" (
    "Capteur" character varying(25) NOT NULL,
    "Manufacturier" character varying(25),
    "H2" double precision DEFAULT 0,
    "CH4" double precision DEFAULT 0,
    "C2H2" double precision DEFAULT 0,
    "C2H4" double precision DEFAULT 0,
    "C2H6" double precision DEFAULT 0,
    "CO" double precision DEFAULT 0,
    "CO2" double precision DEFAULT 0,
    "O2" double precision DEFAULT 0,
    "N2" double precision DEFAULT 0,
    "ErreurPPM" integer DEFAULT 0,
    "ErreurPourcent" double precision DEFAULT 0
);


ALTER TABLE public."Capteur_GAZ" OWNER TO vision;

--
-- Name: Cedule; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Cedule" (
    "NoSerieEquipe" character varying(50) NOT NULL,
    "NoEquipement" character varying(50) NOT NULL,
    "DateDep" timestamp without time zone NOT NULL,
    "PerAnnee" integer DEFAULT 0,
    "PerMois" integer DEFAULT 0,
    "PerJours" integer DEFAULT 0,
    "TravailleFait" boolean,
    "Rappel" boolean,
    "RappelNbrJours" integer DEFAULT 0,
    "Description" text,
    "Prof_Fluid" character varying(25),
    "Prof_Elec" character varying(25),
    "Prof_Mec" character varying(25),
    "NoTravaux" integer NOT NULL
);


ALTER TABLE public."Cedule" OWNER TO vision;

--
-- Name: Clients; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Clients" (
    "NoClient" character varying(15) NOT NULL,
    "Nom" character varying(30),
    "Adresse" character varying(60),
    "Contact" character varying(30),
    "Province" character varying(20),
    "NoTravail" character varying(15),
    "NoCommande" character varying(15),
    "Ville" character varying(30),
    "CP" character varying(7),
    "Tel" character varying(14),
    "Fax" character varying(14),
    "Tel_Extension" character varying(10),
    "Email" character varying(50)
);


ALTER TABLE public."Clients" OWNER TO vision;

--
-- Name: Configuration; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Configuration" (
    "NPHYT" character varying(20),
    "NPHYD" character varying(20),
    "NPHYP" character varying(20),
    "Nom_Fichier_Client" character varying(60),
    "NoClient" character varying(20),
    "Nom" character varying(20),
    "Adresse" character varying(20),
    "Adresse2" character varying(20),
    "Contact" character varying(20),
    "NoTravail" character varying(20),
    "NoCommande" character varying(20),
    "Ville" character varying(20),
    "CP" character varying(20),
    "TEL" character varying(20),
    "FAX" character varying(20),
    "Province" character varying(20),
    "FType" integer,
    "NTable" character varying(20),
    "AffParNoEquipe" boolean,
    "NormeGD" character varying(20),
    "NormeFuranne" character varying(20),
    "Cpt_Export" integer DEFAULT 0,
    "NormeGDSi" character varying(50),
    "NormeGDRTEMP" character varying(50),
    "NormePHYSi" character varying(50),
    "NormePHYRTEMP" character varying(50),
    "NormePHYWECO" character varying(50),
    "NormePHYBPC" character varying(50),
    "Tel_Extension" character varying(50),
    "Email" character varying(50)
);


ALTER TABLE public."Configuration" OWNER TO vision;

--
-- Name: DBPC; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "DBPC" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "DBPC" double precision DEFAULT 0,
    "REMARQUE" character varying(80),
    "bDBPC" boolean
);


ALTER TABLE public."DBPC" OWNER TO vision;

--
-- Name: DP; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "DP" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "PhaseA1" double precision DEFAULT 0,
    "PhaseA2" double precision DEFAULT 0,
    "PhaseA3" double precision DEFAULT 0,
    "PhaseB1" double precision DEFAULT 0,
    "PhaseB2" double precision DEFAULT 0,
    "PhaseB3" double precision DEFAULT 0,
    "PhaseC1" double precision DEFAULT 0,
    "PhaseC2" double precision DEFAULT 0,
    "PhaseC3" double precision DEFAULT 0
);


ALTER TABLE public."DP" OWNER TO vision;

--
-- Name: Diagnostic; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Diagnostic" (
    "TypeAnalyse" character varying(4) NOT NULL,
    "CodeDiagnostic" integer NOT NULL,
    "DiagnosticE" character varying(255),
    "DiagnosticA" character varying(255),
    "DiagnosticF" character varying(255)
);


ALTER TABLE public."Diagnostic" OWNER TO vision;

--
-- Name: Documents; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Documents" (
    "NoEquipement" character varying(50),
    "NoSerieEquipe" character varying(50),
    "Document" character varying(50),
    "DocType" character varying(50),
    "DocPath" text,
    "Description" character varying(255)
);


ALTER TABLE public."Documents" OWNER TO vision;

--
-- Name: Eau; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Eau" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "Eau" double precision DEFAULT 0,
    "REMARQUE" character varying(80),
    "bEau" boolean
);


ALTER TABLE public."Eau" OWNER TO vision;

--
-- Name: EquipeExportLabo; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "EquipeExportLabo" (
    "NomFichier" character varying(30) NOT NULL,
    "ClefAnalyse" character varying(50) NOT NULL,
    "Etat" smallint DEFAULT 0,
    "Remarque" character varying(50),
    "NoAnalyse" character varying(15),
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50)
);


ALTER TABLE public."EquipeExportLabo" OWNER TO vision;

--
-- Name: Equipe_Tap_Tension; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Equipe_Tap_Tension" (
    "NoEquipement" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50) NOT NULL,
    "Bobine" integer DEFAULT 0 NOT NULL,
    "Tap_Num" integer DEFAULT 0 NOT NULL,
    "Tap_Tension" double precision DEFAULT 0
);


ALTER TABLE public."Equipe_Tap_Tension" OWNER TO vision;

--
-- Name: Equipement; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Equipement" (
    "NoEquipement" character varying(50) NOT NULL,
    "TypeEquipement" character varying(50),
    "Site" character varying(50),
    "Localisation" character varying(50),
    "LitreHuile" double precision,
    "Description" character varying(50),
    "NoSerieEquipe" character varying(50) NOT NULL,
    "Manufacturier" character varying(50),
    "Annee" integer,
    "Modifier" boolean,
    "NoExploitation" character varying(50),
    "Scelle" boolean,
    "CouvSoude" boolean,
    "TriPhase" boolean,
    "Commentaire" text,
    "Capteur" character varying(25),
    "NoClient" character varying(15),
    "DateV" timestamp without time zone,
    "Ins_Vis_Par" character varying(30),
    "CommentaireV" text,
    "Compteur" integer,
    "Filtreur" character varying(30),
    "Tension1" double precision,
    "Tension2" double precision,
    "Tension3" double precision,
    "Puissance1" double precision,
    "Puissance2" double precision,
    "Puissance3" double precision,
    "Bobine" integer,
    "Auto_Transfo" boolean,
    "Raccord_Bobine1" integer,
    "Raccord_Bobine2" integer,
    "Raccord_Bobine3" integer,
    "BIL1" double precision,
    "BIL2" double precision,
    "BIL3" double precision,
    "Ecran_Electro1" boolean,
    "Ecran_Electro2" boolean,
    "Ecran_Electro3" boolean,
    "ChangeurP1" double precision,
    "ChangeurP2" double precision,
    "ChangeurP3" double precision,
    "Bushing_Neutre1" double precision,
    "Bushing_Neutre2" double precision,
    "Bushing_Neutre3" double precision,
    "Resistance_Neutre1" double precision,
    "ResInf1" boolean,
    "Resistance_Neutre2" double precision,
    "ResInf2" boolean,
    "Bobine_Materiel" integer,
    "Formule_Ratio" integer,
    "Etiquette1" character varying(20),
    "Etiquette2" character varying(20),
    "Etiquette3" character varying(20),
    "Frequence" integer,
    "Impedance1" double precision,
    "Imp_Base1" double precision,
    "Impedance2" double precision,
    "Imp_Base2" double precision,
    "Temp_elevation" integer,
    "Nbr_Change_Prise" integer,
    "NormePhy" character varying(20),
    "NormeGD" character varying(20),
    "NormeFur" character varying(20),
    "Formule_Ratio2" integer,
    "Etiquette4" character varying(20),
    "Etiquette5" character varying(20),
    "Etiquette6" character varying(20),
    "TypeHuile" integer,
    "Resistance_Neutre0" double precision,
    "ResInf0" boolean,
    "Bush_Serie1" character varying(15),
    "Bush_Serie2" character varying(15),
    "Bush_Serie3" character varying(15),
    "Bush_Serie4" character varying(15),
    "Bush_Serie5" character varying(15),
    "Bush_Serie6" character varying(15),
    "Bush_Serie7" character varying(15),
    "Bush_Serie8" character varying(15),
    "Bush_Serie9" character varying(15),
    "Bush_Serie10" character varying(15),
    "Bush_Serie11" character varying(15),
    "Bush_Serie12" character varying(15),
    "LocAmont1" character varying(100),
    "LocAmont2" character varying(100),
    "LocAmont3" character varying(100),
    "LocAmont4" character varying(100),
    "LocAmont5" character varying(100),
    "LocAval1" character varying(100),
    "LocAval2" character varying(100),
    "LocAval3" character varying(100),
    "LocAval4" character varying(100),
    "LocAval5" character varying(100),
    "LocTie" boolean,
    "LocEntretienEtat" integer,
    "LocAnalyseEtat" integer,
    "LocPos" integer,
    "PosPhys" integer,
    "MWActuel" double precision,
    "MVARActuel" double precision,
    "MWReserve" double precision,
    "MVARReserve" double precision,
    "MWUltime" double precision,
    "MVARUltime" double precision,
    "Tension4" double precision,
    "Puissance4" double precision,
    "Raccord_Bobine4" double precision,
    "BIL4" double precision,
    "Ecran_Electro4" double precision,
    "ChangeurP4" double precision,
    "Bushing_Neutre4" double precision,
    "Resistance_Neutre3" double precision,
    "Etiquette7" double precision,
    "Etiquette8" double precision,
    "ResInf3" double precision,
    "Formule_Ratio3" double precision,
    "PuisForce11" double precision,
    "PuisForce12" double precision,
    "PuisForce13" double precision,
    "PuisForce14" double precision,
    "PuisForce21" double precision,
    "PuisForce22" double precision,
    "PuisForce23" double precision,
    "PuisForce24" double precision,
    "Impedance3" double precision,
    "Imp_Base3" double precision,
    "Bush_Mfr_H1" character varying(25),
    "Bush_Mfr_H2" character varying(25),
    "Bush_Mfr_H3" character varying(25),
    "Bush_Mfr_HN" character varying(25),
    "Bush_Mfr_X1" character varying(25),
    "Bush_Mfr_X2" character varying(25),
    "Bush_Mfr_X3" character varying(25),
    "Bush_Mfr_XN" character varying(25),
    "Bush_Mfr_T1" character varying(25),
    "Bush_Mfr_T2" character varying(25),
    "Bush_Mfr_T3" character varying(25),
    "Bush_Mfr_TN" character varying(25),
    "Bush_Mfr_Q1" character varying(25),
    "Bush_Mfr_Q2" character varying(25),
    "Bush_Mfr_Q3" character varying(25),
    "Bush_Mfr_QN" character varying(25),
    "Bush_Type_H" character varying(25),
    "Bush_Type_HN" character varying(25),
    "Bush_Type_X" character varying(25),
    "Bush_Type_XN" character varying(25),
    "Bush_Type_T" character varying(25),
    "Bush_Type_TN" character varying(25),
    "Bush_Type_Q" character varying(25),
    "Bush_Type_QN" character varying(25),
    "Valider" boolean,
    "EnValidation" boolean,
    "NoSerieEquipeAnc" character varying(50),
    "NoEquipementAnc" character varying(50),
    "Fratrie" integer
);


ALTER TABLE public."Equipement" OWNER TO vision;

--
-- Name: FichierExportLabo; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "FichierExportLabo" (
    "NomFichier" character varying(30) NOT NULL,
    "DateSortie" timestamp without time zone,
    labo character varying(30)
);


ALTER TABLE public."FichierExportLabo" OWNER TO vision;

--
-- Name: Furane; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Furane" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "HMF" double precision DEFAULT 0,
    "FOL" double precision DEFAULT 0,
    "FAL" double precision DEFAULT 0,
    "ACF" double precision DEFAULT 0,
    "MEF" double precision DEFAULT 0,
    "bHMF" boolean,
    "bFOL" boolean,
    "bFAL" boolean,
    "bACF" boolean,
    "bMEF" boolean
);


ALTER TABLE public."Furane" OWNER TO vision;

--
-- Name: Gaz_Dissous; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Gaz_Dissous" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "H2" double precision DEFAULT 0,
    "CH4" double precision DEFAULT 0,
    "C2H2" double precision DEFAULT 0,
    "C2H4" double precision DEFAULT 0,
    "C2H6" double precision DEFAULT 0,
    "CO" double precision DEFAULT 0,
    "CO2" double precision DEFAULT 0,
    "O2" double precision DEFAULT 0,
    "N2" double precision DEFAULT 0,
    "CAP_GAZ" double precision DEFAULT 0,
    "bH2" boolean,
    "bCH4" boolean,
    "bC2H2" boolean,
    "bC2H4" boolean,
    "bC2H6" boolean,
    "bCO" boolean,
    "bCO2" boolean,
    "bO2" boolean,
    "bN2" boolean,
    "ContenuGaz" double precision,
    "Noise" double precision DEFAULT 0,
    "Tzone1" double precision DEFAULT 0,
    "Tzone2" double precision DEFAULT 0,
    "Flow_gas" double precision DEFAULT 0,
    "Pcell" double precision DEFAULT 0,
    "Toil_hs" double precision DEFAULT 0,
    "Tpga" double precision DEFAULT 0,
    "RH_pga" double precision DEFAULT 0,
    "Normalization_Temperature" double precision DEFAULT 0,
    "Oil_Pressure" double precision DEFAULT 0,
    "Poil_pump" double precision DEFAULT 0,
    "Toil_cond" double precision DEFAULT 0,
    "Oil_Temperature" double precision DEFAULT 0,
    "N_fill" double precision DEFAULT 0,
    "N_drain" double precision DEFAULT 0,
    "Mic1" double precision DEFAULT 0,
    "Mic2" double precision DEFAULT 0,
    opt_36 double precision DEFAULT 0,
    opt_37 double precision DEFAULT 0,
    opt_38 double precision DEFAULT 0,
    opt_39 double precision DEFAULT 0,
    opt_40 double precision DEFAULT 0,
    opt_41 double precision DEFAULT 0,
    opt_42 double precision DEFAULT 0,
    opt_43 double precision DEFAULT 0,
    opt_44 double precision DEFAULT 0,
    opt_45 double precision DEFAULT 0,
    opt_46 double precision DEFAULT 0,
    opt_47 double precision DEFAULT 0,
    opt_48 double precision DEFAULT 0,
    opt_49 double precision DEFAULT 0,
    opt_50 double precision DEFAULT 0
);


ALTER TABLE public."Gaz_Dissous" OWNER TO vision;

--
-- Name: HDSecurite; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "HDSecurite" (
    "HDSerial" character varying(10),
    "PercepSerial" character varying(10)
);


ALTER TABLE public."HDSecurite" OWNER TO vision;

--
-- Name: Inspection_Visuel; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Inspection_Visuel" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "Cuve_Jt_Couvercle" integer DEFAULT 0,
    "Cuve_boucle_acces" integer DEFAULT 0,
    "Cuve_Jt_Radiateurs" integer DEFAULT 0,
    "Cuve_Relais_Gaz" integer DEFAULT 0,
    "Cuve_Niveau" integer DEFAULT 1,
    "Cuve_Temp_Bobinage" integer DEFAULT 0,
    "Cuve_Temp_Bobinage2" integer DEFAULT 0,
    "Cuve_Temp_Huile" integer DEFAULT 0,
    "Cuve_Temp_Huile2" integer DEFAULT 0,
    "Cuve_Pression" integer DEFAULT 0,
    "Cuve_Valve_Sup" integer DEFAULT 0,
    "Cuve_Valve_Echant" integer DEFAULT 0,
    "Cuve_Pompe_Huile" integer DEFAULT 0,
    "Cuve_Vent" integer DEFAULT 0,
    "Cuve_Cap_Gaz" integer DEFAULT 0,
    "Cuve_Peinture" integer DEFAULT 0,
    "Cuve_Chauffage" integer DEFAULT 0,
    "Cuve_PresUnit" double precision DEFAULT 0,
    "Cp_Jt" smallint DEFAULT 0,
    "Cp_Niveau" integer DEFAULT 1,
    "Cp_Temp" integer DEFAULT 0,
    "Cp_Temp2" integer DEFAULT 0,
    "Cp_Pression" integer DEFAULT 0,
    "Cp_Pression2" integer DEFAULT 0,
    "Cp_Valve_Sup" integer DEFAULT 0,
    "Cp_Peinture" integer DEFAULT 0,
    "Cp_Num_Operation" integer,
    "Cp_Filtre" integer DEFAULT 0,
    "Cp_Compteur" double precision DEFAULT 0,
    "Cp_Jt_Echant" integer DEFAULT 0,
    "Cp_Position_Prises" character varying(15) DEFAULT '0'::character varying,
    "Cp_PresUnit" double precision DEFAULT 0,
    "Ce_Jt_Tuyau" integer DEFAULT 0,
    "Ce_Niveau" integer DEFAULT 1,
    "Ce_Peinture" integer DEFAULT 0,
    "Ce_Dessicat" integer DEFAULT 0,
    "Ta_Jt" integer DEFAULT 0,
    "Ta_Niveau" integer DEFAULT 1,
    "Ta_Proprete" integer DEFAULT 0,
    "Matt_Valeur" double precision DEFAULT 0,
    "Matt_Raccord" integer DEFAULT 0,
    "SS_Indicateur" integer DEFAULT 0,
    "Assise" integer DEFAULT 0,
    "Temp_Ambiant" integer DEFAULT 0,
    "Charge" integer DEFAULT 0,
    "Con_Raccord_Electrique" integer DEFAULT 0,
    "Con_aspect_General" integer DEFAULT 0,
    "Rad_Ventilation" integer DEFAULT 0,
    "Rad_Aspect_General" integer DEFAULT 0,
    "Notes" text,
    "Cuve_Temp_Bob_Decl1" double precision DEFAULT 0,
    "Cuve_Temp_Bob_Decl2" double precision DEFAULT 0,
    "Cuve_Temp_Bob_Decl3" double precision DEFAULT 0,
    "Cuve_Temp_Liq_Decl1" double precision DEFAULT 0,
    "Cuve_Temp_Liq_Decl2" double precision DEFAULT 0,
    "Cuve_Temp_Liq_Decl3" double precision DEFAULT 0,
    "Cuve_TempContact_Bob_Decl1" boolean,
    "Cuve_TempContact_Liq_Decl1" boolean
);


ALTER TABLE public."Inspection_Visuel" OWNER TO vision;

--
-- Name: Laboratoire; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Laboratoire" (
    "CodeLaboratoire" integer DEFAULT 0 NOT NULL,
    "Laboratoire" character varying(20)
);


ALTER TABLE public."Laboratoire" OWNER TO vision;

--
-- Name: Localisation; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Localisation" (
    "Site" character varying(25) NOT NULL,
    "Localisation" character varying(25) NOT NULL,
    "Description" character varying(25)
);


ALTER TABLE public."Localisation" OWNER TO vision;

--
-- Name: Metaux_Dans_Huiles; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Metaux_Dans_Huiles" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "Aluminium" double precision,
    "Fer" double precision,
    "Plomb" double precision,
    "Etain" double precision,
    "Zinc" double precision,
    "Nickel" double precision,
    "Argent" double precision,
    "Cuivre" double precision,
    "bAlu" boolean,
    "bFer" boolean,
    "bEtain" boolean,
    "bZinc" boolean,
    "bNickel" boolean,
    "bArgent" boolean,
    "bPlomb" boolean,
    "bCuivre" boolean
);


ALTER TABLE public."Metaux_Dans_Huiles" OWNER TO vision;

--
-- Name: NestedNodesImage; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "NestedNodesImage" (
    "ID" integer,
    "Caption" character varying(255),
    "Key" character varying(255),
    "Tag" character varying(255),
    "Image" integer,
    "SelectedImage" integer,
    "ParentKey" character varying(255)
);


ALTER TABLE public."NestedNodesImage" OWNER TO vision;

--
-- Name: NormeIsolation; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "NormeIsolation" (
    "C" double precision DEFAULT 0,
    "F" double precision DEFAULT 0,
    "NotSeal" double precision DEFAULT 0,
    "Seal" double precision DEFAULT 0
);


ALTER TABLE public."NormeIsolation" OWNER TO vision;

--
-- Name: NormePhysique; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "NormePhysique" (
    "NORME" character varying(20) NOT NULL,
    "TypeEquipement" character varying(1) NOT NULL,
    "Acide_Min" double precision,
    "Acide_Max" double precision,
    "IFT_Min" double precision,
    "IFT_Max" double precision,
    "D1816_Min" double precision,
    "D1816_Max" double precision,
    "D877_Min" double precision,
    "D877_Max" double precision,
    "COULEUR_Min" double precision,
    "COULEUR_Max" double precision,
    "DENSITE_Min" double precision,
    "DENSITE_Max" double precision,
    "FACTEURP_Min" double precision,
    "FACTEURP_Max" double precision,
    "EAU_Min" double precision,
    "EAU_Max" double precision,
    "PECLAIR_Min" double precision,
    "PECLAIR_Max" double precision,
    "PECOULEMENT_Min" double precision,
    "PECOULEMENT_Max" double precision,
    "VISCOSITE_Min" double precision,
    "VISCOSITE_Max" double precision,
    "D1816_2_MIN" double precision,
    "D1816_2_MAX" double precision DEFAULT 0,
    "FacteurP100_MIN" double precision,
    "FacteurP100_MAX" double precision,
    "TypeHuile" integer DEFAULT 0,
    "CEI156_Min" integer DEFAULT 0,
    "CEI156_Max" integer DEFAULT 0
);


ALTER TABLE public."NormePhysique" OWNER TO vision;

--
-- Name: NormesFuranne; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "NormesFuranne" (
    "Norme" character varying(20) NOT NULL,
    "C1" double precision DEFAULT 0,
    "C2" double precision DEFAULT 0,
    "C3" double precision DEFAULT 0,
    "C4" double precision DEFAULT 0
);


ALTER TABLE public."NormesFuranne" OWNER TO vision;

--
-- Name: NormesGaz; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "NormesGaz" (
    "Nom" character varying(20),
    "Condition" integer DEFAULT 0,
    "H2" double precision DEFAULT 0,
    "CH4" double precision DEFAULT 0,
    "C2H2" double precision DEFAULT 0,
    "C2H4" double precision DEFAULT 0,
    "C2H6" double precision DEFAULT 0,
    "CO" double precision DEFAULT 0,
    "CO2" double precision DEFAULT 0,
    "TDCG" double precision DEFAULT 0,
    "TypeHuile" integer DEFAULT 0
);


ALTER TABLE public."NormesGaz" OWNER TO vision;

--
-- Name: PHY; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "PHY" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoEquipement" character varying(50),
    "NoSerieEquipe" character varying(50),
    "D1816" double precision DEFAULT 0,
    "D1816_2" double precision DEFAULT 0,
    "D877" double precision DEFAULT 0,
    "IFT" double precision DEFAULT 0,
    "Acid" double precision DEFAULT 0,
    "FacteurP" double precision DEFAULT 0,
    "FacteurP100" double precision DEFAULT 0,
    "Densite" double precision,
    "PEclair" double precision DEFAULT 0,
    "PEcoulement" double precision DEFAULT 0,
    "Viscosite" double precision,
    "Couleur" double precision DEFAULT 0,
    "FBoue" double precision DEFAULT 0,
    "PAniline" double precision DEFAULT 0,
    "SCorrosif" character varying(25) DEFAULT '0'::character varying,
    "VISUEL" character varying(25),
    "CEI156" double precision,
    "bD1816" boolean,
    "bD1816_2" boolean,
    "bD877" boolean,
    "bCEI156" boolean,
    "TestD1816" boolean,
    "TestD1816_2" boolean,
    "TestD877" boolean,
    "TestCEI156" boolean,
    "TestIFT" boolean,
    "TestAcid" boolean,
    "TestFacteurP" boolean,
    "TestFacteurP100" boolean,
    "TestDensite" boolean,
    "TestPEclair" boolean,
    "TestPEcoulement" boolean,
    "TestViscosite" boolean,
    "TestCouleur" boolean,
    "TestFBoue" boolean,
    "TestPAniline" boolean,
    "TestSCorrosif" boolean,
    "TestVisuel" boolean
);


ALTER TABLE public."PHY" OWNER TO vision;

--
-- Name: Particules; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Particules" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "2um" double precision,
    "5um" double precision,
    "10um" double precision,
    "15um" double precision,
    "25um" double precision,
    "50um" double precision,
    "100um" double precision,
    "ISO4406_1" double precision,
    "ISO4406_2" double precision,
    "ISO4406_3" double precision,
    "NAS1638" double precision
);


ALTER TABLE public."Particules" OWNER TO vision;

--
-- Name: ProfilEchantFluid; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "ProfilEchantFluid" (
    "NoProfil" character varying(25) NOT NULL,
    "Description" character varying(100),
    "Period" integer,
    "GD" boolean,
    "EAU_SER" boolean,
    "ANT_SER" boolean,
    "BPC_SER" boolean,
    "Lieu_SER" integer,
    "EAU_POT" boolean,
    "ANT_POT" boolean,
    "BPC_POT" boolean,
    "PAR" boolean,
    "MDH" boolean,
    "TestD1816" boolean,
    "TestD1816_2" boolean,
    "TestD877" boolean,
    "TestCEI156" boolean,
    "TestIFT" boolean,
    "TestAcid" boolean,
    "TestFacteurP" boolean,
    "TestFacteurP100" boolean,
    "TestDensite" boolean,
    "TestPEclair" boolean,
    "TestPEcoulement" boolean,
    "TestViscosite" boolean,
    "TestCouleur" boolean,
    "TestFBoue" boolean,
    "TestPAniline" boolean,
    "TestSCorrosif" boolean,
    "TestVisuel" boolean,
    "Lieu_POT" integer,
    "EAU_FIO" boolean,
    "ANT_FIO" boolean,
    "BPC_FIO" boolean,
    "Lieu_FIO" integer,
    "FUR_SER" boolean,
    "FUR_POT" boolean
);


ALTER TABLE public."ProfilEchantFluid" OWNER TO vision;

--
-- Name: ProfilTestElec; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "ProfilTestElec" (
    "NoProfil" character varying(25) NOT NULL,
    "Description" character varying(100),
    "Period" integer,
    "TRAV" boolean,
    "RES_ISOL" boolean,
    "BOB_PF" boolean,
    "BOB_PF_DOB" boolean,
    "DP" boolean,
    "BOB_RES" boolean,
    "INSP_VIS" boolean,
    "TTR" boolean
);


ALTER TABLE public."ProfilTestElec" OWNER TO vision;

--
-- Name: QCFormNum; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "QCFormNum" (
    "NumForm" integer DEFAULT 0,
    "NumISO" character varying(25),
    "NumRef" character varying(25),
    "ISOImp" boolean
);


ALTER TABLE public."QCFormNum" OWNER TO vision;

--
-- Name: Recommandation; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Recommandation" (
    "TypeAnalyse" character varying(4) NOT NULL,
    "CodeRecommandation" integer DEFAULT 0 NOT NULL,
    "RecommandationE" character varying(255),
    "RecommandationA" character varying(255),
    "RecommandationF" character varying(255)
);


ALTER TABLE public."Recommandation" OWNER TO vision;

--
-- Name: Res_Bobine; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Res_Bobine" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50) NOT NULL,
    "NoEquipement" character varying(50) NOT NULL,
    "Bobine" integer DEFAULT 0 NOT NULL,
    "Tap_Num" integer DEFAULT 0 NOT NULL,
    "Mesure1" double precision DEFAULT 0,
    "Temp1" double precision DEFAULT 0,
    "Mesure2" double precision DEFAULT 0,
    "Temp2" double precision DEFAULT 0,
    "Mesure3" double precision DEFAULT 0,
    "Temp3" double precision DEFAULT 0,
    "Corr1" double precision DEFAULT 0,
    "Corr2" double precision DEFAULT 0,
    "Corr3" double precision DEFAULT 0
);


ALTER TABLE public."Res_Bobine" OWNER TO vision;

--
-- Name: Res_Isolation; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Res_Isolation" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "TestKV1" double precision DEFAULT 0,
    "Multiplier1" double precision DEFAULT 0,
    "Meter1" double precision DEFAULT 0,
    "TestKV2" double precision DEFAULT 0,
    "Meter2" double precision DEFAULT 0,
    "Multiplier2" double precision DEFAULT 0,
    "TestKV3" double precision DEFAULT 0,
    "Meter3" double precision DEFAULT 0,
    "Multiplier3" double precision DEFAULT 0,
    "TestKV4" double precision DEFAULT 0,
    "Meter4" double precision DEFAULT 0,
    "Multiplier4" double precision DEFAULT 0,
    "TestKV5" double precision DEFAULT 0,
    "Meter5" double precision DEFAULT 0,
    "Multiplier5" double precision DEFAULT 0,
    "Type_Doble" boolean
);


ALTER TABLE public."Res_Isolation" OWNER TO vision;

--
-- Name: ResultatAnalyse; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "ResultatAnalyse" (
    "NoEquipement" character varying(50),
    "NoSerieEquipe" character varying(50),
    "TypeAnalyse" character varying(4),
    "Site" character varying(50),
    "Localisation" character varying(50),
    "CodeGravite" integer,
    "Desc1" character varying(80),
    "Desc2" character varying(80),
    "Desc3" character varying(80)
);


ALTER TABLE public."ResultatAnalyse" OWNER TO vision;

--
-- Name: Securite; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Securite" (
    "Nom" character varying(50) NOT NULL,
    "Mot de Passe" character varying(50),
    "Niveau" integer DEFAULT 4
);


ALTER TABLE public."Securite" OWNER TO vision;

--
-- Name: SeringueInventaire; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "SeringueInventaire" (
    "SerialNum" character varying(15) NOT NULL,
    "Laboratoire" character varying(20)
);


ALTER TABLE public."SeringueInventaire" OWNER TO vision;

--
-- Name: TTR; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "TTR" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50) NOT NULL,
    "NoEquipement" character varying(50) NOT NULL,
    "Bobine" integer DEFAULT 0 NOT NULL,
    "Tap_Num" integer DEFAULT 0 NOT NULL,
    "Mesure1" double precision DEFAULT 0,
    "Mesure2" double precision DEFAULT 0,
    "Mesure3" double precision DEFAULT 0,
    "CouExitation1" double precision DEFAULT 0,
    "CouExitation2" double precision DEFAULT 0,
    "CouExitation3" double precision DEFAULT 0,
    "Ratio" double precision DEFAULT 0,
    "ErrCal1" double precision DEFAULT 0,
    "ErrCal2" double precision DEFAULT 0,
    "ErrCal3" double precision DEFAULT 0,
    "Select" boolean
);


ALTER TABLE public."TTR" OWNER TO vision;

--
-- Name: Traverse; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Traverse" (
    "ClefAnalyse" character varying(50) NOT NULL,
    "NoSerieEquipe" character varying(50),
    "NoEquipement" character varying(50),
    "H1" double precision DEFAULT 0,
    "H2" double precision DEFAULT 0,
    "H3" double precision DEFAULT 0,
    "Hn" double precision DEFAULT 0,
    "H1C1" double precision DEFAULT 0,
    "H2C1" double precision DEFAULT 0,
    "H3C1" double precision DEFAULT 0,
    "HnC1" double precision DEFAULT 0,
    "H1C2" double precision DEFAULT 0,
    "H2C2" double precision DEFAULT 0,
    "H3C2" double precision DEFAULT 0,
    "HnC2" double precision DEFAULT 0,
    "X1" double precision DEFAULT 0,
    "X2" double precision DEFAULT 0,
    "X3" double precision DEFAULT 0,
    "Xn" double precision DEFAULT 0,
    "X1C1" double precision DEFAULT 0,
    "X2C1" double precision DEFAULT 0,
    "X3C1" double precision DEFAULT 0,
    "XnC1" double precision DEFAULT 0,
    "X1C2" double precision DEFAULT 0,
    "X2C2" double precision DEFAULT 0,
    "X3C2" double precision DEFAULT 0,
    "XnC2" double precision DEFAULT 0,
    "T1" double precision DEFAULT 0,
    "T2" double precision DEFAULT 0,
    "T3" double precision DEFAULT 0,
    "Tn" double precision DEFAULT 0,
    "T1C1" double precision DEFAULT 0,
    "T2C1" double precision DEFAULT 0,
    "T3C1" double precision DEFAULT 0,
    "TnC1" double precision DEFAULT 0,
    "T1C2" double precision DEFAULT 0,
    "T2C2" double precision DEFAULT 0,
    "T3C2" double precision DEFAULT 0,
    "TnC2" double precision DEFAULT 0,
    "Temperature" double precision DEFAULT 0,
    "Facteur" double precision DEFAULT 0,
    "Facteur1" double precision DEFAULT 0,
    "Facteur2" double precision DEFAULT 0,
    "Q1" double precision DEFAULT 0,
    "Q2" double precision DEFAULT 0,
    "Q3" double precision DEFAULT 0,
    "QN" double precision DEFAULT 0,
    "Q1C1" double precision DEFAULT 0,
    "Q2C1" double precision DEFAULT 0,
    "Q3C1" double precision DEFAULT 0,
    "QNC1" double precision DEFAULT 0,
    "Q1C2" double precision DEFAULT 0,
    "Q2C2" double precision DEFAULT 0,
    "Q3C2" double precision DEFAULT 0,
    "QNC2" double precision DEFAULT 0,
    "Facteur3" double precision DEFAULT 0,
    "Humidite" double precision DEFAULT 0,
    "Test_kV_H1" double precision DEFAULT 0,
    "Test_kV_H2" double precision DEFAULT 0,
    "Test_kV_H3" double precision DEFAULT 0,
    "Test_kV_HN" double precision DEFAULT 0,
    "Test_kV_X1" double precision DEFAULT 0,
    "Test_kV_X2" double precision DEFAULT 0,
    "Test_kV_X3" double precision DEFAULT 0,
    "Test_kV_XN" double precision DEFAULT 0,
    "Test_kV_T1" double precision DEFAULT 0,
    "Test_kV_T2" double precision DEFAULT 0,
    "Test_kV_T3" double precision DEFAULT 0,
    "Test_kV_TN" double precision DEFAULT 0,
    "Test_kV_Q1" double precision DEFAULT 0,
    "Test_kV_Q2" double precision DEFAULT 0,
    "Test_kV_Q3" double precision DEFAULT 0,
    "Test_kV_QN" double precision DEFAULT 0,
    "Test_PFC2_H1" double precision DEFAULT 0,
    "Test_PFC2_H2" double precision DEFAULT 0,
    "Test_PFC2_H3" double precision DEFAULT 0,
    "Test_PFC2_HN" double precision DEFAULT 0,
    "Test_PFC2_X1" double precision DEFAULT 0,
    "Test_PFC2_X2" double precision DEFAULT 0,
    "Test_PFC2_X3" double precision DEFAULT 0,
    "Test_PFC2_XN" double precision DEFAULT 0,
    "Test_PFC2_T1" double precision DEFAULT 0,
    "Test_PFC2_T2" double precision DEFAULT 0,
    "Test_PFC2_T3" double precision DEFAULT 0,
    "Test_PFC2_TN" double precision DEFAULT 0,
    "Test_PFC2_Q1" double precision DEFAULT 0,
    "Test_PFC2_Q2" double precision DEFAULT 0,
    "Test_PFC2_Q3" double precision DEFAULT 0,
    "Test_PFC2_QN" double precision DEFAULT 0,
    "FacteurN" double precision DEFAULT 0,
    "FacteurN1" double precision DEFAULT 0,
    "FacteurN2" double precision DEFAULT 0,
    "FacteurN3" double precision DEFAULT 0
);


ALTER TABLE public."Traverse" OWNER TO vision;

--
-- Name: TypeEquipement; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "TypeEquipement" (
    "TypeEquipement" character varying(50) NOT NULL,
    "DescriptionTypeEquipement" character varying(50),
    "Desc_Anglais" character varying(50),
    "Desc_Espagnol" character varying(50)
);


ALTER TABLE public."TypeEquipement" OWNER TO vision;

--
-- Name: Version; Type: TABLE; Schema: public; Owner: vision; Tablespace: 
--

CREATE TABLE "Version" (
    "Version" character varying(10)
);


ALTER TABLE public."Version" OWNER TO vision;

--
-- Data for Name: Analyse; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Analyse" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "DateAnalyse", "TypeAnalyse", "NoAnalyse", "CodeMatiere", "CodeMotif", "CodeLieu", "PourcentRatio", "TypeHuile", "Charge", "DatePrelevement", "Remarque", "PrelevePar", "Modifier", "Transmission", "Laboratoire", "DateReparation", "Desc_Reparation", "If_REM", "If_OK", "CodeRecommandation", "RecommandationEcrite", "DateApplication", "Commentaire", "EtatCodeAnalyse", "MWs", "Temperature", "TestEquipNum", "CartEchantImp", "NoContrat", "EtatCommande", "NbrContenant", "CartEchantRassembler", "RegroupEssaiType", "NoContratLab", "SeringueNum", "DataValid", "Status1", "Status2", "ErrorState", "ErrorCode", "Ambient_Air_Temperature") FROM stdin;
AluSepABC000001	180137-H1	REGULATEUR 25-H1	2006-03-21 00:00:00	PHY	106560	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AE929	0	0	0	0	0	0
AluSepABC000002	180137-H2	REGULATEUR 25-H2	2006-03-21 00:00:00	PHY	106559	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AJ463	0	0	0	0	0	0
AluSepABC000003	180137-H3	REGULATEUR 25-H3	2006-03-21 00:00:00	PHY	106561	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AL844	0	0	0	0	0	0
AluSepABC000004	160087-H1	REDRESSEUR 25-H1	2006-02-28 00:00:00	PHY	106246	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AB962	0	0	0	0	0	0
AluSepABC000005	160087	REDRESSEUR 25	2006-02-28 00:00:00	PHY	106249	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AF607	0	0	0	0	0	0
AluSepABC000006	160087-H2	REDRESSEUR 25-H2	2006-02-28 00:00:00	PHY	106247	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4867	0	0	0	0	0	0
AluSepABC000007	160087-H3	REDRESSEUR 25-H3	2006-02-28 00:00:00	PHY	106248	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4138	0	0	0	0	0	0
AluSepABC000008	91-03E7301-004	TX SGE SPARE 77275	2005-09-27 00:00:00	PHY	102723	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	1100	0	0	0	0	0	0
AluSepABC000009	A32S0251	SPARE 77227	2005-09-27 00:00:00	PHY	102724	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.  Contenu d'eau >15 ppm. Limite IEEE=35ppm max.. Possibilité de dégradation du paper . Ré-échantillonner prochainement. Porter une attention particulière.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	0018	0	0	0	0	0	0
AluSepABC000010	SET6394-0101	TRANSFORMATEUR 77274	2005-09-27 00:00:00	PHY	102725	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	2736	0	0	0	0	0	0
AluSepABC000011	XC030-001	TX PC # 173-B	2005-09-13 00:00:00	PHY	102342	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	3476	0	0	0	0	0	0
AluSepABC000012	91-03E7303-002	TX EL11 # 063	2005-09-13 00:00:00	PHY	102333	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	3802	0	0	0	0	0	0
AluSepABC000013	91-03E7303-001	TX EL11 # 064	2005-09-13 00:00:00	PHY	102334	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE993	0	0	0	0	0	0
AluSepABC000014	91-03E7302-004	TX EL2 # 071	2005-09-13 00:00:00	PHY	102335	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0904	0	0	0	0	0	0
AluSepABC000015	91-03E7302-002	TX EL2 # 072	2005-09-13 00:00:00	PHY	102336	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AF696	0	0	0	0	0	0
AluSepABC000016	91-03E7344-001	TX EL2 # 073	2005-09-13 00:00:00	PHY	102337	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA489	0	0	0	0	0	0
AluSepABC000017	91-03E7344-002	TX EL2 # 074	2005-09-13 00:00:00	PHY	102338	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE754	0	0	0	0	0	0
AluSepABC000018	91-03E7302-005	TX CB # 121	2005-09-13 00:00:00	PHY	102339	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC417	0	0	0	0	0	0
AluSepABC000019	B3S6449	TX PC # 171-B	2005-09-13 00:00:00	PHY	102341	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2507	0	0	0	0	0	0
AluSepABC000020	03G122762	TX AL21 # 211	2005-09-13 00:00:00	PHY	102343	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5032	0	0	0	0	0	0
AluSepABC000021	03G122763	TX AL21 # 212	2005-09-13 00:00:00	PHY	102344	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AE324	0	0	0	0	0	0
AluSepABC000022	4046506001	TX PC # 171-A	2005-09-13 00:00:00	PHY	102358	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0461	0	0	0	0	0	0
AluSepABC000023	91-03E7302-001	TX CB # 122	2005-09-13 00:00:00	PHY	102340	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	V6939	0	0	0	0	0	0
AluSepABC000024	W0582-001	TX PC # 173-A	2005-09-13 00:00:00	PHY	102359	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2060	0	0	0	0	0	0
AluSepABC000025	03G122757	TX AL21 # 213	2005-09-13 00:00:00	PHY	102345	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	5367	0	0	0	0	0	0
AluSepABC000026	91-03E7301-003	TX MS # 131	2005-09-13 00:00:00	PHY	102357	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	1076	0	0	0	0	0	0
AluSepABC000027	91-03E7300-005	TX EL3 # 082	2005-09-13 00:00:00	PHY	102354	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0475	0	0	0	0	0	0
AluSepABC000028	91-03E7300-003	TX EL3 # 081	2005-09-13 00:00:00	PHY	102355	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AD353	0	0	0	0	0	0
AluSepABC000029	03G122759	TX AL23 # 271	2005-09-13 00:00:00	PHY	102353	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	3434	0	0	0	0	0	0
AluSepABC000030	03G122761	TX EL22 # 242	2005-09-13 00:00:00	PHY	102352	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AF630	0	0	0	0	0	0
AluSepABC000031	PA14201-001	TX EL22 # 241	2005-09-13 00:00:00	PHY	102351	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5289	0	0	0	0	0	0
AluSepABC000032	03G122765	TX AL22 # 222	2005-09-13 00:00:00	PHY	102347	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4171	0	0	0	0	0	0
AluSepABC000033	B32S-0175	TX AL12 # 033	2005-09-13 00:00:00	PHY	102314	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	4682	0	0	0	0	0	0
AluSepABC000034	91-03E7255-001	TX SGE # 041	2005-09-13 00:00:00	PHY	102315	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	3326	0	0	0	0	0	0
AluSepABC000035	03G122764	TX AL22 # 221	2005-09-13 00:00:00	PHY	102346	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1178	0	0	0	0	0	0
AluSepABC000036	03G122758	TX AL22 # 223	2005-09-13 00:00:00	PHY	102348	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB880	0	0	0	0	0	0
AluSepABC000037	91-03E7300-006	TX AL12 # 031	2005-09-13 00:00:00	PHY	102329	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	A0283	0	0	0	0	0	0
AluSepABC000038	91-03E7298-002	TX AL12 # 032	2005-09-13 00:00:00	PHY	102330	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	65	\N	f	\N	\N	1	\N	\N	 	2386	0	0	0	0	0	0
AluSepABC000039	91-03E7300-001	TX EL11 # 061	2005-09-13 00:00:00	PHY	102331	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE924	0	0	0	0	0	0
AluSepABC000040	91-03E7300-002	TX EL11 # 062	2005-09-13 00:00:00	PHY	102332	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	AE459	0	0	0	0	0	0
AluSepABC000041	03G122766	TX EL21 # 231	2005-09-13 00:00:00	PHY	102349	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC000042	03G122760	TX AL23 # 272	2005-09-13 00:00:00	PHY	102360	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	Y2830	0	0	0	0	0	0
AluSepABC000043	03G122767	TX EL21 # 232	2005-09-13 00:00:00	PHY	102350	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4311	0	0	0	0	0	0
AluSepABC000044	180136	REGULATEUR 21	2005-09-13 00:00:00	PHY	102302	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE846	0	0	0	0	0	0
AluSepABC000045	51016111	REDRESSEUR #4	2005-09-13 00:00:00	PHY	102286	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	4543	0	0	0	0	0	0
AluSepABC000046	7853088	REGULATEUR #5	2005-09-13 00:00:00	PHY	102300	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AA715	0	0	0	0	0	0
AluSepABC000047	7853086	RÉGULATEUR #4	2005-09-13 00:00:00	PHY	102299	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	AA261	0	0	0	0	0	0
AluSepABC000048	7853085	RÉGULATEUR #3	2005-09-13 00:00:00	PHY	102298	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE861	0	0	0	0	0	0
AluSepABC000049	7853083	RÉGULATEUR #1	2005-09-13 00:00:00	PHY	102296	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AA633	0	0	0	0	0	0
AluSepABC000050	160089	REDRESSEUR 24	2005-09-13 00:00:00	PHY	102294	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	3247	0	0	0	0	0	0
AluSepABC000051	160090	REDRESSEUR 23	2005-09-13 00:00:00	PHY	102293	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1126	0	0	0	0	0	0
AluSepABC000052	7853087	RÉGULATEUR #6	2005-09-13 00:00:00	PHY	102301	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF153	0	0	0	0	0	0
AluSepABC000053	160088	REDRESSEUR 22	2005-09-13 00:00:00	PHY	102292	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AB707	0	0	0	0	0	0
AluSepABC000054	160086	REDRESSEUR 21	2005-09-13 00:00:00	PHY	102290	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF542	0	0	0	0	0	0
AluSepABC000055	1132787	REDRESSEUR #7	2005-09-13 00:00:00	PHY	102289	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AN544	0	0	0	0	0	0
AluSepABC000548	91-03E7298-001	TX SA # 091	1997-08-07 00:00:00	PHY	10820	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000056	51016109	REDRESSEUR #1	2005-09-13 00:00:00	PHY	102283	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	0422	0	0	0	0	0	0
AluSepABC000057	51016113	REDRESSEUR #5	2005-09-13 00:00:00	PHY	102287	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	4806	0	0	0	0	0	0
AluSepABC000058	51016110	REDRESSEUR #3	2005-09-13 00:00:00	PHY	102285	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	AM972	0	0	0	0	0	0
AluSepABC000059	51016108	REDRESSEUR #2	2005-09-13 00:00:00	PHY	102284	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2770	0	0	0	0	0	0
AluSepABC000060	7853084	RÉGULATEUR #2	2005-09-13 00:00:00	PHY	102297	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	ak788	0	0	0	0	0	0
AluSepABC000061	180138	REGULATEUR 22	2005-09-13 00:00:00	PHY	102303	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AA933	0	0	0	0	0	0
AluSepABC000062	51016112	REDRESSEUR #6	2005-09-13 00:00:00	PHY	102288	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AD328	0	0	0	0	0	0
AluSepABC000063	A325-0175	TX AL11 # 023	2005-09-13 00:00:00	PHY	102313	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AA468	0	0	0	0	0	0
AluSepABC000064	91-03E7299-004	TX HT # 152	2005-09-13 00:00:00	PHY	102326	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AC227	0	0	0	0	0	0
AluSepABC000065	91-03E7300-004	TX HT # 151	2005-09-13 00:00:00	PHY	102325	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	Le décompte des particules est recommandé.	\N	Le contenu d'eau dans le pot: 41 ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	35	\N	f	\N	\N	1	\N	\N	 	4111	0	0	0	0	0	0
AluSepABC000066	91-03E7301-006	TX NP # 142	2005-09-13 00:00:00	PHY	102324	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC000067	91-03E7301-005	TX NP # 141	2005-09-13 00:00:00	PHY	102323	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	7803	0	0	0	0	0	0
AluSepABC000068	B32S-0174	POSTE CO-	2005-09-13 00:00:00	PHY	102322	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4651	0	0	0	0	0	0
AluSepABC000069	A32S-0174	POSTE CO	2005-09-13 00:00:00	PHY	102321	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4781	0	0	0	0	0	0
AluSepABC000070	91-03E7299-002	TX CO # 102	2005-09-13 00:00:00	PHY	102320	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AN125	0	0	0	0	0	0
AluSepABC000071	91-03E7299-005	TX CO # 101	2005-09-13 00:00:00	PHY	102319	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AM134	0	0	0	0	0	0
AluSepABC000072	91-03E7298-003	TX SA # 092	2005-09-13 00:00:00	PHY	102318	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0779	0	0	0	0	0	0
AluSepABC000073	180138	REGULATEUR 22	2005-09-13 00:00:00	PHY	102304	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AL755	0	0	0	0	0	0
AluSepABC000074	91-03E7302-003	TX SGE # 042	2005-09-13 00:00:00	PHY	102316	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AK635	0	0	0	0	0	0
AluSepABC000075	91-03E7301-001	TX FOA # 161	2005-09-13 00:00:00	PHY	102327	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	22	\N	f	\N	\N	1	\N	\N	 	AH735	0	0	0	0	0	0
AluSepABC000076	91-03E7299-001	TX AL11 # 022	2005-09-13 00:00:00	PHY	102312	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	AM431	0	0	0	0	0	0
AluSepABC000077	160087	REDRESSEUR 25	2005-09-13 00:00:00	PHY	102295	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	6974	0	0	0	0	0	0
AluSepABC000078	91-03E7299-003	TX AL11 # 021	2005-09-13 00:00:00	PHY	102311	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AK778	0	0	0	0	0	0
AluSepABC000079	91-03E7301-002	TX FOA # 162	2005-09-13 00:00:00	PHY	102328	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	5723	0	0	0	0	0	0
AluSepABC000080	CL80011-101-0	AUXILIAIRE TA3	2005-09-13 00:00:00	PHY	102310	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	1971	0	0	0	0	0	0
AluSepABC000081	61-0169835	AUXILIAIRE TA2	2005-09-13 00:00:00	PHY	102309	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2431	0	0	0	0	0	0
AluSepABC000082	61-01-69834	AUXILIAIRE TA1	2005-09-13 00:00:00	PHY	102307	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AF245	0	0	0	0	0	0
AluSepABC000083	180137	REGULATEUR 25	2005-09-13 00:00:00	PHY	102306	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	AM470	0	0	0	0	0	0
AluSepABC000084	180140	REGULATEUR 24	2005-09-13 00:00:00	PHY	102305	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4561	0	0	0	0	0	0
AluSepABC000085	91-03E7298-001	TX SA # 091	2005-09-13 00:00:00	PHY	102317	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2390	0	0	0	0	0	0
AluSepABC000086	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	PHY	98096	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	1644	0	0	0	0	0	0
AluSepABC000087	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	PHY	98095	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	2485	0	0	0	0	0	0
AluSepABC000088	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	PHY	98094	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	4289	0	0	0	0	0	0
AluSepABC000089	51016108	REDRESSEUR #2	2005-04-06 00:00:00	PHY	97944	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	6527	0	0	0	0	0	0
AluSepABC000090	180139	REGULATEUR 23	2005-04-06 00:00:00	PHY	97945	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4339	0	0	0	0	0	0
AluSepABC000091	180138	REGULATEUR 22	2005-03-11 00:00:00	PHY	97663	0	1	1	f	0	0	2005-03-10 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	-5	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000092	51016108	REDRESSEUR #2	2005-03-02 00:00:00	PHY	97562	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1898	0	0	0	0	0	0
AluSepABC000093	51016108	REDRESSEUR #2	2005-02-21 00:00:00	PHY	97429	0	1	1	f	0	0	2005-02-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.  Contenu d'eau >15 ppm. Limite IEEE=35ppm max.. Possibilité de dégradation du paper . Ré-échantillonner prochainement. Porter une attention particulière.	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AF277	0	0	0	0	0	0
AluSepABC000094	51016108	REDRESSEUR #2	2005-02-21 00:00:00	PHY	97430	0	1	1	f	0	0	2005-02-13 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.  Contenu d'eau >15 ppm. Limite IEEE=35ppm max.. Possibilité de dégradation du paper . Ré-échantillonner prochainement. Porter une attention particulière.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	X389	0	0	0	0	0	0
AluSepABC000095	51016108	REDRESSEUR #2	2005-02-21 00:00:00	PHY	97428	0	1	1	f	0	0	2005-02-09 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB932	0	0	0	0	0	0
AluSepABC000096	180137	REGULATEUR 25	2005-02-18 00:00:00	PHY	97419	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	0	\N	f	\N	\N	1	\N	\N	 	AB587	0	0	0	0	0	0
AluSepABC000097	CL80011-101-0	AUXILIAIRE TA3	2005-02-16 00:00:00	PHY	97375	0	1	1	f	0	0	2005-02-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-13.5	\N	f	\N	\N	1	\N	\N	 	AE906	0	0	0	0	0	0
AluSepABC000098	180136	REGULATEUR 21	2005-02-14 00:00:00	PHY	97348	0	1	1	f	0	0	2005-02-11 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9418	0	0	0	0	0	0
AluSepABC000099	180140	REGULATEUR 24	2005-02-14 00:00:00	PHY	97349	0	1	1	f	0	0	2005-02-11 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000100	51016108	REDRESSEUR #2	2005-02-11 00:00:00	PHY	97343	0	1	1	f	0	0	2005-02-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	0959	0	0	0	0	0	0
AluSepABC000101	51016108	REDRESSEUR #2	2005-02-11 00:00:00	PHY	97342	0	1	1	f	0	0	2005-02-05 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	ae916	0	0	0	0	0	0
AluSepABC000102	51016108	REDRESSEUR #2	2005-02-11 00:00:00	PHY	97341	0	1	1	f	0	0	2005-02-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF504	0	0	0	0	0	0
AluSepABC000103	51016108	REDRESSEUR #2	2005-02-07 00:00:00	PHY	97316	0	1	1	f	0	0	2005-02-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB881	0	0	0	0	0	0
AluSepABC000104	51016108	REDRESSEUR #2	2005-02-07 00:00:00	PHY	97317	0	1	1	f	0	0	2005-01-30 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	4387	0	0	0	0	0	0
AluSepABC000105	51016108	REDRESSEUR #2	2005-02-07 00:00:00	PHY	97315	0	1	1	f	0	0	2005-01-29 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	Y2616	0	0	0	0	0	0
AluSepABC000106	51016108	REDRESSEUR #2	2005-02-07 00:00:00	PHY	97314	0	1	1	f	0	0	2005-01-26 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	X365	0	0	0	0	0	0
AluSepABC000107	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	PHY	97278	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC000108	180137	REGULATEUR 25	2005-02-04 00:00:00	PHY	97277	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC000109	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	PHY	97279	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC000110	180137	REGULATEUR 25	2005-02-04 00:00:00	PHY	97276	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC000111	51016108	REDRESSEUR #2	2005-01-31 00:00:00	PHY	97249	0	1	1	f	0	0	2005-01-24 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	2807	0	0	0	0	0	0
AluSepABC000112	51016108	REDRESSEUR #2	2005-01-31 00:00:00	PHY	97248	0	1	1	f	0	0	2005-01-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5246	0	0	0	0	0	0
AluSepABC000113	51016108	REDRESSEUR #2	2005-01-31 00:00:00	PHY	97250	0	1	1	f	0	0	2005-01-20 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AA110	0	0	0	0	0	0
AluSepABC000114	51016108	REDRESSEUR #2	2005-01-31 00:00:00	PHY	97247	0	1	1	f	0	0	2005-01-16 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	AB999	0	0	0	0	0	0
AluSepABC000115	51016108	REDRESSEUR #2	2005-01-26 00:00:00	PHY	97170	0	1	1	f	0	0	2005-01-18 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1636	0	0	0	0	0	0
AluSepABC000116	51016108	REDRESSEUR #2	2004-12-25 00:00:00	PHY	96949	0	1	1	f	0	0	2004-12-25 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	Contenu d'eau dans le pot: 3.5 ppm.L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5161	0	0	0	0	0	0
AluSepABC000117	SET6394-0101	TRANSFORMATEUR 77274	2004-09-15 00:00:00	PHY	94528	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	17	\N	f	\N	\N	1	\N	\N	 	AF 142	0	0	0	0	0	0
AluSepABC000118	91-03E7300-002	TX EL11 # 062	2004-09-15 00:00:00	PHY	94553	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	5220	0	0	0	0	0	0
AluSepABC000119	91-03E7344-001	TX EL2 # 073	2004-09-15 00:00:00	PHY	94552	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	9470	0	0	0	0	0	0
AluSepABC000120	91-03E7344-002	TX EL2 # 074	2004-09-15 00:00:00	PHY	94551	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).    Contenu d'eau dans le pot = 25 ppm.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2453	0	0	0	0	0	0
AluSepABC000121	91-03E7300-005	TX EL3 # 082	2004-09-15 00:00:00	PHY	94549	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	0678	0	0	0	0	0	0
AluSepABC000122	91-03E7300-003	TX EL3 # 081	2004-09-15 00:00:00	PHY	94548	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 26 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	40	\N	f	\N	\N	1	\N	\N	 	AG 180	0	0	0	0	0	0
AluSepABC000123	91-03E7301-003	TX MS # 131	2004-09-15 00:00:00	PHY	94543	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	26	\N	f	\N	\N	1	\N	\N	 	AF 718	0	0	0	0	0	0
AluSepABC000124	91-03E7302-005	TX CB # 121	2004-09-15 00:00:00	PHY	94541	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	3995	0	0	0	0	0	0
AluSepABC000125	91-03E7302-001	TX CB # 122	2004-09-15 00:00:00	PHY	94532	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	1924	0	0	0	0	0	0
AluSepABC000126	91-03E7300-001	TX EL11 # 061	2004-09-15 00:00:00	PHY	94556	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	30	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC000127	91-03E7303-001	TX EL11 # 064	2004-09-15 00:00:00	PHY	94555	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	AB 811	0	0	0	0	0	0
AluSepABC000128	XC030-001	TX PC # 173-B	2004-09-15 00:00:00	PHY	94533	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	4395	0	0	0	0	0	0
AluSepABC000129	4046506001	TX PC # 171-A	2004-09-15 00:00:00	PHY	94567	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	4430	0	0	0	0	0	0
AluSepABC000130	91-03E7302-004	TX EL2 # 071	2004-09-15 00:00:00	PHY	94557	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	6586	0	0	0	0	0	0
AluSepABC000131	91-03E7302-002	TX EL2 # 072	2004-09-15 00:00:00	PHY	94558	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1171	0	0	0	0	0	0
AluSepABC000132	W0582-001	TX PC # 173-A	2004-09-15 00:00:00	PHY	94566	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	6153	0	0	0	0	0	0
AluSepABC000133	91-03E7303-002	TX EL11 # 063	2004-09-15 00:00:00	PHY	94554	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 25 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	28	\N	f	\N	\N	1	\N	\N	 	4565	0	0	0	0	0	0
AluSepABC000134	51016109	REDRESSEUR #1	2004-09-15 00:00:00	PHY	94518	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE 542	0	0	0	0	0	0
AluSepABC000135	A325-0251	TRANSFORMATEUR 77227	2004-09-15 00:00:00	PHY	94529	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	AC 739	0	0	0	0	0	0
AluSepABC000136	91-03E7298-001	TX SA # 091	2004-09-15 00:00:00	PHY	94527	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC 224	0	0	0	0	0	0
AluSepABC000137	61-0169835	AUXILIAIRE TA2	2004-09-15 00:00:00	PHY	94526	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	AE 675	0	0	0	0	0	0
AluSepABC000138	61-01-69834	AUXILIAIRE TA1	2004-09-15 00:00:00	PHY	94525	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	8804	0	0	0	0	0	0
AluSepABC000139	7853083	RÉGULATEUR #1	2004-09-15 00:00:00	PHY	94524	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 26 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	46	\N	f	\N	\N	1	\N	\N	 	AF 378	0	0	0	0	0	0
AluSepABC000140	7853084	RÉGULATEUR #2	2004-09-15 00:00:00	PHY	94523	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AG 108	0	0	0	0	0	0
AluSepABC000141	7853085	RÉGULATEUR #3	2004-09-15 00:00:00	PHY	94522	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 30 ppm.	4	0	44	\N	f	\N	\N	1	\N	\N	 	M 1600	0	0	0	0	0	0
AluSepABC000142	7853086	RÉGULATEUR #4	2004-09-15 00:00:00	PHY	94521	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.   Contenu d'eau dans le pot = 29 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	H 0136	0	0	0	0	0	0
AluSepABC000143	7853087	RÉGULATEUR #6	2004-09-15 00:00:00	PHY	94519	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 29 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 981	0	0	0	0	0	0
AluSepABC000144	91-03E7299-001	TX AL11 # 022	2004-09-15 00:00:00	PHY	94564	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	6100	0	0	0	0	0	0
AluSepABC000145	51016108	REDRESSEUR #2	2004-09-15 00:00:00	PHY	94517	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	C 044	0	0	0	0	0	0
AluSepABC000146	51016110	REDRESSEUR #3	2004-09-15 00:00:00	PHY	94515	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27 ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	47	\N	f	\N	\N	1	\N	\N	 	2670	0	0	0	0	0	0
AluSepABC000147	51016111	REDRESSEUR #4	2004-09-15 00:00:00	PHY	94514	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).  Contenu d'eau dans le pot = 29 ppm.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2637	0	0	0	0	0	0
AluSepABC000148	51016113	REDRESSEUR #5	2004-09-15 00:00:00	PHY	94513	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	6275	0	0	0	0	0	0
AluSepABC000149	51016112	REDRESSEUR #6	2004-09-15 00:00:00	PHY	94516	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	AE 665	0	0	0	0	0	0
AluSepABC000150	1132787	REDRESSEUR #7	2004-09-15 00:00:00	PHY	94508	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Contenu d'eau dans le pot = 24 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	30	\N	f	\N	\N	1	\N	\N	 	2891	0	0	0	0	0	0
AluSepABC000151	7853088	REGULATEUR #5	2004-09-15 00:00:00	PHY	94520	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 28 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 978	0	0	0	0	0	0
AluSepABC000152	91-03E7298-002	TX AL12 # 032	2004-09-15 00:00:00	PHY	94562	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	7367	0	0	0	0	0	0
AluSepABC000153	91-03E7302-003	TX SGE # 042	2004-09-15 00:00:00	PHY	94559	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AA388	0	0	0	0	0	0
AluSepABC000154	91-03E7298-003	TX SA # 092	2004-09-15 00:00:00	PHY	94550	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	31	\N	f	\N	\N	1	\N	\N	 	0019	0	0	0	0	0	0
AluSepABC000155	91-03E7300-006	TX AL12 # 031	2004-09-15 00:00:00	PHY	94560	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	7415	0	0	0	0	0	0
AluSepABC000156	B325-0175	TX AL12 # 033	2004-09-15 00:00:00	PHY	94561	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC000157	91-03E7299-005	TX CO # 101	2004-09-15 00:00:00	PHY	94547	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 111	0	0	0	0	0	0
AluSepABC000158	91-03E7299-002	TX CO # 102	2004-09-15 00:00:00	PHY	94546	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	1498	0	0	0	0	0	0
AluSepABC000159	91-03E7301-004	TX SGE SPARE 77275	2004-09-15 00:00:00	PHY	94531	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4314	0	0	0	0	0	0
AluSepABC000160	B325-0174	TX CO # 104	2004-09-15 00:00:00	PHY	94544	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AE 774	0	0	0	0	0	0
AluSepABC000161	91-03E7299-003	TX AL11 # 021	2004-09-15 00:00:00	PHY	94565	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4599	0	0	0	0	0	0
AluSepABC000162	A325-0175	TX AL11 # 023	2004-09-15 00:00:00	PHY	94563	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	2389	0	0	0	0	0	0
AluSepABC000596	160089	REDRESSEUR 24	2006-02-14 00:00:00	GD	101098	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF610	0	0	0	0	0	0
AluSepABC000163	91-03E7301-006	TX NP # 142	2004-09-15 00:00:00	PHY	94540	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5995	0	0	0	0	0	0
AluSepABC000164	91-03E7301-005	TX NP # 141	2004-09-15 00:00:00	PHY	94539	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AF 716	0	0	0	0	0	0
AluSepABC000165	91-03E7300-004	TX HT # 151	2004-09-15 00:00:00	PHY	94538	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 848	0	0	0	0	0	0
AluSepABC000166	91-03E7299-004	TX HT # 152	2004-09-15 00:00:00	PHY	94537	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	3897	0	0	0	0	0	0
AluSepABC000167	91-03E7301-002	TX FOA # 162	2004-09-15 00:00:00	PHY	94536	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA 576	0	0	0	0	0	0
AluSepABC000168	91-03E7301-001	TX FOA # 161	2004-09-15 00:00:00	PHY	94535	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	AC 343	0	0	0	0	0	0
AluSepABC000169	91-03E7255-001	TX SGE # 041	2004-09-15 00:00:00	PHY	94534	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AO 169	0	0	0	0	0	0
AluSepABC000170	A325-0174	TX CO # 103	2004-09-15 00:00:00	PHY	94545	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	3898	0	0	0	0	0	0
AluSepABC000171	51016111	REDRESSEUR #4	2004-08-16 00:00:00	PHY	93795	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	1377	0	0	0	0	0	0
AluSepABC000172	7853086	RÉGULATEUR #4	2004-08-16 00:00:00	PHY	93797	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0010	0	0	0	0	0	0
AluSepABC000173	61-0169835	AUXILIAIRE TA2	2004-04-30 00:00:00	PHY	90643	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	1381	0	0	0	0	0	0
AluSepABC000174	61-01-69834	AUXILIAIRE TA1	2004-04-30 00:00:00	PHY	90642	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4783	0	0	0	0	0	0
AluSepABC000175	61-01-69834	AUXILIAIRE TA1	2003-09-02 00:00:00	PHY	86199	0	1	1	f	0	0	2003-08-26 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7690	0	0	0	0	0	0
AluSepABC000176	A325-0251	TRANSFORMATEUR 77227	2003-08-21 00:00:00	PHY	85992	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	6107	0	0	0	0	0	0
AluSepABC000177	7853083	RÉGULATEUR #1	2003-08-21 00:00:00	PHY	85997	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	AA 110	0	0	0	0	0	0
AluSepABC000178	7853084	RÉGULATEUR #2	2003-08-21 00:00:00	PHY	85998	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9146	0	0	0	0	0	0
AluSepABC000179	7853085	RÉGULATEUR #3	2003-08-21 00:00:00	PHY	85999	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7566	0	0	0	0	0	0
AluSepABC000180	7853086	RÉGULATEUR #4	2003-08-21 00:00:00	PHY	86000	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2638	0	0	0	0	0	0
AluSepABC000181	7853088	REGULATEUR #5	2003-08-21 00:00:00	PHY	86001	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0202	0	0	0	0	0	0
AluSepABC000182	7853087	RÉGULATEUR #6	2003-08-21 00:00:00	PHY	86002	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	7075	0	0	0	0	0	0
AluSepABC000183	51016109	REDRESSEUR #1	2003-08-21 00:00:00	PHY	86003	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2710	0	0	0	0	0	0
AluSepABC000184	51016108	REDRESSEUR #2	2003-08-21 00:00:00	PHY	86004	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2926	0	0	0	0	0	0
AluSepABC000185	51016111	REDRESSEUR #4	2003-08-21 00:00:00	PHY	86006	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	F 523	0	0	0	0	0	0
AluSepABC000186	SET6394-0101	TRANSFORMATEUR 77274	2003-08-21 00:00:00	PHY	85993	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5073	0	0	0	0	0	0
AluSepABC000187	91-03E7301-004	TX SGE SPARE 77275	2003-08-21 00:00:00	PHY	85991	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	AA 767	0	0	0	0	0	0
AluSepABC000188	XC030-001	TX PC # 173-B	2003-08-21 00:00:00	PHY	85989	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	6775	0	0	0	0	0	0
AluSepABC000189	51016110	REDRESSEUR #3	2003-08-21 00:00:00	PHY	86005	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	9649	0	0	0	0	0	0
AluSepABC000720	180136	REGULATEUR 21	2005-03-28 00:00:00	GD	91912	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	AE719	0	0	0	0	0	0
AluSepABC000190	91-03E7302-001	TX CB # 122	2003-08-21 00:00:00	PHY	85990	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC000191	51016113	REDRESSEUR #5	2003-08-21 00:00:00	PHY	86007	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	I 075	0	0	0	0	0	0
AluSepABC000192	51016112	REDRESSEUR #6	2003-08-21 00:00:00	PHY	86008	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4751	0	0	0	0	0	0
AluSepABC000193	1132787	REDRESSEUR #7	2003-08-21 00:00:00	PHY	86009	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	6016	0	0	0	0	0	0
AluSepABC000194	91-03E7298-001	TX SA # 091	2003-08-21 00:00:00	PHY	85994	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC000520	B32S-0174	POSTE CO-	1998-09-12 00:00:00	PHY	14787	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000521	51016108	REDRESSEUR #2	1998-09-12 00:00:00	PHY	14786	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	E0419	0	0	0	0	0	0
AluSepABC000522	51016110	REDRESSEUR #3	1998-09-12 00:00:00	PHY	14785	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	7988	0	0	0	0	0	0
AluSepABC000523	7853086	RÉGULATEUR #4	1998-09-12 00:00:00	PHY	14784	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	A480	0	0	0	0	0	0
AluSepABC000524	7853085	RÉGULATEUR #3	1998-09-12 00:00:00	PHY	14783	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	58	\N	f	\N	\N	1	\N	\N	 	4832	0	0	0	0	0	0
AluSepABC000525	91-03E7302-005	TX CB # 121	1998-09-12 00:00:00	PHY	14790	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000526	91-03E7302-002	TX EL2 # 072	1997-08-08 00:00:00	PHY	10902	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000527	61-01-69834	AUXILIAIRE TA1	1997-08-07 00:00:00	PHY	10879	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	8639	0	0	0	0	0	0
AluSepABC000528	7853086	RÉGULATEUR #4	1997-08-07 00:00:00	PHY	10868	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	3662	0	0	0	0	0	0
AluSepABC000529	51016111	REDRESSEUR #4	1997-08-07 00:00:00	PHY	10875	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	063	0	0	0	0	0	0
AluSepABC000530	51016110	REDRESSEUR #3	1997-08-07 00:00:00	PHY	10874	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	409	0	0	0	0	0	0
AluSepABC000531	51016108	REDRESSEUR #2	1997-08-07 00:00:00	PHY	10873	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	2602	0	0	0	0	0	0
AluSepABC000532	51016109	REDRESSEUR #1	1997-08-07 00:00:00	PHY	10871	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	061	0	0	0	0	0	0
AluSepABC000533	7853083	RÉGULATEUR #1	1997-08-07 00:00:00	PHY	10870	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8567	0	0	0	0	0	0
AluSepABC000534	61-0169835	AUXILIAIRE TA2	1997-08-07 00:00:00	PHY	10880	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	5944	0	0	0	0	0	0
AluSepABC000535	7853085	RÉGULATEUR #3	1997-08-07 00:00:00	PHY	10869	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	596	0	0	0	0	0	0
AluSepABC000536	7853087	RÉGULATEUR #6	1997-08-07 00:00:00	PHY	10867	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0708	0	0	0	0	0	0
AluSepABC000537	1132787	REDRESSEUR #7	1997-08-07 00:00:00	PHY	10866	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC000538	7853088	REGULATEUR #5	1997-08-07 00:00:00	PHY	10865	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	4319	0	0	0	0	0	0
AluSepABC000539	7853084	RÉGULATEUR #2	1997-08-07 00:00:00	PHY	10872	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1253	0	0	0	0	0	0
AluSepABC000540	B32S-0175	TX AL12 # 033	1997-08-07 00:00:00	PHY	10845	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000541	91-03E7344-001	TX EL2 # 073	1997-08-07 00:00:00	PHY	10861	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000542	91-03E7300-001	TX EL11 # 061	1997-08-07 00:00:00	PHY	10851	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000543	91-03E7303-002	TX EL11 # 063	1997-08-07 00:00:00	PHY	10843	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000544	91-03E7300-002	TX EL11 # 062	1997-08-07 00:00:00	PHY	10836	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000545	91-03E7301-005	TX NP # 141	1997-08-07 00:00:00	PHY	10862	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000546	6394-0101	SPARE 77274	1997-08-07 00:00:00	PHY	10818	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000547	91-03E7301-004	TX SGE SPARE 77275	1997-08-07 00:00:00	PHY	10819	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000549	4046506001	TX PC # 171-A	1997-08-07 00:00:00	PHY	10847	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000550	91-03E7300-003	TX EL3 # 081	1997-08-07 00:00:00	PHY	10823	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000551	XC030-001	TX PC # 173-B	1997-08-07 00:00:00	PHY	10859	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000552	91-03E7298-002	TX AL12 # 032	1997-08-07 00:00:00	PHY	10844	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000553	B32S-0174	POSTE CO-	1997-08-07 00:00:00	PHY	10817	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000554	91-03E7301-001	TX FOA # 161	1997-08-07 00:00:00	PHY	10846	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000555	91-03E7300-005	TX EL3 # 082	1997-08-07 00:00:00	PHY	10849	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000556	91-03E7303-001	TX EL11 # 064	1997-08-07 00:00:00	PHY	10850	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000557	A32S-0174	POSTE CO	1997-08-07 00:00:00	PHY	10858	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000558	91-03E7299-002	TX CO # 102	1997-08-07 00:00:00	PHY	10840	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000559	91-037299-003	TX AL11 # 021	1997-08-07 00:00:00	PHY	10832	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000560	91-03E7299-004	TX HT # 152	1997-08-07 00:00:00	PHY	10816	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000561	91-03E7299-005	TX CO # 101	1997-08-07 00:00:00	PHY	10857	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000195	61-01-69834	AUXILIAIRE TA1	2003-08-21 00:00:00	PHY	85996	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	1598	0	0	0	0	0	0
AluSepABC000196	61-0169835	AUXILIAIRE TA2	2003-08-21 00:00:00	PHY	85995	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2491	0	0	0	0	0	0
AluSepABC000197	4046506001	TX PC # 171-A	2003-08-20 00:00:00	PHY	85911	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	G 0312	0	0	0	0	0	0
AluSepABC000198	W0582-001	TX PC # 173-A	2003-08-20 00:00:00	PHY	85912	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	4302	0	0	0	0	0	0
AluSepABC000199	A325-0175	TX AL11 # 023	2003-08-20 00:00:00	PHY	85915	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	AB 528	0	0	0	0	0	0
AluSepABC000200	91-03E7300-002	TX EL11 # 062	2003-08-20 00:00:00	PHY	85926	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1992	0	0	0	0	0	0
AluSepABC000201	91-03E7303-002	TX EL11 # 063	2003-08-20 00:00:00	PHY	85925	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	F 239	0	0	0	0	0	0
AluSepABC000202	91-03E7303-001	TX EL11 # 064	2003-08-20 00:00:00	PHY	85924	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	AB 411	0	0	0	0	0	0
AluSepABC000203	91-03E7300-001	TX EL11 # 061	2003-08-20 00:00:00	PHY	85922	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0869	0	0	0	0	0	0
AluSepABC000204	91-03E7302-004	TX EL2 # 071	2003-08-20 00:00:00	PHY	85921	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2479	0	0	0	0	0	0
AluSepABC000205	91-03E7302-002	TX EL2 # 072	2003-08-20 00:00:00	PHY	85920	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	5621	0	0	0	0	0	0
AluSepABC000206	91-03E7302-003	TX SGE # 042	2003-08-20 00:00:00	PHY	85919	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	1816	0	0	0	0	0	0
AluSepABC000207	91-03E7300-006	TX AL12 # 031	2003-08-20 00:00:00	PHY	85918	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4093	0	0	0	0	0	0
AluSepABC000208	91-03E7301-005	TX NP # 141	2003-08-20 00:00:00	PHY	85944	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AC 278	0	0	0	0	0	0
AluSepABC000209	91-03E7298-002	TX AL12 # 032	2003-08-20 00:00:00	PHY	85916	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	5430	0	0	0	0	0	0
AluSepABC000210	91-03E7299-001	TX AL11 # 022	2003-08-20 00:00:00	PHY	85914	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	B 1393	0	0	0	0	0	0
AluSepABC000211	91-03E7299-003	TX AL11 # 021	2003-08-20 00:00:00	PHY	85913	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	AA 731	0	0	0	0	0	0
AluSepABC000212	91-03E7344-001	TX EL2 # 073	2003-08-20 00:00:00	PHY	85928	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	0301	0	0	0	0	0	0
AluSepABC000213	B325-0175	TX AL12 # 033	2003-08-20 00:00:00	PHY	85917	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC000214	91-03E7299-004	TX HT # 152	2003-08-20 00:00:00	PHY	85946	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	F 338	0	0	0	0	0	0
AluSepABC000215	91-03E7344-002	TX EL2 # 074	2003-08-20 00:00:00	PHY	85929	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	6439	0	0	0	0	0	0
AluSepABC000216	91-03E7255-001	TX SGE # 041	2003-08-20 00:00:00	PHY	85949	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1579	0	0	0	0	0	0
AluSepABC000217	91-03E7301-002	TX FOA # 162	2003-08-20 00:00:00	PHY	85947	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	5055	0	0	0	0	0	0
AluSepABC000218	91-03E7300-004	TX HT # 151	2003-08-20 00:00:00	PHY	85945	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC000219	91-03E7302-005	TX CB # 121	2003-08-20 00:00:00	PHY	85941	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC000220	91-03E7301-006	TX NP # 142	2003-08-20 00:00:00	PHY	85943	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	2909	0	0	0	0	0	0
AluSepABC000221	91-03E7301-003	TX MS # 131	2003-08-20 00:00:00	PHY	85938	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	6381	0	0	0	0	0	0
AluSepABC000222	A325-0174	TX CO # 103	2003-08-20 00:00:00	PHY	85936	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0341	0	0	0	0	0	0
AluSepABC000223	91-03E7299-002	TX CO # 102	2003-08-20 00:00:00	PHY	85935	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	7833	0	0	0	0	0	0
AluSepABC000224	91-03E7299-005	TX CO # 101	2003-08-20 00:00:00	PHY	85934	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	AA 432	0	0	0	0	0	0
AluSepABC000225	91-03E7298-003	TX SA # 092	2003-08-20 00:00:00	PHY	85931	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5862	0	0	0	0	0	0
AluSepABC000226	91-03E7300-003	TX EL3 # 081	2003-08-20 00:00:00	PHY	85933	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	6793	0	0	0	0	0	0
AluSepABC000227	91-03E7300-005	TX EL3 # 082	2003-08-20 00:00:00	PHY	85932	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	9781	0	0	0	0	0	0
AluSepABC000228	B325-0174	TX CO # 104	2003-08-20 00:00:00	PHY	85937	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0242	0	0	0	0	0	0
AluSepABC000229	91-03E7301-001	TX FOA # 161	2003-08-20 00:00:00	PHY	85948	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1514	0	0	0	0	0	0
AluSepABC000230	61-0169835	AUXILIAIRE TA2	2002-10-15 00:00:00	PHY	79694	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2458	0	0	0	0	0	0
AluSepABC000231	61-01-69834	AUXILIAIRE TA1	2002-10-15 00:00:00	PHY	79693	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2624	0	0	0	0	0	0
AluSepABC000232	91-03E7301-005	TX NP # 141	2002-08-26 00:00:00	PHY	78346	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	F-149	0	0	0	0	0	0
AluSepABC000233	7853085	RÉGULATEUR #3	2002-08-26 00:00:00	PHY	78358	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC000234	7853088	REGULATEUR #5	2002-08-26 00:00:00	PHY	78357	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000235	7853084	RÉGULATEUR #2	2002-08-26 00:00:00	PHY	78356	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	65	\N	f	\N	\N	1	\N	\N	 	0169	0	0	0	0	0	0
AluSepABC000236	91-03E7300-006	TX AL12 # 031	2002-08-26 00:00:00	PHY	78355	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	4645	0	0	0	0	0	0
AluSepABC000237	91-03E7303-001	TX EL11 # 064	2002-08-26 00:00:00	PHY	78354	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1773	0	0	0	0	0	0
AluSepABC000238	91-03E7300-001	TX EL11 # 061	2002-08-26 00:00:00	PHY	78353	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0295	0	0	0	0	0	0
AluSepABC000239	91-03E7298-002	TX AL12 # 032	2002-08-26 00:00:00	PHY	78352	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	69	\N	f	\N	\N	1	\N	\N	 	0052	0	0	0	0	0	0
AluSepABC000240	B32S-0175	TX AL12 # 033	2002-08-26 00:00:00	PHY	78351	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	0989	0	0	0	0	0	0
AluSepABC000241	91-03E7301-006	TX NP # 142	2002-08-26 00:00:00	PHY	78343	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	B-270	0	0	0	0	0	0
AluSepABC000242	91-03E7255-001	TX SGE # 041	2002-08-26 00:00:00	PHY	78345	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	2336	0	0	0	0	0	0
AluSepABC000243	A32S-0174	POSTE CO	2002-08-26 00:00:00	PHY	78373	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4656	0	0	0	0	0	0
AluSepABC000244	51016109	REDRESSEUR #1	2002-08-26 00:00:00	PHY	78359	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC000245	91-03E7301-003	TX MS # 131	2002-08-26 00:00:00	PHY	78350	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2795	0	0	0	0	0	0
AluSepABC000246	91-03E7344-001	TX EL2 # 073	2002-08-26 00:00:00	PHY	78370	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	7433	0	0	0	0	0	0
AluSepABC000247	91-03E7344-002	TX EL2 # 074	2002-08-26 00:00:00	PHY	78371	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	1502	0	0	0	0	0	0
AluSepABC000248	B32S-0174	POSTE CO-	2002-08-26 00:00:00	PHY	78372	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1922	0	0	0	0	0	0
AluSepABC000249	51016108	REDRESSEUR #2	2002-08-26 00:00:00	PHY	78360	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	7105	0	0	0	0	0	0
AluSepABC000250	91-03E7302-004	TX EL2 # 071	2002-08-26 00:00:00	PHY	78369	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2439	0	0	0	0	0	0
AluSepABC000251	61-01-69834	AUXILIAIRE TA1	2002-08-26 00:00:00	PHY	78368	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	54	\N	f	\N	\N	1	\N	\N	 	6926	0	0	0	0	0	0
AluSepABC000252	7853083	RÉGULATEUR #1	2002-08-26 00:00:00	PHY	78367	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC000253	7853086	RÉGULATEUR #4	2002-08-26 00:00:00	PHY	78365	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	2432	0	0	0	0	0	0
AluSepABC000254	7853087	RÉGULATEUR #6	2002-08-26 00:00:00	PHY	78364	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	59	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000255	51016111	REDRESSEUR #4	2002-08-26 00:00:00	PHY	78363	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1525	0	0	0	0	0	0
AluSepABC000256	51016113	REDRESSEUR #5	2002-08-26 00:00:00	PHY	78362	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000257	51016112	REDRESSEUR #6	2002-08-26 00:00:00	PHY	78361	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000258	51016110	REDRESSEUR #3	2002-08-26 00:00:00	PHY	78366	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2225	0	0	0	0	0	0
AluSepABC000259	91-03E7302-002	TX EL2 # 072	2002-08-26 00:00:00	PHY	78374	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1145	0	0	0	0	0	0
AluSepABC000260	91-03E7303-002	TX EL11 # 063	2002-08-20 00:00:00	PHY	78216	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	2612	0	0	0	0	0	0
AluSepABC000261	SET6394-0101	TRANSFORMATEUR 77274	2002-08-20 00:00:00	PHY	78223	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	9214	0	0	0	0	0	0
AluSepABC000262	91-03E7301-004	TX SGE SPARE 77275	2002-08-20 00:00:00	PHY	78222	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	C-036	0	0	0	0	0	0
AluSepABC000263	91-03E7302-003	TX SGE # 042	2002-08-20 00:00:00	PHY	78221	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	4876	0	0	0	0	0	0
AluSepABC000264	W0582-001	TX PC # 173-A	2002-08-20 00:00:00	PHY	78220	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0837	0	0	0	0	0	0
AluSepABC000265	91-03E7298-003	TX SA # 092	2002-08-20 00:00:00	PHY	78219	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	2125	0	0	0	0	0	0
AluSepABC000721	180136	REGULATEUR 21	2005-03-28 00:00:00	GD	91910	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	AF520	0	0	0	0	0	0
AluSepABC000266	A325-0251	TRANSFORMATEUR 77227	2002-08-20 00:00:00	PHY	78224	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4672	0	0	0	0	0	0
AluSepABC000267	91-03E7299-002	TX CO # 102	2002-08-20 00:00:00	PHY	78217	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	0032	0	0	0	0	0	0
AluSepABC000268	91-03E7301-001	TX FOA # 161	2002-08-20 00:00:00	PHY	78218	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	0281	0	0	0	0	0	0
AluSepABC000269	XC030-001	TX PC # 173-B	2002-08-20 00:00:00	PHY	78226	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.La concentration de l'eau est de 23 ppm dans le pot.	4	0	20	\N	f	\N	\N	1	\N	\N	 	5118	0	0	0	0	0	0
AluSepABC000270	A325-0175	TX AL11 # 023	2002-08-20 00:00:00	PHY	78227	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	0212	0	0	0	0	0	0
AluSepABC000271	91-03E7300-003	TX EL3 # 081	2002-08-20 00:00:00	PHY	78228	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4893	0	0	0	0	0	0
AluSepABC000272	4046506001	TX PC # 171-A	2002-08-20 00:00:00	PHY	78229	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0089	0	0	0	0	0	0
AluSepABC000273	91-03E7302-001	TX CB # 122	2002-08-20 00:00:00	PHY	78230	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC000274	91-03E7299-001	TX AL11 # 022	2002-08-20 00:00:00	PHY	78231	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4088	0	0	0	0	0	0
AluSepABC000275	91-03E7298-001	TX SA # 091	2002-08-20 00:00:00	PHY	78232	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0768	0	0	0	0	0	0
AluSepABC000276	91-037299-003	TX AL11 # 021	2002-08-20 00:00:00	PHY	78233	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	W-982	0	0	0	0	0	0
AluSepABC000277	91-03E7302-005	TX CB # 121	2002-08-20 00:00:00	PHY	78234	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1814	0	0	0	0	0	0
AluSepABC000278	91-03E7300-005	TX EL3 # 082	2002-08-20 00:00:00	PHY	78225	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4442	0	0	0	0	0	0
AluSepABC000279	91-03E7301-002	TX FOA # 162	2002-08-19 00:00:00	PHY	78176	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	3989	0	0	0	0	0	0
AluSepABC000280	91-03E7300-004	TX HT # 151	2002-08-19 00:00:00	PHY	78171	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	5612	0	0	0	0	0	0
AluSepABC000281	91-03E7299-004	TX HT # 152	2002-08-19 00:00:00	PHY	78172	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	2163	0	0	0	0	0	0
AluSepABC000282	91-03E7299-005	TX CO # 101	2002-08-19 00:00:00	PHY	78173	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2917	0	0	0	0	0	0
AluSepABC000283	61-0169835	AUXILIAIRE TA2	2002-08-19 00:00:00	PHY	78175	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	1804	0	0	0	0	0	0
AluSepABC000284	91-03E7300-002	TX EL11 # 062	2002-08-19 00:00:00	PHY	78174	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2359	0	0	0	0	0	0
AluSepABC000285	1132787	REDRESSEUR #7	2002-06-20 00:00:00	PHY	76527	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	9310	0	0	0	0	0	0
AluSepABC000286	51016108	REDRESSEUR #2	2002-06-20 00:00:00	PHY	76524	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2400	0	0	0	0	0	0
AluSepABC000287	51016110	REDRESSEUR #3	2002-06-20 00:00:00	PHY	76519	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2172	0	0	0	0	0	0
AluSepABC000288	7853088	REGULATEUR #5	2002-06-20 00:00:00	PHY	76521	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5271	0	0	0	0	0	0
AluSepABC000289	61-0169835	AUXILIAIRE TA2	2002-06-20 00:00:00	PHY	76523	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	6235	0	0	0	0	0	0
AluSepABC000290	7853084	RÉGULATEUR #2	2002-06-20 00:00:00	PHY	76525	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0491	0	0	0	0	0	0
AluSepABC000291	7853087	RÉGULATEUR #6	2002-06-20 00:00:00	PHY	76526	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	Le décompte des particules est recommandé.	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8065	0	0	0	0	0	0
AluSepABC000292	51016113	REDRESSEUR #5	2002-06-20 00:00:00	PHY	76529	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0308	0	0	0	0	0	0
AluSepABC000293	7853085	RÉGULATEUR #3	2002-06-20 00:00:00	PHY	76530	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2363	0	0	0	0	0	0
AluSepABC000294	7853083	RÉGULATEUR #1	2002-06-20 00:00:00	PHY	76534	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2504	0	0	0	0	0	0
AluSepABC000295	51016111	REDRESSEUR #4	2002-06-20 00:00:00	PHY	76531	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2521	0	0	0	0	0	0
AluSepABC000296	7853086	RÉGULATEUR #4	2002-06-20 00:00:00	PHY	76532	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5536	0	0	0	0	0	0
AluSepABC000297	51016109	REDRESSEUR #1	2002-06-20 00:00:00	PHY	76533	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0315	0	0	0	0	0	0
AluSepABC000298	61-01-69834	AUXILIAIRE TA1	2002-06-20 00:00:00	PHY	76522	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7323	0	0	0	0	0	0
AluSepABC000299	51016112	REDRESSEUR #6	2002-06-20 00:00:00	PHY	76528	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0388	0	0	0	0	0	0
AluSepABC000300	91-03E7300-004	TX HT # 151	2001-08-07 00:00:00	PHY	71098	0	1	1	f	0	0	2001-07-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6003	0	0	0	0	0	0
AluSepABC000301	91-037299-003	TX AL11 # 021	2001-08-07 00:00:00	PHY	71078	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000302	A32S-0174	POSTE CO	2001-08-07 00:00:00	PHY	71086	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000303	91-03E7301-003	TX MS # 131	2001-08-07 00:00:00	PHY	71085	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000304	91-03E7298-002	TX AL12 # 032	2001-08-07 00:00:00	PHY	71083	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000305	B32S-0175	TX AL12 # 033	2001-08-07 00:00:00	PHY	71081	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000306	91-03E7298-003	TX SA # 092	2001-08-07 00:00:00	PHY	71087	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000307	91-03E7299-001	TX AL11 # 022	2001-08-07 00:00:00	PHY	71079	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000308	B32S-0174	POSTE CO-	2001-08-07 00:00:00	PHY	71084	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000309	91-03E7299-002	TX CO # 102	2001-08-07 00:00:00	PHY	71077	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000310	91-03E7300-001	TX EL11 # 061	2001-08-07 00:00:00	PHY	71076	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000311	91-03E7300-002	TX EL11 # 062	2001-08-07 00:00:00	PHY	71080	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000312	91-03E7298-001	TX SA # 091	2001-08-07 00:00:00	PHY	71096	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000313	91-03E7300-006	TX AL12 # 031	2001-08-07 00:00:00	PHY	71082	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000314	91-03E7299-005	TX CO # 101	2001-08-07 00:00:00	PHY	71088	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000315	91-03E7303-001	TX EL11 # 064	2001-08-07 00:00:00	PHY	71075	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000316	91-03E7255-001	TX SGE # 041	2001-08-07 00:00:00	PHY	71097	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000317	91-03E7344-001	TX EL2 # 073	2001-08-07 00:00:00	PHY	71094	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000318	W0582-001	TX PC # 173-A	2001-08-07 00:00:00	PHY	71093	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000319	91-03E7344-002	TX EL2 # 074	2001-08-07 00:00:00	PHY	71092	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000320	91-03E7302-004	TX EL2 # 071	2001-08-07 00:00:00	PHY	71091	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000321	91-03E7302-003	TX SGE # 042	2001-08-07 00:00:00	PHY	71090	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000322	91-03E7302-002	TX EL2 # 072	2001-08-07 00:00:00	PHY	71089	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000323	91-03E7299-004	TX HT # 152	2001-08-07 00:00:00	PHY	71099	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000324	61-0169835	AUXILIAIRE TA2	2001-08-06 00:00:00	PHY	71021	0	1	1	f	0	0	2001-07-24 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	51	\N	f	\N	\N	1	\N	\N	 	5605	0	0	0	0	0	0
AluSepABC000325	51016109	REDRESSEUR #1	2001-08-06 00:00:00	PHY	71030	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0081	0	0	0	0	0	0
AluSepABC000327	51016111	REDRESSEUR #4	2001-08-06 00:00:00	PHY	71025	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2377	0	0	0	0	0	0
AluSepABC000328	7853084	RÉGULATEUR #2	2001-08-06 00:00:00	PHY	71028	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1730	0	0	0	0	0	0
AluSepABC000329	51016108	REDRESSEUR #2	2001-08-06 00:00:00	PHY	71027	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	3030	0	0	0	0	0	0
AluSepABC000330	7853085	RÉGULATEUR #3	2001-08-06 00:00:00	PHY	71026	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4148	0	0	0	0	0	0
AluSepABC000331	61-01-69834	AUXILIAIRE TA1	2001-08-06 00:00:00	PHY	71024	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6216	0	0	0	0	0	0
AluSepABC000332	6394-0101	SPARE 77274	2001-08-06 00:00:00	PHY	71023	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0.422	0	0	0	0	0	0
AluSepABC000333	1132787	REDRESSEUR #7	2001-08-06 00:00:00	PHY	71022	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9158	0	0	0	0	0	0
ALUSEPMS 000005	160087	REDRESSEUR 25	2006-11-08 00:00:00	GD	108086	0	4	1	f	0	\N	2006-11-04 08:00:00	\r\nTemp. ambiante (°C) =  0, Pression =  0\r\n"Diagnostic du laboratoire :"		f	f	GE Syprotec	\N	\N			0		\N		4	0	28	\N	f	 	0	1	5	1,GD,EAU,	A venir	AL241	0	0	0	0	0	0
AluSepABC000334	91-03E7301-004	TX SGE SPARE 77275	2001-08-06 00:00:00	PHY	71020	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0732	0	0	0	0	0	0
AluSepABC000335	XC030-001	TX PC # 173-B	2001-08-06 00:00:00	PHY	71019	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2757	0	0	0	0	0	0
AluSepABC000336	A32S0251	SPARE 77227	2001-08-06 00:00:00	PHY	71017	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7005	0	0	0	0	0	0
AluSepABC000337	51016113	REDRESSEUR #5	2001-08-06 00:00:00	PHY	71031	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7722	0	0	0	0	0	0
AluSepABC000338	91-03E7301-005	TX NP # 141	2001-08-06 00:00:00	PHY	71041	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000339	7853086	RÉGULATEUR #4	2001-08-06 00:00:00	PHY	71032	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2306	0	0	0	0	0	0
AluSepABC000340	4046506001	TX PC # 171-A	2001-08-06 00:00:00	PHY	71046	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000341	A32S0175	TX AL11 # 023	2001-08-06 00:00:00	PHY	71044	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000342	91-03E7303-002	TX EL11 # 063	2001-08-06 00:00:00	PHY	71045	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000343	91-03E7300-005	TX EL3 # 082	2001-08-06 00:00:00	PHY	71042	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000344	91-03E7302-001	TX CB # 122	2001-08-06 00:00:00	PHY	71040	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000345	91-03E7301-006	TX NP # 142	2001-08-06 00:00:00	PHY	71039	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000346	91-03E7300-003	TX EL3 # 081	2001-08-06 00:00:00	PHY	71038	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000347	91-03E7301-002	TX FOA # 162	2001-08-06 00:00:00	PHY	71037	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000348	91-03E7301-001	TX FOA # 161	2001-08-06 00:00:00	PHY	71036	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000349	7853088	REGULATEUR #5	2001-08-06 00:00:00	PHY	71035	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2311	0	0	0	0	0	0
AluSepABC000350	7853087	RÉGULATEUR #6	2001-08-06 00:00:00	PHY	71034	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2631	0	0	0	0	0	0
AluSepABC000351	7853083	RÉGULATEUR #1	2001-08-06 00:00:00	PHY	71033	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0432	0	0	0	0	0	0
AluSepABC000352	91-03E7302-005	TX CB # 121	2001-08-06 00:00:00	PHY	71043	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000353	51016108	REDRESSEUR #2	2000-10-10 00:00:00	PHY	66287	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	6205	0	0	0	0	0	0
AluSepABC000354	7853085	RÉGULATEUR #3	2000-10-10 00:00:00	PHY	66284	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	53	\N	f	\N	\N	1	\N	\N	 	9439	0	0	0	0	0	0
AluSepABC000355	7853084	RÉGULATEUR #2	2000-10-10 00:00:00	PHY	66281	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	A274	0	0	0	0	0	0
AluSepABC000356	7853083	RÉGULATEUR #1	2000-10-10 00:00:00	PHY	66282	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	6754	0	0	0	0	0	0
AluSepABC000357	7853086	RÉGULATEUR #4	2000-10-10 00:00:00	PHY	66283	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1956	0	0	0	0	0	0
AluSepABC000358	1132787	REDRESSEUR #7	2000-10-10 00:00:00	PHY	66286	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	H954	0	0	0	0	0	0
AluSepABC000359	51016111	REDRESSEUR #4	2000-10-10 00:00:00	PHY	66288	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0201	0	0	0	0	0	0
AluSepABC000360	61-01-69834	AUXILIAIRE TA1	2000-10-10 00:00:00	PHY	66290	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	0553	0	0	0	0	0	0
AluSepABC000361	61-0169835	AUXILIAIRE TA2	2000-10-10 00:00:00	PHY	66291	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	1421	0	0	0	0	0	0
AluSepABC000362	51016109	REDRESSEUR #1	2000-10-10 00:00:00	PHY	66285	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC000363	91-03E7300-006	TX AL12 # 031	2000-10-05 00:00:00	PHY	66222	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000364	91-03E7300-001	TX EL11 # 061	2000-10-05 00:00:00	PHY	66217	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000365	91-03E7303-002	TX EL11 # 063	2000-10-05 00:00:00	PHY	66235	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000366	91-03E7303-001	TX EL11 # 064	2000-10-05 00:00:00	PHY	66234	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000367	91-03E7302-005	TX CB # 121	2000-10-05 00:00:00	PHY	66233	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000368	91-03E7302-004	TX EL2 # 071	2000-10-05 00:00:00	PHY	66232	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000369	91-03E7302-002	TX EL2 # 072	2000-10-05 00:00:00	PHY	66230	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000370	91-03E7301-003	TX MS # 131	2000-10-05 00:00:00	PHY	66225	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	21	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000371	91-03E7298-002	TX AL12 # 032	2000-10-05 00:00:00	PHY	66237	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000372	91-03E7300-005	TX EL3 # 082	2000-10-05 00:00:00	PHY	66221	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000373	91-03E7300-003	TX EL3 # 081	2000-10-05 00:00:00	PHY	66219	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000374	91-03E7300-002	TX EL11 # 062	2000-10-05 00:00:00	PHY	66218	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000375	W0582-001	TX PC # 173-A	2000-10-05 00:00:00	PHY	66245	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000486	91-03E7299-001	TX AL11 # 022	1998-09-15 00:00:00	PHY	14834	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000376	91-03E7302-001	TX CB # 122	2000-10-05 00:00:00	PHY	66229	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000377	91-03E7344-002	TX EL2 # 074	2000-10-05 00:00:00	PHY	66254	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000378	4046506001	TX PC # 171-A	2000-10-05 00:00:00	PHY	66244	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000379	SET6394-0101	TRANSFORMATEUR 77274	2000-10-05 00:00:00	PHY	66246	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	10	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000380	91-03E7344-001	TX EL2 # 073	2000-10-05 00:00:00	PHY	66253	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000381	B32S-0175	TX AL12 # 033	2000-10-05 00:00:00	PHY	66252	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000382	91-03E7301-004	TX SGE SPARE 77275	2000-10-05 00:00:00	PHY	66226	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	13	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000383	7853088	REGULATEUR #5	2000-10-05 00:00:00	PHY	66213	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	1811	0	0	0	0	0	0
AluSepABC000384	51016113	REDRESSEUR #5	2000-10-05 00:00:00	PHY	66215	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0903	0	0	0	0	0	0
AluSepABC000385	7853087	RÉGULATEUR #6	2000-10-05 00:00:00	PHY	66216	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	Le décompte des particules est recommandé.	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0700	0	0	0	0	0	0
AluSepABC000386	91-03E7255-001	TX SGE # 041	2000-10-05 00:00:00	PHY	66255	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000387	91-03E7300-004	TX HT # 151	2000-10-05 00:00:00	PHY	66220	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000388	91-03E7301-001	TX FOA # 161	2000-10-05 00:00:00	PHY	66223	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000389	91-03E7299-005	TX CO # 101	2000-10-05 00:00:00	PHY	66243	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000390	B32S-0174	POSTE CO-	2000-10-05 00:00:00	PHY	66251	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000391	91-037299-003	TX AL11 # 021	2000-10-05 00:00:00	PHY	66241	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000392	91-03E7299-004	TX HT # 152	2000-10-05 00:00:00	PHY	66242	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000393	91-03E7299-002	TX CO # 102	2000-10-05 00:00:00	PHY	66240	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000394	91-03E7299-001	TX AL11 # 022	2000-10-05 00:00:00	PHY	66239	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000395	91-03E7301-002	TX FOA # 162	2000-10-05 00:00:00	PHY	66224	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000396	91-03E7298-003	TX SA # 092	2000-10-05 00:00:00	PHY	66238	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000397	91-03E7301-005	TX NP # 141	2000-10-05 00:00:00	PHY	66227	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000398	91-03E7298-001	TX SA # 091	2000-10-05 00:00:00	PHY	66236	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000399	A325-0251	TRANSFORMATEUR 77227	2000-10-05 00:00:00	PHY	66247	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000400	XC030-001	TX PC # 173-B	2000-10-05 00:00:00	PHY	66248	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000401	91-03E7302-003	TX SGE # 042	2000-10-05 00:00:00	PHY	66231	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000402	A32S-0174	POSTE CO	2000-10-05 00:00:00	PHY	66249	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000403	A325-0175	TX AL11 # 023	2000-10-05 00:00:00	PHY	66250	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000404	91-03E7301-006	TX NP # 142	2000-10-05 00:00:00	PHY	66228	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000405	51016112	REDRESSEUR #6	2000-08-14 00:00:00	PHY	65456	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000406	51016110	REDRESSEUR #3	2000-08-14 00:00:00	PHY	65455	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000407	7853084	RÉGULATEUR #2	2000-07-12 00:00:00	PHY	64795	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	1353	0	0	0	0	0	0
AluSepABC000408	7853083	RÉGULATEUR #1	2000-07-12 00:00:00	PHY	64794	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC000409	7853088	REGULATEUR #5	2000-07-12 00:00:00	PHY	64798	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1404	0	0	0	0	0	0
AluSepABC000410	7853087	RÉGULATEUR #6	2000-07-12 00:00:00	PHY	64799	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	D-432	0	0	0	0	0	0
AluSepABC000411	1132787	REDRESSEUR #7	2000-07-12 00:00:00	PHY	64800	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1622	0	0	0	0	0	0
AluSepABC000412	7853086	RÉGULATEUR #4	2000-07-12 00:00:00	PHY	64797	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	1274	0	0	0	0	0	0
AluSepABC000413	7853085	RÉGULATEUR #3	2000-07-12 00:00:00	PHY	64796	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	54	\N	f	\N	\N	1	\N	\N	 	0784	0	0	0	0	0	0
AluSepABC000414	51016110	REDRESSEUR #3	2000-04-20 00:00:00	PHY	62997	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0159	0	0	0	0	0	0
AluSepABC000415	51016108	REDRESSEUR #2	2000-04-20 00:00:00	PHY	62996	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7743	0	0	0	0	0	0
AluSepABC000416	51016111	REDRESSEUR #4	2000-04-20 00:00:00	PHY	62998	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	3801	0	0	0	0	0	0
AluSepABC000417	51016113	REDRESSEUR #5	2000-04-20 00:00:00	PHY	62999	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC000418	51016112	REDRESSEUR #6	2000-04-20 00:00:00	PHY	63000	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4603	0	0	0	0	0	0
AluSepABC000419	51016109	REDRESSEUR #1	2000-04-20 00:00:00	PHY	62995	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4607	0	0	0	0	0	0
AluSepABC000420	91-03E7302-002	TX EL2 # 072	1999-07-20 00:00:00	PHY	18061	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000421	91-03E7344-002	TX EL2 # 074	1999-07-20 00:00:00	PHY	18069	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	41	0	0	0	0	0	0
AluSepABC000422	91-03E7300-002	TX EL11 # 062	1999-07-20 00:00:00	PHY	18062	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000423	91-03E7303-001	TX EL11 # 064	1999-07-20 00:00:00	PHY	18063	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000424	91-03E7298-001	TX SA # 091	1999-07-20 00:00:00	PHY	18068	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000425	B32S-0175	TX AL12 # 033	1999-07-20 00:00:00	PHY	18064	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000426	91-03E7301-006	TX NP # 142	1999-07-20 00:00:00	PHY	18065	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000427	91-03E7298-003	TX SA # 092	1999-07-20 00:00:00	PHY	18067	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000428	91-03E7301-002	TX FOA # 162	1999-07-20 00:00:00	PHY	18070	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000429	A32S-0174	POSTE CO	1999-07-20 00:00:00	PHY	18071	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000430	91-03E7302-004	TX EL2 # 071	1999-07-20 00:00:00	PHY	18066	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000431	91-03E7303-002	TX EL11 # 063	1999-07-19 00:00:00	PHY	18039	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000432	A325-0251	TRANSFORMATEUR 77227	1999-07-19 00:00:00	PHY	18043	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000433	91-03E7344-001	TX EL2 # 073	1999-07-19 00:00:00	PHY	18045	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000434	6394-0101	SPARE 77274	1999-07-19 00:00:00	PHY	18037	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000435	91-03E7300-003	TX EL3 # 081	1999-07-19 00:00:00	PHY	18040	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000436	91-03E7300-006	TX AL12 # 031	1999-07-19 00:00:00	PHY	18035	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000437	91-03E7301-003	TX MS # 131	1999-07-19 00:00:00	PHY	18036	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000438	91-03E7301-005	TX NP # 141	1999-07-19 00:00:00	PHY	18042	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000439	XC030-001	TX PC # 173-B	1999-07-19 00:00:00	PHY	18044	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	* quelques particules de carbone en suspensionL'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000440	91-03E7301-004	TX SGE SPARE 77275	1999-07-19 00:00:00	PHY	18038	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000441	91-037299-003	TX AL11 # 021	1999-07-19 00:00:00	PHY	18041	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000442	B32S-0174	POSTE CO-	1999-07-16 00:00:00	PHY	18005	0	1	1	f	0	0	1999-07-05 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000443	91-03E7300-001	TX EL11 # 061	1999-07-16 00:00:00	PHY	18015	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000444	4046506001	TX PC # 171-A	1999-07-16 00:00:00	PHY	18013	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000445	W0582-001	TX PC # 173-A	1999-07-16 00:00:00	PHY	18020	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000446	91-03E7302-001	TX CB # 122	1999-07-16 00:00:00	PHY	18016	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000447	91-03E7300-005	TX EL3 # 082	1999-07-16 00:00:00	PHY	18008	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000448	91-03E7302-005	TX CB # 121	1999-07-16 00:00:00	PHY	18011	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000449	91-03E7255-001	TX SGE # 041	1999-07-16 00:00:00	PHY	18004	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000450	61-0169835	AUXILIAIRE TA2	1999-07-16 00:00:00	PHY	18000	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0282	0	0	0	0	0	0
AluSepABC000451	7853085	RÉGULATEUR #3	1999-07-16 00:00:00	PHY	17998	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	0325	0	0	0	0	0	0
AluSepABC000452	51016108	REDRESSEUR #2	1999-07-16 00:00:00	PHY	17996	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	0114	0	0	0	0	0	0
AluSepABC000453	51016109	REDRESSEUR #1	1999-07-16 00:00:00	PHY	17995	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0002	0	0	0	0	0	0
AluSepABC000454	1132787	REDRESSEUR #7	1999-07-16 00:00:00	PHY	17992	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	0434	0	0	0	0	0	0
AluSepABC000455	7853083	RÉGULATEUR #1	1999-07-16 00:00:00	PHY	17991	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	52	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC000456	7853084	RÉGULATEUR #2	1999-07-16 00:00:00	PHY	17989	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0358	0	0	0	0	0	0
AluSepABC000457	61-01-69834	AUXILIAIRE TA1	1999-07-16 00:00:00	PHY	17993	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0411	0	0	0	0	0	0
AluSepABC000458	91-03E7299-002	TX CO # 102	1999-07-16 00:00:00	PHY	18017	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000459	91-03E7301-001	TX FOA # 161	1999-07-16 00:00:00	PHY	18012	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000460	91-03E7299-001	TX AL11 # 022	1999-07-16 00:00:00	PHY	18006	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000461	91-03E7302-003	TX SGE # 042	1999-07-16 00:00:00	PHY	18018	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000462	91-03E7300-004	TX HT # 151	1999-07-16 00:00:00	PHY	18007	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	Assécher l'huile.	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).  Contenu d'eau élevé (Limite max. IEEE=35ppm).	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000463	91-03E7299-005	TX CO # 101	1999-07-16 00:00:00	PHY	18009	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000464	91-03E7298-002	TX AL12 # 032	1999-07-16 00:00:00	PHY	18010	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000465	A325-0175	TX AL11 # 023	1999-07-16 00:00:00	PHY	18019	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000466	91-03E7299-004	TX HT # 152	1999-07-16 00:00:00	PHY	18014	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000467	51016111	REDRESSEUR #4	1999-07-16 00:00:00	PHY	17990	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0276	0	0	0	0	0	0
AluSepABC000468	7853088	REGULATEUR #5	1999-07-16 00:00:00	PHY	17999	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0369	0	0	0	0	0	0
AluSepABC000469	7853086	RÉGULATEUR #4	1999-07-16 00:00:00	PHY	18001	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	Le décompte des particules est recommandé.	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0296	0	0	0	0	0	0
AluSepABC000470	7853087	RÉGULATEUR #6	1999-07-16 00:00:00	PHY	18002	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	Le décompte des particules est recommandé.	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0438	0	0	0	0	0	0
AluSepABC000471	51016113	REDRESSEUR #5	1999-07-16 00:00:00	PHY	18003	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	  Continuer d'opérer normalement.	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0462	0	0	0	0	0	0
AluSepABC000472	4046506001	TX PC # 171-A	1998-09-16 00:00:00	PHY	14864	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000473	91-03E7303-001	TX EL11 # 064	1998-09-16 00:00:00	PHY	14861	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000474	91-03E7299-002	TX CO # 102	1998-09-16 00:00:00	PHY	14860	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000475	91-03E7344-001	TX EL2 # 073	1998-09-16 00:00:00	PHY	14862	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000476	91-03E7298-002	TX AL12 # 032	1998-09-15 00:00:00	PHY	14843	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000477	91-03E7300-006	TX AL12 # 031	1998-09-15 00:00:00	PHY	14856	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000478	91-03E7302-002	TX EL2 # 072	1998-09-15 00:00:00	PHY	14859	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000479	91-03E7344-002	TX EL2 # 074	1998-09-15 00:00:00	PHY	14833	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000480	91-03E7299-005	TX CO # 101	1998-09-15 00:00:00	PHY	14832	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000481	91-03E7303-002	TX EL11 # 063	1998-09-15 00:00:00	PHY	14852	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000482	91-03E7300-003	TX EL3 # 081	1998-09-15 00:00:00	PHY	14853	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000483	A32S-0174	POSTE CO	1998-09-15 00:00:00	PHY	14851	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000484	91-03E7300-004	TX HT # 151	1998-09-15 00:00:00	PHY	14854	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000485	91-03E7301-001	TX FOA # 161	1998-09-15 00:00:00	PHY	14858	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000487	91-03E7300-005	TX EL3 # 082	1998-09-15 00:00:00	PHY	14857	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000488	91-03E7301-005	TX NP # 141	1998-09-15 00:00:00	PHY	14836	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000489	91-03E7302-003	TX SGE # 042	1998-09-15 00:00:00	PHY	14837	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000490	91-03E7301-002	TX FOA # 162	1998-09-15 00:00:00	PHY	14838	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000491	91-03E7302-001	TX CB # 122	1998-09-15 00:00:00	PHY	14839	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000492	91-03E7300-002	TX EL11 # 062	1998-09-15 00:00:00	PHY	14840	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000493	91-03E7301-006	TX NP # 142	1998-09-15 00:00:00	PHY	14841	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000494	91-03E7301-003	TX MS # 131	1998-09-15 00:00:00	PHY	14842	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000495	A32S0251	SPARE 77227	1998-09-15 00:00:00	PHY	14844	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000496	91-03E7299-004	TX HT # 152	1998-09-15 00:00:00	PHY	14845	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000497	XC030-001	TX PC # 173-B	1998-09-15 00:00:00	PHY	14846	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Huile visqueuse	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000498	91-03E7298-003	TX SA # 092	1998-09-15 00:00:00	PHY	14835	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000499	6394-0101	SPARE 77274	1998-09-15 00:00:00	PHY	14855	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000500	91-03E7255-001	TX SGE # 041	1998-09-14 00:00:00	PHY	14829	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000501	91-03E7301-004	TX SGE SPARE 77275	1998-09-14 00:00:00	PHY	14828	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000502	91-03E7298-001	TX SA # 091	1998-09-14 00:00:00	PHY	14830	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000503	91-03E7302-004	TX EL2 # 071	1998-09-14 00:00:00	PHY	14831	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000504	A32S0175	TX AL11 # 023	1998-09-14 00:00:00	PHY	14827	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	52	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000505	W0582-001	TX PC # 173-A	1998-09-12 00:00:00	PHY	14808	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000506	B32S-0175	TX AL12 # 033	1998-09-12 00:00:00	PHY	14789	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000507	7853084	RÉGULATEUR #2	1998-09-12 00:00:00	PHY	14775	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	56	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC000508	61-0169835	AUXILIAIRE TA2	1998-09-12 00:00:00	PHY	14781	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	8161	0	0	0	0	0	0
AluSepABC000509	51016113	REDRESSEUR #5	1998-09-12 00:00:00	PHY	14772	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	2538	0	0	0	0	0	0
AluSepABC000510	51016112	REDRESSEUR #6	1998-09-12 00:00:00	PHY	14774	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	1965	0	0	0	0	0	0
AluSepABC000511	51016111	REDRESSEUR #4	1998-09-12 00:00:00	PHY	14776	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	9076	0	0	0	0	0	0
AluSepABC000512	7853083	RÉGULATEUR #1	1998-09-12 00:00:00	PHY	14777	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	5100	0	0	0	0	0	0
AluSepABC000513	7853088	REGULATEUR #5	1998-09-12 00:00:00	PHY	14778	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	7626	0	0	0	0	0	0
AluSepABC000514	7853087	RÉGULATEUR #6	1998-09-12 00:00:00	PHY	14779	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	4268	0	0	0	0	0	0
AluSepABC000515	1132787	REDRESSEUR #7	1998-09-12 00:00:00	PHY	14780	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	V4563	0	0	0	0	0	0
AluSepABC000516	91-037299-003	TX AL11 # 021	1998-09-12 00:00:00	PHY	14788	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000517	51016109	REDRESSEUR #1	1998-09-12 00:00:00	PHY	14782	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	0601	0	0	0	0	0	0
AluSepABC000518	91-03E7300-001	TX EL11 # 061	1998-09-12 00:00:00	PHY	14795	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000519	61-01-69834	AUXILIAIRE TA1	1998-09-12 00:00:00	PHY	14773	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8132	0	0	0	0	0	0
AluSepABC000562	91-03E7301-003	TX MS # 131	1997-08-07 00:00:00	PHY	10856	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000563	91-03E7255-001	TX SGE # 041	1997-08-07 00:00:00	PHY	10855	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000564	91-03E7300-006	TX AL12 # 031	1997-08-07 00:00:00	PHY	10839	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000565	91-03E7298-003	TX SA # 092	1997-08-07 00:00:00	PHY	10838	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000566	91-03E7302-004	TX EL2 # 071	1997-08-07 00:00:00	PHY	10837	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000567	A32S0251	SPARE 77227	1997-08-07 00:00:00	PHY	10834	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	17	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000568	91-03E7301-006	TX NP # 142	1997-08-07 00:00:00	PHY	10833	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000569	91-03E7300-004	TX HT # 151	1997-08-07 00:00:00	PHY	10863	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000570	91-03E7299-001	TX AL11 # 022	1997-08-07 00:00:00	PHY	10831	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000571	91-03E7301-002	TX FOA # 162	1997-08-07 00:00:00	PHY	10830	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000572	A32S0175	TX AL11 # 023	1997-08-07 00:00:00	PHY	10829	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	54	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000573	91-03E7302-001	TX CB # 122	1997-08-07 00:00:00	PHY	10826	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000574	91-03E7302-005	TX CB # 121	1997-08-07 00:00:00	PHY	10822	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000575	51016112	REDRESSEUR #6	1997-08-07 00:00:00	PHY	10878	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000576	51016113	REDRESSEUR #5	1997-08-07 00:00:00	PHY	10876	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	1133	0	0	0	0	0	0
AluSepABC000577	W0582-001	TX PC # 173-A	1997-08-07 00:00:00	PHY	10864	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000578	91-03E7344-002	TX EL2 # 074	1997-08-07 00:00:00	PHY	10835	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000579	91-03E7302-003	TX SGE # 042	1997-08-06 00:00:00	PHY	10803	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000580	180137-H1	REGULATEUR 25-H1	2006-03-16 00:00:00	GD	101550	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AE929	0	0	0	0	0	0
AluSepABC000581	180137-H3	REGULATEUR 25-H3	2006-03-16 00:00:00	GD	101549	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AL844	0	0	0	0	0	0
AluSepABC000582	180137-H2	REGULATEUR 25-H2	2006-03-16 00:00:00	GD	101544	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AJ463	0	0	0	0	0	0
AluSepABC000583	160087	REDRESSEUR 25	2006-02-28 00:00:00	GD	101268	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AF607	0	0	0	0	0	0
AluSepABC000584	160087-H3	REDRESSEUR 25-H3	2006-02-28 00:00:00	GD	101263	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4138	0	0	0	0	0	0
AluSepABC000585	160087-H1	REDRESSEUR 25-H1	2006-02-28 00:00:00	GD	101262	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc.	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AB962	0	0	0	0	0	0
AluSepABC000586	160087-H2	REDRESSEUR 25-H2	2006-02-28 00:00:00	GD	101261	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4867	0	0	0	0	0	0
AluSepABC000587	180138	REGULATEUR 22	2006-02-16 00:00:00	GD	101133	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	G1157	0	0	0	0	0	0
AluSepABC000588	180139	REGULATEUR 23	2006-02-16 00:00:00	GD	101132	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	28	\N	f	\N	\N	1	\N	\N	 	0220	0	0	0	0	0	0
AluSepABC000589	160087	REDRESSEUR 25	2006-02-15 00:00:00	GD	101129	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	25	\N	f	\N	\N	1	\N	\N	 	4480	0	0	0	0	0	0
AluSepABC000590	160086	REDRESSEUR 21	2006-02-15 00:00:00	GD	101123	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF851	0	0	0	0	0	0
AluSepABC000591	180136	REGULATEUR 21	2006-02-15 00:00:00	GD	101121	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	35	\N	f	\N	\N	1	\N	\N	 	D210	0	0	0	0	0	0
AluSepABC000592	160090	REDRESSEUR 23	2006-02-15 00:00:00	GD	101119	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	35	\N	f	\N	\N	1	\N	\N	 	8496	0	0	0	0	0	0
AluSepABC000593	180140	REGULATEUR 24	2006-02-15 00:00:00	GD	101117	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	0852	0	0	0	0	0	0
AluSepABC000594	180137	REGULATEUR 25	2006-02-15 00:00:00	GD	101115	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	25	\N	f	\N	\N	1	\N	\N	 	5466	0	0	0	0	0	0
AluSepABC000595	160088	REDRESSEUR 22	2006-02-15 00:00:00	GD	101114	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AL642	0	0	0	0	0	0
AluSepABC000597	160087	REDRESSEUR 25	2005-12-06 00:00:00	GD	99910	0	1	1	f	0	0	2005-11-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	A 0225	0	0	0	0	0	0
AluSepABC000598	180137	REGULATEUR 25	2005-12-06 00:00:00	GD	99908	0	1	1	f	0	0	2005-11-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AL 266	0	0	0	0	0	0
AluSepABC000599	180138	REGULATEUR 22	2005-11-29 00:00:00	GD	99770	0	1	1	f	0	0	2005-11-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0443	0	0	0	0	0	0
AluSepABC000600	180139	REGULATEUR 23	2005-10-19 00:00:00	GD	98440	0	1	1	f	0	0	2005-10-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	23	\N	f	\N	\N	1	\N	\N	 	0363	0	0	0	0	0	0
AluSepABC000601	180138	REGULATEUR 22	2005-10-19 00:00:00	GD	98439	0	1	1	f	0	0	2005-10-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	24	\N	f	\N	\N	1	\N	\N	 	AE738	0	0	0	0	0	0
AluSepABC000602	160087	REDRESSEUR 25	2005-09-28 00:00:00	GD	97398	0	1	1	f	0	0	2005-09-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2719	0	0	0	0	0	0
AluSepABC000603	180140	REGULATEUR 24	2005-09-28 00:00:00	GD	97397	0	1	1	f	0	0	2005-09-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AM972	0	0	0	0	0	0
AluSepABC000604	160090	REDRESSEUR 23	2005-09-28 00:00:00	GD	97396	0	1	1	f	0	0	2005-09-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AH705	0	0	0	0	0	0
AluSepABC000605	160088	REDRESSEUR 22	2005-09-28 00:00:00	GD	97395	0	1	1	f	0	0	2005-09-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2468	0	0	0	0	0	0
AluSepABC000606	SET6394-0101	TRANSFORMATEUR 77274	2005-09-21 00:00:00	GD	97217	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	2736	0	0	0	0	0	0
AluSepABC000607	A32S0251	SPARE 77227	2005-09-21 00:00:00	GD	97215	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.50 cc.	4	0	20	\N	f	\N	\N	1	\N	\N	 	0018	0	0	0	0	0	0
AluSepABC000608	91-03E7301-004	TX SGE SPARE 77275	2005-09-21 00:00:00	GD	97214	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	1100	0	0	0	0	0	0
AluSepABC000609	W0582-001	TX PC # 173-A	2005-09-20 00:00:00	GD	97193	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	2060	0	0	0	0	0	0
AluSepABC000610	4046506001	TX PC # 171-A	2005-09-20 00:00:00	GD	97192	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.25 cc	4	0	50	\N	f	\N	\N	1	\N	\N	 	0461	0	0	0	0	0	0
AluSepABC000611	91-03E7301-003	TX MS # 131	2005-09-20 00:00:00	GD	97190	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	1076	0	0	0	0	0	0
AluSepABC000612	91-03E7300-005	TX EL3 # 082	2005-09-20 00:00:00	GD	97188	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	0475	0	0	0	0	0	0
AluSepABC000613	91-03E7300-003	TX EL3 # 081	2005-09-20 00:00:00	GD	97187	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	AD353	0	0	0	0	0	0
AluSepABC000614	03G122759	TX AL23 # 271	2005-09-20 00:00:00	GD	97169	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	3434	0	0	0	0	0	0
AluSepABC000615	03G122760	TX AL23 # 272	2005-09-20 00:00:00	GD	97186	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.70 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	Y2830	0	0	0	0	0	0
AluSepABC000616	91-03E7301-002	TX FOA # 162	2005-09-20 00:00:00	GD	97200	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.07 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	5723	0	0	0	0	0	0
AluSepABC000617	91-03E7301-001	TX FOA # 161	2005-09-20 00:00:00	GD	97197	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.06 cc	4	0	22	\N	f	\N	\N	1	\N	\N	 	AH735	0	0	0	0	0	0
AluSepABC000618	91-03E7299-004	TX HT # 152	2005-09-20 00:00:00	GD	97195	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.25 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	AC227	0	0	0	0	0	0
AluSepABC000619	91-03E7300-004	TX HT # 151	2005-09-20 00:00:00	GD	97194	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	4111	0	0	0	0	0	0
AluSepABC000620	91-03E7301-005	TX NP # 141	2005-09-20 00:00:00	GD	97170	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.1 cc.	4	0	30	\N	f	\N	\N	1	\N	\N	 	7803	0	0	0	0	0	0
AluSepABC000621	91-03E7301-006	TX NP # 142	2005-09-20 00:00:00	GD	97168	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC000622	03G122761	TX EL22 # 242	2005-09-19 00:00:00	GD	97162	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AF630	0	0	0	0	0	0
AluSepABC000623	PA14201-001	TX EL22 # 241	2005-09-19 00:00:00	GD	97161	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.30 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	5289	0	0	0	0	0	0
AluSepABC000624	03G122757	TX AL21 # 213	2005-09-19 00:00:00	GD	97151	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.30 cc	4	0	47	\N	f	\N	\N	1	\N	\N	 	5367	0	0	0	0	0	0
AluSepABC000625	03G122763	TX AL21 # 212	2005-09-19 00:00:00	GD	97149	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	AE324	0	0	0	0	0	0
AluSepABC000626	03G122762	TX AL21 # 211	2005-09-19 00:00:00	GD	97148	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	5032	0	0	0	0	0	0
AluSepABC000627	XC030-001	TX PC # 173-B	2005-09-19 00:00:00	GD	97146	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	3476	0	0	0	0	0	0
AluSepABC000628	B3S6449	TX PC # 171-B	2005-09-19 00:00:00	GD	97144	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	2507	0	0	0	0	0	0
AluSepABC000629	91-03E7302-001	TX CB # 122	2005-09-19 00:00:00	GD	97133	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	V6939	0	0	0	0	0	0
AluSepABC000630	91-03E7302-005	TX CB # 121	2005-09-19 00:00:00	GD	97131	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC417	0	0	0	0	0	0
AluSepABC000631	91-03E7344-002	TX EL2 # 074	2005-09-19 00:00:00	GD	97126	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.40 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE754	0	0	0	0	0	0
AluSepABC000632	91-03E7344-001	TX EL2 # 073	2005-09-19 00:00:00	GD	97124	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA489	0	0	0	0	0	0
AluSepABC000633	91-03E7302-002	TX EL2 # 072	2005-09-19 00:00:00	GD	97121	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AF696	0	0	0	0	0	0
AluSepABC000634	91-03E7303-001	TX EL11 # 064	2005-09-19 00:00:00	GD	97120	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE993	0	0	0	0	0	0
AluSepABC000635	91-03E7302-004	TX EL2 # 071	2005-09-19 00:00:00	GD	97118	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.15 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0904	0	0	0	0	0	0
AluSepABC000636	91-03E7303-002	TX EL11 # 063	2005-09-19 00:00:00	GD	97116	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc.	4	0	30	\N	f	\N	\N	1	\N	\N	 	3802	0	0	0	0	0	0
AluSepABC000637	03G122767	TX EL21 # 232	2005-09-19 00:00:00	GD	97159	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	4311	0	0	0	0	0	0
AluSepABC000638	03G122766	TX EL21 # 231	2005-09-19 00:00:00	GD	97157	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC000639	03G122758	TX AL22 # 223	2005-09-19 00:00:00	GD	97156	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 1.10 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB880	0	0	0	0	0	0
AluSepABC000640	03G122765	TX AL22 # 222	2005-09-19 00:00:00	GD	97155	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4171	0	0	0	0	0	0
AluSepABC000641	03G122764	TX AL22 # 221	2005-09-19 00:00:00	GD	97153	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	1178	0	0	0	0	0	0
AluSepABC000642	91-03E7255-001	TX SGE # 041	2005-09-19 00:00:00	GD	97147	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	25	\N	f	\N	\N	1	\N	\N	 	3326	0	0	0	0	0	0
AluSepABC000643	B32S-0175	TX AL12 # 033	2005-09-19 00:00:00	GD	97145	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.40 cc	4	0	55	\N	f	\N	\N	1	\N	\N	 	4682	0	0	0	0	0	0
AluSepABC000644	B32S-0174	POSTE CO-	2005-09-19 00:00:00	GD	97164	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.50 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	4651	0	0	0	0	0	0
AluSepABC000645	A32S-0174	POSTE CO	2005-09-19 00:00:00	GD	97163	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.45 cc	4	0	50	\N	f	\N	\N	1	\N	\N	 	4781	0	0	0	0	0	0
AluSepABC000646	91-03E7299-002	TX CO # 102	2005-09-19 00:00:00	GD	97160	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.15 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AN125	0	0	0	0	0	0
AluSepABC000647	91-03E7299-005	TX CO # 101	2005-09-19 00:00:00	GD	97158	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AM134	0	0	0	0	0	0
AluSepABC000648	91-03E7298-003	TX SA # 092	2005-09-19 00:00:00	GD	97154	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0779	0	0	0	0	0	0
AluSepABC000649	91-03E7298-001	TX SA # 091	2005-09-19 00:00:00	GD	97152	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	2390	0	0	0	0	0	0
AluSepABC000650	91-03E7302-003	TX SGE # 042	2005-09-19 00:00:00	GD	97150	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AK635	0	0	0	0	0	0
AluSepABC000651	A325-0175	TX AL11 # 023	2005-09-19 00:00:00	GD	97143	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.50 cc	4	0	50	\N	f	\N	\N	1	\N	\N	 	AA468	0	0	0	0	0	0
AluSepABC000652	91-03E7299-001	TX AL11 # 022	2005-09-19 00:00:00	GD	97142	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	20	\N	f	\N	\N	1	\N	\N	 	AM431	0	0	0	0	0	0
AluSepABC000653	91-03E7299-003	TX AL11 # 021	2005-09-19 00:00:00	GD	97135	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.05 cc.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AK778	0	0	0	0	0	0
AluSepABC000654	CL80011-101-0	AUXILIAIRE TA3	2005-09-19 00:00:00	GD	97125	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	1971	0	0	0	0	0	0
AluSepABC000655	61-0169835	AUXILIAIRE TA2	2005-09-19 00:00:00	GD	97123	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	2431	0	0	0	0	0	0
AluSepABC000656	61-01-69834	AUXILIAIRE TA1	2005-09-19 00:00:00	GD	97122	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	AF245	0	0	0	0	0	0
AluSepABC000657	180137	REGULATEUR 25	2005-09-19 00:00:00	GD	97119	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	33	\N	f	\N	\N	1	\N	\N	 	AM470	0	0	0	0	0	0
AluSepABC000658	180140	REGULATEUR 24	2005-09-19 00:00:00	GD	97117	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4561	0	0	0	0	0	0
AluSepABC000659	91-03E7300-002	TX EL11 # 062	2005-09-18 00:00:00	GD	97115	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc.	4	0	25	\N	f	\N	\N	1	\N	\N	 	AE459	0	0	0	0	0	0
AluSepABC000660	91-03E7300-001	TX EL11 # 061	2005-09-18 00:00:00	GD	97113	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE924	0	0	0	0	0	0
AluSepABC000661	91-03E7298-002	TX AL12 # 032	2005-09-18 00:00:00	GD	97110	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.40 cc.	4	0	65	\N	f	\N	\N	1	\N	\N	 	2386	0	0	0	0	0	0
AluSepABC000662	91-03E7300-006	TX AL12 # 031	2005-09-18 00:00:00	GD	97109	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	A0283	0	0	0	0	0	0
AluSepABC000663	180138	REGULATEUR 22	2005-09-18 00:00:00	GD	97114	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AL755	0	0	0	0	0	0
AluSepABC000664	180138	REGULATEUR 22	2005-09-18 00:00:00	GD	97112	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	AA933	0	0	0	0	0	0
AluSepABC000665	180136	REGULATEUR 21	2005-09-18 00:00:00	GD	97111	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE846	0	0	0	0	0	0
AluSepABC000666	7853087	RÉGULATEUR #6	2005-09-18 00:00:00	GD	97108	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF153	0	0	0	0	0	0
AluSepABC000667	7853086	RÉGULATEUR #4	2005-09-16 00:00:00	GD	97104	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	43	\N	f	\N	\N	1	\N	\N	 	AA261	0	0	0	0	0	0
AluSepABC000668	7853088	REGULATEUR #5	2005-09-16 00:00:00	GD	97102	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	AA715	0	0	0	0	0	0
AluSepABC000669	7853085	RÉGULATEUR #3	2005-09-16 00:00:00	GD	97099	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE861	0	0	0	0	0	0
AluSepABC000670	7853084	RÉGULATEUR #2	2005-09-16 00:00:00	GD	97098	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	ak788	0	0	0	0	0	0
AluSepABC000671	7853083	RÉGULATEUR #1	2005-09-16 00:00:00	GD	97095	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AA633	0	0	0	0	0	0
AluSepABC000672	160087	REDRESSEUR 25	2005-09-16 00:00:00	GD	97077	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	6974	0	0	0	0	0	0
AluSepABC000673	160089	REDRESSEUR 24	2005-09-16 00:00:00	GD	97075	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	3247	0	0	0	0	0	0
AluSepABC000674	160090	REDRESSEUR 23	2005-09-16 00:00:00	GD	97073	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1126	0	0	0	0	0	0
AluSepABC000675	1132787	REDRESSEUR #7	2005-09-16 00:00:00	GD	97071	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.05 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AN544	0	0	0	0	0	0
AluSepABC000676	160086	REDRESSEUR 21	2005-09-16 00:00:00	GD	97070	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF542	0	0	0	0	0	0
AluSepABC000677	160088	REDRESSEUR 22	2005-09-16 00:00:00	GD	97068	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AB707	0	0	0	0	0	0
AluSepABC000678	51016112	REDRESSEUR #6	2005-09-15 00:00:00	GD	97066	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	AD328	0	0	0	0	0	0
AluSepABC000679	51016113	REDRESSEUR #5	2005-09-15 00:00:00	GD	97063	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	48	\N	f	\N	\N	1	\N	\N	 	4806	0	0	0	0	0	0
AluSepABC000680	51016111	REDRESSEUR #4	2005-09-15 00:00:00	GD	97060	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	4543	0	0	0	0	0	0
AluSepABC000681	51016110	REDRESSEUR #3	2005-09-15 00:00:00	GD	97059	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	AM972	0	0	0	0	0	0
AluSepABC000682	51016109	REDRESSEUR #1	2005-09-15 00:00:00	GD	97057	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0422	0	0	0	0	0	0
AluSepABC000683	51016108	REDRESSEUR #2	2005-09-15 00:00:00	GD	97056	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2770	0	0	0	0	0	0
AluSepABC000684	51016113	REDRESSEUR #5	2005-06-22 00:00:00	GD	94406	0	1	1	f	0	0	2005-06-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.07 cc	4	0	60	\N	f	\N	\N	1	\N	\N	 	0160	0	0	0	0	0	0
AluSepABC000685	B325-0174	TX CO # 104	2005-06-03 00:00:00	GD	93765	0	1	1	f	0	0	2005-05-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.60 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	4801	0	0	0	0	0	0
AluSepABC000686	A325-0174	TX CO # 103	2005-06-03 00:00:00	GD	93763	0	1	1	f	0	0	2005-05-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	0352	0	0	0	0	0	0
AluSepABC000687	1132787	REDRESSEUR #7	2005-05-18 00:00:00	GD	93189	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.30 cc	4	0	12	\N	f	\N	\N	1	\N	\N	 	2836	0	0	0	0	0	0
AluSepABC000688	51016112	REDRESSEUR #6	2005-05-18 00:00:00	GD	93188	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	1340	0	0	0	0	0	0
AluSepABC000689	51016113	REDRESSEUR #5	2005-05-18 00:00:00	GD	93177	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc.	4	0	24	\N	f	\N	\N	1	\N	\N	 	AA 862	0	0	0	0	0	0
AluSepABC001006	61-01-69834	AUXILIAIRE TA1	2001-08-03 00:00:00	GD	63401	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6216	0	0	0	0	0	0
AluSepABC000690	51016111	REDRESSEUR #4	2005-05-18 00:00:00	GD	93176	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	24	\N	f	\N	\N	1	\N	\N	 	6021	0	0	0	0	0	0
AluSepABC000691	51016110	REDRESSEUR #3	2005-05-18 00:00:00	GD	93170	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	19	\N	f	\N	\N	1	\N	\N	 	4265	0	0	0	0	0	0
AluSepABC000692	51016109	REDRESSEUR #1	2005-05-18 00:00:00	GD	93168	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	AF 438	0	0	0	0	0	0
AluSepABC000693	51016108	REDRESSEUR #2	2005-05-18 00:00:00	GD	93166	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	31	\N	f	\N	\N	1	\N	\N	 	2961	0	0	0	0	0	0
AluSepABC000694	7853088	REGULATEUR #5	2005-05-18 00:00:00	GD	93164	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	19	\N	f	\N	\N	1	\N	\N	 	2134	0	0	0	0	0	0
AluSepABC000695	7853087	RÉGULATEUR #6	2005-05-18 00:00:00	GD	93163	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	22	\N	f	\N	\N	1	\N	\N	 	AA 606	0	0	0	0	0	0
AluSepABC000696	7853086	RÉGULATEUR #4	2005-05-17 00:00:00	GD	93162	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	21	\N	f	\N	\N	1	\N	\N	 	0421	0	0	0	0	0	0
AluSepABC000697	7853085	RÉGULATEUR #3	2005-05-17 00:00:00	GD	93161	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	5840	0	0	0	0	0	0
AluSepABC000698	7853084	RÉGULATEUR #2	2005-05-17 00:00:00	GD	93159	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	8999	0	0	0	0	0	0
AluSepABC000699	7853083	RÉGULATEUR #1	2005-05-17 00:00:00	GD	93157	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	18	\N	f	\N	\N	1	\N	\N	 	0822	0	0	0	0	0	0
AluSepABC000700	61-0169835	AUXILIAIRE TA2	2005-05-17 00:00:00	GD	93156	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	10	\N	f	\N	\N	1	\N	\N	 	6179	0	0	0	0	0	0
AluSepABC000701	CL80011-101-0	AUXILIAIRE TA3	2005-05-17 00:00:00	GD	93154	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	11	\N	f	\N	\N	1	\N	\N	 	2399	0	0	0	0	0	0
AluSepABC000702	61-01-69834	AUXILIAIRE TA1	2005-05-17 00:00:00	GD	93151	0	1	1	f	0	0	2005-05-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	6	\N	f	\N	\N	1	\N	\N	 	8082	0	0	0	0	0	0
AluSepABC000703	CL80011-101-0	AUXILIAIRE TA3	2005-04-20 00:00:00	GD	92399	0	1	1	f	0	0	2005-04-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	10	\N	f	\N	\N	1	\N	\N	 	8081	0	0	0	0	0	0
AluSepABC000704	CL80011-101-0	AUXILIAIRE TA3	2005-04-20 00:00:00	GD	92398	0	1	1	f	0	0	2005-04-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	10	\N	f	\N	\N	1	\N	\N	 	AB 901	0	0	0	0	0	0
AluSepABC000705	CL80011-101-0	AUXILIAIRE TA3	2005-04-19 00:00:00	GD	92351	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	34	\N	f	\N	\N	1	\N	\N	 	1644	0	0	0	0	0	0
AluSepABC000706	CL80011-101-0	AUXILIAIRE TA3	2005-04-19 00:00:00	GD	92349	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	34	\N	f	\N	\N	1	\N	\N	 	2485	0	0	0	0	0	0
AluSepABC000707	CL80011-101-0	AUXILIAIRE TA3	2005-04-19 00:00:00	GD	92348	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	34	\N	f	\N	\N	1	\N	\N	 	4289	0	0	0	0	0	0
AluSepABC000708	51016108	REDRESSEUR #2	2005-04-07 00:00:00	GD	92131	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	6527	0	0	0	0	0	0
AluSepABC000709	180139	REGULATEUR 23	2005-04-07 00:00:00	GD	92130	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4339	0	0	0	0	0	0
AluSepABC000710	180139	REGULATEUR 23	2005-03-31 00:00:00	GD	91994	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	5	\N	f	\N	\N	1	\N	\N	 	A243	0	0	0	0	0	0
AluSepABC000711	180139	REGULATEUR 23	2005-03-31 00:00:00	GD	91993	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AC145	0	0	0	0	0	0
AluSepABC000712	180139	REGULATEUR 23	2005-03-31 00:00:00	GD	91992	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	4442	0	0	0	0	0	0
AluSepABC000713	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	GD	91903	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2616	0	0	0	0	0	0
AluSepABC000714	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	GD	91902	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2885	0	0	0	0	0	0
AluSepABC000715	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	GD	91901	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2104	0	0	0	0	0	0
AluSepABC000716	180140	REGULATEUR 24	2005-03-28 00:00:00	GD	91908	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AE470	0	0	0	0	0	0
AluSepABC000717	180140	REGULATEUR 24	2005-03-28 00:00:00	GD	91906	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AE655	0	0	0	0	0	0
AluSepABC000718	180140	REGULATEUR 24	2005-03-28 00:00:00	GD	91905	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AA388	0	0	0	0	0	0
AluSepABC000719	180136	REGULATEUR 21	2005-03-28 00:00:00	GD	91913	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	A331	0	0	0	0	0	0
AluSepABC000722	180138	REGULATEUR 22	2005-03-16 00:00:00	GD	91750	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	6611	0	0	0	0	0	0
AluSepABC000723	180138	REGULATEUR 22	2005-03-16 00:00:00	GD	91748	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4205	0	0	0	0	0	0
AluSepABC000724	180138	REGULATEUR 22	2005-03-16 00:00:00	GD	91746	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	0243	0	0	0	0	0	0
AluSepABC000725	180138	REGULATEUR 22	2005-03-11 00:00:00	GD	91718	0	1	1	f	0	0	2005-03-10 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	-5	\N	f	\N	\N	1	\N	\N	 	2629	0	0	0	0	0	0
AluSepABC000726	180138	REGULATEUR 22	2005-03-07 00:00:00	GD	91655	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	7672	0	0	0	0	0	0
AluSepABC000727	180138	REGULATEUR 22	2005-03-07 00:00:00	GD	91654	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	1084	0	0	0	0	0	0
AluSepABC000728	180138	REGULATEUR 22	2005-03-07 00:00:00	GD	91653	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	20	\N	f	\N	\N	1	\N	\N	 	2921	0	0	0	0	0	0
AluSepABC000729	51016108	REDRESSEUR #2	2005-03-01 00:00:00	GD	91564	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1898	0	0	0	0	0	0
AluSepABC000730	51016108	REDRESSEUR #2	2005-02-23 00:00:00	GD	91448	0	1	1	f	0	0	2005-02-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AF277	0	0	0	0	0	0
AluSepABC000731	51016108	REDRESSEUR #2	2005-02-23 00:00:00	GD	91449	0	1	1	f	0	0	2005-02-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	X389	0	0	0	0	0	0
AluSepABC000732	51016108	REDRESSEUR #2	2005-02-23 00:00:00	GD	91446	0	1	1	f	0	0	2005-02-09 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB932	0	0	0	0	0	0
AluSepABC000733	180137	REGULATEUR 25	2005-02-18 00:00:00	GD	91405	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	0	\N	f	\N	\N	1	\N	\N	 	AB587	0	0	0	0	0	0
AluSepABC000734	CL80011-101-0	AUXILIAIRE TA3	2005-02-16 00:00:00	GD	91384	0	1	1	f	0	0	2005-02-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	-13.5	\N	f	\N	\N	1	\N	\N	 	AE906	0	0	0	0	0	0
AluSepABC000735	180136	REGULATEUR 21	2005-02-14 00:00:00	GD	91345	0	1	1	f	0	0	2005-02-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9418	0	0	0	0	0	0
AluSepABC000736	51016108	REDRESSEUR #2	2005-02-11 00:00:00	GD	91330	0	1	1	f	0	0	2005-02-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	41	\N	f	\N	\N	1	\N	\N	 	0959	0	0	0	0	0	0
AluSepABC000737	51016108	REDRESSEUR #2	2005-02-11 00:00:00	GD	91329	0	1	1	f	0	0	2005-02-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	ae916	0	0	0	0	0	0
AluSepABC000738	51016108	REDRESSEUR #2	2005-02-11 00:00:00	GD	91328	0	1	1	f	0	0	2005-02-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF504	0	0	0	0	0	0
AluSepABC000739	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	GD	91291	0	1	1	f	0	0	2005-02-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.02 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	3476	0	0	0	0	0	0
AluSepABC000740	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	GD	91290	0	1	1	f	0	0	2005-02-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AE470	0	0	0	0	0	0
AluSepABC000741	51016108	REDRESSEUR #2	2005-02-07 00:00:00	GD	91281	0	1	1	f	0	0	2005-02-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB881	0	0	0	0	0	0
AluSepABC000742	51016108	REDRESSEUR #2	2005-02-07 00:00:00	GD	91280	0	1	1	f	0	0	2005-01-30 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	42	\N	f	\N	\N	1	\N	\N	 	4387	0	0	0	0	0	0
AluSepABC000743	51016108	REDRESSEUR #2	2005-02-07 00:00:00	GD	91282	0	1	1	f	0	0	2005-01-29 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	Y2616	0	0	0	0	0	0
AluSepABC000744	51016108	REDRESSEUR #2	2005-02-07 00:00:00	GD	91283	0	1	1	f	0	0	2005-01-26 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	X365	0	0	0	0	0	0
AluSepABC000745	180137	REGULATEUR 25	2005-02-04 00:00:00	GD	91270	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC000746	180137	REGULATEUR 25	2005-02-04 00:00:00	GD	91269	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC000747	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	GD	91268	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.02 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC000748	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	GD	91267	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.04 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC000749	51016108	REDRESSEUR #2	2005-02-03 00:00:00	GD	91241	0	1	1	f	0	0	2005-01-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	2807	0	0	0	0	0	0
AluSepABC000750	51016108	REDRESSEUR #2	2005-02-03 00:00:00	GD	91242	0	1	1	f	0	0	2005-01-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5246	0	0	0	0	0	0
AluSepABC000751	51016108	REDRESSEUR #2	2005-02-03 00:00:00	GD	91240	0	1	1	f	0	0	2005-01-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AA110	0	0	0	0	0	0
AluSepABC000752	51016108	REDRESSEUR #2	2005-02-03 00:00:00	GD	91243	0	1	1	f	0	0	2005-01-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	42	\N	f	\N	\N	1	\N	\N	 	AB999	0	0	0	0	0	0
AluSepABC000753	51016108	REDRESSEUR #2	2005-01-25 00:00:00	GD	91107	0	1	1	f	0	0	2005-01-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1636	0	0	0	0	0	0
AluSepABC000754	51016108	REDRESSEUR #2	2004-12-25 00:00:00	GD	90764	0	1	1	f	0	0	2004-12-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5161	0	0	0	0	0	0
AluSepABC000755	03G122761	TX EL22 # 242	2004-10-25 00:00:00	GD	89153	0	1	1	f	0	0	2004-10-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	aa834	0	0	0	0	0	0
AluSepABC000756	4046506001	TX PC # 171-A	2004-09-20 00:00:00	GD	88381	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	4430	0	0	0	0	0	0
AluSepABC000757	W0582-001	TX PC # 173-A	2004-09-20 00:00:00	GD	88378	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	6153	0	0	0	0	0	0
AluSepABC000758	91-03E7299-001	TX AL11 # 022	2004-09-20 00:00:00	GD	88380	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	38	\N	f	\N	\N	1	\N	\N	 	6100	0	0	0	0	0	0
AluSepABC000759	91-03E7299-003	TX AL11 # 021	2004-09-20 00:00:00	GD	88370	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.1 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4599	0	0	0	0	0	0
AluSepABC000760	A325-0175	TX AL11 # 023	2004-09-20 00:00:00	GD	88368	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.4 cc.	4	0	55	\N	f	\N	\N	1	\N	\N	 	2389	0	0	0	0	0	0
AluSepABC000761	91-03E7298-002	TX AL12 # 032	2004-09-20 00:00:00	GD	88366	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.4 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	7367	0	0	0	0	0	0
AluSepABC000762	B325-0175	TX AL12 # 033	2004-09-20 00:00:00	GD	88363	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.4 cc.	4	0	60	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC000763	91-03E7302-002	TX EL2 # 072	2004-09-17 00:00:00	GD	88334	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.07 cc.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1171	0	0	0	0	0	0
AluSepABC000764	91-03E7300-001	TX EL11 # 061	2004-09-17 00:00:00	GD	88331	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.04 cc.	4	0	30	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC000765	91-03E7302-004	TX EL2 # 071	2004-09-17 00:00:00	GD	88330	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.1 cc.	4	0	36	\N	f	\N	\N	1	\N	\N	 	6586	0	0	0	0	0	0
AluSepABC000766	91-03E7300-006	TX AL12 # 031	2004-09-17 00:00:00	GD	88362	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	7415	0	0	0	0	0	0
AluSepABC000767	91-03E7302-003	TX SGE # 042	2004-09-17 00:00:00	GD	88360	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	38	\N	f	\N	\N	1	\N	\N	 	AA388	0	0	0	0	0	0
AluSepABC000768	91-03E7303-001	TX EL11 # 064	2004-09-16 00:00:00	GD	88323	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	AB 811	0	0	0	0	0	0
AluSepABC000769	91-03E7303-002	TX EL11 # 063	2004-09-16 00:00:00	GD	88322	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	4565	0	0	0	0	0	0
AluSepABC000770	91-03E7300-002	TX EL11 # 062	2004-09-16 00:00:00	GD	88321	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	5220	0	0	0	0	0	0
AluSepABC000771	91-03E7344-001	TX EL2 # 073	2004-09-16 00:00:00	GD	88319	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	31	\N	f	\N	\N	1	\N	\N	 	9470	0	0	0	0	0	0
AluSepABC000772	91-03E7344-002	TX EL2 # 074	2004-09-16 00:00:00	GD	88316	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	2453	0	0	0	0	0	0
AluSepABC000773	91-03E7300-005	TX EL3 # 082	2004-09-16 00:00:00	GD	88299	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	36	\N	f	\N	\N	1	\N	\N	 	0678	0	0	0	0	0	0
AluSepABC000774	91-03E7300-003	TX EL3 # 081	2004-09-16 00:00:00	GD	88297	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.1 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AG 180	0	0	0	0	0	0
AluSepABC000775	91-03E7299-005	TX CO # 101	2004-09-16 00:00:00	GD	88295	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.1 cc.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 111	0	0	0	0	0	0
AluSepABC000776	91-03E7299-002	TX CO # 102	2004-09-16 00:00:00	GD	88293	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.2 cc.	4	0	32	\N	f	\N	\N	1	\N	\N	 	1498	0	0	0	0	0	0
AluSepABC000777	A325-0174	TX CO # 103	2004-09-16 00:00:00	GD	88292	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.3 cc.	4	0	47	\N	f	\N	\N	1	\N	\N	 	3898	0	0	0	0	0	0
AluSepABC000778	91-03E7301-003	TX MS # 131	2004-09-15 00:00:00	GD	88285	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	AF 718	0	0	0	0	0	0
AluSepABC000779	91-03E7302-005	TX CB # 121	2004-09-15 00:00:00	GD	88283	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	3995	0	0	0	0	0	0
AluSepABC000780	XC030-001	TX PC # 173-B	2004-09-15 00:00:00	GD	88265	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	4395	0	0	0	0	0	0
AluSepABC000781	91-03E7302-001	TX CB # 122	2004-09-15 00:00:00	GD	88264	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	1924	0	0	0	0	0	0
AluSepABC000782	SET6394-0101	TRANSFORMATEUR 77274	2004-09-15 00:00:00	GD	88261	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc	4	0	17	\N	f	\N	\N	1	\N	\N	 	AF 142	0	0	0	0	0	0
AluSepABC000783	B325-0174	TX CO # 104	2004-09-15 00:00:00	GD	88286	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.50 cc	4	0	38	\N	f	\N	\N	1	\N	\N	 	AE 774	0	0	0	0	0	0
AluSepABC000784	91-03E7301-006	TX NP # 142	2004-09-15 00:00:00	GD	88282	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	5995	0	0	0	0	0	0
AluSepABC000785	91-03E7301-005	TX NP # 141	2004-09-15 00:00:00	GD	88280	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	AF 716	0	0	0	0	0	0
AluSepABC000786	91-03E7300-004	TX HT # 151	2004-09-15 00:00:00	GD	88277	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 848	0	0	0	0	0	0
AluSepABC000787	91-03E7299-004	TX HT # 152	2004-09-15 00:00:00	GD	88276	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	37	\N	f	\N	\N	1	\N	\N	 	3897	0	0	0	0	0	0
AluSepABC000788	91-03E7301-002	TX FOA # 162	2004-09-15 00:00:00	GD	88274	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA 576	0	0	0	0	0	0
AluSepABC000789	91-03E7301-001	TX FOA # 161	2004-09-15 00:00:00	GD	88267	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	25	\N	f	\N	\N	1	\N	\N	 	AC 343	0	0	0	0	0	0
AluSepABC000790	91-03E7255-001	TX SGE # 041	2004-09-15 00:00:00	GD	88266	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	AO 169	0	0	0	0	0	0
AluSepABC000791	91-03E7301-004	TX SGE SPARE 77275	2004-09-15 00:00:00	GD	88263	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	20	\N	f	\N	\N	1	\N	\N	 	4314	0	0	0	0	0	0
AluSepABC000792	A325-0251	TRANSFORMATEUR 77227	2004-09-15 00:00:00	GD	88262	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	     	0	\N	\N	Bulle: 0.50 cc	4	0	15	\N	f	\N	\N	1	\N	\N	 	AC 739	0	0	0	0	0	0
AluSepABC000793	91-03E7298-001	TX SA # 091	2004-09-15 00:00:00	GD	88260	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.20 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC 224	0	0	0	0	0	0
AluSepABC000794	61-0169835	AUXILIAIRE TA2	2004-09-15 00:00:00	GD	88243	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	39	\N	f	\N	\N	1	\N	\N	 	AE 675	0	0	0	0	0	0
AluSepABC000795	61-01-69834	AUXILIAIRE TA1	2004-09-15 00:00:00	GD	88241	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	8804	0	0	0	0	0	0
AluSepABC000796	7853083	RÉGULATEUR #1	2004-09-15 00:00:00	GD	88239	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	AF 378	0	0	0	0	0	0
AluSepABC000797	7853084	RÉGULATEUR #2	2004-09-15 00:00:00	GD	88236	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	AG 108	0	0	0	0	0	0
AluSepABC000798	7853085	RÉGULATEUR #3	2004-09-15 00:00:00	GD	88233	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	M 1600	0	0	0	0	0	0
AluSepABC000799	7853086	RÉGULATEUR #4	2004-09-15 00:00:00	GD	88232	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	H 0136	0	0	0	0	0	0
AluSepABC000800	7853088	REGULATEUR #5	2004-09-14 00:00:00	GD	88230	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 978	0	0	0	0	0	0
AluSepABC000801	7853087	RÉGULATEUR #6	2004-09-14 00:00:00	GD	88229	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 981	0	0	0	0	0	0
AluSepABC000802	51016109	REDRESSEUR #1	2004-09-14 00:00:00	GD	88225	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE 542	0	0	0	0	0	0
AluSepABC000803	51016108	REDRESSEUR #2	2004-09-14 00:00:00	GD	88224	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	C 044	0	0	0	0	0	0
AluSepABC000804	51016110	REDRESSEUR #3	2004-09-14 00:00:00	GD	88222	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	2670	0	0	0	0	0	0
AluSepABC000805	51016111	REDRESSEUR #4	2004-09-14 00:00:00	GD	88220	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2637	0	0	0	0	0	0
AluSepABC000806	51016113	REDRESSEUR #5	2004-09-14 00:00:00	GD	88218	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	43	\N	f	\N	\N	1	\N	\N	 	6275	0	0	0	0	0	0
AluSepABC000807	51016112	REDRESSEUR #6	2004-09-14 00:00:00	GD	88216	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	AE 665	0	0	0	0	0	0
AluSepABC000808	1132787	REDRESSEUR #7	2004-09-14 00:00:00	GD	88215	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	2891	0	0	0	0	0	0
AluSepABC000809	91-03E7298-003	TX SA # 092	2004-09-10 00:00:00	GD	88085	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	0019	0	0	0	0	0	0
AluSepABC000810	61-01-69834	AUXILIAIRE TA1	2004-09-02 00:00:00	GD	87903	0	1	1	f	0	0	2004-09-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	S 0226	0	0	0	0	0	0
AluSepABC000811	7853086	RÉGULATEUR #4	2004-08-17 00:00:00	GD	87486	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0010	0	0	0	0	0	0
AluSepABC000812	51016111	REDRESSEUR #4	2004-08-17 00:00:00	GD	87485	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.05 cc.	4	0	50	\N	f	\N	\N	1	\N	\N	 	1377	0	0	0	0	0	0
AluSepABC000813	51016112	REDRESSEUR #6	2004-08-17 00:00:00	GD	87490	0	1	1	f	0	0	2004-06-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	5041	0	0	0	0	0	0
AluSepABC000814	51016112	REDRESSEUR #6	2004-08-17 00:00:00	GD	87488	0	1	1	f	0	0	2004-06-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	AB 988	0	0	0	0	0	0
AluSepABC000815	51016112	REDRESSEUR #6	2004-08-17 00:00:00	GD	87493	0	1	1	f	0	0	2004-06-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	G 220	0	0	0	0	0	0
AluSepABC000816	61-0169835	AUXILIAIRE TA2	2004-05-05 00:00:00	GD	84270	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	15	\N	f	\N	\N	1	\N	\N	 	1381	0	0	0	0	0	0
AluSepABC000817	61-01-69834	AUXILIAIRE TA1	2004-05-05 00:00:00	GD	84269	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc	4	0	35	\N	f	\N	\N	1	\N	\N	 	4783	0	0	0	0	0	0
AluSepABC000818	03G122761	TX EL22 # 242	2004-03-15 00:00:00	GD	83266	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-1	\N	f	\N	\N	1	\N	\N	 	1512	0	0	0	0	0	0
AluSepABC000819	03G122762	TX AL21 # 211	2004-03-15 00:00:00	GD	83265	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-1	\N	f	\N	\N	1	\N	\N	 	4482	0	0	0	0	0	0
AluSepABC000820	03G122765	TX AL22 # 222	2004-03-15 00:00:00	GD	83264	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-1	\N	f	\N	\N	1	\N	\N	 	2088	0	0	0	0	0	0
AluSepABC000821	61-0169835	AUXILIAIRE TA2	2003-11-04 00:00:00	GD	80645	0	1	1	f	0	0	2003-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	0978	0	0	0	0	0	0
AluSepABC000822	51016112	REDRESSEUR #6	2003-11-04 00:00:00	GD	80644	0	1	1	f	0	0	2003-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	3923	0	0	0	0	0	0
AluSepABC000823	61-01-69834	AUXILIAIRE TA1	2003-11-04 00:00:00	GD	80643	0	1	1	f	0	0	2003-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	4436	0	0	0	0	0	0
AluSepABC000824	51016112	REDRESSEUR #6	2003-11-04 00:00:00	GD	80641	0	1	1	f	0	0	2003-10-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	23	\N	f	\N	\N	1	\N	\N	 	3801	0	0	0	0	0	0
AluSepABC000825	61-01-69834	AUXILIAIRE TA1	2003-09-05 00:00:00	GD	79111	0	1	1	f	0	0	2003-08-26 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7690	0	0	0	0	0	0
AluSepABC000826	51016109	REDRESSEUR #1	2003-08-16 00:00:00	GD	78618	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2710	0	0	0	0	0	0
AluSepABC000827	7853087	RÉGULATEUR #6	2003-08-16 00:00:00	GD	78616	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	44	\N	f	\N	\N	1	\N	\N	 	7075	0	0	0	0	0	0
AluSepABC000828	7853088	REGULATEUR #5	2003-08-16 00:00:00	GD	78614	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0202	0	0	0	0	0	0
AluSepABC000829	7853086	RÉGULATEUR #4	2003-08-16 00:00:00	GD	78612	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2638	0	0	0	0	0	0
AluSepABC000830	7853083	RÉGULATEUR #1	2003-08-16 00:00:00	GD	78610	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	47	\N	f	\N	\N	1	\N	\N	 	AA 110	0	0	0	0	0	0
AluSepABC000831	7853085	RÉGULATEUR #3	2003-08-15 00:00:00	GD	78603	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7566	0	0	0	0	0	0
AluSepABC000832	7853084	RÉGULATEUR #2	2003-08-15 00:00:00	GD	78602	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.Bulle: 0.01 cc.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9146	0	0	0	0	0	0
AluSepABC000833	SET6394-0101	TRANSFORMATEUR 77274	2003-08-15 00:00:00	GD	78594	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.06 cc.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5073	0	0	0	0	0	0
AluSepABC000834	A325-0251	TRANSFORMATEUR 77227	2003-08-15 00:00:00	GD	78592	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.49 cc.	4	0	24	\N	f	\N	\N	1	\N	\N	 	6107	0	0	0	0	0	0
AluSepABC000835	91-03E7301-004	TX SGE SPARE 77275	2003-08-15 00:00:00	GD	78590	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	AA 767	0	0	0	0	0	0
AluSepABC000836	XC030-001	TX PC # 173-B	2003-08-15 00:00:00	GD	78586	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	6775	0	0	0	0	0	0
AluSepABC000837	51016111	REDRESSEUR #4	2003-08-15 00:00:00	GD	78585	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	47	\N	f	\N	\N	1	\N	\N	 	F 523	0	0	0	0	0	0
AluSepABC000838	51016110	REDRESSEUR #3	2003-08-15 00:00:00	GD	78584	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	9649	0	0	0	0	0	0
AluSepABC000839	91-03E7298-001	TX SA # 091	2003-08-15 00:00:00	GD	78597	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC000840	1132787	REDRESSEUR #7	2003-08-15 00:00:00	GD	78591	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle:0.01 cc.	4	0	48	\N	f	\N	\N	1	\N	\N	 	6016	0	0	0	0	0	0
AluSepABC000841	51016112	REDRESSEUR #6	2003-08-15 00:00:00	GD	78589	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4751	0	0	0	0	0	0
AluSepABC000842	91-03E7302-001	TX CB # 122	2003-08-15 00:00:00	GD	78588	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.04 cc.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC000843	51016113	REDRESSEUR #5	2003-08-15 00:00:00	GD	78587	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.16 cc.	4	0	46	\N	f	\N	\N	1	\N	\N	 	I 075	0	0	0	0	0	0
AluSepABC000844	91-03E7255-001	TX SGE # 041	2003-08-15 00:00:00	GD	78583	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	1579	0	0	0	0	0	0
AluSepABC000845	61-01-69834	AUXILIAIRE TA1	2003-08-15 00:00:00	GD	78600	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1598	0	0	0	0	0	0
AluSepABC000846	61-0169835	AUXILIAIRE TA2	2003-08-15 00:00:00	GD	78598	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2491	0	0	0	0	0	0
AluSepABC000847	51016108	REDRESSEUR #2	2003-08-14 00:00:00	GD	78582	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2926	0	0	0	0	0	0
AluSepABC000848	W0582-001	TX PC # 173-A	2003-08-14 00:00:00	GD	78539	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE: 0.04 CC	4	0	37	\N	f	\N	\N	1	\N	\N	 	4302	0	0	0	0	0	0
AluSepABC000849	4046506001	TX PC # 171-A	2003-08-14 00:00:00	GD	78535	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	G 0312	0	0	0	0	0	0
AluSepABC000850	B325-0174	TX CO # 104	2003-08-14 00:00:00	GD	78581	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.55 cc.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0242	0	0	0	0	0	0
AluSepABC000851	91-03E7301-001	TX FOA # 161	2003-08-14 00:00:00	GD	78580	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.03 cc.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1514	0	0	0	0	0	0
AluSepABC000852	A325-0174	TX CO # 103	2003-08-14 00:00:00	GD	78579	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.22 cc.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0341	0	0	0	0	0	0
AluSepABC000853	91-03E7301-002	TX FOA # 162	2003-08-14 00:00:00	GD	78578	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.27 cc.	4	0	33	\N	f	\N	\N	1	\N	\N	 	5055	0	0	0	0	0	0
AluSepABC000854	91-03E7299-002	TX CO # 102	2003-08-14 00:00:00	GD	78577	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.07 cc.	4	0	33	\N	f	\N	\N	1	\N	\N	 	7833	0	0	0	0	0	0
AluSepABC000855	91-03E7299-004	TX HT # 152	2003-08-14 00:00:00	GD	78576	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.33 cc.	4	0	45	\N	f	\N	\N	1	\N	\N	 	F 338	0	0	0	0	0	0
AluSepABC000856	91-03E7299-005	TX CO # 101	2003-08-14 00:00:00	GD	78575	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.08 cc.	4	0	34	\N	f	\N	\N	1	\N	\N	 	AA 432	0	0	0	0	0	0
AluSepABC000857	91-03E7300-004	TX HT # 151	2003-08-14 00:00:00	GD	78574	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.17 cc.	4	0	34	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC000858	91-03E7300-003	TX EL3 # 081	2003-08-14 00:00:00	GD	78573	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	6793	0	0	0	0	0	0
AluSepABC000859	91-03E7301-005	TX NP # 141	2003-08-14 00:00:00	GD	78572	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.01 cc.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AC 278	0	0	0	0	0	0
AluSepABC000860	91-03E7300-005	TX EL3 # 082	2003-08-14 00:00:00	GD	78571	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.15 cc.	4	0	36	\N	f	\N	\N	1	\N	\N	 	9781	0	0	0	0	0	0
AluSepABC000861	91-03E7301-006	TX NP # 142	2003-08-14 00:00:00	GD	78570	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	2909	0	0	0	0	0	0
AluSepABC000862	91-03E7298-003	TX SA # 092	2003-08-14 00:00:00	GD	78569	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	5862	0	0	0	0	0	0
AluSepABC000863	91-03E7302-005	TX CB # 121	2003-08-14 00:00:00	GD	78568	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.21 cc.	4	0	37	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC000864	91-03E7344-002	TX EL2 # 074	2003-08-14 00:00:00	GD	78567	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.35 cc.	4	0	43	\N	f	\N	\N	1	\N	\N	 	6439	0	0	0	0	0	0
AluSepABC000865	91-03E7301-003	TX MS # 131	2003-08-14 00:00:00	GD	78566	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.12 cc.	4	0	33	\N	f	\N	\N	1	\N	\N	 	6381	0	0	0	0	0	0
AluSepABC000866	91-03E7344-001	TX EL2 # 073	2003-08-14 00:00:00	GD	78565	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.15 cc.	4	0	43	\N	f	\N	\N	1	\N	\N	 	0301	0	0	0	0	0	0
AluSepABC000867	91-03E7300-002	TX EL11 # 062	2003-08-14 00:00:00	GD	78563	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	1992	0	0	0	0	0	0
AluSepABC000868	91-03E7303-002	TX EL11 # 063	2003-08-14 00:00:00	GD	78561	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.11 cc.	4	0	30	\N	f	\N	\N	1	\N	\N	 	F 239	0	0	0	0	0	0
AluSepABC000869	91-03E7303-001	TX EL11 # 064	2003-08-14 00:00:00	GD	78560	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	AB 411	0	0	0	0	0	0
AluSepABC000870	91-03E7300-001	TX EL11 # 061	2003-08-14 00:00:00	GD	78558	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.14 cc.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0869	0	0	0	0	0	0
AluSepABC000871	91-03E7302-004	TX EL2 # 071	2003-08-14 00:00:00	GD	78557	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.27 cc.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2479	0	0	0	0	0	0
AluSepABC000872	91-03E7302-002	TX EL2 # 072	2003-08-14 00:00:00	GD	78556	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	5621	0	0	0	0	0	0
AluSepABC000873	91-03E7302-003	TX SGE # 042	2003-08-14 00:00:00	GD	78555	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.10 cc.	4	0	37	\N	f	\N	\N	1	\N	\N	 	1816	0	0	0	0	0	0
AluSepABC000874	91-03E7300-006	TX AL12 # 031	2003-08-14 00:00:00	GD	78554	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.11 cc.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4093	0	0	0	0	0	0
AluSepABC000875	B325-0175	TX AL12 # 033	2003-08-14 00:00:00	GD	78553	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.47 cc.	4	0	60	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC000876	91-03E7298-002	TX AL12 # 032	2003-08-14 00:00:00	GD	78552	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.48 cc.	4	0	60	\N	f	\N	\N	1	\N	\N	 	5430	0	0	0	0	0	0
AluSepABC000877	A325-0175	TX AL11 # 023	2003-08-14 00:00:00	GD	78551	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle: 0.43 cc.	4	0	49	\N	f	\N	\N	1	\N	\N	 	AB 528	0	0	0	0	0	0
AluSepABC000878	91-03E7299-001	TX AL11 # 022	2003-08-14 00:00:00	GD	78550	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE: 0.12 CC	4	0	35	\N	f	\N	\N	1	\N	\N	 	B 1393	0	0	0	0	0	0
AluSepABC000879	91-03E7299-003	TX AL11 # 021	2003-08-14 00:00:00	GD	78541	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	AA 731	0	0	0	0	0	0
AluSepABC000880	61-0169835	AUXILIAIRE TA2	2003-06-11 00:00:00	GD	76649	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4630	0	0	0	0	0	0
AluSepABC000881	61-01-69834	AUXILIAIRE TA1	2003-06-11 00:00:00	GD	76648	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	2420	0	0	0	0	0	0
AluSepABC000882	7853087	RÉGULATEUR #6	2003-06-11 00:00:00	GD	76646	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	55	\N	f	\N	\N	1	\N	\N	 	4216	0	0	0	0	0	0
AluSepABC000883	7853088	REGULATEUR #5	2003-06-11 00:00:00	GD	76643	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	4249	0	0	0	0	0	0
AluSepABC000884	7853086	RÉGULATEUR #4	2003-06-10 00:00:00	GD	76642	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	55	\N	f	\N	\N	1	\N	\N	 	1104	0	0	0	0	0	0
AluSepABC000885	7853085	RÉGULATEUR #3	2003-06-10 00:00:00	GD	76640	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	55	\N	f	\N	\N	1	\N	\N	 	X 8639	0	0	0	0	0	0
AluSepABC000886	7853084	RÉGULATEUR #2	2003-06-10 00:00:00	GD	76638	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	55	\N	f	\N	\N	1	\N	\N	 	3270	0	0	0	0	0	0
AluSepABC000887	7853083	RÉGULATEUR #1	2003-06-10 00:00:00	GD	76637	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	55	\N	f	\N	\N	1	\N	\N	 	3442	0	0	0	0	0	0
AluSepABC000888	1132787	REDRESSEUR #7	2003-06-10 00:00:00	GD	76636	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4358	0	0	0	0	0	0
AluSepABC000889	51016112	REDRESSEUR #6	2003-06-10 00:00:00	GD	76635	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4307	0	0	0	0	0	0
AluSepABC000890	51016113	REDRESSEUR #5	2003-06-10 00:00:00	GD	76634	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle: 0.12 cc	4	0	50	\N	f	\N	\N	1	\N	\N	 	3084	0	0	0	0	0	0
AluSepABC000891	51016111	REDRESSEUR #4	2003-06-10 00:00:00	GD	76633	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC000892	51016110	REDRESSEUR #3	2003-06-10 00:00:00	GD	76632	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	S 0436	0	0	0	0	0	0
AluSepABC000893	51016108	REDRESSEUR #2	2003-06-10 00:00:00	GD	76629	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	2910	0	0	0	0	0	0
AluSepABC000894	51016109	REDRESSEUR #1	2003-06-10 00:00:00	GD	76627	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC000895	61-0169835	AUXILIAIRE TA2	2002-10-17 00:00:00	GD	72276	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	2458	0	0	0	0	0	0
AluSepABC000896	61-01-69834	AUXILIAIRE TA1	2002-10-17 00:00:00	GD	72270	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	* Fuite au dégazeur affectant l'oxygène, l'azote ainsi que le pourcentage total en gaz. Les autres gaz ne sont pas affectés par cette fuite.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2624	0	0	0	0	0	0
AluSepABC000897	A32S-0174	POSTE CO	2002-08-19 00:00:00	GD	70745	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.35 CC	4	0	40	\N	f	\N	\N	1	\N	\N	 	4656	0	0	0	0	0	0
AluSepABC000898	91-03E7302-002	TX EL2 # 072	2002-08-19 00:00:00	GD	70744	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.10 CC	4	0	31	\N	f	\N	\N	1	\N	\N	 	1145	0	0	0	0	0	0
AluSepABC000899	61-01-69834	AUXILIAIRE TA1	2002-08-19 00:00:00	GD	70743	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	54	\N	f	\N	\N	1	\N	\N	 	6926	0	0	0	0	0	0
AluSepABC000900	91-03E7302-004	TX EL2 # 071	2002-08-19 00:00:00	GD	70742	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.20 CC	4	0	35	\N	f	\N	\N	1	\N	\N	 	2439	0	0	0	0	0	0
AluSepABC000901	91-03E7344-001	TX EL2 # 073	2002-08-19 00:00:00	GD	70741	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.25 CC	4	0	39	\N	f	\N	\N	1	\N	\N	 	7433	0	0	0	0	0	0
AluSepABC000902	91-03E7344-002	TX EL2 # 074	2002-08-19 00:00:00	GD	70740	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.30 CC	4	0	41	\N	f	\N	\N	1	\N	\N	 	1502	0	0	0	0	0	0
AluSepABC000903	B32S-0174	POSTE CO-	2002-08-19 00:00:00	GD	70739	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.70 CC	4	0	40	\N	f	\N	\N	1	\N	\N	 	1922	0	0	0	0	0	0
AluSepABC000904	7853083	RÉGULATEUR #1	2002-08-19 00:00:00	GD	70732	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC000905	51016110	REDRESSEUR #3	2002-08-19 00:00:00	GD	70731	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2225	0	0	0	0	0	0
AluSepABC000906	7853086	RÉGULATEUR #4	2002-08-19 00:00:00	GD	70730	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	57	\N	f	\N	\N	1	\N	\N	 	2432	0	0	0	0	0	0
AluSepABC000907	51016111	REDRESSEUR #4	2002-08-19 00:00:00	GD	70729	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1525	0	0	0	0	0	0
AluSepABC000908	51016108	REDRESSEUR #2	2002-08-19 00:00:00	GD	70728	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	49	\N	f	\N	\N	1	\N	\N	 	7105	0	0	0	0	0	0
AluSepABC000909	51016109	REDRESSEUR #1	2002-08-19 00:00:00	GD	70723	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC000910	7853085	RÉGULATEUR #3	2002-08-19 00:00:00	GD	70722	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	58	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC000911	7853084	RÉGULATEUR #2	2002-08-19 00:00:00	GD	70719	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	65	\N	f	\N	\N	1	\N	\N	 	0169	0	0	0	0	0	0
AluSepABC000912	91-03E7300-006	TX AL12 # 031	2002-08-19 00:00:00	GD	70717	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.05 CC	4	0	37	\N	f	\N	\N	1	\N	\N	 	4645	0	0	0	0	0	0
AluSepABC000913	91-03E7303-001	TX EL11 # 064	2002-08-19 00:00:00	GD	70715	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.03 CC	4	0	31	\N	f	\N	\N	1	\N	\N	 	1773	0	0	0	0	0	0
AluSepABC000914	91-03E7300-001	TX EL11 # 061	2002-08-19 00:00:00	GD	70713	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.15 CC	4	0	35	\N	f	\N	\N	1	\N	\N	 	0295	0	0	0	0	0	0
AluSepABC000915	91-03E7298-002	TX AL12 # 032	2002-08-19 00:00:00	GD	70711	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.40 CC	4	0	69	\N	f	\N	\N	1	\N	\N	 	0052	0	0	0	0	0	0
AluSepABC000916	B32S-0175	TX AL12 # 033	2002-08-19 00:00:00	GD	70710	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.43 CC	4	0	60	\N	f	\N	\N	1	\N	\N	 	0989	0	0	0	0	0	0
AluSepABC000917	91-03E7301-003	TX MS # 131	2002-08-19 00:00:00	GD	70708	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2795	0	0	0	0	0	0
AluSepABC000918	91-03E7301-005	TX NP # 141	2002-08-19 00:00:00	GD	70705	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.07 CC	4	0	29	\N	f	\N	\N	1	\N	\N	 	F-149	0	0	0	0	0	0
AluSepABC000919	91-03E7255-001	TX SGE # 041	2002-08-17 00:00:00	GD	70704	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air: 0.10 cc	4	0	29	\N	f	\N	\N	1	\N	\N	 	2336	0	0	0	0	0	0
AluSepABC000920	91-03E7301-006	TX NP # 142	2002-08-17 00:00:00	GD	70699	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air: 0.03 cc	4	0	30	\N	f	\N	\N	1	\N	\N	 	B-270	0	0	0	0	0	0
AluSepABC000921	91-03E7302-005	TX CB # 121	2002-08-17 00:00:00	GD	70698	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air: 0.05 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	1814	0	0	0	0	0	0
AluSepABC000922	91-037299-003	TX AL11 # 021	2002-08-17 00:00:00	GD	70697	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air: 0.10 cc	4	0	40	\N	f	\N	\N	1	\N	\N	 	W-982	0	0	0	0	0	0
AluSepABC000923	91-03E7298-001	TX SA # 091	2002-08-17 00:00:00	GD	70696	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	0768	0	0	0	0	0	0
AluSepABC000924	91-03E7299-001	TX AL11 # 022	2002-08-17 00:00:00	GD	70694	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.10 CC	4	0	35	\N	f	\N	\N	1	\N	\N	 	4088	0	0	0	0	0	0
AluSepABC000925	91-03E7302-001	TX CB # 122	2002-08-17 00:00:00	GD	70692	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.10 CC	4	0	32	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC000926	4046506001	TX PC # 171-A	2002-08-16 00:00:00	GD	70690	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0089	0	0	0	0	0	0
AluSepABC000927	91-03E7300-003	TX EL3 # 081	2002-08-16 00:00:00	GD	70688	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.07 CC	4	0	40	\N	f	\N	\N	1	\N	\N	 	4893	0	0	0	0	0	0
AluSepABC000928	A325-0175	TX AL11 # 023	2002-08-16 00:00:00	GD	70686	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.37 CC	4	0	55	\N	f	\N	\N	1	\N	\N	 	0212	0	0	0	0	0	0
AluSepABC000929	XC030-001	TX PC # 173-B	2002-08-16 00:00:00	GD	70685	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	5118	0	0	0	0	0	0
AluSepABC000930	91-03E7300-005	TX EL3 # 082	2002-08-15 00:00:00	GD	70664	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	4442	0	0	0	0	0	0
AluSepABC000931	A325-0251	TRANSFORMATEUR 77227	2002-08-15 00:00:00	GD	70663	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.43 CC	4	0	20	\N	f	\N	\N	1	\N	\N	 	4672	0	0	0	0	0	0
AluSepABC000932	SET6394-0101	TRANSFORMATEUR 77274	2002-08-15 00:00:00	GD	70661	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.02 CC	4	0	20	\N	f	\N	\N	1	\N	\N	 	9214	0	0	0	0	0	0
AluSepABC000933	91-03E7301-004	TX SGE SPARE 77275	2002-08-15 00:00:00	GD	70659	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	C-036	0	0	0	0	0	0
AluSepABC000934	91-03E7302-003	TX SGE # 042	2002-08-15 00:00:00	GD	70658	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	4876	0	0	0	0	0	0
AluSepABC000935	W0582-001	TX PC # 173-A	2002-08-15 00:00:00	GD	70655	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.03 CC	4	0	40	\N	f	\N	\N	1	\N	\N	 	0837	0	0	0	0	0	0
AluSepABC000936	91-03E7298-003	TX SA # 092	2002-08-15 00:00:00	GD	70653	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	2125	0	0	0	0	0	0
AluSepABC000937	91-03E7301-001	TX FOA # 161	2002-08-15 00:00:00	GD	70651	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.20 CC	4	0	25	\N	f	\N	\N	1	\N	\N	 	0281	0	0	0	0	0	0
AluSepABC000938	91-03E7299-002	TX CO # 102	2002-08-15 00:00:00	GD	70649	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.30 CC	4	0	29	\N	f	\N	\N	1	\N	\N	 	0032	0	0	0	0	0	0
AluSepABC000939	91-03E7303-002	TX EL11 # 063	2002-08-14 00:00:00	GD	70646	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.03 CC	4	0	31	\N	f	\N	\N	1	\N	\N	 	2612	0	0	0	0	0	0
AluSepABC000940	91-03E7301-002	TX FOA # 162	2002-08-14 00:00:00	GD	70645	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.03 CC	4	0	30	\N	f	\N	\N	1	\N	\N	 	3989	0	0	0	0	0	0
AluSepABC000941	61-0169835	AUXILIAIRE TA2	2002-08-14 00:00:00	GD	70643	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	1804	0	0	0	0	0	0
AluSepABC000942	91-03E7300-004	TX HT # 151	2002-08-14 00:00:00	GD	70642	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	5612	0	0	0	0	0	0
AluSepABC000943	91-03E7300-002	TX EL11 # 062	2002-08-14 00:00:00	GD	70641	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	2359	0	0	0	0	0	0
AluSepABC000944	91-03E7299-005	TX CO # 101	2002-08-14 00:00:00	GD	70640	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.25 CC	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2917	0	0	0	0	0	0
AluSepABC000945	91-03E7299-004	TX HT # 152	2002-08-14 00:00:00	GD	70639	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.05 CC	4	0	41	\N	f	\N	\N	1	\N	\N	 	2163	0	0	0	0	0	0
AluSepABC000946	61-0169835	AUXILIAIRE TA2	2002-07-04 00:00:00	GD	69512	0	1	1	f	0	0	2002-06-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2477	0	0	0	0	0	0
AluSepABC000947	7853083	RÉGULATEUR #1	2002-06-20 00:00:00	GD	69117	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	2504	0	0	0	0	0	0
AluSepABC000948	51016109	REDRESSEUR #1	2002-06-20 00:00:00	GD	69115	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0315	0	0	0	0	0	0
AluSepABC000949	7853086	RÉGULATEUR #4	2002-06-20 00:00:00	GD	69113	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5536	0	0	0	0	0	0
AluSepABC000950	51016111	REDRESSEUR #4	2002-06-20 00:00:00	GD	69111	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2521	0	0	0	0	0	0
AluSepABC000951	51016113	REDRESSEUR #5	2002-06-20 00:00:00	GD	69108	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR: 0.95 CC	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0308	0	0	0	0	0	0
AluSepABC000952	51016112	REDRESSEUR #6	2002-06-20 00:00:00	GD	69107	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0388	0	0	0	0	0	0
AluSepABC000953	7853085	RÉGULATEUR #3	2002-06-19 00:00:00	GD	69099	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2363	0	0	0	0	0	0
AluSepABC000954	7853087	RÉGULATEUR #6	2002-06-19 00:00:00	GD	69096	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8065	0	0	0	0	0	0
AluSepABC000955	1132787	REDRESSEUR #7	2002-06-19 00:00:00	GD	69095	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	9310	0	0	0	0	0	0
AluSepABC000956	7853084	RÉGULATEUR #2	2002-06-19 00:00:00	GD	69092	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0491	0	0	0	0	0	0
AluSepABC000957	51016108	REDRESSEUR #2	2002-06-19 00:00:00	GD	69090	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	2400	0	0	0	0	0	0
AluSepABC000958	61-0169835	AUXILIAIRE TA2	2002-06-19 00:00:00	GD	69088	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	6235	0	0	0	0	0	0
AluSepABC000959	61-01-69834	AUXILIAIRE TA1	2002-06-19 00:00:00	GD	69087	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7323	0	0	0	0	0	0
AluSepABC000960	7853088	REGULATEUR #5	2002-06-19 00:00:00	GD	69085	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5271	0	0	0	0	0	0
AluSepABC000961	51016110	REDRESSEUR #3	2002-06-19 00:00:00	GD	69083	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2172	0	0	0	0	0	0
AluSepABC000962	51016109	REDRESSEUR #1	2002-03-21 00:00:00	GD	66737	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	I-078	0	0	0	0	0	0
AluSepABC000963	7853085	RÉGULATEUR #3	2002-03-21 00:00:00	GD	66736	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0672	0	0	0	0	0	0
AluSepABC000964	51016110	REDRESSEUR #3	2002-03-21 00:00:00	GD	66735	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2500	0	0	0	0	0	0
AluSepABC000965	7853083	RÉGULATEUR #1	2002-03-21 00:00:00	GD	66734	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8026	0	0	0	0	0	0
AluSepABC000966	51016111	REDRESSEUR #4	2002-03-21 00:00:00	GD	66733	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2430	0	0	0	0	0	0
AluSepABC000967	51016113	REDRESSEUR #5	2002-03-21 00:00:00	GD	66732	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2668	0	0	0	0	0	0
AluSepABC000968	51016112	REDRESSEUR #6	2002-03-21 00:00:00	GD	66731	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7088	0	0	0	0	0	0
AluSepABC000969	51016108	REDRESSEUR #2	2002-03-21 00:00:00	GD	66730	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	4358	0	0	0	0	0	0
AluSepABC000970	7853087	RÉGULATEUR #6	2002-03-21 00:00:00	GD	66729	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2476	0	0	0	0	0	0
AluSepABC000971	7853084	RÉGULATEUR #2	2002-03-21 00:00:00	GD	66728	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC000972	7853088	REGULATEUR #5	2002-03-21 00:00:00	GD	66727	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	6624	0	0	0	0	0	0
AluSepABC000973	61-01-69834	AUXILIAIRE TA1	2002-03-21 00:00:00	GD	66726	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	5727	0	0	0	0	0	0
AluSepABC000974	7853086	RÉGULATEUR #4	2002-03-21 00:00:00	GD	66725	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	30	\N	f	\N	\N	1	\N	\N	 	0596	0	0	0	0	0	0
AluSepABC000975	61-0169835	AUXILIAIRE TA2	2002-03-21 00:00:00	GD	66724	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	2328	0	0	0	0	0	0
AluSepABC000976	4046506001	TX PC # 171-A	2001-11-14 00:00:00	GD	65165	0	1	1	f	0	0	2001-11-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	2580	0	0	0	0	0	0
AluSepABC000977	W0582-001	TX PC # 173-A	2001-11-14 00:00:00	GD	65139	0	1	1	f	0	0	2001-11-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	0743	0	0	0	0	0	0
AluSepABC000978	7853087	RÉGULATEUR #6	2001-11-14 00:00:00	GD	65170	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	B-519	0	0	0	0	0	0
AluSepABC000979	51016110	REDRESSEUR #3	2001-11-14 00:00:00	GD	65169	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	42	\N	f	\N	\N	1	\N	\N	 	0399	0	0	0	0	0	0
AluSepABC000980	7853083	RÉGULATEUR #1	2001-11-14 00:00:00	GD	65168	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	38	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC000981	7853085	RÉGULATEUR #3	2001-11-14 00:00:00	GD	65167	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0968	0	0	0	0	0	0
AluSepABC000982	51016111	REDRESSEUR #4	2001-11-14 00:00:00	GD	65166	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	7927	0	0	0	0	0	0
AluSepABC000983	51016112	REDRESSEUR #6	2001-11-14 00:00:00	GD	65154	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	42	\N	f	\N	\N	1	\N	\N	 	1805	0	0	0	0	0	0
AluSepABC000984	51016109	REDRESSEUR #1	2001-11-14 00:00:00	GD	65153	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0559	0	0	0	0	0	0
AluSepABC000985	7853088	REGULATEUR #5	2001-11-14 00:00:00	GD	65149	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	5825	0	0	0	0	0	0
AluSepABC000986	51016113	REDRESSEUR #5	2001-11-14 00:00:00	GD	65148	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air 0.10 cc	4	0	46	\N	f	\N	\N	1	\N	\N	 	7581	0	0	0	0	0	0
AluSepABC000987	1132787	REDRESSEUR #7	2001-11-14 00:00:00	GD	65142	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	6656	0	0	0	0	0	0
AluSepABC000988	7853084	RÉGULATEUR #2	2001-11-14 00:00:00	GD	65141	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	5295	0	0	0	0	0	0
AluSepABC000989	51016108	REDRESSEUR #2	2001-11-14 00:00:00	GD	65140	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	V-1321	0	0	0	0	0	0
AluSepABC000990	7853086	RÉGULATEUR #4	2001-11-14 00:00:00	GD	65137	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	*: Concentration > 3900ppm. Pas de résultat plus précis. Notre instrument saturé.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2659	0	0	0	0	0	0
AluSepABC000991	61-0169835	AUXILIAIRE TA2	2001-08-03 00:00:00	GD	63404	0	1	1	f	0	0	2001-07-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	51	\N	f	\N	\N	1	\N	\N	 	5605	0	0	0	0	0	0
AluSepABC000992	91-03E7300-004	TX HT # 151	2001-08-03 00:00:00	GD	63433	0	1	1	f	0	0	2001-07-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle d'air 0.10cc	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6003	0	0	0	0	0	0
AluSepABC000993	7853086	RÉGULATEUR #4	2001-08-03 00:00:00	GD	63439	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2306	0	0	0	0	0	0
AluSepABC000994	7853083	RÉGULATEUR #1	2001-08-03 00:00:00	GD	63438	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0432	0	0	0	0	0	0
AluSepABC000995	7853087	RÉGULATEUR #6	2001-08-03 00:00:00	GD	63437	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2631	0	0	0	0	0	0
AluSepABC000996	7853088	REGULATEUR #5	2001-08-03 00:00:00	GD	63436	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2311	0	0	0	0	0	0
AluSepABC000997	51016112	REDRESSEUR #6	2001-08-03 00:00:00	GD	63435	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1383	0	0	0	0	0	0
AluSepABC000998	51016109	REDRESSEUR #1	2001-08-03 00:00:00	GD	63421	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0081	0	0	0	0	0	0
AluSepABC000999	51016113	REDRESSEUR #5	2001-08-03 00:00:00	GD	63420	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air 0.20 cc	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7722	0	0	0	0	0	0
AluSepABC001000	A32S0251	SPARE 77227	2001-08-03 00:00:00	GD	63408	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air 0.37 cc	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7005	0	0	0	0	0	0
AluSepABC001002	XC030-001	TX PC # 173-B	2001-08-03 00:00:00	GD	63406	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2757	0	0	0	0	0	0
AluSepABC001003	91-03E7301-004	TX SGE SPARE 77275	2001-08-03 00:00:00	GD	63405	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0732	0	0	0	0	0	0
AluSepABC001004	1132787	REDRESSEUR #7	2001-08-03 00:00:00	GD	63403	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9158	0	0	0	0	0	0
AluSepABC001005	6394-0101	SPARE 77274	2001-08-03 00:00:00	GD	63402	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	bulle d'air 0.05 cc	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0.422	0	0	0	0	0	0
AluSepABC001007	51016111	REDRESSEUR #4	2001-08-03 00:00:00	GD	63400	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2377	0	0	0	0	0	0
ALUSEPMS 000006	160087	REDRESSEUR 25	2006-11-08 00:00:00	EAU	112678	0	4	1	f	0	\N	2006-11-04 08:00:00	\r\nTemp. ambiante (°C) =  0, Pression =  0\r\n"Diagnostic du laboratoire :"		f	f	GE Syprotec	\N	\N			0		\N		4	85	28	\N	f	 	0	1	5		A venir		0	0	0	0	0	0
AluSepABC001008	7853085	RÉGULATEUR #3	2001-08-03 00:00:00	GD	63399	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4148	0	0	0	0	0	0
AluSepABC001009	51016108	REDRESSEUR #2	2001-08-03 00:00:00	GD	63398	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	3030	0	0	0	0	0	0
AluSepABC001010	7853084	RÉGULATEUR #2	2001-08-03 00:00:00	GD	63397	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1730	0	0	0	0	0	0
AluSepABC001011	51016112	REDRESSEUR #6	2001-08-03 00:00:00	GD	63434	0	1	1	f	0	0	2001-06-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	1498	0	0	0	0	0	0
AluSepABC001012	7853083	RÉGULATEUR #1	2001-03-22 00:00:00	GD	60207	0	1	1	f	0	0	2001-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	C040	0	0	0	0	0	0
AluSepABC001013	7853088	REGULATEUR #5	2001-03-21 00:00:00	GD	60123	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4829	0	0	0	0	0	0
AluSepABC001014	51016111	REDRESSEUR #4	2001-03-21 00:00:00	GD	60122	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0496	0	0	0	0	0	0
AluSepABC001015	51016112	REDRESSEUR #6	2001-03-21 00:00:00	GD	60121	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	36	\N	f	\N	\N	1	\N	\N	 	1616	0	0	0	0	0	0
AluSepABC001016	51016113	REDRESSEUR #5	2001-03-21 00:00:00	GD	60120	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	1605	0	0	0	0	0	0
AluSepABC001017	51016108	REDRESSEUR #2	2001-03-21 00:00:00	GD	60119	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	5260	0	0	0	0	0	0
AluSepABC001018	7853087	RÉGULATEUR #6	2001-03-21 00:00:00	GD	60118	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1835	0	0	0	0	0	0
AluSepABC001019	51016110	REDRESSEUR #3	2001-03-21 00:00:00	GD	60117	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	5150	0	0	0	0	0	0
AluSepABC001020	7853085	RÉGULATEUR #3	2001-03-21 00:00:00	GD	60116	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0789	0	0	0	0	0	0
AluSepABC001021	7853086	RÉGULATEUR #4	2001-03-21 00:00:00	GD	60115	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0461	0	0	0	0	0	0
AluSepABC001022	7853084	RÉGULATEUR #2	2001-03-21 00:00:00	GD	60114	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4683	0	0	0	0	0	0
AluSepABC001023	51016109	REDRESSEUR #1	2001-03-21 00:00:00	GD	60113	0	1	1	f	0	0	2001-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0456	0	0	0	0	0	0
AluSepABC001024	51016112	REDRESSEUR #6	2001-01-12 00:00:00	GD	59508	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0649	0	0	0	0	0	0
AluSepABC001025	51016110	REDRESSEUR #3	2001-01-12 00:00:00	GD	59507	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	38	\N	f	\N	\N	1	\N	\N	 	3949	0	0	0	0	0	0
AluSepABC001026	7853085	RÉGULATEUR #3	2001-01-12 00:00:00	GD	59506	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	4872	0	0	0	0	0	0
AluSepABC001027	51016108	REDRESSEUR #2	2001-01-12 00:00:00	GD	59505	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	5059	0	0	0	0	0	0
AluSepABC001028	51016111	REDRESSEUR #4	2001-01-12 00:00:00	GD	59504	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	46	\N	f	\N	\N	1	\N	\N	 	3485	0	0	0	0	0	0
AluSepABC001029	51016113	REDRESSEUR #5	2001-01-12 00:00:00	GD	59503	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	0723	0	0	0	0	0	0
AluSepABC001030	7853088	REGULATEUR #5	2001-01-12 00:00:00	GD	59502	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	38	\N	f	\N	\N	1	\N	\N	 	0639	0	0	0	0	0	0
AluSepABC001031	7853084	RÉGULATEUR #2	2001-01-12 00:00:00	GD	59501	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	W649	0	0	0	0	0	0
AluSepABC001032	7853086	RÉGULATEUR #4	2001-01-12 00:00:00	GD	59500	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2245	0	0	0	0	0	0
AluSepABC001033	7853087	RÉGULATEUR #6	2001-01-12 00:00:00	GD	59499	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	39	\N	f	\N	\N	1	\N	\N	 	9075	0	0	0	0	0	0
AluSepABC001034	7853083	RÉGULATEUR #1	2001-01-12 00:00:00	GD	59498	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	42	\N	f	\N	\N	1	\N	\N	 	W100	0	0	0	0	0	0
AluSepABC001035	51016109	REDRESSEUR #1	2001-01-12 00:00:00	GD	59497	0	1	1	f	0	0	2001-01-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0590	0	0	0	0	0	0
AluSepABC001036	7853084	RÉGULATEUR #2	2000-11-02 00:00:00	GD	58606	0	1	1	f	0	0	2000-10-30 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	53	\N	f	\N	\N	1	\N	\N	 	0593	0	0	0	0	0	0
AluSepABC001037	7853084	RÉGULATEUR #2	2000-10-26 00:00:00	GD	58494	0	1	1	f	0	0	2000-10-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	49	\N	f	\N	\N	1	\N	\N	 	W-698	0	0	0	0	0	0
AluSepABC001038	7853084	RÉGULATEUR #2	2000-10-06 00:00:00	GD	58199	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	A274	0	0	0	0	0	0
AluSepABC001039	7853083	RÉGULATEUR #1	2000-10-06 00:00:00	GD	58198	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	49	\N	f	\N	\N	1	\N	\N	 	6754	0	0	0	0	0	0
AluSepABC001040	7853086	RÉGULATEUR #4	2000-10-06 00:00:00	GD	58197	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1956	0	0	0	0	0	0
AluSepABC001041	7853085	RÉGULATEUR #3	2000-10-06 00:00:00	GD	58196	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	53	\N	f	\N	\N	1	\N	\N	 	9439	0	0	0	0	0	0
AluSepABC001042	51016109	REDRESSEUR #1	2000-10-06 00:00:00	GD	58195	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC001043	1132787	REDRESSEUR #7	2000-10-06 00:00:00	GD	58194	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	H954	0	0	0	0	0	0
AluSepABC001044	51016108	REDRESSEUR #2	2000-10-06 00:00:00	GD	58193	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	6205	0	0	0	0	0	0
AluSepABC001045	51016111	REDRESSEUR #4	2000-10-06 00:00:00	GD	58192	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0201	0	0	0	0	0	0
AluSepABC001046	61-01-69834	AUXILIAIRE TA1	2000-10-06 00:00:00	GD	58190	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	0553	0	0	0	0	0	0
AluSepABC001047	61-0169835	AUXILIAIRE TA2	2000-10-06 00:00:00	GD	58189	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	1421	0	0	0	0	0	0
AluSepABC001048	7853088	REGULATEUR #5	2000-09-29 00:00:00	GD	58085	0	1	1	f	0	0	2000-09-29 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	4653	0	0	0	0	0	0
AluSepABC001049	51016113	REDRESSEUR #5	2000-09-29 00:00:00	GD	58069	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Bulle = 0.2 cc	4	0	45	\N	f	\N	\N	1	\N	\N	 	0903	0	0	0	0	0	0
AluSepABC001050	7853088	REGULATEUR #5	2000-09-29 00:00:00	GD	58068	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1811	0	0	0	0	0	0
AluSepABC001051	7853087	RÉGULATEUR #6	2000-09-29 00:00:00	GD	58057	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0700	0	0	0	0	0	0
AluSepABC001052	7853083	RÉGULATEUR #1	2000-08-16 00:00:00	GD	57283	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	1119	0	0	0	0	0	0
AluSepABC001053	7853084	RÉGULATEUR #2	2000-08-16 00:00:00	GD	57282	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	1279	0	0	0	0	0	0
AluSepABC001054	7853083	RÉGULATEUR #1	2000-07-13 00:00:00	GD	56661	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR 0.02 CC	4	0	49	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC001055	7853084	RÉGULATEUR #2	2000-07-13 00:00:00	GD	56660	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	1353	0	0	0	0	0	0
AluSepABC001056	7853085	RÉGULATEUR #3	2000-07-13 00:00:00	GD	56659	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	54	\N	f	\N	\N	1	\N	\N	 	0784	0	0	0	0	0	0
AluSepABC001057	7853086	RÉGULATEUR #4	2000-07-13 00:00:00	GD	56658	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	49	\N	f	\N	\N	1	\N	\N	 	1274	0	0	0	0	0	0
AluSepABC001058	7853088	REGULATEUR #5	2000-07-13 00:00:00	GD	56657	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1404	0	0	0	0	0	0
AluSepABC001059	7853087	RÉGULATEUR #6	2000-07-13 00:00:00	GD	56656	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	D-432	0	0	0	0	0	0
AluSepABC001060	1132787	REDRESSEUR #7	2000-07-13 00:00:00	GD	56655	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	1622	0	0	0	0	0	0
AluSepABC001061	51016109	REDRESSEUR #1	2000-05-03 00:00:00	GD	54939	0	1	1	f	0	0	2000-04-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2679	0	0	0	0	0	0
AluSepABC001062	51016111	REDRESSEUR #4	2000-05-03 00:00:00	GD	54938	0	1	1	f	0	0	2000-04-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0173	0	0	0	0	0	0
AluSepABC001063	51016113	REDRESSEUR #5	2000-05-03 00:00:00	GD	54937	0	1	1	f	0	0	2000-04-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D AIR 0.05 CC	4	0	44	\N	f	\N	\N	1	\N	\N	 	1055	0	0	0	0	0	0
AluSepABC001064	51016110	REDRESSEUR #3	2000-04-19 00:00:00	GD	54639	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0159	0	0	0	0	0	0
AluSepABC001065	51016111	REDRESSEUR #4	2000-04-19 00:00:00	GD	54638	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	3801	0	0	0	0	0	0
AluSepABC001066	51016113	REDRESSEUR #5	2000-04-19 00:00:00	GD	54637	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC001067	51016112	REDRESSEUR #6	2000-04-19 00:00:00	GD	54636	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4603	0	0	0	0	0	0
AluSepABC001068	51016109	REDRESSEUR #1	2000-04-19 00:00:00	GD	54609	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4607	0	0	0	0	0	0
AluSepABC001069	51016108	REDRESSEUR #2	2000-04-19 00:00:00	GD	54608	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	7743	0	0	0	0	0	0
AluSepABC001070	7853085	RÉGULATEUR #3	1999-07-21 00:00:00	GD	28685	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	57	\N	f	\N	\N	1	\N	\N	 	0325	0	0	0	0	0	0
AluSepABC001071	61-0169835	AUXILIAIRE TA2	1999-07-21 00:00:00	GD	28683	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	0282	0	0	0	0	0	0
AluSepABC001072	7853088	REGULATEUR #5	1999-07-21 00:00:00	GD	28684	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	0369	0	0	0	0	0	0
AluSepABC001073	7853086	RÉGULATEUR #4	1999-07-21 00:00:00	GD	28682	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0296	0	0	0	0	0	0
AluSepABC001074	7853087	RÉGULATEUR #6	1999-07-21 00:00:00	GD	28681	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0438	0	0	0	0	0	0
AluSepABC001075	51016113	REDRESSEUR #5	1999-07-21 00:00:00	GD	28680	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR 020 CC	4	0	50	\N	f	\N	\N	1	\N	\N	 	0462	0	0	0	0	0	0
AluSepABC001076	51016109	REDRESSEUR #1	1999-07-20 00:00:00	GD	28673	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0002	0	0	0	0	0	0
AluSepABC001077	51016108	REDRESSEUR #2	1999-07-20 00:00:00	GD	28672	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	48	\N	f	\N	\N	1	\N	\N	 	0114	0	0	0	0	0	0
AluSepABC001078	7853083	RÉGULATEUR #1	1999-07-20 00:00:00	GD	28666	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	52	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC001079	1132787	REDRESSEUR #7	1999-07-20 00:00:00	GD	28665	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	0434	0	0	0	0	0	0
AluSepABC001080	61-01-69834	AUXILIAIRE TA1	1999-07-20 00:00:00	GD	28664	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0411	0	0	0	0	0	0
AluSepABC001081	7853084	RÉGULATEUR #2	1999-07-20 00:00:00	GD	28637	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0358	0	0	0	0	0	0
AluSepABC001082	51016111	REDRESSEUR #4	1999-07-20 00:00:00	GD	28648	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'interprétation ci-jointe ne s'applique pas pour l'huile dégazée.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0276	0	0	0	0	0	0
AluSepABC001083	W0582-001	TX PC # 173-A	1999-03-05 00:00:00	GD	26406	0	1	1	f	0	0	1999-03-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration en CO et CO2 trop élevé. Une analyse de composé furanique est recommendé.	4	0	24	\N	f	\N	\N	1	\N	\N	 	1354	0	0	0	0	0	0
AluSepABC001084	61-01-69834	AUXILIAIRE TA1	1998-11-02 00:00:00	GD	25536	0	1	1	f	0	0	1998-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1131	0	0	0	0	0	0
AluSepABC001085	1132787	REDRESSEUR #7	1998-11-02 00:00:00	GD	25535	0	1	1	f	0	0	1998-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1616	0	0	0	0	0	0
AluSepABC001086	51016113	REDRESSEUR #5	1998-11-02 00:00:00	GD	25534	0	1	1	f	0	0	1998-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.05 ML	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5222	0	0	0	0	0	0
AluSepABC001087	61-0169835	AUXILIAIRE TA2	1998-11-02 00:00:00	GD	25533	0	1	1	f	0	0	1998-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2345	0	0	0	0	0	0
AluSepABC001088	51016108	REDRESSEUR #2	1998-09-11 00:00:00	GD	24926	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	48	\N	f	\N	\N	1	\N	\N	 	E0419	0	0	0	0	0	0
AluSepABC001089	51016110	REDRESSEUR #3	1998-09-11 00:00:00	GD	24925	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.02 ML.  L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	46	\N	f	\N	\N	1	\N	\N	 	7988	0	0	0	0	0	0
AluSepABC001090	7853086	RÉGULATEUR #4	1998-09-11 00:00:00	GD	24924	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	46	\N	f	\N	\N	1	\N	\N	 	A480	0	0	0	0	0	0
AluSepABC001091	7853085	RÉGULATEUR #3	1998-09-11 00:00:00	GD	24923	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	58	\N	f	\N	\N	1	\N	\N	 	4832	0	0	0	0	0	0
AluSepABC001092	51016109	REDRESSEUR #1	1998-09-11 00:00:00	GD	24922	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	0601	0	0	0	0	0	0
AluSepABC001093	61-0169835	AUXILIAIRE TA2	1998-09-11 00:00:00	GD	24921	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.05 ML	4	0	44	\N	f	\N	\N	1	\N	\N	 	8161	0	0	0	0	0	0
AluSepABC001094	1132787	REDRESSEUR #7	1998-09-11 00:00:00	GD	24920	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	V4563	0	0	0	0	0	0
AluSepABC001095	7853087	RÉGULATEUR #6	1998-09-11 00:00:00	GD	24919	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	45	\N	f	\N	\N	1	\N	\N	 	4268	0	0	0	0	0	0
AluSepABC001096	7853088	REGULATEUR #5	1998-09-11 00:00:00	GD	24918	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	42	\N	f	\N	\N	1	\N	\N	 	7626	0	0	0	0	0	0
AluSepABC001097	7853083	RÉGULATEUR #1	1998-09-11 00:00:00	GD	24917	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	55	\N	f	\N	\N	1	\N	\N	 	5100	0	0	0	0	0	0
AluSepABC001098	51016111	REDRESSEUR #4	1998-09-11 00:00:00	GD	24916	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	47	\N	f	\N	\N	1	\N	\N	 	9076	0	0	0	0	0	0
AluSepABC001099	7853084	RÉGULATEUR #2	1998-09-11 00:00:00	GD	24915	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	56	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC001100	51016112	REDRESSEUR #6	1998-09-11 00:00:00	GD	24914	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	42	\N	f	\N	\N	1	\N	\N	 	1965	0	0	0	0	0	0
AluSepABC001101	61-01-69834	AUXILIAIRE TA1	1998-09-11 00:00:00	GD	24913	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8132	0	0	0	0	0	0
AluSepABC001102	51016113	REDRESSEUR #5	1998-09-11 00:00:00	GD	24912	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.37 ML	4	0	46	\N	f	\N	\N	1	\N	\N	 	2538	0	0	0	0	0	0
AluSepABC001103	7853088	REGULATEUR #5	1998-05-27 00:00:00	GD	23049	0	1	1	f	0	0	1998-05-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.02 ML	4	0	40	\N	f	\N	\N	1	\N	\N	 	2210	0	0	0	0	0	0
AluSepABC001104	51016111	REDRESSEUR #4	1998-05-27 00:00:00	GD	23048	0	1	1	f	0	0	1998-05-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	48	\N	f	\N	\N	1	\N	\N	 	A277	0	0	0	0	0	0
AluSepABC001105	51016113	REDRESSEUR #5	1998-02-19 00:00:00	GD	21968	0	1	1	f	0	0	1998-02-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR = 0.43 ML	4	0	42	\N	f	\N	\N	1	\N	\N	 	2635	0	0	0	0	0	0
AluSepABC001509	61-01-69834	AUXILIAIRE TA1	2002-10-15 00:00:00	EAU	79693	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2624	0	0	0	0	0	0
AluSepABC001510	91-03E7301-005	TX NP # 141	2002-08-26 00:00:00	EAU	78346	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	F-149	0	0	0	0	0	0
AluSepABC001511	7853085	RÉGULATEUR #3	2002-08-26 00:00:00	EAU	78358	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC001512	7853088	REGULATEUR #5	2002-08-26 00:00:00	EAU	78357	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001513	7853084	RÉGULATEUR #2	2002-08-26 00:00:00	EAU	78356	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	65	\N	f	\N	\N	1	\N	\N	 	0169	0	0	0	0	0	0
AluSepABC001514	91-03E7300-006	TX AL12 # 031	2002-08-26 00:00:00	EAU	78355	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	4645	0	0	0	0	0	0
AluSepABC001515	91-03E7303-001	TX EL11 # 064	2002-08-26 00:00:00	EAU	78354	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1773	0	0	0	0	0	0
AluSepABC001516	91-03E7300-001	TX EL11 # 061	2002-08-26 00:00:00	EAU	78353	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0295	0	0	0	0	0	0
AluSepABC001517	91-03E7298-002	TX AL12 # 032	2002-08-26 00:00:00	EAU	78352	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	69	\N	f	\N	\N	1	\N	\N	 	0052	0	0	0	0	0	0
AluSepABC001518	B32S-0175	TX AL12 # 033	2002-08-26 00:00:00	EAU	78351	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	0989	0	0	0	0	0	0
AluSepABC001519	91-03E7301-006	TX NP # 142	2002-08-26 00:00:00	EAU	78343	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	B-270	0	0	0	0	0	0
AluSepABC001520	91-03E7255-001	TX SGE # 041	2002-08-26 00:00:00	EAU	78345	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	2336	0	0	0	0	0	0
AluSepABC001521	A32S-0174	POSTE CO	2002-08-26 00:00:00	EAU	78373	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4656	0	0	0	0	0	0
AluSepABC001522	51016109	REDRESSEUR #1	2002-08-26 00:00:00	EAU	78359	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC001523	91-03E7301-003	TX MS # 131	2002-08-26 00:00:00	EAU	78350	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2795	0	0	0	0	0	0
AluSepABC001524	91-03E7344-001	TX EL2 # 073	2002-08-26 00:00:00	EAU	78370	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	7433	0	0	0	0	0	0
AluSepABC001525	91-03E7344-002	TX EL2 # 074	2002-08-26 00:00:00	EAU	78371	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	1502	0	0	0	0	0	0
AluSepABC001526	B32S-0174	POSTE CO-	2002-08-26 00:00:00	EAU	78372	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1922	0	0	0	0	0	0
AluSepABC001527	51016108	REDRESSEUR #2	2002-08-26 00:00:00	EAU	78360	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	7105	0	0	0	0	0	0
AluSepABC001528	91-03E7302-004	TX EL2 # 071	2002-08-26 00:00:00	EAU	78369	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2439	0	0	0	0	0	0
AluSepABC001529	61-01-69834	AUXILIAIRE TA1	2002-08-26 00:00:00	EAU	78368	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	54	\N	f	\N	\N	1	\N	\N	 	6926	0	0	0	0	0	0
AluSepABC001530	7853083	RÉGULATEUR #1	2002-08-26 00:00:00	EAU	78367	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC001531	7853086	RÉGULATEUR #4	2002-08-26 00:00:00	EAU	78365	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	2432	0	0	0	0	0	0
AluSepABC001532	7853087	RÉGULATEUR #6	2002-08-26 00:00:00	EAU	78364	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	59	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001533	51016111	REDRESSEUR #4	2002-08-26 00:00:00	EAU	78363	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1525	0	0	0	0	0	0
AluSepABC001534	51016113	REDRESSEUR #5	2002-08-26 00:00:00	EAU	78362	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	58	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001535	51016112	REDRESSEUR #6	2002-08-26 00:00:00	EAU	78361	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001536	51016110	REDRESSEUR #3	2002-08-26 00:00:00	EAU	78366	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2225	0	0	0	0	0	0
AluSepABC001537	91-03E7302-002	TX EL2 # 072	2002-08-26 00:00:00	EAU	78374	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1145	0	0	0	0	0	0
AluSepABC001538	91-03E7303-002	TX EL11 # 063	2002-08-20 00:00:00	EAU	78216	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	2612	0	0	0	0	0	0
AluSepABC001539	SET6394-0101	TRANSFORMATEUR 77274	2002-08-20 00:00:00	EAU	78223	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	9214	0	0	0	0	0	0
AluSepABC001540	91-03E7301-004	TX SGE SPARE 77275	2002-08-20 00:00:00	EAU	78222	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	C-036	0	0	0	0	0	0
AluSepABC001541	91-03E7302-003	TX SGE # 042	2002-08-20 00:00:00	EAU	78221	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	4876	0	0	0	0	0	0
AluSepABC001542	W0582-001	TX PC # 173-A	2002-08-20 00:00:00	EAU	78220	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0837	0	0	0	0	0	0
AluSepABC001543	91-03E7298-003	TX SA # 092	2002-08-20 00:00:00	EAU	78219	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	2125	0	0	0	0	0	0
AluSepABC001544	A325-0251	TRANSFORMATEUR 77227	2002-08-20 00:00:00	EAU	78224	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4672	0	0	0	0	0	0
AluSepABC001545	91-03E7299-002	TX CO # 102	2002-08-20 00:00:00	EAU	78217	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	0032	0	0	0	0	0	0
AluSepABC001546	91-03E7301-001	TX FOA # 161	2002-08-20 00:00:00	EAU	78218	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	0281	0	0	0	0	0	0
AluSepABC001547	XC030-001	TX PC # 173-B	2002-08-20 00:00:00	EAU	78226	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.La concentration de l'eau est de 23 ppm dans le pot.	4	0	20	\N	f	\N	\N	1	\N	\N	 	5118	0	0	0	0	0	0
AluSepABC001548	A325-0175	TX AL11 # 023	2002-08-20 00:00:00	EAU	78227	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	0212	0	0	0	0	0	0
AluSepABC001549	91-03E7300-003	TX EL3 # 081	2002-08-20 00:00:00	EAU	78228	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4893	0	0	0	0	0	0
AluSepABC001550	4046506001	TX PC # 171-A	2002-08-20 00:00:00	EAU	78229	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0089	0	0	0	0	0	0
AluSepABC001551	91-03E7302-001	TX CB # 122	2002-08-20 00:00:00	EAU	78230	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC001552	91-03E7299-001	TX AL11 # 022	2002-08-20 00:00:00	EAU	78231	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4088	0	0	0	0	0	0
AluSepABC001553	91-03E7298-001	TX SA # 091	2002-08-20 00:00:00	EAU	78232	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0768	0	0	0	0	0	0
AluSepABC001554	91-037299-003	TX AL11 # 021	2002-08-20 00:00:00	EAU	78233	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	W-982	0	0	0	0	0	0
AluSepABC001555	91-03E7302-005	TX CB # 121	2002-08-20 00:00:00	EAU	78234	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1814	0	0	0	0	0	0
AluSepABC001556	91-03E7300-005	TX EL3 # 082	2002-08-20 00:00:00	EAU	78225	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4442	0	0	0	0	0	0
AluSepABC001557	91-03E7301-002	TX FOA # 162	2002-08-19 00:00:00	EAU	78176	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	3989	0	0	0	0	0	0
AluSepABC001558	91-03E7300-004	TX HT # 151	2002-08-19 00:00:00	EAU	78171	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	5612	0	0	0	0	0	0
AluSepABC001559	91-03E7299-004	TX HT # 152	2002-08-19 00:00:00	EAU	78172	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	2163	0	0	0	0	0	0
AluSepABC001560	91-03E7299-005	TX CO # 101	2002-08-19 00:00:00	EAU	78173	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2917	0	0	0	0	0	0
AluSepABC001561	61-0169835	AUXILIAIRE TA2	2002-08-19 00:00:00	EAU	78175	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	1804	0	0	0	0	0	0
AluSepABC001562	91-03E7300-002	TX EL11 # 062	2002-08-19 00:00:00	EAU	78174	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2359	0	0	0	0	0	0
AluSepABC001563	1132787	REDRESSEUR #7	2002-06-20 00:00:00	EAU	76527	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	9310	0	0	0	0	0	0
AluSepABC001564	51016108	REDRESSEUR #2	2002-06-20 00:00:00	EAU	76524	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2400	0	0	0	0	0	0
AluSepABC001565	51016110	REDRESSEUR #3	2002-06-20 00:00:00	EAU	76519	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2172	0	0	0	0	0	0
AluSepABC001566	7853088	REGULATEUR #5	2002-06-20 00:00:00	EAU	76521	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5271	0	0	0	0	0	0
AluSepABC001567	61-0169835	AUXILIAIRE TA2	2002-06-20 00:00:00	EAU	76523	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	6235	0	0	0	0	0	0
AluSepABC001568	7853084	RÉGULATEUR #2	2002-06-20 00:00:00	EAU	76525	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0491	0	0	0	0	0	0
AluSepABC001106	51016111	REDRESSEUR #4	1998-02-19 00:00:00	GD	21967	0	1	1	f	0	0	1998-02-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	46	\N	f	\N	\N	1	\N	\N	 	3897	0	0	0	0	0	0
AluSepABC001107	7853088	REGULATEUR #5	1998-02-19 00:00:00	GD	21966	0	1	1	f	0	0	1998-02-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'INTERPRÉTATION CI-JOINTE NE S'APPLIQUE PAS AUX HUILES DÉGAZÉES.	4	0	33	\N	f	\N	\N	1	\N	\N	 	6319	0	0	0	0	0	0
AluSepABC001108	7853085	RÉGULATEUR #3	1997-08-14 00:00:00	GD	20189	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	596	0	0	0	0	0	0
AluSepABC001109	7853087	RÉGULATEUR #6	1997-08-14 00:00:00	GD	20188	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0708	0	0	0	0	0	0
AluSepABC001110	51016111	REDRESSEUR #4	1997-08-14 00:00:00	GD	20185	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	063	0	0	0	0	0	0
AluSepABC001111	61-0169835	AUXILIAIRE TA2	1997-08-14 00:00:00	GD	20184	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	5944	0	0	0	0	0	0
AluSepABC001112	7853088	REGULATEUR #5	1997-08-14 00:00:00	GD	20183	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	4319	0	0	0	0	0	0
AluSepABC001113	61-01-69834	AUXILIAIRE TA1	1997-08-14 00:00:00	GD	20181	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	8639	0	0	0	0	0	0
AluSepABC001114	51016108	REDRESSEUR #2	1997-08-14 00:00:00	GD	20180	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	2602	0	0	0	0	0	0
AluSepABC001115	7853084	RÉGULATEUR #2	1997-08-14 00:00:00	GD	20179	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1253	0	0	0	0	0	0
AluSepABC001116	51016110	REDRESSEUR #3	1997-08-14 00:00:00	GD	20178	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	409	0	0	0	0	0	0
AluSepABC001117	7853083	RÉGULATEUR #1	1997-08-14 00:00:00	GD	20177	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8567	0	0	0	0	0	0
AluSepABC001118	7853086	RÉGULATEUR #4	1997-08-14 00:00:00	GD	20176	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	3662	0	0	0	0	0	0
AluSepABC001119	51016109	REDRESSEUR #1	1997-08-14 00:00:00	GD	20175	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	061	0	0	0	0	0	0
AluSepABC001120	1132787	REDRESSEUR #7	1997-08-14 00:00:00	GD	20174	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC001121	51016112	REDRESSEUR #6	1997-08-14 00:00:00	GD	20187	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001122	51016113	REDRESSEUR #5	1997-08-14 00:00:00	GD	20182	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	BULLE D'AIR=0.20 ML	4	0	50	\N	f	\N	\N	1	\N	\N	 	1133	0	0	0	0	0	0
AluSepABC001123	7853088	REGULATEUR #5	1997-05-02 00:00:00	GD	18792	0	1	1	f	0	0	1997-04-29 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	8493	0	0	0	0	0	0
AluSepABC001124	51016111	REDRESSEUR #4	1997-05-02 00:00:00	GD	18791	0	1	1	f	0	0	1997-04-29 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	F123	0	0	0	0	0	0
AluSepABC001125	7853088	REGULATEUR #5	1997-03-31 00:00:00	GD	22811	0	1	1	f	0	0	1997-03-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001126	51016111	REDRESSEUR #4	1997-03-31 00:00:00	GD	22769	0	1	1	f	0	0	1997-03-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001127	7853088	REGULATEUR #5	1997-02-21 00:00:00	GD	22812	0	1	1	f	0	0	1997-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001128	51016111	REDRESSEUR #4	1997-02-21 00:00:00	GD	22770	0	1	1	f	0	0	1997-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001129	7853088	REGULATEUR #5	1997-01-23 00:00:00	GD	22813	0	1	1	f	0	0	1997-01-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001130	51016111	REDRESSEUR #4	1997-01-23 00:00:00	GD	22771	0	1	1	f	0	0	1997-01-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001131	7853088	REGULATEUR #5	1996-12-19 00:00:00	GD	22814	0	1	1	f	0	0	1996-12-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001132	51016111	REDRESSEUR #4	1996-12-19 00:00:00	GD	22773	0	1	1	f	0	0	1996-12-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001133	1132787	REDRESSEUR #7	1996-12-19 00:00:00	GD	22756	0	1	1	f	0	0	1996-12-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001134	1132787	REDRESSEUR #7	1996-08-20 00:00:00	GD	22757	0	1	1	f	0	0	1996-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001135	7853085	RÉGULATEUR #3	1996-07-24 00:00:00	GD	22838	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001136	7853086	RÉGULATEUR #4	1996-07-24 00:00:00	GD	22828	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001137	7853087	RÉGULATEUR #6	1996-07-24 00:00:00	GD	22823	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001138	7853088	REGULATEUR #5	1996-07-24 00:00:00	GD	22815	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001139	51016110	REDRESSEUR #3	1996-07-24 00:00:00	GD	22786	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001140	51016111	REDRESSEUR #4	1996-07-24 00:00:00	GD	22774	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001141	51016113	REDRESSEUR #5	1996-07-24 00:00:00	GD	22763	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001142	51016112	REDRESSEUR #6	1996-07-24 00:00:00	GD	22758	0	1	1	f	0	0	1996-07-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001143	7853083	RÉGULATEUR #1	1996-07-23 00:00:00	GD	22843	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001144	7853084	RÉGULATEUR #2	1996-07-23 00:00:00	GD	22833	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001145	61-01-69834	AUXILIAIRE TA1	1996-07-23 00:00:00	GD	22806	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001146	61-0169835	AUXILIAIRE TA2	1996-07-23 00:00:00	GD	22801	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001147	51016109	REDRESSEUR #1	1996-07-23 00:00:00	GD	22796	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001148	51016108	REDRESSEUR #2	1996-07-23 00:00:00	GD	22791	0	1	1	f	0	0	1996-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001149	51016111	REDRESSEUR #4	1996-02-27 00:00:00	GD	22772	0	1	1	f	0	0	1996-02-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001150	7853085	RÉGULATEUR #3	1995-07-27 00:00:00	GD	22839	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001151	7853084	RÉGULATEUR #2	1995-07-27 00:00:00	GD	22834	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001152	7853086	RÉGULATEUR #4	1995-07-27 00:00:00	GD	22829	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001153	7853087	RÉGULATEUR #6	1995-07-27 00:00:00	GD	22824	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001154	7853088	REGULATEUR #5	1995-07-27 00:00:00	GD	22816	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001155	51016108	REDRESSEUR #2	1995-07-27 00:00:00	GD	22792	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001156	51016110	REDRESSEUR #3	1995-07-27 00:00:00	GD	22787	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001157	51016111	REDRESSEUR #4	1995-07-27 00:00:00	GD	22775	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001158	51016113	REDRESSEUR #5	1995-07-27 00:00:00	GD	22764	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001159	51016112	REDRESSEUR #6	1995-07-27 00:00:00	GD	22759	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001160	7853083	RÉGULATEUR #1	1995-07-26 00:00:00	GD	22844	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001161	61-01-69834	AUXILIAIRE TA1	1995-07-26 00:00:00	GD	22807	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001162	61-0169835	AUXILIAIRE TA2	1995-07-26 00:00:00	GD	22802	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001163	51016109	REDRESSEUR #1	1995-07-26 00:00:00	GD	22797	0	1	1	f	0	0	1995-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001164	7853088	REGULATEUR #5	1995-05-24 00:00:00	GD	22817	0	1	1	f	0	0	1995-05-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001165	51016111	REDRESSEUR #4	1995-05-24 00:00:00	GD	22776	0	1	1	f	0	0	1995-05-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001166	7853088	REGULATEUR #5	1995-02-28 00:00:00	GD	22818	0	1	1	f	0	0	1995-02-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001167	51016111	REDRESSEUR #4	1995-02-28 00:00:00	GD	22777	0	1	1	f	0	0	1995-02-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001168	51016113	REDRESSEUR #5	1995-02-20 00:00:00	GD	22765	0	1	1	f	0	0	1995-02-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001169	7853088	REGULATEUR #5	1994-11-17 00:00:00	GD	22819	0	1	1	f	0	0	1994-11-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001170	51016111	REDRESSEUR #4	1994-11-17 00:00:00	GD	22778	0	1	1	f	0	0	1994-11-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001171	51016111	REDRESSEUR #4	1994-09-08 00:00:00	GD	22780	0	1	1	f	0	0	1994-09-06 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001172	51016111	REDRESSEUR #4	1994-09-06 00:00:00	GD	22781	0	1	1	f	0	0	1994-09-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001173	7853088	REGULATEUR #5	1994-08-19 00:00:00	GD	22820	0	1	1	f	0	0	1994-08-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001174	51016111	REDRESSEUR #4	1994-08-19 00:00:00	GD	22782	0	1	1	f	0	0	1994-08-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001175	51016111	REDRESSEUR #4	1994-08-19 00:00:00	GD	22779	0	1	1	f	0	0	1994-08-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001176	61-01-69834	AUXILIAIRE TA1	1994-07-26 00:00:00	GD	22808	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001177	61-0169835	AUXILIAIRE TA2	1994-07-26 00:00:00	GD	22803	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001178	51016111	REDRESSEUR #4	1994-07-26 00:00:00	GD	22783	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001179	51016113	REDRESSEUR #5	1994-07-26 00:00:00	GD	22766	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001180	7853085	RÉGULATEUR #3	1994-07-25 00:00:00	GD	22840	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001181	7853086	RÉGULATEUR #4	1994-07-25 00:00:00	GD	22830	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001182	7853087	RÉGULATEUR #6	1994-07-25 00:00:00	GD	22825	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001183	51016109	REDRESSEUR #1	1994-07-25 00:00:00	GD	22798	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001184	51016108	REDRESSEUR #2	1994-07-25 00:00:00	GD	22793	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001185	51016110	REDRESSEUR #3	1994-07-25 00:00:00	GD	22788	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001186	51016112	REDRESSEUR #6	1994-07-25 00:00:00	GD	22760	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001187	7853083	RÉGULATEUR #1	1994-07-22 00:00:00	GD	22845	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001188	7853084	RÉGULATEUR #2	1994-07-22 00:00:00	GD	22835	0	1	1	f	0	0	1994-07-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001189	7853083	RÉGULATEUR #1	1993-08-05 00:00:00	GD	22846	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001190	7853085	RÉGULATEUR #3	1993-08-05 00:00:00	GD	22841	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001191	7853084	RÉGULATEUR #2	1993-08-05 00:00:00	GD	22836	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001192	7853086	RÉGULATEUR #4	1993-08-05 00:00:00	GD	22831	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001193	7853087	RÉGULATEUR #6	1993-08-05 00:00:00	GD	22826	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001194	7853088	REGULATEUR #5	1993-08-05 00:00:00	GD	22821	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001195	61-01-69834	AUXILIAIRE TA1	1993-08-05 00:00:00	GD	22809	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001196	61-0169835	AUXILIAIRE TA2	1993-08-05 00:00:00	GD	22804	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001197	51016109	REDRESSEUR #1	1993-08-05 00:00:00	GD	22799	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001198	51016108	REDRESSEUR #2	1993-08-05 00:00:00	GD	22794	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001199	51016110	REDRESSEUR #3	1993-08-05 00:00:00	GD	22789	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001200	51016111	REDRESSEUR #4	1993-08-05 00:00:00	GD	22784	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001201	51016113	REDRESSEUR #5	1993-08-05 00:00:00	GD	22767	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001202	51016112	REDRESSEUR #6	1993-08-05 00:00:00	GD	22761	0	1	1	f	0	0	1993-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001203	7853083	RÉGULATEUR #1	1992-11-09 00:00:00	GD	22847	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001204	7853085	RÉGULATEUR #3	1992-11-09 00:00:00	GD	22842	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001205	7853084	RÉGULATEUR #2	1992-11-09 00:00:00	GD	22837	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001206	7853086	RÉGULATEUR #4	1992-11-09 00:00:00	GD	22832	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001207	7853087	RÉGULATEUR #6	1992-11-09 00:00:00	GD	22827	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001208	7853088	REGULATEUR #5	1992-11-09 00:00:00	GD	22822	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001209	61-01-69834	AUXILIAIRE TA1	1992-11-09 00:00:00	GD	22810	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001210	61-0169835	AUXILIAIRE TA2	1992-11-09 00:00:00	GD	22805	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001211	51016109	REDRESSEUR #1	1992-11-09 00:00:00	GD	22800	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001212	51016108	REDRESSEUR #2	1992-11-09 00:00:00	GD	22795	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001213	51016110	REDRESSEUR #3	1992-11-09 00:00:00	GD	22790	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001214	51016111	REDRESSEUR #4	1992-11-09 00:00:00	GD	22785	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001215	51016113	REDRESSEUR #5	1992-11-09 00:00:00	GD	22768	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001216	51016112	REDRESSEUR #6	1992-11-09 00:00:00	GD	22762	0	1	1	f	0	0	1992-11-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001217	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	BPC	14108	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La concentration en BPC est corrigée d'après les % de recouvrement suivants: 92, 90 et 100.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC001218	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	BPC	14107	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La concentration en BPC est corrigée d'après les % de recouvrement suivants: 92, 91 et 99.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC001219	180137	REGULATEUR 25	2005-02-07 00:00:00	BPC	14106	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La concentration en BPC est corrigée d'après les % de recouvrement suivants: 97, 95 et 103.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC001220	180137	REGULATEUR 25	2005-02-07 00:00:00	BPC	14105	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La concentration en BPC est corrigée d'après les % de recouvrement suivants: 93, 91 et 101.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC001221	51016108	REDRESSEUR #2	2005-01-26 00:00:00	BPC	14074	0	1	1	f	0	0	2005-01-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La concentration en BPC est corrigée d'après les % de recouvrement suivants: 90, 88 et 101.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1636	0	0	0	0	0	0
AluSepABC001222	61-0169835	AUXILIAIRE TA2	2003-06-12 00:00:00	BPC	11674	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	les % de recouvrement sont respectivement 99, 96 et 120.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4630	0	0	0	0	0	0
AluSepABC001223	61-01-69834	AUXILIAIRE TA1	2003-06-12 00:00:00	BPC	11675	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Les % de recouvrement sont respectivement 97, 94 et 121.	4	0	45	\N	f	\N	\N	1	\N	\N	 	2420	0	0	0	0	0	0
AluSepABC001224	91-03E7303-001	TX EL11 # 064	2002-08-19 00:00:00	BPC	10084	0	1	1	f	0	0	2002-08-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	1773	0	0	0	0	0	0
AluSepABC001225	91-03E7298-001	TX SA # 091	1997-08-01 00:00:00	BPC	537	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001226	180137-H1	REGULATEUR 25-H1	2006-03-21 00:00:00	EAU	106560	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AE929	0	0	0	0	0	0
AluSepABC001227	180137-H2	REGULATEUR 25-H2	2006-03-21 00:00:00	EAU	106559	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AJ463	0	0	0	0	0	0
AluSepABC001228	180137-H3	REGULATEUR 25-H3	2006-03-21 00:00:00	EAU	106561	0	1	1	f	0	0	2006-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AL844	0	0	0	0	0	0
AluSepABC001229	160087-H1	REDRESSEUR 25-H1	2006-02-28 00:00:00	EAU	106246	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AB962	0	0	0	0	0	0
AluSepABC001230	160087	REDRESSEUR 25	2006-02-28 00:00:00	EAU	106249	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	-7	\N	f	\N	\N	1	\N	\N	 	AF607	0	0	0	0	0	0
AluSepABC001231	160087-H2	REDRESSEUR 25-H2	2006-02-28 00:00:00	EAU	106247	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4867	0	0	0	0	0	0
AluSepABC001232	160087-H3	REDRESSEUR 25-H3	2006-02-28 00:00:00	EAU	106248	0	1	1	f	0	0	2006-02-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-7	\N	f	\N	\N	1	\N	\N	 	4138	0	0	0	0	0	0
AluSepABC001233	180138	REGULATEUR 22	2006-02-16 00:00:00	EAU	106152	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	G1157	0	0	0	0	0	0
AluSepABC001234	180139	REGULATEUR 23	2006-02-16 00:00:00	EAU	106153	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	0220	0	0	0	0	0	0
AluSepABC001235	180140	REGULATEUR 24	2006-02-15 00:00:00	EAU	106141	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	0852	0	0	0	0	0	0
AluSepABC001236	180137	REGULATEUR 25	2006-02-15 00:00:00	EAU	106139	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	5466	0	0	0	0	0	0
AluSepABC001237	160090	REDRESSEUR 23	2006-02-15 00:00:00	EAU	106143	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	8496	0	0	0	0	0	0
AluSepABC001238	180136	REGULATEUR 21	2006-02-15 00:00:00	EAU	106144	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	D210	0	0	0	0	0	0
AluSepABC001239	160086	REDRESSEUR 21	2006-02-15 00:00:00	EAU	106145	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF851	0	0	0	0	0	0
AluSepABC001240	160087	REDRESSEUR 25	2006-02-15 00:00:00	EAU	106150	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	4480	0	0	0	0	0	0
AluSepABC001241	160088	REDRESSEUR 22	2006-02-15 00:00:00	EAU	106138	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AL642	0	0	0	0	0	0
AluSepABC001242	160089	REDRESSEUR 24	2006-02-14 00:00:00	EAU	106123	0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF610	0	0	0	0	0	0
AluSepABC001243	180138	REGULATEUR 22	2005-11-29 00:00:00	EAU	104906	0	1	1	f	0	0	2005-11-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0443	0	0	0	0	0	0
AluSepABC001244	91-03E7301-004	TX SGE SPARE 77275	2005-09-27 00:00:00	EAU	102723	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	1100	0	0	0	0	0	0
AluSepABC001245	A32S0251	SPARE 77227	2005-09-27 00:00:00	EAU	102724	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	0018	0	0	0	0	0	0
AluSepABC001246	SET6394-0101	TRANSFORMATEUR 77274	2005-09-27 00:00:00	EAU	102725	0	1	1	f	0	0	2005-09-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	2736	0	0	0	0	0	0
AluSepABC001247	XC030-001	TX PC # 173-B	2005-09-13 00:00:00	EAU	102342	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	3476	0	0	0	0	0	0
AluSepABC001248	91-03E7303-002	TX EL11 # 063	2005-09-13 00:00:00	EAU	102333	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	3802	0	0	0	0	0	0
AluSepABC001249	91-03E7303-001	TX EL11 # 064	2005-09-13 00:00:00	EAU	102334	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE993	0	0	0	0	0	0
AluSepABC001250	91-03E7302-004	TX EL2 # 071	2005-09-13 00:00:00	EAU	102335	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0904	0	0	0	0	0	0
AluSepABC001251	91-03E7302-002	TX EL2 # 072	2005-09-13 00:00:00	EAU	102336	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AF696	0	0	0	0	0	0
AluSepABC001252	91-03E7344-001	TX EL2 # 073	2005-09-13 00:00:00	EAU	102337	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA489	0	0	0	0	0	0
AluSepABC001253	91-03E7344-002	TX EL2 # 074	2005-09-13 00:00:00	EAU	102338	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE754	0	0	0	0	0	0
AluSepABC001254	91-03E7302-005	TX CB # 121	2005-09-13 00:00:00	EAU	102339	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC417	0	0	0	0	0	0
AluSepABC001255	B3S6449	TX PC # 171-B	2005-09-13 00:00:00	EAU	102341	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2507	0	0	0	0	0	0
AluSepABC001256	03G122762	TX AL21 # 211	2005-09-13 00:00:00	EAU	102343	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5032	0	0	0	0	0	0
AluSepABC001257	03G122763	TX AL21 # 212	2005-09-13 00:00:00	EAU	102344	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AE324	0	0	0	0	0	0
AluSepABC001258	4046506001	TX PC # 171-A	2005-09-13 00:00:00	EAU	102358	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0461	0	0	0	0	0	0
AluSepABC001259	91-03E7302-001	TX CB # 122	2005-09-13 00:00:00	EAU	102340	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	V6939	0	0	0	0	0	0
AluSepABC001260	W0582-001	TX PC # 173-A	2005-09-13 00:00:00	EAU	102359	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2060	0	0	0	0	0	0
AluSepABC001261	03G122757	TX AL21 # 213	2005-09-13 00:00:00	EAU	102345	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	5367	0	0	0	0	0	0
AluSepABC001262	91-03E7301-003	TX MS # 131	2005-09-13 00:00:00	EAU	102357	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	1076	0	0	0	0	0	0
AluSepABC001263	91-03E7300-005	TX EL3 # 082	2005-09-13 00:00:00	EAU	102354	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0475	0	0	0	0	0	0
AluSepABC001264	91-03E7300-003	TX EL3 # 081	2005-09-13 00:00:00	EAU	102355	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AD353	0	0	0	0	0	0
AluSepABC001265	03G122759	TX AL23 # 271	2005-09-13 00:00:00	EAU	102353	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	3434	0	0	0	0	0	0
AluSepABC001266	03G122761	TX EL22 # 242	2005-09-13 00:00:00	EAU	102352	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AF630	0	0	0	0	0	0
AluSepABC001267	PA14201-001	TX EL22 # 241	2005-09-13 00:00:00	EAU	102351	0	1	1	f	0	0	2005-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5289	0	0	0	0	0	0
AluSepABC001268	03G122765	TX AL22 # 222	2005-09-13 00:00:00	EAU	102347	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4171	0	0	0	0	0	0
AluSepABC001269	B32S-0175	TX AL12 # 033	2005-09-13 00:00:00	EAU	102314	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	4682	0	0	0	0	0	0
AluSepABC001270	91-03E7255-001	TX SGE # 041	2005-09-13 00:00:00	EAU	102315	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	3326	0	0	0	0	0	0
AluSepABC001271	03G122764	TX AL22 # 221	2005-09-13 00:00:00	EAU	102346	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1178	0	0	0	0	0	0
AluSepABC001272	03G122758	TX AL22 # 223	2005-09-13 00:00:00	EAU	102348	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB880	0	0	0	0	0	0
AluSepABC001273	91-03E7300-006	TX AL12 # 031	2005-09-13 00:00:00	EAU	102329	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	A0283	0	0	0	0	0	0
AluSepABC001274	91-03E7298-002	TX AL12 # 032	2005-09-13 00:00:00	EAU	102330	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	65	\N	f	\N	\N	1	\N	\N	 	2386	0	0	0	0	0	0
AluSepABC001275	91-03E7300-001	TX EL11 # 061	2005-09-13 00:00:00	EAU	102331	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AE924	0	0	0	0	0	0
AluSepABC001276	91-03E7300-002	TX EL11 # 062	2005-09-13 00:00:00	EAU	102332	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	AE459	0	0	0	0	0	0
AluSepABC001277	03G122766	TX EL21 # 231	2005-09-13 00:00:00	EAU	102349	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC001278	03G122760	TX AL23 # 272	2005-09-13 00:00:00	EAU	102360	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	Y2830	0	0	0	0	0	0
AluSepABC001279	03G122767	TX EL21 # 232	2005-09-13 00:00:00	EAU	102350	0	1	1	f	0	0	2005-08-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4311	0	0	0	0	0	0
AluSepABC001280	180136	REGULATEUR 21	2005-09-13 00:00:00	EAU	102302	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AE846	0	0	0	0	0	0
AluSepABC001281	51016111	REDRESSEUR #4	2005-09-13 00:00:00	EAU	102286	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	4543	0	0	0	0	0	0
AluSepABC001282	7853088	REGULATEUR #5	2005-09-13 00:00:00	EAU	102300	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AA715	0	0	0	0	0	0
AluSepABC001283	7853086	RÉGULATEUR #4	2005-09-13 00:00:00	EAU	102299	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	AA261	0	0	0	0	0	0
AluSepABC001284	7853085	RÉGULATEUR #3	2005-09-13 00:00:00	EAU	102298	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE861	0	0	0	0	0	0
AluSepABC001285	7853083	RÉGULATEUR #1	2005-09-13 00:00:00	EAU	102296	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AA633	0	0	0	0	0	0
AluSepABC001286	160089	REDRESSEUR 24	2005-09-13 00:00:00	EAU	102294	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	3247	0	0	0	0	0	0
AluSepABC001287	160090	REDRESSEUR 23	2005-09-13 00:00:00	EAU	102293	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1126	0	0	0	0	0	0
AluSepABC001288	7853087	RÉGULATEUR #6	2005-09-13 00:00:00	EAU	102301	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF153	0	0	0	0	0	0
AluSepABC001289	160088	REDRESSEUR 22	2005-09-13 00:00:00	EAU	102292	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AB707	0	0	0	0	0	0
AluSepABC001290	160086	REDRESSEUR 21	2005-09-13 00:00:00	EAU	102290	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF542	0	0	0	0	0	0
AluSepABC001291	1132787	REDRESSEUR #7	2005-09-13 00:00:00	EAU	102289	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AN544	0	0	0	0	0	0
AluSepABC001292	51016109	REDRESSEUR #1	2005-09-13 00:00:00	EAU	102283	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	0422	0	0	0	0	0	0
AluSepABC001293	51016113	REDRESSEUR #5	2005-09-13 00:00:00	EAU	102287	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	4806	0	0	0	0	0	0
AluSepABC001294	51016110	REDRESSEUR #3	2005-09-13 00:00:00	EAU	102285	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	AM972	0	0	0	0	0	0
AluSepABC001295	51016108	REDRESSEUR #2	2005-09-13 00:00:00	EAU	102284	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2770	0	0	0	0	0	0
AluSepABC001296	7853084	RÉGULATEUR #2	2005-09-13 00:00:00	EAU	102297	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	ak788	0	0	0	0	0	0
AluSepABC001297	180138	REGULATEUR 22	2005-09-13 00:00:00	EAU	102303	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AA933	0	0	0	0	0	0
AluSepABC001298	51016112	REDRESSEUR #6	2005-09-13 00:00:00	EAU	102288	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AD328	0	0	0	0	0	0
AluSepABC001299	A325-0175	TX AL11 # 023	2005-09-13 00:00:00	EAU	102313	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AA468	0	0	0	0	0	0
AluSepABC001300	91-03E7299-004	TX HT # 152	2005-09-13 00:00:00	EAU	102326	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AC227	0	0	0	0	0	0
AluSepABC001301	91-03E7300-004	TX HT # 151	2005-09-13 00:00:00	EAU	102325	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Le contenu d'eau dans le pot: 41 ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	35	\N	f	\N	\N	1	\N	\N	 	4111	0	0	0	0	0	0
AluSepABC001302	91-03E7301-006	TX NP # 142	2005-09-13 00:00:00	EAU	102324	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC001303	91-03E7301-005	TX NP # 141	2005-09-13 00:00:00	EAU	102323	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	7803	0	0	0	0	0	0
AluSepABC001304	B32S-0174	POSTE CO-	2005-09-13 00:00:00	EAU	102322	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4651	0	0	0	0	0	0
AluSepABC001305	A32S-0174	POSTE CO	2005-09-13 00:00:00	EAU	102321	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4781	0	0	0	0	0	0
AluSepABC001306	91-03E7299-002	TX CO # 102	2005-09-13 00:00:00	EAU	102320	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AN125	0	0	0	0	0	0
AluSepABC001307	91-03E7299-005	TX CO # 101	2005-09-13 00:00:00	EAU	102319	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AM134	0	0	0	0	0	0
AluSepABC001308	91-03E7298-003	TX SA # 092	2005-09-13 00:00:00	EAU	102318	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0779	0	0	0	0	0	0
AluSepABC001309	180138	REGULATEUR 22	2005-09-13 00:00:00	EAU	102304	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AL755	0	0	0	0	0	0
AluSepABC001310	91-03E7302-003	TX SGE # 042	2005-09-13 00:00:00	EAU	102316	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AK635	0	0	0	0	0	0
AluSepABC001311	91-03E7301-001	TX FOA # 161	2005-09-13 00:00:00	EAU	102327	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	22	\N	f	\N	\N	1	\N	\N	 	AH735	0	0	0	0	0	0
AluSepABC001312	91-03E7299-001	TX AL11 # 022	2005-09-13 00:00:00	EAU	102312	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	AM431	0	0	0	0	0	0
AluSepABC001313	160087	REDRESSEUR 25	2005-09-13 00:00:00	EAU	102295	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	6974	0	0	0	0	0	0
AluSepABC001314	91-03E7299-003	TX AL11 # 021	2005-09-13 00:00:00	EAU	102311	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AK778	0	0	0	0	0	0
AluSepABC001315	91-03E7301-002	TX FOA # 162	2005-09-13 00:00:00	EAU	102328	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	5723	0	0	0	0	0	0
AluSepABC001316	CL80011-101-0	AUXILIAIRE TA3	2005-09-13 00:00:00	EAU	102310	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	1971	0	0	0	0	0	0
AluSepABC001317	61-0169835	AUXILIAIRE TA2	2005-09-13 00:00:00	EAU	102309	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2431	0	0	0	0	0	0
AluSepABC001318	61-01-69834	AUXILIAIRE TA1	2005-09-13 00:00:00	EAU	102307	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	AF245	0	0	0	0	0	0
AluSepABC001319	180137	REGULATEUR 25	2005-09-13 00:00:00	EAU	102306	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	AM470	0	0	0	0	0	0
AluSepABC001320	180140	REGULATEUR 24	2005-09-13 00:00:00	EAU	102305	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4561	0	0	0	0	0	0
AluSepABC001321	91-03E7298-001	TX SA # 091	2005-09-13 00:00:00	EAU	102317	0	1	1	f	0	0	2005-08-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	2390	0	0	0	0	0	0
AluSepABC001322	51016113	REDRESSEUR #5	2005-06-22 00:00:00	EAU	100010	0	1	1	f	0	0	2005-06-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	0160	0	0	0	0	0	0
AluSepABC001323	B325-0174	TX CO # 104	2005-06-03 00:00:00	EAU	99369	0	1	1	f	0	0	2005-05-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	4801	0	0	0	0	0	0
AluSepABC001324	A325-0174	TX CO # 103	2005-06-03 00:00:00	EAU	99367	0	1	1	f	0	0	2005-05-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0352	0	0	0	0	0	0
AluSepABC001325	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	EAU	98096	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	1644	0	0	0	0	0	0
AluSepABC001326	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	EAU	98095	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	2485	0	0	0	0	0	0
AluSepABC001327	CL80011-101-0	AUXILIAIRE TA3	2005-04-15 00:00:00	EAU	98094	0	1	1	f	0	0	2005-04-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	4289	0	0	0	0	0	0
AluSepABC001328	51016108	REDRESSEUR #2	2005-04-06 00:00:00	EAU	97944	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	6527	0	0	0	0	0	0
AluSepABC001329	180139	REGULATEUR 23	2005-04-06 00:00:00	EAU	97945	0	1	1	f	0	0	2005-04-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4339	0	0	0	0	0	0
AluSepABC001330	180139	REGULATEUR 23	2005-03-31 00:00:00	EAU	97889	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	AC145	0	0	0	0	0	0
AluSepABC001331	180139	REGULATEUR 23	2005-03-31 00:00:00	EAU	97890	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	A243	0	0	0	0	0	0
AluSepABC001332	180139	REGULATEUR 23	2005-03-31 00:00:00	EAU	97888	0	1	1	f	0	0	2005-03-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	5	\N	f	\N	\N	1	\N	\N	 	4442	0	0	0	0	0	0
AluSepABC001333	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	EAU	97820	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2616	0	0	0	0	0	0
AluSepABC001334	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	EAU	97819	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2885	0	0	0	0	0	0
AluSepABC001335	CL80011-101-0	AUXILIAIRE TA3	2005-03-28 00:00:00	EAU	97818	0	1	1	f	0	0	2005-03-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2104	0	0	0	0	0	0
AluSepABC001336	180140	REGULATEUR 24	2005-03-28 00:00:00	EAU	97825	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AE470	0	0	0	0	0	0
AluSepABC001337	180140	REGULATEUR 24	2005-03-28 00:00:00	EAU	97823	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AE655	0	0	0	0	0	0
AluSepABC001338	180140	REGULATEUR 24	2005-03-28 00:00:00	EAU	97822	0	1	1	f	0	0	2005-03-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AA388	0	0	0	0	0	0
AluSepABC001339	180136	REGULATEUR 21	2005-03-28 00:00:00	EAU	97830	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	A331	0	0	0	0	0	0
AluSepABC001340	180136	REGULATEUR 21	2005-03-28 00:00:00	EAU	97829	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	AE719	0	0	0	0	0	0
AluSepABC001341	180136	REGULATEUR 21	2005-03-28 00:00:00	EAU	97827	0	1	1	f	0	0	2005-03-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	AF520	0	0	0	0	0	0
AluSepABC001342	180138	REGULATEUR 22	2005-03-16 00:00:00	EAU	97725	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	6611	0	0	0	0	0	0
AluSepABC001343	180138	REGULATEUR 22	2005-03-16 00:00:00	EAU	97724	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	0243	0	0	0	0	0	0
AluSepABC001344	180138	REGULATEUR 22	2005-03-16 00:00:00	EAU	97723	0	1	1	f	0	0	2005-03-12 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4205	0	0	0	0	0	0
AluSepABC001345	180138	REGULATEUR 22	2005-03-11 00:00:00	EAU	97663	0	1	1	f	0	0	2005-03-10 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	-5	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001346	180138	REGULATEUR 22	2005-03-07 00:00:00	EAU	97608	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	2921	0	0	0	0	0	0
AluSepABC001347	180138	REGULATEUR 22	2005-03-07 00:00:00	EAU	97609	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	7672	0	0	0	0	0	0
AluSepABC001348	180138	REGULATEUR 22	2005-03-07 00:00:00	EAU	97610	0	1	1	f	0	0	2005-03-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	1084	0	0	0	0	0	0
AluSepABC001349	51016108	REDRESSEUR #2	2005-03-02 00:00:00	EAU	97562	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1898	0	0	0	0	0	0
AluSepABC001350	51016108	REDRESSEUR #2	2005-02-21 00:00:00	EAU	97429	0	1	1	f	0	0	2005-02-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AF277	0	0	0	0	0	0
AluSepABC001351	51016108	REDRESSEUR #2	2005-02-21 00:00:00	EAU	97430	0	1	1	f	0	0	2005-02-13 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	X389	0	0	0	0	0	0
AluSepABC001352	51016108	REDRESSEUR #2	2005-02-21 00:00:00	EAU	97428	0	1	1	f	0	0	2005-02-09 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB932	0	0	0	0	0	0
AluSepABC001353	180137	REGULATEUR 25	2005-02-18 00:00:00	EAU	97419	0	1	1	f	0	0	2005-02-17 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	0	\N	f	\N	\N	1	\N	\N	 	AB587	0	0	0	0	0	0
AluSepABC001354	CL80011-101-0	AUXILIAIRE TA3	2005-02-16 00:00:00	EAU	97375	0	1	1	f	0	0	2005-02-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	-13.5	\N	f	\N	\N	1	\N	\N	 	AE906	0	0	0	0	0	0
AluSepABC001355	180136	REGULATEUR 21	2005-02-14 00:00:00	EAU	97348	0	1	1	f	0	0	2005-02-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9418	0	0	0	0	0	0
AluSepABC001356	180140	REGULATEUR 24	2005-02-14 00:00:00	EAU	97349	0	1	1	f	0	0	2005-02-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001357	51016108	REDRESSEUR #2	2005-02-11 00:00:00	EAU	97343	0	1	1	f	0	0	2005-02-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	0959	0	0	0	0	0	0
AluSepABC001358	51016108	REDRESSEUR #2	2005-02-11 00:00:00	EAU	97342	0	1	1	f	0	0	2005-02-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	ae916	0	0	0	0	0	0
AluSepABC001359	51016108	REDRESSEUR #2	2005-02-11 00:00:00	EAU	97341	0	1	1	f	0	0	2005-02-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF504	0	0	0	0	0	0
AluSepABC001360	51016108	REDRESSEUR #2	2005-02-07 00:00:00	EAU	97316	0	1	1	f	0	0	2005-02-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AB881	0	0	0	0	0	0
AluSepABC001361	51016108	REDRESSEUR #2	2005-02-07 00:00:00	EAU	97317	0	1	1	f	0	0	2005-01-30 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	4387	0	0	0	0	0	0
AluSepABC001362	51016108	REDRESSEUR #2	2005-02-07 00:00:00	EAU	97315	0	1	1	f	0	0	2005-01-29 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	Y2616	0	0	0	0	0	0
AluSepABC001363	51016108	REDRESSEUR #2	2005-02-07 00:00:00	EAU	97314	0	1	1	f	0	0	2005-01-26 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	X365	0	0	0	0	0	0
AluSepABC001364	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	EAU	97278	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC001365	180137	REGULATEUR 25	2005-02-04 00:00:00	EAU	97277	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC001366	CL80011-101-0	AUXILIAIRE TA3	2005-02-04 00:00:00	EAU	97279	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC001367	180137	REGULATEUR 25	2005-02-04 00:00:00	EAU	97276	0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC001368	51016108	REDRESSEUR #2	2005-01-31 00:00:00	EAU	97249	0	1	1	f	0	0	2005-01-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	2807	0	0	0	0	0	0
AluSepABC001369	51016108	REDRESSEUR #2	2005-01-31 00:00:00	EAU	97248	0	1	1	f	0	0	2005-01-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5246	0	0	0	0	0	0
AluSepABC001370	51016108	REDRESSEUR #2	2005-01-31 00:00:00	EAU	97250	0	1	1	f	0	0	2005-01-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	AA110	0	0	0	0	0	0
AluSepABC001371	51016108	REDRESSEUR #2	2005-01-31 00:00:00	EAU	97247	0	1	1	f	0	0	2005-01-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	AB999	0	0	0	0	0	0
AluSepABC001372	51016108	REDRESSEUR #2	2005-01-26 00:00:00	EAU	97170	0	1	1	f	0	0	2005-01-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	1636	0	0	0	0	0	0
AluSepABC001373	51016108	REDRESSEUR #2	2004-12-25 00:00:00	EAU	96949	0	1	1	f	0	0	2004-12-25 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Contenu d'eau dans le pot: 3.5 ppm.L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5161	0	0	0	0	0	0
AluSepABC001374	SET6394-0101	TRANSFORMATEUR 77274	2004-09-15 00:00:00	EAU	94528	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	17	\N	f	\N	\N	1	\N	\N	 	AF 142	0	0	0	0	0	0
AluSepABC001375	91-03E7300-002	TX EL11 # 062	2004-09-15 00:00:00	EAU	94553	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	5220	0	0	0	0	0	0
AluSepABC001376	91-03E7344-001	TX EL2 # 073	2004-09-15 00:00:00	EAU	94552	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	9470	0	0	0	0	0	0
AluSepABC001377	91-03E7344-002	TX EL2 # 074	2004-09-15 00:00:00	EAU	94551	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).    Contenu d'eau dans le pot = 25 ppm.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2453	0	0	0	0	0	0
AluSepABC001378	91-03E7300-005	TX EL3 # 082	2004-09-15 00:00:00	EAU	94549	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	0678	0	0	0	0	0	0
AluSepABC001379	91-03E7300-003	TX EL3 # 081	2004-09-15 00:00:00	EAU	94548	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 26 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	40	\N	f	\N	\N	1	\N	\N	 	AG 180	0	0	0	0	0	0
AluSepABC001380	91-03E7301-003	TX MS # 131	2004-09-15 00:00:00	EAU	94543	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	26	\N	f	\N	\N	1	\N	\N	 	AF 718	0	0	0	0	0	0
AluSepABC001381	91-03E7302-005	TX CB # 121	2004-09-15 00:00:00	EAU	94541	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	3995	0	0	0	0	0	0
AluSepABC001382	91-03E7302-001	TX CB # 122	2004-09-15 00:00:00	EAU	94532	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	1924	0	0	0	0	0	0
AluSepABC001383	91-03E7300-001	TX EL11 # 061	2004-09-15 00:00:00	EAU	94556	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	30	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC001384	91-03E7303-001	TX EL11 # 064	2004-09-15 00:00:00	EAU	94555	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	AB 811	0	0	0	0	0	0
AluSepABC001385	XC030-001	TX PC # 173-B	2004-09-15 00:00:00	EAU	94533	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	4395	0	0	0	0	0	0
AluSepABC001386	4046506001	TX PC # 171-A	2004-09-15 00:00:00	EAU	94567	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	4430	0	0	0	0	0	0
AluSepABC001387	91-03E7302-004	TX EL2 # 071	2004-09-15 00:00:00	EAU	94557	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	6586	0	0	0	0	0	0
AluSepABC001388	91-03E7302-002	TX EL2 # 072	2004-09-15 00:00:00	EAU	94558	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1171	0	0	0	0	0	0
AluSepABC001389	W0582-001	TX PC # 173-A	2004-09-15 00:00:00	EAU	94566	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	6153	0	0	0	0	0	0
AluSepABC001390	91-03E7303-002	TX EL11 # 063	2004-09-15 00:00:00	EAU	94554	0	1	1	f	0	0	2004-08-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 25 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	28	\N	f	\N	\N	1	\N	\N	 	4565	0	0	0	0	0	0
AluSepABC001391	51016109	REDRESSEUR #1	2004-09-15 00:00:00	EAU	94518	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AE 542	0	0	0	0	0	0
AluSepABC001392	A325-0251	TRANSFORMATEUR 77227	2004-09-15 00:00:00	EAU	94529	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	AC 739	0	0	0	0	0	0
AluSepABC001393	91-03E7298-001	TX SA # 091	2004-09-15 00:00:00	EAU	94527	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	35	\N	f	\N	\N	1	\N	\N	 	AC 224	0	0	0	0	0	0
AluSepABC001394	61-0169835	AUXILIAIRE TA2	2004-09-15 00:00:00	EAU	94526	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	AE 675	0	0	0	0	0	0
AluSepABC001395	61-01-69834	AUXILIAIRE TA1	2004-09-15 00:00:00	EAU	94525	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	8804	0	0	0	0	0	0
AluSepABC001396	7853083	RÉGULATEUR #1	2004-09-15 00:00:00	EAU	94524	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 26 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	46	\N	f	\N	\N	1	\N	\N	 	AF 378	0	0	0	0	0	0
AluSepABC001397	7853084	RÉGULATEUR #2	2004-09-15 00:00:00	EAU	94523	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	AG 108	0	0	0	0	0	0
AluSepABC001398	7853085	RÉGULATEUR #3	2004-09-15 00:00:00	EAU	94522	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 30 ppm.	4	0	44	\N	f	\N	\N	1	\N	\N	 	M 1600	0	0	0	0	0	0
AluSepABC001399	7853086	RÉGULATEUR #4	2004-09-15 00:00:00	EAU	94521	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.   Contenu d'eau dans le pot = 29 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	H 0136	0	0	0	0	0	0
AluSepABC001400	7853087	RÉGULATEUR #6	2004-09-15 00:00:00	EAU	94519	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 29 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 981	0	0	0	0	0	0
AluSepABC001401	91-03E7299-001	TX AL11 # 022	2004-09-15 00:00:00	EAU	94564	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	6100	0	0	0	0	0	0
AluSepABC001402	51016108	REDRESSEUR #2	2004-09-15 00:00:00	EAU	94517	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	C 044	0	0	0	0	0	0
AluSepABC001403	51016110	REDRESSEUR #3	2004-09-15 00:00:00	EAU	94515	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27 ppm.Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	47	\N	f	\N	\N	1	\N	\N	 	2670	0	0	0	0	0	0
AluSepABC001404	51016111	REDRESSEUR #4	2004-09-15 00:00:00	EAU	94514	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).  Contenu d'eau dans le pot = 29 ppm.	4	0	44	\N	f	\N	\N	1	\N	\N	 	2637	0	0	0	0	0	0
AluSepABC001405	51016113	REDRESSEUR #5	2004-09-15 00:00:00	EAU	94513	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	6275	0	0	0	0	0	0
AluSepABC001406	51016112	REDRESSEUR #6	2004-09-15 00:00:00	EAU	94516	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	AE 665	0	0	0	0	0	0
AluSepABC001407	1132787	REDRESSEUR #7	2004-09-15 00:00:00	EAU	94508	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Contenu d'eau dans le pot = 24 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	30	\N	f	\N	\N	1	\N	\N	 	2891	0	0	0	0	0	0
AluSepABC001408	7853088	REGULATEUR #5	2004-09-15 00:00:00	EAU	94520	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.    Contenu d'eau dans le pot = 28 ppm.	4	0	40	\N	f	\N	\N	1	\N	\N	 	AF 978	0	0	0	0	0	0
AluSepABC001409	91-03E7298-002	TX AL12 # 032	2004-09-15 00:00:00	EAU	94562	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	7367	0	0	0	0	0	0
AluSepABC001410	91-03E7302-003	TX SGE # 042	2004-09-15 00:00:00	EAU	94559	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AA388	0	0	0	0	0	0
AluSepABC001411	91-03E7298-003	TX SA # 092	2004-09-15 00:00:00	EAU	94550	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	La teneur en eau dans le pot est 27 ppm.  Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).	4	0	31	\N	f	\N	\N	1	\N	\N	 	0019	0	0	0	0	0	0
AluSepABC001412	91-03E7300-006	TX AL12 # 031	2004-09-15 00:00:00	EAU	94560	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	7415	0	0	0	0	0	0
AluSepABC001413	B325-0175	TX AL12 # 033	2004-09-15 00:00:00	EAU	94561	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	2675	0	0	0	0	0	0
AluSepABC001414	91-03E7299-005	TX CO # 101	2004-09-15 00:00:00	EAU	94547	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 111	0	0	0	0	0	0
AluSepABC001415	91-03E7299-002	TX CO # 102	2004-09-15 00:00:00	EAU	94546	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	1498	0	0	0	0	0	0
AluSepABC001416	91-03E7301-004	TX SGE SPARE 77275	2004-09-15 00:00:00	EAU	94531	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	4314	0	0	0	0	0	0
AluSepABC001417	B325-0174	TX CO # 104	2004-09-15 00:00:00	EAU	94544	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	AE 774	0	0	0	0	0	0
AluSepABC001418	91-03E7299-003	TX AL11 # 021	2004-09-15 00:00:00	EAU	94565	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4599	0	0	0	0	0	0
AluSepABC001419	A325-0175	TX AL11 # 023	2004-09-15 00:00:00	EAU	94563	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	2389	0	0	0	0	0	0
AluSepABC001420	91-03E7301-006	TX NP # 142	2004-09-15 00:00:00	EAU	94540	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5995	0	0	0	0	0	0
AluSepABC001421	91-03E7301-005	TX NP # 141	2004-09-15 00:00:00	EAU	94539	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	AF 716	0	0	0	0	0	0
AluSepABC001422	91-03E7300-004	TX HT # 151	2004-09-15 00:00:00	EAU	94538	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AF 848	0	0	0	0	0	0
AluSepABC001423	91-03E7299-004	TX HT # 152	2004-09-15 00:00:00	EAU	94537	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	3897	0	0	0	0	0	0
AluSepABC001424	91-03E7301-002	TX FOA # 162	2004-09-15 00:00:00	EAU	94536	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AA 576	0	0	0	0	0	0
AluSepABC001425	91-03E7301-001	TX FOA # 161	2004-09-15 00:00:00	EAU	94535	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	AC 343	0	0	0	0	0	0
AluSepABC001426	91-03E7255-001	TX SGE # 041	2004-09-15 00:00:00	EAU	94534	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	AO 169	0	0	0	0	0	0
AluSepABC001427	A325-0174	TX CO # 103	2004-09-15 00:00:00	EAU	94545	0	1	1	f	0	0	2004-08-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	3898	0	0	0	0	0	0
AluSepABC001428	51016112	REDRESSEUR #6	2004-08-17 00:00:00	EAU	93827	0	1	1	f	0	0	2004-06-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	5041	0	0	0	0	0	0
AluSepABC001429	51016112	REDRESSEUR #6	2004-08-17 00:00:00	EAU	93825	0	1	1	f	0	0	2004-06-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	AB 988	0	0	0	0	0	0
AluSepABC001430	51016112	REDRESSEUR #6	2004-08-17 00:00:00	EAU	93830	0	1	1	f	0	0	2004-06-20 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	G 220	0	0	0	0	0	0
AluSepABC001431	51016111	REDRESSEUR #4	2004-08-16 00:00:00	EAU	93795	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	1377	0	0	0	0	0	0
AluSepABC001432	7853086	RÉGULATEUR #4	2004-08-16 00:00:00	EAU	93797	0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0010	0	0	0	0	0	0
AluSepABC001433	61-0169835	AUXILIAIRE TA2	2004-04-30 00:00:00	EAU	90643	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	1381	0	0	0	0	0	0
AluSepABC001434	61-01-69834	AUXILIAIRE TA1	2004-04-30 00:00:00	EAU	90642	0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4783	0	0	0	0	0	0
AluSepABC001435	03G122761	TX EL22 # 242	2004-03-15 00:00:00	EAU	89786	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	-1	\N	f	\N	\N	1	\N	\N	 	1512	0	0	0	0	0	0
AluSepABC001436	03G122762	TX AL21 # 211	2004-03-15 00:00:00	EAU	89783	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	-1	\N	f	\N	\N	1	\N	\N	 	4482	0	0	0	0	0	0
AluSepABC001437	03G122765	TX AL22 # 222	2004-03-15 00:00:00	EAU	89782	0	1	1	f	0	0	2004-03-11 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	-1	\N	f	\N	\N	1	\N	\N	 	2088	0	0	0	0	0	0
AluSepABC001438	61-01-69834	AUXILIAIRE TA1	2003-09-02 00:00:00	EAU	86199	0	1	1	f	0	0	2003-08-26 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7690	0	0	0	0	0	0
AluSepABC001439	A325-0251	TRANSFORMATEUR 77227	2003-08-21 00:00:00	EAU	85992	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	6107	0	0	0	0	0	0
AluSepABC001440	7853083	RÉGULATEUR #1	2003-08-21 00:00:00	EAU	85997	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	AA 110	0	0	0	0	0	0
AluSepABC001441	7853084	RÉGULATEUR #2	2003-08-21 00:00:00	EAU	85998	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9146	0	0	0	0	0	0
AluSepABC001442	7853085	RÉGULATEUR #3	2003-08-21 00:00:00	EAU	85999	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7566	0	0	0	0	0	0
AluSepABC001443	7853086	RÉGULATEUR #4	2003-08-21 00:00:00	EAU	86000	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2638	0	0	0	0	0	0
AluSepABC001444	7853088	REGULATEUR #5	2003-08-21 00:00:00	EAU	86001	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0202	0	0	0	0	0	0
AluSepABC001445	7853087	RÉGULATEUR #6	2003-08-21 00:00:00	EAU	86002	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	44	\N	f	\N	\N	1	\N	\N	 	7075	0	0	0	0	0	0
AluSepABC001446	51016109	REDRESSEUR #1	2003-08-21 00:00:00	EAU	86003	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2710	0	0	0	0	0	0
AluSepABC001447	51016108	REDRESSEUR #2	2003-08-21 00:00:00	EAU	86004	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2926	0	0	0	0	0	0
AluSepABC001448	51016111	REDRESSEUR #4	2003-08-21 00:00:00	EAU	86006	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	F 523	0	0	0	0	0	0
AluSepABC001449	SET6394-0101	TRANSFORMATEUR 77274	2003-08-21 00:00:00	EAU	85993	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	5073	0	0	0	0	0	0
AluSepABC001450	91-03E7301-004	TX SGE SPARE 77275	2003-08-21 00:00:00	EAU	85991	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	AA 767	0	0	0	0	0	0
AluSepABC001451	XC030-001	TX PC # 173-B	2003-08-21 00:00:00	EAU	85989	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	6775	0	0	0	0	0	0
AluSepABC001452	51016110	REDRESSEUR #3	2003-08-21 00:00:00	EAU	86005	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	9649	0	0	0	0	0	0
AluSepABC001453	91-03E7302-001	TX CB # 122	2003-08-21 00:00:00	EAU	85990	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC001454	51016113	REDRESSEUR #5	2003-08-21 00:00:00	EAU	86007	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	I 075	0	0	0	0	0	0
AluSepABC001455	51016112	REDRESSEUR #6	2003-08-21 00:00:00	EAU	86008	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4751	0	0	0	0	0	0
AluSepABC001456	1132787	REDRESSEUR #7	2003-08-21 00:00:00	EAU	86009	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	6016	0	0	0	0	0	0
AluSepABC001457	91-03E7298-001	TX SA # 091	2003-08-21 00:00:00	EAU	85994	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC001458	61-01-69834	AUXILIAIRE TA1	2003-08-21 00:00:00	EAU	85996	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	1598	0	0	0	0	0	0
AluSepABC001459	61-0169835	AUXILIAIRE TA2	2003-08-21 00:00:00	EAU	85995	0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2491	0	0	0	0	0	0
AluSepABC001460	4046506001	TX PC # 171-A	2003-08-20 00:00:00	EAU	85911	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	G 0312	0	0	0	0	0	0
AluSepABC001461	W0582-001	TX PC # 173-A	2003-08-20 00:00:00	EAU	85912	0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	4302	0	0	0	0	0	0
AluSepABC001462	A325-0175	TX AL11 # 023	2003-08-20 00:00:00	EAU	85915	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	AB 528	0	0	0	0	0	0
AluSepABC001463	91-03E7300-002	TX EL11 # 062	2003-08-20 00:00:00	EAU	85926	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1992	0	0	0	0	0	0
AluSepABC001464	91-03E7303-002	TX EL11 # 063	2003-08-20 00:00:00	EAU	85925	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	F 239	0	0	0	0	0	0
AluSepABC001465	91-03E7303-001	TX EL11 # 064	2003-08-20 00:00:00	EAU	85924	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	AB 411	0	0	0	0	0	0
AluSepABC001466	91-03E7300-001	TX EL11 # 061	2003-08-20 00:00:00	EAU	85922	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	0869	0	0	0	0	0	0
AluSepABC001467	91-03E7302-004	TX EL2 # 071	2003-08-20 00:00:00	EAU	85921	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	47	\N	f	\N	\N	1	\N	\N	 	2479	0	0	0	0	0	0
AluSepABC001468	91-03E7302-002	TX EL2 # 072	2003-08-20 00:00:00	EAU	85920	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	5621	0	0	0	0	0	0
AluSepABC001469	91-03E7302-003	TX SGE # 042	2003-08-20 00:00:00	EAU	85919	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	1816	0	0	0	0	0	0
AluSepABC001470	91-03E7300-006	TX AL12 # 031	2003-08-20 00:00:00	EAU	85918	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4093	0	0	0	0	0	0
AluSepABC001471	91-03E7301-005	TX NP # 141	2003-08-20 00:00:00	EAU	85944	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	AC 278	0	0	0	0	0	0
AluSepABC001472	91-03E7298-002	TX AL12 # 032	2003-08-20 00:00:00	EAU	85916	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	5430	0	0	0	0	0	0
AluSepABC001473	91-03E7299-001	TX AL11 # 022	2003-08-20 00:00:00	EAU	85914	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	B 1393	0	0	0	0	0	0
AluSepABC001474	91-03E7299-003	TX AL11 # 021	2003-08-20 00:00:00	EAU	85913	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	AA 731	0	0	0	0	0	0
AluSepABC001475	91-03E7344-001	TX EL2 # 073	2003-08-20 00:00:00	EAU	85928	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	0301	0	0	0	0	0	0
AluSepABC001476	B325-0175	TX AL12 # 033	2003-08-20 00:00:00	EAU	85917	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC001477	91-03E7299-004	TX HT # 152	2003-08-20 00:00:00	EAU	85946	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	F 338	0	0	0	0	0	0
AluSepABC001478	91-03E7344-002	TX EL2 # 074	2003-08-20 00:00:00	EAU	85929	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	6439	0	0	0	0	0	0
AluSepABC001479	91-03E7255-001	TX SGE # 041	2003-08-20 00:00:00	EAU	85949	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	1579	0	0	0	0	0	0
AluSepABC001480	91-03E7301-002	TX FOA # 162	2003-08-20 00:00:00	EAU	85947	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	5055	0	0	0	0	0	0
AluSepABC001481	91-03E7300-004	TX HT # 151	2003-08-20 00:00:00	EAU	85945	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC001482	91-03E7302-005	TX CB # 121	2003-08-20 00:00:00	EAU	85941	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC001483	91-03E7301-006	TX NP # 142	2003-08-20 00:00:00	EAU	85943	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	2909	0	0	0	0	0	0
AluSepABC001484	91-03E7301-003	TX MS # 131	2003-08-20 00:00:00	EAU	85938	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	6381	0	0	0	0	0	0
AluSepABC001485	A325-0174	TX CO # 103	2003-08-20 00:00:00	EAU	85936	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0341	0	0	0	0	0	0
AluSepABC001486	91-03E7299-002	TX CO # 102	2003-08-20 00:00:00	EAU	85935	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	7833	0	0	0	0	0	0
AluSepABC001487	91-03E7299-005	TX CO # 101	2003-08-20 00:00:00	EAU	85934	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	AA 432	0	0	0	0	0	0
AluSepABC001488	91-03E7298-003	TX SA # 092	2003-08-20 00:00:00	EAU	85931	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	5862	0	0	0	0	0	0
AluSepABC001489	91-03E7300-003	TX EL3 # 081	2003-08-20 00:00:00	EAU	85933	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	6793	0	0	0	0	0	0
AluSepABC001490	91-03E7300-005	TX EL3 # 082	2003-08-20 00:00:00	EAU	85932	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	9781	0	0	0	0	0	0
AluSepABC001491	B325-0174	TX CO # 104	2003-08-20 00:00:00	EAU	85937	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0242	0	0	0	0	0	0
AluSepABC001492	91-03E7301-001	TX FOA # 161	2003-08-20 00:00:00	EAU	85948	0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	1514	0	0	0	0	0	0
AluSepABC001493	61-0169835	AUXILIAIRE TA2	2003-06-11 00:00:00	EAU	83902	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4630	0	0	0	0	0	0
AluSepABC001494	7853088	REGULATEUR #5	2003-06-11 00:00:00	EAU	83899	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	4249	0	0	0	0	0	0
AluSepABC001495	61-01-69834	AUXILIAIRE TA1	2003-06-11 00:00:00	EAU	83901	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	2420	0	0	0	0	0	0
AluSepABC001496	7853087	RÉGULATEUR #6	2003-06-11 00:00:00	EAU	83900	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	4216	0	0	0	0	0	0
AluSepABC001497	51016113	REDRESSEUR #5	2003-06-10 00:00:00	EAU	83851	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	3084	0	0	0	0	0	0
AluSepABC001498	7853084	RÉGULATEUR #2	2003-06-10 00:00:00	EAU	83883	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	3270	0	0	0	0	0	0
AluSepABC001499	51016109	REDRESSEUR #1	2003-06-10 00:00:00	EAU	83841	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC001500	51016108	REDRESSEUR #2	2003-06-10 00:00:00	EAU	83848	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	2910	0	0	0	0	0	0
AluSepABC001501	51016110	REDRESSEUR #3	2003-06-10 00:00:00	EAU	83849	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	S 0436	0	0	0	0	0	0
AluSepABC001502	51016111	REDRESSEUR #4	2003-06-10 00:00:00	EAU	83850	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001503	7853083	RÉGULATEUR #1	2003-06-10 00:00:00	EAU	83882	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	3442	0	0	0	0	0	0
AluSepABC001504	7853085	RÉGULATEUR #3	2003-06-10 00:00:00	EAU	83884	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	X 8639	0	0	0	0	0	0
AluSepABC001505	7853086	RÉGULATEUR #4	2003-06-10 00:00:00	EAU	83885	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	1104	0	0	0	0	0	0
AluSepABC001506	51016112	REDRESSEUR #6	2003-06-10 00:00:00	EAU	83858	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	4307	0	0	0	0	0	0
AluSepABC001507	1132787	REDRESSEUR #7	2003-06-10 00:00:00	EAU	83880	0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4358	0	0	0	0	0	0
AluSepABC001508	61-0169835	AUXILIAIRE TA2	2002-10-15 00:00:00	EAU	79694	0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2458	0	0	0	0	0	0
AluSepABC001884	W0582-001	TX PC # 173-A	1997-08-07 00:00:00	EAU	10864	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001569	7853087	RÉGULATEUR #6	2002-06-20 00:00:00	EAU	76526	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8065	0	0	0	0	0	0
AluSepABC001570	51016113	REDRESSEUR #5	2002-06-20 00:00:00	EAU	76529	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0308	0	0	0	0	0	0
AluSepABC001571	7853085	RÉGULATEUR #3	2002-06-20 00:00:00	EAU	76530	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2363	0	0	0	0	0	0
AluSepABC001572	7853083	RÉGULATEUR #1	2002-06-20 00:00:00	EAU	76534	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2504	0	0	0	0	0	0
AluSepABC001573	51016111	REDRESSEUR #4	2002-06-20 00:00:00	EAU	76531	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2521	0	0	0	0	0	0
AluSepABC001574	7853086	RÉGULATEUR #4	2002-06-20 00:00:00	EAU	76532	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5536	0	0	0	0	0	0
AluSepABC001575	51016109	REDRESSEUR #1	2002-06-20 00:00:00	EAU	76533	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0315	0	0	0	0	0	0
AluSepABC001576	61-01-69834	AUXILIAIRE TA1	2002-06-20 00:00:00	EAU	76522	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7323	0	0	0	0	0	0
AluSepABC001577	51016112	REDRESSEUR #6	2002-06-20 00:00:00	EAU	76528	0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0388	0	0	0	0	0	0
AluSepABC001578	51016112	REDRESSEUR #6	2002-03-22 00:00:00	EAU	74137	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7088	0	0	0	0	0	0
AluSepABC001579	61-0169835	AUXILIAIRE TA2	2002-03-22 00:00:00	EAU	74130	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2328	0	0	0	0	0	0
AluSepABC001580	7853086	RÉGULATEUR #4	2002-03-22 00:00:00	EAU	74131	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	0596	0	0	0	0	0	0
AluSepABC001581	61-01-69834	AUXILIAIRE TA1	2002-03-22 00:00:00	EAU	74132	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	5727	0	0	0	0	0	0
AluSepABC001582	7853088	REGULATEUR #5	2002-03-22 00:00:00	EAU	74133	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	6624	0	0	0	0	0	0
AluSepABC001583	7853084	RÉGULATEUR #2	2002-03-22 00:00:00	EAU	74134	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC001584	51016108	REDRESSEUR #2	2002-03-22 00:00:00	EAU	74136	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	4358	0	0	0	0	0	0
AluSepABC001585	51016111	REDRESSEUR #4	2002-03-22 00:00:00	EAU	74139	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2430	0	0	0	0	0	0
AluSepABC001586	7853083	RÉGULATEUR #1	2002-03-22 00:00:00	EAU	74140	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8026	0	0	0	0	0	0
AluSepABC001587	51016110	REDRESSEUR #3	2002-03-22 00:00:00	EAU	74141	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2500	0	0	0	0	0	0
AluSepABC001588	7853085	RÉGULATEUR #3	2002-03-22 00:00:00	EAU	74142	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0672	0	0	0	0	0	0
AluSepABC001589	51016109	REDRESSEUR #1	2002-03-22 00:00:00	EAU	74143	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	I-078	0	0	0	0	0	0
AluSepABC001590	7853087	RÉGULATEUR #6	2002-03-22 00:00:00	EAU	74135	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	2476	0	0	0	0	0	0
AluSepABC001591	51016113	REDRESSEUR #5	2002-03-22 00:00:00	EAU	74138	0	1	1	f	0	0	2002-03-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2668	0	0	0	0	0	0
AluSepABC001592	W0582-001	TX PC # 173-A	2001-11-14 00:00:00	EAU	72672	0	1	1	f	0	0	2001-11-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	0743	0	0	0	0	0	0
AluSepABC001593	4046506001	TX PC # 171-A	2001-11-14 00:00:00	EAU	72684	0	1	1	f	0	0	2001-11-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	2580	0	0	0	0	0	0
AluSepABC001594	51016108	REDRESSEUR #2	2001-11-14 00:00:00	EAU	72673	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	V-1321	0	0	0	0	0	0
AluSepABC001595	51016113	REDRESSEUR #5	2001-11-14 00:00:00	EAU	72676	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	7581	0	0	0	0	0	0
AluSepABC001596	7853088	REGULATEUR #5	2001-11-14 00:00:00	EAU	72677	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	5825	0	0	0	0	0	0
AluSepABC001597	1132787	REDRESSEUR #7	2001-11-14 00:00:00	EAU	72675	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	6656	0	0	0	0	0	0
AluSepABC001598	7853084	RÉGULATEUR #2	2001-11-14 00:00:00	EAU	72674	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	43	\N	f	\N	\N	1	\N	\N	 	5295	0	0	0	0	0	0
AluSepABC001599	7853086	RÉGULATEUR #4	2001-11-14 00:00:00	EAU	72678	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	2659	0	0	0	0	0	0
AluSepABC001600	7853085	RÉGULATEUR #3	2001-11-14 00:00:00	EAU	72682	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0968	0	0	0	0	0	0
AluSepABC001601	51016109	REDRESSEUR #1	2001-11-14 00:00:00	EAU	72670	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0559	0	0	0	0	0	0
AluSepABC001602	7853087	RÉGULATEUR #6	2001-11-14 00:00:00	EAU	72679	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	B-519	0	0	0	0	0	0
AluSepABC001603	51016111	REDRESSEUR #4	2001-11-14 00:00:00	EAU	72683	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	7927	0	0	0	0	0	0
AluSepABC001604	7853083	RÉGULATEUR #1	2001-11-14 00:00:00	EAU	72680	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC001605	51016112	REDRESSEUR #6	2001-11-14 00:00:00	EAU	72668	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	1805	0	0	0	0	0	0
AluSepABC001606	51016110	REDRESSEUR #3	2001-11-14 00:00:00	EAU	72681	0	1	1	f	0	0	2001-11-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	0399	0	0	0	0	0	0
AluSepABC001607	91-03E7300-004	TX HT # 151	2001-08-07 00:00:00	EAU	71098	0	1	1	f	0	0	2001-07-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6003	0	0	0	0	0	0
AluSepABC001608	91-037299-003	TX AL11 # 021	2001-08-07 00:00:00	EAU	71078	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001609	A32S-0174	POSTE CO	2001-08-07 00:00:00	EAU	71086	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001610	91-03E7301-003	TX MS # 131	2001-08-07 00:00:00	EAU	71085	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001611	91-03E7298-002	TX AL12 # 032	2001-08-07 00:00:00	EAU	71083	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001612	B32S-0175	TX AL12 # 033	2001-08-07 00:00:00	EAU	71081	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001613	91-03E7298-003	TX SA # 092	2001-08-07 00:00:00	EAU	71087	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001614	91-03E7299-001	TX AL11 # 022	2001-08-07 00:00:00	EAU	71079	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001615	B32S-0174	POSTE CO-	2001-08-07 00:00:00	EAU	71084	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001616	91-03E7299-002	TX CO # 102	2001-08-07 00:00:00	EAU	71077	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001617	91-03E7300-001	TX EL11 # 061	2001-08-07 00:00:00	EAU	71076	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001618	91-03E7300-002	TX EL11 # 062	2001-08-07 00:00:00	EAU	71080	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001619	91-03E7298-001	TX SA # 091	2001-08-07 00:00:00	EAU	71096	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001620	91-03E7300-006	TX AL12 # 031	2001-08-07 00:00:00	EAU	71082	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001621	91-03E7299-005	TX CO # 101	2001-08-07 00:00:00	EAU	71088	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001622	91-03E7303-001	TX EL11 # 064	2001-08-07 00:00:00	EAU	71075	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001623	91-03E7255-001	TX SGE # 041	2001-08-07 00:00:00	EAU	71097	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001624	91-03E7344-001	TX EL2 # 073	2001-08-07 00:00:00	EAU	71094	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001625	W0582-001	TX PC # 173-A	2001-08-07 00:00:00	EAU	71093	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001626	91-03E7344-002	TX EL2 # 074	2001-08-07 00:00:00	EAU	71092	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001627	91-03E7302-004	TX EL2 # 071	2001-08-07 00:00:00	EAU	71091	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001628	91-03E7302-003	TX SGE # 042	2001-08-07 00:00:00	EAU	71090	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001629	91-03E7302-002	TX EL2 # 072	2001-08-07 00:00:00	EAU	71089	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001630	91-03E7299-004	TX HT # 152	2001-08-07 00:00:00	EAU	71099	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001631	61-0169835	AUXILIAIRE TA2	2001-08-06 00:00:00	EAU	71021	0	1	1	f	0	0	2001-07-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	51	\N	f	\N	\N	1	\N	\N	 	5605	0	0	0	0	0	0
AluSepABC001632	51016109	REDRESSEUR #1	2001-08-06 00:00:00	EAU	71030	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0081	0	0	0	0	0	0
AluSepABC001634	51016111	REDRESSEUR #4	2001-08-06 00:00:00	EAU	71025	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2377	0	0	0	0	0	0
AluSepABC001635	7853084	RÉGULATEUR #2	2001-08-06 00:00:00	EAU	71028	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1730	0	0	0	0	0	0
AluSepABC001636	51016108	REDRESSEUR #2	2001-08-06 00:00:00	EAU	71027	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	3030	0	0	0	0	0	0
AluSepABC001637	7853085	RÉGULATEUR #3	2001-08-06 00:00:00	EAU	71026	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4148	0	0	0	0	0	0
AluSepABC001638	61-01-69834	AUXILIAIRE TA1	2001-08-06 00:00:00	EAU	71024	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6216	0	0	0	0	0	0
AluSepABC001639	6394-0101	SPARE 77274	2001-08-06 00:00:00	EAU	71023	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0.422	0	0	0	0	0	0
AluSepABC001640	1132787	REDRESSEUR #7	2001-08-06 00:00:00	EAU	71022	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9158	0	0	0	0	0	0
AluSepABC001641	91-03E7301-004	TX SGE SPARE 77275	2001-08-06 00:00:00	EAU	71020	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0732	0	0	0	0	0	0
AluSepABC001642	XC030-001	TX PC # 173-B	2001-08-06 00:00:00	EAU	71019	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2757	0	0	0	0	0	0
ALUSEPMS 000033	160087	REDRESSEUR 25	2006-11-08 00:00:00	GD	108088	0	4	1	f	0	\N	2006-11-06 00:00:01	\r\nTemp. ambiante (°C) =  0, Pression =  0\r\n"Diagnostic du laboratoire :"		f	f	GE Syprotec	\N	\N			0		\N		4	0	25	\N	f		0	1	16	1,GD,EAU,	A venir 2		0	0	0	0	0	0
ALUSEPMS 000034	160087	REDRESSEUR 25	2006-11-08 00:00:00	EAU	112679	0	4	1	f	0	\N	2006-11-06 00:00:01	\r\nTemp. ambiante (°C) =  0, Pression =  0\r\n"Diagnostic du laboratoire :"		f	f	GE Syprotec	\N	\N			0		\N		4	0	25	\N	f		0	1	16		A venir 2	AK808	0	0	0	0	0	0
AluSepABC001643	A32S0251	SPARE 77227	2001-08-06 00:00:00	EAU	71017	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7005	0	0	0	0	0	0
AluSepABC001644	51016113	REDRESSEUR #5	2001-08-06 00:00:00	EAU	71031	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7722	0	0	0	0	0	0
AluSepABC001645	91-03E7301-005	TX NP # 141	2001-08-06 00:00:00	EAU	71041	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001646	7853086	RÉGULATEUR #4	2001-08-06 00:00:00	EAU	71032	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2306	0	0	0	0	0	0
AluSepABC001647	4046506001	TX PC # 171-A	2001-08-06 00:00:00	EAU	71046	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001648	A32S0175	TX AL11 # 023	2001-08-06 00:00:00	EAU	71044	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001649	91-03E7303-002	TX EL11 # 063	2001-08-06 00:00:00	EAU	71045	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001650	91-03E7300-005	TX EL3 # 082	2001-08-06 00:00:00	EAU	71042	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001651	91-03E7302-001	TX CB # 122	2001-08-06 00:00:00	EAU	71040	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001652	91-03E7301-006	TX NP # 142	2001-08-06 00:00:00	EAU	71039	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001653	91-03E7300-003	TX EL3 # 081	2001-08-06 00:00:00	EAU	71038	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001654	91-03E7301-002	TX FOA # 162	2001-08-06 00:00:00	EAU	71037	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001655	91-03E7301-001	TX FOA # 161	2001-08-06 00:00:00	EAU	71036	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001656	7853088	REGULATEUR #5	2001-08-06 00:00:00	EAU	71035	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2311	0	0	0	0	0	0
AluSepABC001657	7853087	RÉGULATEUR #6	2001-08-06 00:00:00	EAU	71034	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2631	0	0	0	0	0	0
AluSepABC001658	7853083	RÉGULATEUR #1	2001-08-06 00:00:00	EAU	71033	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0432	0	0	0	0	0	0
AluSepABC001659	91-03E7302-005	TX CB # 121	2001-08-06 00:00:00	EAU	71043	0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001660	51016108	REDRESSEUR #2	2000-10-10 00:00:00	EAU	66287	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	6205	0	0	0	0	0	0
AluSepABC001661	7853085	RÉGULATEUR #3	2000-10-10 00:00:00	EAU	66284	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	53	\N	f	\N	\N	1	\N	\N	 	9439	0	0	0	0	0	0
AluSepABC001662	7853084	RÉGULATEUR #2	2000-10-10 00:00:00	EAU	66281	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	A274	0	0	0	0	0	0
AluSepABC001663	7853083	RÉGULATEUR #1	2000-10-10 00:00:00	EAU	66282	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	6754	0	0	0	0	0	0
AluSepABC001664	7853086	RÉGULATEUR #4	2000-10-10 00:00:00	EAU	66283	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	1956	0	0	0	0	0	0
AluSepABC001665	1132787	REDRESSEUR #7	2000-10-10 00:00:00	EAU	66286	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	H954	0	0	0	0	0	0
AluSepABC001666	51016111	REDRESSEUR #4	2000-10-10 00:00:00	EAU	66288	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0201	0	0	0	0	0	0
AluSepABC001667	61-01-69834	AUXILIAIRE TA1	2000-10-10 00:00:00	EAU	66290	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	0553	0	0	0	0	0	0
AluSepABC001668	61-0169835	AUXILIAIRE TA2	2000-10-10 00:00:00	EAU	66291	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	1421	0	0	0	0	0	0
AluSepABC001669	51016109	REDRESSEUR #1	2000-10-10 00:00:00	EAU	66285	0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC001670	91-03E7300-006	TX AL12 # 031	2000-10-05 00:00:00	EAU	66222	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001671	91-03E7300-001	TX EL11 # 061	2000-10-05 00:00:00	EAU	66217	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001672	91-03E7303-002	TX EL11 # 063	2000-10-05 00:00:00	EAU	66235	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001673	91-03E7303-001	TX EL11 # 064	2000-10-05 00:00:00	EAU	66234	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001674	91-03E7302-005	TX CB # 121	2000-10-05 00:00:00	EAU	66233	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001675	91-03E7302-004	TX EL2 # 071	2000-10-05 00:00:00	EAU	66232	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001676	91-03E7302-002	TX EL2 # 072	2000-10-05 00:00:00	EAU	66230	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001677	91-03E7301-003	TX MS # 131	2000-10-05 00:00:00	EAU	66225	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	21	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001678	91-03E7298-002	TX AL12 # 032	2000-10-05 00:00:00	EAU	66237	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001679	91-03E7300-005	TX EL3 # 082	2000-10-05 00:00:00	EAU	66221	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001680	91-03E7300-003	TX EL3 # 081	2000-10-05 00:00:00	EAU	66219	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001681	91-03E7300-002	TX EL11 # 062	2000-10-05 00:00:00	EAU	66218	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001682	W0582-001	TX PC # 173-A	2000-10-05 00:00:00	EAU	66245	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001683	91-03E7302-001	TX CB # 122	2000-10-05 00:00:00	EAU	66229	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001684	91-03E7344-002	TX EL2 # 074	2000-10-05 00:00:00	EAU	66254	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001685	4046506001	TX PC # 171-A	2000-10-05 00:00:00	EAU	66244	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001686	SET6394-0101	TRANSFORMATEUR 77274	2000-10-05 00:00:00	EAU	66246	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	10	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001687	91-03E7344-001	TX EL2 # 073	2000-10-05 00:00:00	EAU	66253	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001688	B32S-0175	TX AL12 # 033	2000-10-05 00:00:00	EAU	66252	0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001689	91-03E7301-004	TX SGE SPARE 77275	2000-10-05 00:00:00	EAU	66226	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	13	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001690	7853088	REGULATEUR #5	2000-10-05 00:00:00	EAU	66213	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	1811	0	0	0	0	0	0
AluSepABC001923	180139	REGULATEUR 23	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	0220	0	0	0	0	0	0
AluSepABC001691	51016113	REDRESSEUR #5	2000-10-05 00:00:00	EAU	66215	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0903	0	0	0	0	0	0
AluSepABC001692	7853087	RÉGULATEUR #6	2000-10-05 00:00:00	EAU	66216	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0700	0	0	0	0	0	0
AluSepABC001693	91-03E7255-001	TX SGE # 041	2000-10-05 00:00:00	EAU	66255	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001694	91-03E7300-004	TX HT # 151	2000-10-05 00:00:00	EAU	66220	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001695	91-03E7301-001	TX FOA # 161	2000-10-05 00:00:00	EAU	66223	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001696	91-03E7299-005	TX CO # 101	2000-10-05 00:00:00	EAU	66243	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001697	B32S-0174	POSTE CO-	2000-10-05 00:00:00	EAU	66251	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001698	91-037299-003	TX AL11 # 021	2000-10-05 00:00:00	EAU	66241	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001699	91-03E7299-004	TX HT # 152	2000-10-05 00:00:00	EAU	66242	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001700	91-03E7299-002	TX CO # 102	2000-10-05 00:00:00	EAU	66240	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001701	91-03E7299-001	TX AL11 # 022	2000-10-05 00:00:00	EAU	66239	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001702	91-03E7301-002	TX FOA # 162	2000-10-05 00:00:00	EAU	66224	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001703	91-03E7298-003	TX SA # 092	2000-10-05 00:00:00	EAU	66238	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001704	91-03E7301-005	TX NP # 141	2000-10-05 00:00:00	EAU	66227	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001705	91-03E7298-001	TX SA # 091	2000-10-05 00:00:00	EAU	66236	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001706	A325-0251	TRANSFORMATEUR 77227	2000-10-05 00:00:00	EAU	66247	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	15	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001707	XC030-001	TX PC # 173-B	2000-10-05 00:00:00	EAU	66248	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001708	91-03E7302-003	TX SGE # 042	2000-10-05 00:00:00	EAU	66231	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001709	A32S-0174	POSTE CO	2000-10-05 00:00:00	EAU	66249	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001710	A325-0175	TX AL11 # 023	2000-10-05 00:00:00	EAU	66250	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001711	91-03E7301-006	TX NP # 142	2000-10-05 00:00:00	EAU	66228	0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001712	51016112	REDRESSEUR #6	2000-08-14 00:00:00	EAU	65456	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001713	51016110	REDRESSEUR #3	2000-08-14 00:00:00	EAU	65455	0	1	1	f	0	0	2000-08-08 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001714	7853084	RÉGULATEUR #2	2000-07-12 00:00:00	EAU	64795	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	55	\N	f	\N	\N	1	\N	\N	 	1353	0	0	0	0	0	0
AluSepABC001715	7853083	RÉGULATEUR #1	2000-07-12 00:00:00	EAU	64794	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC001716	7853088	REGULATEUR #5	2000-07-12 00:00:00	EAU	64798	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1404	0	0	0	0	0	0
AluSepABC001717	7853087	RÉGULATEUR #6	2000-07-12 00:00:00	EAU	64799	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	D-432	0	0	0	0	0	0
AluSepABC001718	1132787	REDRESSEUR #7	2000-07-12 00:00:00	EAU	64800	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1622	0	0	0	0	0	0
AluSepABC001719	7853086	RÉGULATEUR #4	2000-07-12 00:00:00	EAU	64797	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	49	\N	f	\N	\N	1	\N	\N	 	1274	0	0	0	0	0	0
AluSepABC001720	7853085	RÉGULATEUR #3	2000-07-12 00:00:00	EAU	64796	0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	54	\N	f	\N	\N	1	\N	\N	 	0784	0	0	0	0	0	0
AluSepABC001924	160087	REDRESSEUR 25	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	4480	0	0	0	0	0	0
AluSepABC001721	51016110	REDRESSEUR #3	2000-04-20 00:00:00	EAU	62997	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0159	0	0	0	0	0	0
AluSepABC001722	51016108	REDRESSEUR #2	2000-04-20 00:00:00	EAU	62996	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7743	0	0	0	0	0	0
AluSepABC001723	51016111	REDRESSEUR #4	2000-04-20 00:00:00	EAU	62998	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	3801	0	0	0	0	0	0
AluSepABC001724	51016113	REDRESSEUR #5	2000-04-20 00:00:00	EAU	62999	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC001725	51016112	REDRESSEUR #6	2000-04-20 00:00:00	EAU	63000	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4603	0	0	0	0	0	0
AluSepABC001726	51016109	REDRESSEUR #1	2000-04-20 00:00:00	EAU	62995	0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4607	0	0	0	0	0	0
AluSepABC001727	91-03E7302-002	TX EL2 # 072	1999-07-20 00:00:00	EAU	18061	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001728	91-03E7344-002	TX EL2 # 074	1999-07-20 00:00:00	EAU	18069	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	41	0	0	0	0	0	0
AluSepABC001729	91-03E7300-002	TX EL11 # 062	1999-07-20 00:00:00	EAU	18062	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001730	91-03E7303-001	TX EL11 # 064	1999-07-20 00:00:00	EAU	18063	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001731	91-03E7298-001	TX SA # 091	1999-07-20 00:00:00	EAU	18068	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001732	B32S-0175	TX AL12 # 033	1999-07-20 00:00:00	EAU	18064	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001733	91-03E7301-006	TX NP # 142	1999-07-20 00:00:00	EAU	18065	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001734	91-03E7298-003	TX SA # 092	1999-07-20 00:00:00	EAU	18067	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001735	91-03E7301-002	TX FOA # 162	1999-07-20 00:00:00	EAU	18070	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001736	A32S-0174	POSTE CO	1999-07-20 00:00:00	EAU	18071	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001737	91-03E7302-004	TX EL2 # 071	1999-07-20 00:00:00	EAU	18066	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001738	91-03E7303-002	TX EL11 # 063	1999-07-19 00:00:00	EAU	18039	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001739	A325-0251	TRANSFORMATEUR 77227	1999-07-19 00:00:00	EAU	18043	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001740	91-03E7344-001	TX EL2 # 073	1999-07-19 00:00:00	EAU	18045	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001741	6394-0101	SPARE 77274	1999-07-19 00:00:00	EAU	18037	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001742	91-03E7300-003	TX EL3 # 081	1999-07-19 00:00:00	EAU	18040	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001743	91-03E7300-006	TX AL12 # 031	1999-07-19 00:00:00	EAU	18035	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001744	91-03E7301-003	TX MS # 131	1999-07-19 00:00:00	EAU	18036	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001745	91-03E7301-005	TX NP # 141	1999-07-19 00:00:00	EAU	18042	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001746	XC030-001	TX PC # 173-B	1999-07-19 00:00:00	EAU	18044	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	* quelques particules de carbone en suspensionL'huile est en bonne condition.	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001747	91-03E7301-004	TX SGE SPARE 77275	1999-07-19 00:00:00	EAU	18038	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001748	91-037299-003	TX AL11 # 021	1999-07-19 00:00:00	EAU	18041	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001749	B32S-0174	POSTE CO-	1999-07-16 00:00:00	EAU	18005	0	1	1	f	0	0	1999-07-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001750	91-03E7300-001	TX EL11 # 061	1999-07-16 00:00:00	EAU	18015	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001751	4046506001	TX PC # 171-A	1999-07-16 00:00:00	EAU	18013	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001752	W0582-001	TX PC # 173-A	1999-07-16 00:00:00	EAU	18020	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001753	91-03E7302-001	TX CB # 122	1999-07-16 00:00:00	EAU	18016	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001754	91-03E7300-005	TX EL3 # 082	1999-07-16 00:00:00	EAU	18008	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001755	91-03E7302-005	TX CB # 121	1999-07-16 00:00:00	EAU	18011	0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001756	91-03E7255-001	TX SGE # 041	1999-07-16 00:00:00	EAU	18004	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001757	61-0169835	AUXILIAIRE TA2	1999-07-16 00:00:00	EAU	18000	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0282	0	0	0	0	0	0
AluSepABC001758	7853085	RÉGULATEUR #3	1999-07-16 00:00:00	EAU	17998	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	0325	0	0	0	0	0	0
AluSepABC001759	51016108	REDRESSEUR #2	1999-07-16 00:00:00	EAU	17996	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	48	\N	f	\N	\N	1	\N	\N	 	0114	0	0	0	0	0	0
AluSepABC001760	51016109	REDRESSEUR #1	1999-07-16 00:00:00	EAU	17995	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0002	0	0	0	0	0	0
AluSepABC001761	1132787	REDRESSEUR #7	1999-07-16 00:00:00	EAU	17992	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	0434	0	0	0	0	0	0
AluSepABC001762	7853083	RÉGULATEUR #1	1999-07-16 00:00:00	EAU	17991	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	52	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC001763	7853084	RÉGULATEUR #2	1999-07-16 00:00:00	EAU	17989	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0358	0	0	0	0	0	0
AluSepABC001764	61-01-69834	AUXILIAIRE TA1	1999-07-16 00:00:00	EAU	17993	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0411	0	0	0	0	0	0
AluSepABC001765	91-03E7299-002	TX CO # 102	1999-07-16 00:00:00	EAU	18017	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001766	91-03E7301-001	TX FOA # 161	1999-07-16 00:00:00	EAU	18012	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001767	91-03E7299-001	TX AL11 # 022	1999-07-16 00:00:00	EAU	18006	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001768	91-03E7302-003	TX SGE # 042	1999-07-16 00:00:00	EAU	18018	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001769	91-03E7300-004	TX HT # 151	1999-07-16 00:00:00	EAU	18007	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min. IEEE=34kV).  Contenu d'eau élevé (Limite max. IEEE=35ppm).	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001770	91-03E7299-005	TX CO # 101	1999-07-16 00:00:00	EAU	18009	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001771	91-03E7298-002	TX AL12 # 032	1999-07-16 00:00:00	EAU	18010	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001772	A325-0175	TX AL11 # 023	1999-07-16 00:00:00	EAU	18019	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	57	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001773	91-03E7299-004	TX HT # 152	1999-07-16 00:00:00	EAU	18014	0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001774	51016111	REDRESSEUR #4	1999-07-16 00:00:00	EAU	17990	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0276	0	0	0	0	0	0
AluSepABC001775	7853088	REGULATEUR #5	1999-07-16 00:00:00	EAU	17999	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	46	\N	f	\N	\N	1	\N	\N	 	0369	0	0	0	0	0	0
AluSepABC001776	7853086	RÉGULATEUR #4	1999-07-16 00:00:00	EAU	18001	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0296	0	0	0	0	0	0
AluSepABC001777	7853087	RÉGULATEUR #6	1999-07-16 00:00:00	EAU	18002	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Rigidité diél.(D1816-2mm) trop faible (Limite min.=45kV) pour une HT de plus de 69kV.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0438	0	0	0	0	0	0
AluSepABC001778	51016113	REDRESSEUR #5	1999-07-16 00:00:00	EAU	18003	0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	L'huile est en bonne condition.	4	0	50	\N	f	\N	\N	1	\N	\N	 	0462	0	0	0	0	0	0
AluSepABC001779	4046506001	TX PC # 171-A	1998-09-16 00:00:00	EAU	14864	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001780	91-03E7303-001	TX EL11 # 064	1998-09-16 00:00:00	EAU	14861	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001781	91-03E7299-002	TX CO # 102	1998-09-16 00:00:00	EAU	14860	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001782	91-03E7344-001	TX EL2 # 073	1998-09-16 00:00:00	EAU	14862	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001783	91-03E7298-002	TX AL12 # 032	1998-09-15 00:00:00	EAU	14843	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001784	91-03E7300-006	TX AL12 # 031	1998-09-15 00:00:00	EAU	14856	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001785	91-03E7302-002	TX EL2 # 072	1998-09-15 00:00:00	EAU	14859	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001786	91-03E7344-002	TX EL2 # 074	1998-09-15 00:00:00	EAU	14833	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001787	91-03E7299-005	TX CO # 101	1998-09-15 00:00:00	EAU	14832	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001788	91-03E7303-002	TX EL11 # 063	1998-09-15 00:00:00	EAU	14852	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001789	91-03E7300-003	TX EL3 # 081	1998-09-15 00:00:00	EAU	14853	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001790	A32S-0174	POSTE CO	1998-09-15 00:00:00	EAU	14851	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001791	91-03E7300-004	TX HT # 151	1998-09-15 00:00:00	EAU	14854	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001792	91-03E7301-001	TX FOA # 161	1998-09-15 00:00:00	EAU	14858	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001793	91-03E7299-001	TX AL11 # 022	1998-09-15 00:00:00	EAU	14834	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001794	91-03E7300-005	TX EL3 # 082	1998-09-15 00:00:00	EAU	14857	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001795	91-03E7301-005	TX NP # 141	1998-09-15 00:00:00	EAU	14836	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001796	91-03E7302-003	TX SGE # 042	1998-09-15 00:00:00	EAU	14837	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001797	91-03E7301-002	TX FOA # 162	1998-09-15 00:00:00	EAU	14838	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001798	91-03E7302-001	TX CB # 122	1998-09-15 00:00:00	EAU	14839	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001799	91-03E7300-002	TX EL11 # 062	1998-09-15 00:00:00	EAU	14840	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001800	91-03E7301-006	TX NP # 142	1998-09-15 00:00:00	EAU	14841	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001801	91-03E7301-003	TX MS # 131	1998-09-15 00:00:00	EAU	14842	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001802	A32S0251	SPARE 77227	1998-09-15 00:00:00	EAU	14844	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001803	91-03E7299-004	TX HT # 152	1998-09-15 00:00:00	EAU	14845	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001804	XC030-001	TX PC # 173-B	1998-09-15 00:00:00	EAU	14846	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Huile visqueuse	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001805	91-03E7298-003	TX SA # 092	1998-09-15 00:00:00	EAU	14835	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001806	6394-0101	SPARE 77274	1998-09-15 00:00:00	EAU	14855	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001807	91-03E7255-001	TX SGE # 041	1998-09-14 00:00:00	EAU	14829	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001808	91-03E7301-004	TX SGE SPARE 77275	1998-09-14 00:00:00	EAU	14828	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001809	91-03E7298-001	TX SA # 091	1998-09-14 00:00:00	EAU	14830	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001810	91-03E7302-004	TX EL2 # 071	1998-09-14 00:00:00	EAU	14831	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001811	A32S0175	TX AL11 # 023	1998-09-14 00:00:00	EAU	14827	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	52	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001812	W0582-001	TX PC # 173-A	1998-09-12 00:00:00	EAU	14808	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001813	B32S-0175	TX AL12 # 033	1998-09-12 00:00:00	EAU	14789	0	1	1	f	0	0	1998-08-16 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001814	7853084	RÉGULATEUR #2	1998-09-12 00:00:00	EAU	14775	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	56	\N	f	\N	\N	1	\N	\N	 	4406	0	0	0	0	0	0
AluSepABC001815	61-0169835	AUXILIAIRE TA2	1998-09-12 00:00:00	EAU	14781	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	8161	0	0	0	0	0	0
AluSepABC001816	51016113	REDRESSEUR #5	1998-09-12 00:00:00	EAU	14772	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	2538	0	0	0	0	0	0
AluSepABC001817	51016112	REDRESSEUR #6	1998-09-12 00:00:00	EAU	14774	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	1965	0	0	0	0	0	0
AluSepABC001818	51016111	REDRESSEUR #4	1998-09-12 00:00:00	EAU	14776	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	9076	0	0	0	0	0	0
AluSepABC001819	7853083	RÉGULATEUR #1	1998-09-12 00:00:00	EAU	14777	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	55	\N	f	\N	\N	1	\N	\N	 	5100	0	0	0	0	0	0
AluSepABC001820	7853088	REGULATEUR #5	1998-09-12 00:00:00	EAU	14778	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	7626	0	0	0	0	0	0
AluSepABC001821	7853087	RÉGULATEUR #6	1998-09-12 00:00:00	EAU	14779	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	4268	0	0	0	0	0	0
AluSepABC001822	1132787	REDRESSEUR #7	1998-09-12 00:00:00	EAU	14780	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	V4563	0	0	0	0	0	0
AluSepABC001823	91-037299-003	TX AL11 # 021	1998-09-12 00:00:00	EAU	14788	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001824	51016109	REDRESSEUR #1	1998-09-12 00:00:00	EAU	14782	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	0601	0	0	0	0	0	0
AluSepABC001825	91-03E7300-001	TX EL11 # 061	1998-09-12 00:00:00	EAU	14795	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001826	61-01-69834	AUXILIAIRE TA1	1998-09-12 00:00:00	EAU	14773	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8132	0	0	0	0	0	0
AluSepABC001827	B32S-0174	POSTE CO-	1998-09-12 00:00:00	EAU	14787	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001828	51016108	REDRESSEUR #2	1998-09-12 00:00:00	EAU	14786	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	E0419	0	0	0	0	0	0
AluSepABC001829	51016110	REDRESSEUR #3	1998-09-12 00:00:00	EAU	14785	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	7988	0	0	0	0	0	0
AluSepABC001830	7853086	RÉGULATEUR #4	1998-09-12 00:00:00	EAU	14784	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	A480	0	0	0	0	0	0
AluSepABC001831	7853085	RÉGULATEUR #3	1998-09-12 00:00:00	EAU	14783	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	58	\N	f	\N	\N	1	\N	\N	 	4832	0	0	0	0	0	0
AluSepABC001832	91-03E7302-005	TX CB # 121	1998-09-12 00:00:00	EAU	14790	0	1	1	f	0	0	1998-08-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001833	91-03E7302-002	TX EL2 # 072	1997-08-08 00:00:00	EAU	10902	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001834	61-01-69834	AUXILIAIRE TA1	1997-08-07 00:00:00	EAU	10879	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	8639	0	0	0	0	0	0
AluSepABC001835	7853086	RÉGULATEUR #4	1997-08-07 00:00:00	EAU	10868	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	3662	0	0	0	0	0	0
AluSepABC001836	51016111	REDRESSEUR #4	1997-08-07 00:00:00	EAU	10875	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	063	0	0	0	0	0	0
AluSepABC001837	51016110	REDRESSEUR #3	1997-08-07 00:00:00	EAU	10874	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	409	0	0	0	0	0	0
AluSepABC001838	51016108	REDRESSEUR #2	1997-08-07 00:00:00	EAU	10873	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	2602	0	0	0	0	0	0
AluSepABC001839	51016109	REDRESSEUR #1	1997-08-07 00:00:00	EAU	10871	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	061	0	0	0	0	0	0
AluSepABC001840	7853083	RÉGULATEUR #1	1997-08-07 00:00:00	EAU	10870	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	8567	0	0	0	0	0	0
AluSepABC001841	61-0169835	AUXILIAIRE TA2	1997-08-07 00:00:00	EAU	10880	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	5944	0	0	0	0	0	0
AluSepABC001842	7853085	RÉGULATEUR #3	1997-08-07 00:00:00	EAU	10869	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	596	0	0	0	0	0	0
AluSepABC001843	7853087	RÉGULATEUR #6	1997-08-07 00:00:00	EAU	10867	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0708	0	0	0	0	0	0
AluSepABC001844	1132787	REDRESSEUR #7	1997-08-07 00:00:00	EAU	10866	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	2408	0	0	0	0	0	0
AluSepABC001845	7853088	REGULATEUR #5	1997-08-07 00:00:00	EAU	10865	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	4319	0	0	0	0	0	0
AluSepABC001846	7853084	RÉGULATEUR #2	1997-08-07 00:00:00	EAU	10872	0	1	1	f	0	0	1997-07-21 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1253	0	0	0	0	0	0
AluSepABC001847	B32S-0175	TX AL12 # 033	1997-08-07 00:00:00	EAU	10845	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001848	91-03E7344-001	TX EL2 # 073	1997-08-07 00:00:00	EAU	10861	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001849	91-03E7300-001	TX EL11 # 061	1997-08-07 00:00:00	EAU	10851	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001850	91-03E7303-002	TX EL11 # 063	1997-08-07 00:00:00	EAU	10843	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001851	91-03E7300-002	TX EL11 # 062	1997-08-07 00:00:00	EAU	10836	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001852	91-03E7301-005	TX NP # 141	1997-08-07 00:00:00	EAU	10862	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001853	6394-0101	SPARE 77274	1997-08-07 00:00:00	EAU	10818	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001854	91-03E7301-004	TX SGE SPARE 77275	1997-08-07 00:00:00	EAU	10819	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001855	91-03E7298-001	TX SA # 091	1997-08-07 00:00:00	EAU	10820	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001856	4046506001	TX PC # 171-A	1997-08-07 00:00:00	EAU	10847	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001857	91-03E7300-003	TX EL3 # 081	1997-08-07 00:00:00	EAU	10823	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001858	XC030-001	TX PC # 173-B	1997-08-07 00:00:00	EAU	10859	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001859	91-03E7298-002	TX AL12 # 032	1997-08-07 00:00:00	EAU	10844	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001860	B32S-0174	POSTE CO-	1997-08-07 00:00:00	EAU	10817	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001861	91-03E7301-001	TX FOA # 161	1997-08-07 00:00:00	EAU	10846	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001862	91-03E7300-005	TX EL3 # 082	1997-08-07 00:00:00	EAU	10849	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001863	91-03E7303-001	TX EL11 # 064	1997-08-07 00:00:00	EAU	10850	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001864	A32S-0174	POSTE CO	1997-08-07 00:00:00	EAU	10858	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001865	91-03E7299-002	TX CO # 102	1997-08-07 00:00:00	EAU	10840	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001866	91-037299-003	TX AL11 # 021	1997-08-07 00:00:00	EAU	10832	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001867	91-03E7299-004	TX HT # 152	1997-08-07 00:00:00	EAU	10816	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001868	91-03E7299-005	TX CO # 101	1997-08-07 00:00:00	EAU	10857	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001869	91-03E7301-003	TX MS # 131	1997-08-07 00:00:00	EAU	10856	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001870	91-03E7255-001	TX SGE # 041	1997-08-07 00:00:00	EAU	10855	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001871	91-03E7300-006	TX AL12 # 031	1997-08-07 00:00:00	EAU	10839	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001872	91-03E7298-003	TX SA # 092	1997-08-07 00:00:00	EAU	10838	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001873	91-03E7302-004	TX EL2 # 071	1997-08-07 00:00:00	EAU	10837	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001874	A32S0251	SPARE 77227	1997-08-07 00:00:00	EAU	10834	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	17	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001875	91-03E7301-006	TX NP # 142	1997-08-07 00:00:00	EAU	10833	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001876	91-03E7300-004	TX HT # 151	1997-08-07 00:00:00	EAU	10863	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001877	91-03E7299-001	TX AL11 # 022	1997-08-07 00:00:00	EAU	10831	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001878	91-03E7301-002	TX FOA # 162	1997-08-07 00:00:00	EAU	10830	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001879	A32S0175	TX AL11 # 023	1997-08-07 00:00:00	EAU	10829	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	54	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001880	91-03E7302-001	TX CB # 122	1997-08-07 00:00:00	EAU	10826	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001881	91-03E7302-005	TX CB # 121	1997-08-07 00:00:00	EAU	10822	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001882	51016112	REDRESSEUR #6	1997-08-07 00:00:00	EAU	10878	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001883	51016113	REDRESSEUR #5	1997-08-07 00:00:00	EAU	10876	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	1133	0	0	0	0	0	0
AluSepABC001885	91-03E7344-002	TX EL2 # 074	1997-08-07 00:00:00	EAU	10835	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001886	91-03E7302-003	TX SGE # 042	1997-08-06 00:00:00	EAU	10803	0	1	1	f	0	0	1997-07-19 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC001887	CL80011-101-0	AUXILIAIRE TA3	2005-02-09 00:00:00	FUR		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC001888	180137	REGULATEUR 25	2005-02-09 00:00:00	FUR		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC001889	180137	REGULATEUR 25	2005-02-09 00:00:00	FUR		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC001890	CL80011-101-0	AUXILIAIRE TA3	2005-02-09 00:00:00	FUR		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC001891	7853088	REGULATEUR #5	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5271	0	0	0	0	0	0
AluSepABC001892	51016110	REDRESSEUR #3	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2172	0	0	0	0	0	0
AluSepABC001893	61-01-69834	AUXILIAIRE TA1	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7323	0	0	0	0	0	0
AluSepABC001894	61-0169835	AUXILIAIRE TA2	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	6235	0	0	0	0	0	0
AluSepABC001895	51016108	REDRESSEUR #2	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2400	0	0	0	0	0	0
AluSepABC001896	7853084	RÉGULATEUR #2	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0491	0	0	0	0	0	0
AluSepABC001897	7853087	RÉGULATEUR #6	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	8065	0	0	0	0	0	0
AluSepABC001898	51016112	REDRESSEUR #6	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0388	0	0	0	0	0	0
AluSepABC001899	51016113	REDRESSEUR #5	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0308	0	0	0	0	0	0
AluSepABC001900	7853085	RÉGULATEUR #3	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2363	0	0	0	0	0	0
AluSepABC001901	51016111	REDRESSEUR #4	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2521	0	0	0	0	0	0
AluSepABC001902	7853086	RÉGULATEUR #4	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5536	0	0	0	0	0	0
AluSepABC001903	51016109	REDRESSEUR #1	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	0315	0	0	0	0	0	0
AluSepABC001925	160086	REDRESSEUR 21	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	AF851	0	0	0	0	0	0
AluSepABC001904	7853083	RÉGULATEUR #1	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	2504	0	0	0	0	0	0
AluSepABC001905	1132787	REDRESSEUR #7	2002-06-20 00:00:00	FUR		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	9310	0	0	0	0	0	0
AluSepABC001906	7853086	RÉGULATEUR #4	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	49	\N	f	\N	\N	1	\N	\N	 	1274	0	0	0	0	0	0
AluSepABC001907	7853083	RÉGULATEUR #1	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	49	\N	f	\N	\N	1	\N	\N	 	0757	0	0	0	0	0	0
AluSepABC001908	1132787	REDRESSEUR #7	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	1622	0	0	0	0	0	0
AluSepABC001909	7853085	RÉGULATEUR #3	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	54	\N	f	\N	\N	1	\N	\N	 	0784	0	0	0	0	0	0
AluSepABC001910	7853088	REGULATEUR #5	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1404	0	0	0	0	0	0
AluSepABC001911	7853087	RÉGULATEUR #6	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	D-432	0	0	0	0	0	0
AluSepABC001912	7853084	RÉGULATEUR #2	2000-07-11 00:00:00	FUR		0	1	1	f	0	0	2000-07-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	55	\N	f	\N	\N	1	\N	\N	 	1353	0	0	0	0	0	0
AluSepABC001913	51016112	REDRESSEUR #6	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4603	0	0	0	0	0	0
AluSepABC001914	51016113	REDRESSEUR #5	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC001915	51016111	REDRESSEUR #4	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	50	\N	f	\N	\N	1	\N	\N	 	3801	0	0	0	0	0	0
AluSepABC001916	51016110	REDRESSEUR #3	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	0159	0	0	0	0	0	0
AluSepABC001917	51016108	REDRESSEUR #2	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	45	\N	f	\N	\N	1	\N	\N	 	7743	0	0	0	0	0	0
AluSepABC001918	51016109	REDRESSEUR #1	2000-04-24 00:00:00	FUR		0	1	1	f	0	0	2000-04-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	40	\N	f	\N	\N	1	\N	\N	 	4607	0	0	0	0	0	0
AluSepABC001919	W0582-001	TX PC # 173-A	1999-03-18 00:00:00	FUR		0	1	1	f	0	0	1999-03-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL très basse. Dégradation du papier négligeable. Durée de vie résiduelle estimée à 100%. Vérifier qu'aucun traitement de l'huile n'a eu lieu aucours des 4 mois précédents.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4269	0	0	0	0	0	0
AluSepABC001920	51016113	REDRESSEUR #5	1998-02-23 00:00:00	FUR		0	1	1	f	0	0	1998-02-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL est basse. Aucune dégradation du papier visible. Vérifier qu'aucun traitement n'a été fait depuis les quatres derniers mois.	4	0	44	\N	f	\N	\N	1	\N	\N	 	F066	0	0	0	0	0	0
AluSepABC001921	7853088	REGULATEUR #5	1998-02-19 00:00:00	FUR		0	1	1	f	0	0	1998-02-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL est basse. Aucune dégradation du papier visible. Vérifier qu'aucun traitement n'a été fait depuis les quatres derniers mois.	4	0	44	\N	f	\N	\N	1	\N	\N	 	A309	0	0	0	0	0	0
AluSepABC001922	51016111	REDRESSEUR #4	1998-02-19 00:00:00	FUR		0	1	1	f	0	0	1998-02-18 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Concentration de 2-FAL est basse. Aucune dégradation du papier visible. Vérifier qu'aucun traitement n'a été fait depuis les quatres derniers mois.	4	0	48	\N	f	\N	\N	1	\N	\N	 	3789	0	0	0	0	0	0
AluSepABC001926	180136	REGULATEUR 21	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	D210	0	0	0	0	0	0
AluSepABC001927	160090	REDRESSEUR 23	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	8496	0	0	0	0	0	0
AluSepABC001928	180140	REGULATEUR 24	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	0852	0	0	0	0	0	0
AluSepABC001929	180137	REGULATEUR 25	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	5466	0	0	0	0	0	0
AluSepABC001930	160088	REDRESSEUR 22	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	AL642	0	0	0	0	0	0
AluSepABC001931	160089	REDRESSEUR 24	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	AF610	0	0	0	0	0	0
AluSepABC001932	180138	REGULATEUR 22	2006-02-14 00:00:00	DBPC		0	1	1	f	0	0	2006-06-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	G1157	0	0	0	0	0	0
AluSepABC001933	180138	REGULATEUR 22	2005-12-02 00:00:00	DBPC		0	1	1	f	0	0	2005-11-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0443	0	0	0	0	0	0
AluSepABC001934	180137	REGULATEUR 25	2005-02-07 00:00:00	DBPC		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	AC335	0	0	0	0	0	0
AluSepABC001935	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	DBPC		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4283	0	0	0	0	0	0
AluSepABC001936	CL80011-101-0	AUXILIAIRE TA3	2005-02-07 00:00:00	DBPC		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	5671	0	0	0	0	0	0
AluSepABC001937	180137	REGULATEUR 25	2005-02-07 00:00:00	DBPC		0	1	1	f	0	0	2005-02-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4649	0	0	0	0	0	0
AluSepABC001938	7853086	RÉGULATEUR #4	2004-08-12 00:00:00	DBPC		0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	0010	0	0	0	0	0	0
AluSepABC001939	51016111	REDRESSEUR #4	2004-08-12 00:00:00	DBPC		0	1	1	f	0	0	2004-08-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	1377	0	0	0	0	0	0
AluSepABC001940	61-0169835	AUXILIAIRE TA2	2004-05-04 00:00:00	DBPC		0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	15	\N	f	\N	\N	1	\N	\N	 	1381	0	0	0	0	0	0
AluSepABC001941	61-01-69834	AUXILIAIRE TA1	2004-05-04 00:00:00	DBPC		0	1	1	f	0	0	2004-04-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	4783	0	0	0	0	0	0
AluSepABC001942	61-0169835	AUXILIAIRE TA2	2003-11-04 00:00:00	DBPC		0	1	1	f	0	0	2003-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	0978	0	0	0	0	0	0
AluSepABC001943	61-01-69834	AUXILIAIRE TA1	2003-11-04 00:00:00	DBPC		0	1	1	f	0	0	2003-10-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	4436	0	0	0	0	0	0
AluSepABC001944	61-01-69834	AUXILIAIRE TA1	2003-09-08 00:00:00	DBPC		0	1	1	f	0	0	2003-08-26 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7690	0	0	0	0	0	0
AluSepABC001945	51016110	REDRESSEUR #3	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	9649	0	0	0	0	0	0
AluSepABC001946	7853085	RÉGULATEUR #3	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	7566	0	0	0	0	0	0
AluSepABC001947	7853084	RÉGULATEUR #2	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9146	0	0	0	0	0	0
AluSepABC001948	7853083	RÉGULATEUR #1	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	AA 110	0	0	0	0	0	0
AluSepABC001949	SET6394-0101	TRANSFORMATEUR 77274	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	5073	0	0	0	0	0	0
AluSepABC001950	A325-0251	TRANSFORMATEUR 77227	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	6107	0	0	0	0	0	0
AluSepABC001951	XC030-001	TX PC # 173-B	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	6775	0	0	0	0	0	0
AluSepABC001952	7853086	RÉGULATEUR #4	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2638	0	0	0	0	0	0
AluSepABC001953	91-03E7301-004	TX SGE SPARE 77275	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	AA 767	0	0	0	0	0	0
AluSepABC001954	4046506001	TX PC # 171-A	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	G 0312	0	0	0	0	0	0
AluSepABC001955	7853087	RÉGULATEUR #6	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	44	\N	f	\N	\N	1	\N	\N	 	7075	0	0	0	0	0	0
AluSepABC001956	51016108	REDRESSEUR #2	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	2926	0	0	0	0	0	0
AluSepABC001957	51016111	REDRESSEUR #4	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	F 523	0	0	0	0	0	0
AluSepABC001958	W0582-001	TX PC # 173-A	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	4302	0	0	0	0	0	0
AluSepABC001959	7853088	REGULATEUR #5	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0202	0	0	0	0	0	0
AluSepABC001960	51016109	REDRESSEUR #1	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2710	0	0	0	0	0	0
AluSepABC001961	91-03E7344-002	TX EL2 # 074	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	6439	0	0	0	0	0	0
AluSepABC001962	91-03E7344-001	TX EL2 # 073	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	43	\N	f	\N	\N	1	\N	\N	 	0301	0	0	0	0	0	0
AluSepABC001963	91-03E7300-002	TX EL11 # 062	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	1992	0	0	0	0	0	0
AluSepABC001964	91-03E7303-002	TX EL11 # 063	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	F 239	0	0	0	0	0	0
AluSepABC001965	91-03E7303-001	TX EL11 # 064	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	AB 411	0	0	0	0	0	0
AluSepABC001966	91-03E7300-001	TX EL11 # 061	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	0869	0	0	0	0	0	0
AluSepABC001967	91-03E7302-004	TX EL2 # 071	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	47	\N	f	\N	\N	1	\N	\N	 	2479	0	0	0	0	0	0
AluSepABC001968	91-03E7302-002	TX EL2 # 072	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	5621	0	0	0	0	0	0
AluSepABC001969	91-03E7302-003	TX SGE # 042	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	1816	0	0	0	0	0	0
AluSepABC001970	B325-0175	TX AL12 # 033	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	4865	0	0	0	0	0	0
AluSepABC001971	91-03E7298-002	TX AL12 # 032	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	5430	0	0	0	0	0	0
AluSepABC001972	91-03E7300-003	TX EL3 # 081	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	6793	0	0	0	0	0	0
AluSepABC001973	A325-0175	TX AL11 # 023	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	AB 528	0	0	0	0	0	0
AluSepABC001974	91-03E7299-001	TX AL11 # 022	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	B 1393	0	0	0	0	0	0
AluSepABC001975	91-03E7299-003	TX AL11 # 021	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	AA 731	0	0	0	0	0	0
AluSepABC001976	91-03E7300-005	TX EL3 # 082	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	9781	0	0	0	0	0	0
AluSepABC001977	91-03E7300-006	TX AL12 # 031	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4093	0	0	0	0	0	0
AluSepABC001978	91-03E7300-004	TX HT # 151	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	2429	0	0	0	0	0	0
AluSepABC001979	51016112	REDRESSEUR #6	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	4751	0	0	0	0	0	0
AluSepABC001980	51016113	REDRESSEUR #5	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	I 075	0	0	0	0	0	0
AluSepABC001981	91-03E7298-001	TX SA # 091	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4426	0	0	0	0	0	0
AluSepABC001982	91-03E7302-001	TX CB # 122	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	4571	0	0	0	0	0	0
AluSepABC001983	91-03E7255-001	TX SGE # 041	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	1579	0	0	0	0	0	0
AluSepABC001984	91-03E7301-001	TX FOA # 161	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	1514	0	0	0	0	0	0
AluSepABC001985	91-03E7299-005	TX CO # 101	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	AA 432	0	0	0	0	0	0
AluSepABC001986	91-03E7299-004	TX HT # 152	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	F 338	0	0	0	0	0	0
AluSepABC001987	91-03E7301-005	TX NP # 141	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	AC 278	0	0	0	0	0	0
AluSepABC001988	91-03E7301-006	TX NP # 142	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	2909	0	0	0	0	0	0
AluSepABC001989	91-03E7302-005	TX CB # 121	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	2113	0	0	0	0	0	0
AluSepABC001990	91-03E7301-003	TX MS # 131	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	6381	0	0	0	0	0	0
AluSepABC001991	B325-0174	TX CO # 104	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0242	0	0	0	0	0	0
AluSepABC001992	A325-0174	TX CO # 103	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	0341	0	0	0	0	0	0
AluSepABC001993	91-03E7298-003	TX SA # 092	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	5862	0	0	0	0	0	0
AluSepABC001994	91-03E7299-002	TX CO # 102	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	7833	0	0	0	0	0	0
AluSepABC001995	1132787	REDRESSEUR #7	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	6016	0	0	0	0	0	0
AluSepABC001996	91-03E7301-002	TX FOA # 162	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	5055	0	0	0	0	0	0
AluSepABC001997	61-0169835	AUXILIAIRE TA2	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	2491	0	0	0	0	0	0
AluSepABC001998	61-01-69834	AUXILIAIRE TA1	2003-08-25 00:00:00	DBPC		0	1	1	f	0	0	2003-08-01 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1598	0	0	0	0	0	0
AluSepABC001999	61-01-69834	AUXILIAIRE TA1	2003-06-10 00:00:00	DBPC		0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	2420	0	0	0	0	0	0
AluSepABC002000	61-0169835	AUXILIAIRE TA2	2003-06-10 00:00:00	DBPC		0	1	1	f	0	0	2003-05-27 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	4630	0	0	0	0	0	0
AluSepABC002001	61-0169835	AUXILIAIRE TA2	2002-10-11 00:00:00	DBPC		0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	2458	0	0	0	0	0	0
AluSepABC002002	61-01-69834	AUXILIAIRE TA1	2002-10-11 00:00:00	DBPC		0	1	1	f	0	0	2002-10-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	2624	0	0	0	0	0	0
AluSepABC002003	61-0169835	AUXILIAIRE TA2	2002-06-21 00:00:00	DBPC		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	6235	0	0	0	0	0	0
AluSepABC002004	61-01-69834	AUXILIAIRE TA1	2002-06-21 00:00:00	DBPC		0	1	1	f	0	0	2002-06-07 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7323	0	0	0	0	0	0
AluSepABC002005	91-03E7300-004	TX HT # 151	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-15 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6003	0	0	0	0	0	0
AluSepABC002006	91-03E7301-005	TX NP # 141	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002007	7853088	REGULATEUR #5	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2311	0	0	0	0	0	0
AluSepABC002008	7853087	RÉGULATEUR #6	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2631	0	0	0	0	0	0
AluSepABC002009	91-03E7301-002	TX FOA # 162	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002010	91-037299-003	TX AL11 # 021	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002011	91-03E7299-002	TX CO # 102	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002012	91-03E7300-001	TX EL11 # 061	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002013	91-03E7303-001	TX EL11 # 064	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002014	91-03E7303-002	TX EL11 # 063	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002015	A32S0175	TX AL11 # 023	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002016	91-03E7300-005	TX EL3 # 082	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002017	91-03E7302-001	TX CB # 122	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002018	91-03E7300-003	TX EL3 # 081	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002019	91-03E7301-006	TX NP # 142	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002020	91-03E7299-004	TX HT # 152	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002021	91-03E7301-001	TX FOA # 161	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002022	91-03E7302-005	TX CB # 121	2001-08-08 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002023	61-0169835	AUXILIAIRE TA2	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-24 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	51	\N	f	\N	\N	1	\N	\N	 	5605	0	0	0	0	0	0
AluSepABC002024	A32S0251	SPARE 77227	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7005	0	0	0	0	0	0
AluSepABC002025	7853083	RÉGULATEUR #1	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0432	0	0	0	0	0	0
AluSepABC002026	51016113	REDRESSEUR #5	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	7722	0	0	0	0	0	0
AluSepABC002027	51016109	REDRESSEUR #1	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0081	0	0	0	0	0	0
AluSepABC002028	7853084	RÉGULATEUR #2	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	1730	0	0	0	0	0	0
AluSepABC002029	51016108	REDRESSEUR #2	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	3030	0	0	0	0	0	0
AluSepABC002030	7853085	RÉGULATEUR #3	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	4148	0	0	0	0	0	0
AluSepABC002031	51016111	REDRESSEUR #4	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2377	0	0	0	0	0	0
AluSepABC002032	61-01-69834	AUXILIAIRE TA1	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	6216	0	0	0	0	0	0
AluSepABC002033	6394-0101	SPARE 77274	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0.422	0	0	0	0	0	0
AluSepABC002034	1132787	REDRESSEUR #7	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	9158	0	0	0	0	0	0
AluSepABC002035	91-03E7301-004	TX SGE SPARE 77275	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	0732	0	0	0	0	0	0
AluSepABC002037	XC030-001	TX PC # 173-B	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	R-temp a présent dans sont huile DBP et non DBPC comme anti-oxydant.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2757	0	0	0	0	0	0
AluSepABC002038	91-03E7302-002	TX EL2 # 072	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002039	7853086	RÉGULATEUR #4	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	2306	0	0	0	0	0	0
AluSepABC002040	91-03E7255-001	TX SGE # 041	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002041	91-03E7298-001	TX SA # 091	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002042	4046506001	TX PC # 171-A	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Il n'y a pas d'antioxydant dans l'huile se silicone	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002043	91-03E7344-001	TX EL2 # 073	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002044	W0582-001	TX PC # 173-A	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	R-temp a présent dans sont huile DBP et non DBPC comme anti-oxydant.	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002045	91-03E7344-002	TX EL2 # 074	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002046	91-03E7302-003	TX SGE # 042	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002047	91-03E7299-005	TX CO # 101	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002048	91-03E7298-003	TX SA # 092	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002049	A32S-0174	POSTE CO	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002050	91-03E7301-003	TX MS # 131	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002051	B32S-0174	POSTE CO-	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002052	91-03E7299-001	TX AL11 # 022	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002053	91-03E7298-002	TX AL12 # 032	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002054	91-03E7300-006	TX AL12 # 031	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002055	B32S-0175	TX AL12 # 033	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002056	91-03E7300-002	TX EL11 # 062	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002057	91-03E7302-004	TX EL2 # 071	2001-08-07 00:00:00	DBPC		0	1	1	f	0	0	2001-07-14 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002058	7853086	RÉGULATEUR #4	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	1956	0	0	0	0	0	0
AluSepABC002059	51016109	REDRESSEUR #1	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	0651	0	0	0	0	0	0
AluSepABC002060	7853083	RÉGULATEUR #1	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	6754	0	0	0	0	0	0
AluSepABC002061	7853085	RÉGULATEUR #3	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	53	\N	f	\N	\N	1	\N	\N	 	9439	0	0	0	0	0	0
AluSepABC002062	51016108	REDRESSEUR #2	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	6205	0	0	0	0	0	0
AluSepABC002063	51016111	REDRESSEUR #4	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0201	0	0	0	0	0	0
AluSepABC002064	61-01-69834	AUXILIAIRE TA1	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	0553	0	0	0	0	0	0
AluSepABC002065	7853084	RÉGULATEUR #2	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	A274	0	0	0	0	0	0
AluSepABC002066	61-0169835	AUXILIAIRE TA2	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	1421	0	0	0	0	0	0
AluSepABC002067	1132787	REDRESSEUR #7	2000-10-05 00:00:00	DBPC		0	1	1	f	0	0	2000-09-28 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	H954	0	0	0	0	0	0
AluSepABC002068	91-03E7303-001	TX EL11 # 064	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002069	W0582-001	TX PC # 173-A	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002070	91-03E7300-005	TX EL3 # 082	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002071	91-03E7301-003	TX MS # 131	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	21	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002072	91-03E7303-002	TX EL11 # 063	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002073	SET6394-0101	TRANSFORMATEUR 77274	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	10	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002074	91-03E7302-005	TX CB # 121	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002075	91-03E7302-004	TX EL2 # 071	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002076	91-03E7302-002	TX EL2 # 072	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002077	91-03E7298-002	TX AL12 # 032	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002078	B32S-0175	TX AL12 # 033	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	49	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002079	91-03E7300-003	TX EL3 # 081	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002080	91-03E7300-002	TX EL11 # 062	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002081	91-03E7300-001	TX EL11 # 061	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002082	91-03E7300-006	TX AL12 # 031	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002083	91-03E7302-001	TX CB # 122	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	18	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002084	91-03E7344-002	TX EL2 # 074	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002085	4046506001	TX PC # 171-A	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002086	91-03E7344-001	TX EL2 # 073	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-23 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002087	91-03E7301-006	TX NP # 142	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002088	51016113	REDRESSEUR #5	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0903	0	0	0	0	0	0
AluSepABC002089	91-03E7301-004	TX SGE SPARE 77275	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	13	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002090	91-03E7300-004	TX HT # 151	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002091	7853087	RÉGULATEUR #6	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0700	0	0	0	0	0	0
AluSepABC002092	7853088	REGULATEUR #5	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	1811	0	0	0	0	0	0
AluSepABC002093	91-03E7301-002	TX FOA # 162	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002094	91-03E7301-005	TX NP # 141	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	25	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002095	A325-0251	TRANSFORMATEUR 77227	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	15	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002096	91-03E7301-001	TX FOA # 161	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	27	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002097	91-03E7302-003	TX SGE # 042	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002098	91-03E7255-001	TX SGE # 041	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	23	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002099	B32S-0174	POSTE CO-	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002100	A325-0175	TX AL11 # 023	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002101	XC030-001	TX PC # 173-B	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002102	91-03E7299-005	TX CO # 101	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002103	91-03E7299-004	TX HT # 152	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002104	91-037299-003	TX AL11 # 021	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002105	91-03E7299-002	TX CO # 102	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	26	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002106	91-03E7299-001	TX AL11 # 022	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	29	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002107	91-03E7298-003	TX SA # 092	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	\N	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002108	91-03E7298-001	TX SA # 091	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002109	A32S-0174	POSTE CO	2000-10-02 00:00:00	DBPC		0	1	1	f	0	0	2000-09-22 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	38	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002110	91-03E7344-002	TX EL2 # 074	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	41	0	0	0	0	0	0
AluSepABC002111	A32S-0174	POSTE CO	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002112	91-03E7298-003	TX SA # 092	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	32	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002113	91-03E7302-004	TX EL2 # 071	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002114	91-03E7298-001	TX SA # 091	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002115	91-03E7301-002	TX FOA # 162	1999-07-20 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002116	B32S-0174	POSTE CO-	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-05 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002117	91-03E7300-003	TX EL3 # 081	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002118	91-03E7300-005	TX EL3 # 082	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002119	91-03E7302-005	TX CB # 121	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002120	4046506001	TX PC # 171-A	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	Aucun DBPC dans Silicone	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002121	91-03E7300-001	TX EL11 # 061	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002122	91-03E7302-001	TX CB # 122	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002123	W0582-001	TX PC # 173-A	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	*R-Temp. Présence de DBP plutôt que DBPC.  Résultat= 437ppm	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002124	6394-0101	SPARE 77274	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002125	91-03E7303-002	TX EL11 # 063	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	34	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002126	91-03E7302-002	TX EL2 # 072	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002127	A325-0251	TRANSFORMATEUR 77227	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	22	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002128	91-03E7303-001	TX EL11 # 064	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002129	91-03E7344-001	TX EL2 # 073	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	30	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002130	91-03E7300-002	TX EL11 # 062	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-04 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	28	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002131	91-03E7301-004	TX SGE SPARE 77275	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	24	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002132	91-03E7299-001	TX AL11 # 022	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	40	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002133	7853084	RÉGULATEUR #2	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0358	0	0	0	0	0	0
AluSepABC002134	91-03E7255-001	TX SGE # 041	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002135	91-03E7301-006	TX NP # 142	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	33	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002136	7853085	RÉGULATEUR #3	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	57	\N	f	\N	\N	1	\N	\N	 	0325	0	0	0	0	0	0
AluSepABC002137	91-03E7299-005	TX CO # 101	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002138	51016108	REDRESSEUR #2	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	48	\N	f	\N	\N	1	\N	\N	 	0114	0	0	0	0	0	0
AluSepABC002139	51016109	REDRESSEUR #1	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0002	0	0	0	0	0	0
AluSepABC002140	61-01-69834	AUXILIAIRE TA1	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0411	0	0	0	0	0	0
AluSepABC002141	1132787	REDRESSEUR #7	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	0434	0	0	0	0	0	0
AluSepABC002142	7853083	RÉGULATEUR #1	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	52	\N	f	\N	\N	1	\N	\N	 	0300	0	0	0	0	0	0
AluSepABC002143	61-0169835	AUXILIAIRE TA2	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	0282	0	0	0	0	0	0
AluSepABC002144	91-03E7299-002	TX CO # 102	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002145	91-03E7301-005	TX NP # 141	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	31	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002146	XC030-001	TX PC # 173-B	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	* R-Temp, présence de DBP et non DBPC.  Résultat 399	4	0	20	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002147	91-03E7301-003	TX MS # 131	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	37	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002148	91-03E7300-006	TX AL12 # 031	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	41	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002149	A325-0175	TX AL11 # 023	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	57	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002150	91-03E7300-004	TX HT # 151	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	36	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002151	91-03E7302-003	TX SGE # 042	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	35	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002152	91-037299-003	TX AL11 # 021	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002153	91-03E7299-004	TX HT # 152	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002154	91-03E7301-001	TX FOA # 161	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	39	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002155	B32S-0175	TX AL12 # 033	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	60	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002156	91-03E7298-002	TX AL12 # 032	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-03 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	42	\N	f	\N	\N	1	\N	\N	 	n/a	0	0	0	0	0	0
AluSepABC002157	7853086	RÉGULATEUR #4	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0296	0	0	0	0	0	0
AluSepABC002158	7853087	RÉGULATEUR #6	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	45	\N	f	\N	\N	1	\N	\N	 	0438	0	0	0	0	0	0
AluSepABC002159	51016113	REDRESSEUR #5	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0462	0	0	0	0	0	0
AluSepABC002160	51016111	REDRESSEUR #4	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	50	\N	f	\N	\N	1	\N	\N	 	0276	0	0	0	0	0	0
AluSepABC002161	7853088	REGULATEUR #5	1999-07-19 00:00:00	DBPC		0	1	1	f	0	0	1999-07-02 00:00:00		 	f	f		\N	 	 	 	0	\N	\N	\N	4	0	46	\N	f	\N	\N	1	\N	\N	 	0369	0	0	0	0	0	0
ALUSEPMS 000001	51016109	REDRESSEUR #1	\N	GD		0	1	1	f	0	\N	2005-08-19 08:00:00			f	f	Morgan Schaffer	\N	\N			0		\N		0	0	\N	\N	f	 	0	1	2	1,GD,	 		0	0	0	0	0	0
ALUSEPMS 000002	91-03E7300-006	TX AL12 # 031	\N	GD		0	1	1	f	0	\N	2006-11-03 00:00:01			f	f	Morgan Schaffer	\N	\N			0		\N		0	0	\N	\N	f	 	0	1	3	1,GD,	 		0	0	0	0	0	0
ALUSEPMS 000003	A32S0251	SPARE 77227	\N	GD		0	1	1	f	0	\N	2006-11-03 00:00:01			f	f	Morgan Schaffer	\N	\N			0		\N		0	0	\N	\N	f	 	0	1	4	1,GD,EAU,	 		0	0	0	0	0	0
ALUSEPMS 000004	A32S0251	SPARE 77227	\N	EAU		0	1	1	f	0	\N	2006-11-03 00:00:01			f	f	Morgan Schaffer	\N	\N			0		\N		0	0	\N	\N	f	 	0	1	4		 		0	0	0	0	0	0
ALUSEPMS 000031	160087	REDRESSEUR 25	2006-09-29 00:00:00	GD	107119	0	4	1	f	0	\N	2006-09-26 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	15	1,GD,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000032	160087	REDRESSEUR 25	2006-09-29 00:00:00	EAU	111788	0	4	1	f	0	\N	2006-09-26 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	15		4500128972		0	0	0	0	0	0
ALUSEPMS 000035	160087	REDRESSEUR 25	2006-11-02 00:00:00	GD	107978	0	4	1	f	0	\N	2006-10-30 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	25	\N	f		0	1	17	1,GD,EAU,	4500128972	AK609	0	0	0	0	0	0
ALUSEPMS 000014	160087	REDRESSEUR 25	2006-08-21 00:00:00	GD	105873	0	1	1	f	0	\N	2006-08-12 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	2	8	1,GD,FUR,	4500128972		0	0	0	0	0	0
ALUSEPMS 000016	160087	REDRESSEUR 25	\N	PHY		0	1	1	f	0	\N	2006-08-12 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	21	\N	f		0	1	8	2,PHY,ANT,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000018	160087	REDRESSEUR 25	2006-08-21 00:00:00	EAU	105873	0	1	1	f	0	\N	2006-08-12 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	8		4500128972		0	0	0	0	0	0
ALUSEPMS 000019	160087	REDRESSEUR 25	2006-10-05 00:00:00	GD	107242	0	4	1	f	0	\N	2006-10-03 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	25	\N	f		0	1	9	1,GD,EAU,	4500128972	AK576	0	0	0	0	0	0
ALUSEPMS 000020	160087	REDRESSEUR 25	2006-10-05 00:00:00	EAU	111851	0	4	1	f	0	\N	2006-10-03 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	25	\N	f		0	1	9		4500128972		0	0	0	0	0	0
ALUSEPMS 000021	160087	REDRESSEUR 25	2006-10-05 00:00:00	GD	107243	0	4	1	f	0	\N	2006-10-04 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	10	1,GD,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000022	160087	REDRESSEUR 25	2006-10-05 00:00:00	EAU	111850	0	4	1	f	0	\N	2006-10-04 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	10		4500128972		0	0	0	0	0	0
ALUSEPMS 000023	160087	REDRESSEUR 25	2006-10-12 00:00:00	GD	107410	0	4	1	f	0	\N	2006-10-09 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	11	1,GD,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000024	160087	REDRESSEUR 25	2006-10-12 00:00:00	EAU	112054	0	4	1	f	0	\N	2006-10-09 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	11		4500128972		0	0	0	0	0	0
ALUSEPMS 000025	160087	REDRESSEUR 25	2006-10-12 00:00:00	GD	107412	0	4	1	f	0	\N	2006-10-11 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	30	\N	f		0	1	12	1,GD,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000026	160087	REDRESSEUR 25	2006-10-12 00:00:00	EAU	112055	0	4	1	f	0	\N	2006-10-11 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	30	\N	f		0	1	12		4500128972		0	0	0	0	0	0
ALUSEPMS 000027	160087	REDRESSEUR 25	2006-10-19 00:00:00	GD	107603	0	4	1	f	0	\N	2006-10-18 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	30	\N	f		0	1	13	1,GD,EAU,	4500128972	AK637	0	0	0	0	0	0
ALUSEPMS 000028	160087	REDRESSEUR 25	2006-10-19 00:00:00	EAU	112231	0	4	1	f	0	\N	2006-10-18 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	30	\N	f		0	1	13		4500128972		0	0	0	0	0	0
ALUSEPMS 000029	160087	REDRESSEUR 25	2006-10-27 00:00:00	GD	107873	0	4	1	f	0	\N	2006-10-25 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	89	\N	\N	f		0	1	14	1,GD,EAU,	4500128972	AK 576	0	0	0	0	0	0
ALUSEPMS 000030	160087	REDRESSEUR 25	2006-10-27 00:00:00	EAU	112456	0	4	1	f	0	\N	2006-10-25 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	\N	\N	f		0	1	14		4500128972	AK576	0	0	0	0	0	0
ALUSEPMS 000036	160087	REDRESSEUR 25	2006-11-02 00:00:00	EAU	112591	0	4	1	f	0	\N	2006-10-30 08:00:00			f	f	GE Syprotec	\N	\N		  X  	0		\N		4	0	25	\N	f		0	1	17		4500128972	AK609	0	0	0	0	0	0
ALUSEPMS 000037	160087	REDRESSEUR 25	2006-10-03 00:00:00	GD	107169	0	4	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	20	\N	f		0	2	18	1,GD,FUR,	4500128972	AK639	0	0	0	0	0	0
ALUSEPMS 000038	160087	REDRESSEUR 25	2006-10-03 00:00:00	FUR	8144	0	4	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	20	\N	f		0	2	18		4500128972	AK639	0	0	0	0	0	0
ALUSEPMS 000039	160087	REDRESSEUR 25	2006-10-03 00:00:00	PHY	111830	0	4	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	20	\N	f		0	1	18	2,PHY,EAU,	4500128972		0	0	0	0	0	0
ALUSEPMS 000040	160087	REDRESSEUR 25	2006-10-03 00:00:00	EAU	11830	0	4	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	20	\N	f		0	1	18		4500128972		0	0	0	0	0	0
ALUSEPMS 000041	160087	REDRESSEUR 25	\N	MDH		0	1	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	0	20	\N	f	 	0	1	19	2,MDH,PAR,	 		0	0	0	0	0	0
ALUSEPMS 000042	160087	REDRESSEUR 25	2006-10-03 00:00:00	PAR		0	4	1	f	0	\N	2006-10-02 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		4	85	20	\N	f	 	0	1	19		 		0	0	0	0	0	0
ALUSEPMS 000043	160087	REDRESSEUR 25	2006-11-15 00:00:00	GD	108272	0	4	1	f	0	\N	2006-11-13 08:00:00	Temp. ambiante (°C) =  0\r\n"Diagnostic du laboratoire :"		f	f	GE Syprotec	\N	\N			0		\N		4	85	26	\N	f		0	1	20	1,GD,EAU,	4500130958	AL197	0	0	0	0	0	0
ALUSEPMS 000044	160087	REDRESSEUR 25	2006-11-15 00:00:00	EAU	112855	0	4	1	f	0	\N	2006-11-13 08:00:00	Temp. ambiante (°C) =  0\r\n"Diagnostic du laboratoire :L'huile est en bonne condition. "		f	f	GE Syprotec	\N	\N			0		\N		4	0	26	\N	f		0	1	20		4500130958		0	0	0	0	0	0
ALUSEPMS 000045	160087	REDRESSEUR 25	\N	GD		0	4	1	f	0	\N	2006-11-20 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		0	85	30	\N	f		0	1	21	1,GD,EAU,		AK786	0	0	0	0	0	0
ALUSEPMS 000046	160087	REDRESSEUR 25	\N	EAU		0	4	1	f	0	\N	2006-11-20 08:00:00			f	f	GE Syprotec	\N	\N			0		\N		0	85	30	\N	f		0	1	21			AK786	0	0	0	0	0	0
\.


--
-- Data for Name: BCD; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "BCD" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "TestKV1", "mMeter1", "mMultiplier1", "wMeter1", "wMultiplier1", "TestKV2", "mMeter2", "mMultiplier2", "wMeter2", "wMultiplier2", "TestKV3", "mMeter3", "mMultiplier3", "wMeter3", "wMultiplier3", "TestKV4", "mMeter4", "mMultiplier4", "wMeter4", "wMultiplier4", "TestKV5", "mMeter5", "mMultiplier5", "wMeter5", "wMultiplier5", "TestKV6", "mMeter6", "mMultiplier6", "wMeter6", "wMultiplier6", "TestKV7", "mMeter7", "mMultiplier7", "wMeter7", "wMultiplier7", "TestKV8", "mMeter8", "mMultiplier8", "wMeter8", "wMultiplier8", "TestKV9", "mMeter9", "mMultiplier9", "wMeter9", "wMultiplier9", "TestKV10", "mMeter10", "mMultiplier10", "wMeter10", "wMultiplier10", "Type_Doble", "Humidite") FROM stdin;
\.


--
-- Data for Name: BPC; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "BPC" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Bpc1242", "Bpc1254", "Bpc1260", b1242, b1254, b1260, "BPCTotal", "bTotal") FROM stdin;
AluSepABC001217	CL80011-101-0	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001218	CL80011-101-0	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001219	180137	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001220	180137	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001221	51016108	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001222	61-0169835	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001223	61-01-69834	TRANSFORMATEUR 77291	0.149999999999999994	0	0	t	f	f	0	f
AluSepABC001224	91-03E7303-001	TRANSFORMATEUR 77291	\N	0	0	f	f	f	0	f
AluSepABC001225	91-03E7298-001	TRANSFORMATEUR 77291	3	0	0	f	f	f	0	f
\.


--
-- Data for Name: Capteur_GAZ; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Capteur_GAZ" ("Capteur", "Manufacturier", "H2", "CH4", "C2H2", "C2H4", "C2H6", "CO", "CO2", "O2", "N2", "ErreurPPM", "ErreurPourcent") FROM stdin;
AMS-500 PLUS	MORGAN SCHAFFER	100	2.5	0	0	0	-0.5	-0.5	0.400000000000000022	-0.699999999999999956	5	2
HYDRAN 201Ti	SYPROTEC	100	0	8	1.5	0	18	0	0	0	25	10
PHA-1000	MORGAN SCHAFFER	100	0	0	0	0	0	0	0	0	1	1
TFGA-P200	MORGAN SCHAFFER	100	100	100	100	100	100	100	0	0	0	5
\.


--
-- Data for Name: Cedule; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Cedule" ("NoSerieEquipe", "NoEquipement", "DateDep", "PerAnnee", "PerMois", "PerJours", "TravailleFait", "Rappel", "RappelNbrJours", "Description", "Prof_Fluid", "Prof_Elec", "Prof_Mec", "NoTravaux") FROM stdin;
\.


--
-- Data for Name: Clients; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Clients" ("NoClient", "Nom", "Adresse", "Contact", "Province", "NoTravail", "NoCommande", "Ville", "CP", "Tel", "Fax", "Tel_Extension", "Email") FROM stdin;
\.


--
-- Data for Name: Configuration; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Configuration" ("NPHYT", "NPHYD", "NPHYP", "Nom_Fichier_Client", "NoClient", "Nom", "Adresse", "Adresse2", "Contact", "NoTravail", "NoCommande", "Ville", "CP", "TEL", "FAX", "Province", "FType", "NTable", "AffParNoEquipe", "NormeGD", "NormeFuranne", "Cpt_Export", "NormeGDSi", "NormeGDRTEMP", "NormePHYSi", "NormePHYRTEMP", "NormePHYWECO", "NormePHYBPC", "Tel_Extension", "Email") FROM stdin;
DEFAULT-H T	DEFAULT D	DEFAULT P	 	NoClient	Nom	Adresse	 	Contact	BonTravail	BonCommande	Ville	CP	Tel	Fax	State/Prov	0	 	f	C57104	DOBLE	4		C57104-R	DEFAULT-S T	DEFAULT-R T	DEFAULT-H T	DEFAULT-H T	Tel_Extension	Email
\.


--
-- Data for Name: DBPC; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "DBPC" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "DBPC", "REMARQUE", "bDBPC") FROM stdin;
AluSepABC001923	180139	TRANSFORMATEUR 77291	2580	\N	f
AluSepABC001924	160087	TRANSFORMATEUR 77291	4111	\N	f
AluSepABC001925	160086	TRANSFORMATEUR 77291	3868	\N	f
AluSepABC001926	180136	TRANSFORMATEUR 77291	3888	\N	f
AluSepABC001927	160090	TRANSFORMATEUR 77291	1019	\N	f
AluSepABC001928	180140	TRANSFORMATEUR 77291	972	\N	f
AluSepABC001929	180137	TRANSFORMATEUR 77291	3982	\N	f
AluSepABC001930	160088	TRANSFORMATEUR 77291	1033	\N	f
AluSepABC001931	160089	TRANSFORMATEUR 77291	844	\N	f
AluSepABC001932	180138	TRANSFORMATEUR 77291	1083	\N	f
AluSepABC001933	180138	TRANSFORMATEUR 77291	1327	\N	f
AluSepABC001934	180137	TRANSFORMATEUR 77291	1260	\N	f
AluSepABC001935	CL80011-101-0	TRANSFORMATEUR 77291	739	\N	f
AluSepABC001936	CL80011-101-0	TRANSFORMATEUR 77291	736	\N	f
AluSepABC001937	180137	TRANSFORMATEUR 77291	1256	\N	f
AluSepABC001938	7853086	TRANSFORMATEUR 77291	877	\N	f
AluSepABC001939	51016111	TRANSFORMATEUR 77291	856	\N	f
AluSepABC001940	61-0169835	TRANSFORMATEUR 77291	3237	\N	f
AluSepABC001941	61-01-69834	TRANSFORMATEUR 77291	2782	\N	f
AluSepABC001942	61-0169835	TRANSFORMATEUR 77291	3263	\N	f
AluSepABC001943	61-01-69834	TRANSFORMATEUR 77291	2905	\N	f
AluSepABC001944	61-01-69834	TRANSFORMATEUR 77291	2970	\N	f
AluSepABC001945	51016110	TRANSFORMATEUR 77291	747	\N	f
AluSepABC001946	7853085	TRANSFORMATEUR 77291	753	\N	f
AluSepABC001947	7853084	TRANSFORMATEUR 77291	680	\N	f
AluSepABC001948	7853083	TRANSFORMATEUR 77291	674	\N	f
AluSepABC001949	SET6394-0101	TRANSFORMATEUR 77291	279	\N	f
AluSepABC001950	A325-0251	TRANSFORMATEUR 77291	616	\N	f
AluSepABC001951	XC030-001	TX PC # 173-B	10	\N	t
AluSepABC001952	7853086	TRANSFORMATEUR 77291	772	\N	f
AluSepABC001953	91-03E7301-004	TRANSFORMATEUR 77291	631	\N	f
AluSepABC001954	4046506001	TRANSFORMATEUR 77291	10	\N	t
AluSepABC001955	7853087	TRANSFORMATEUR 77291	662	\N	f
AluSepABC001956	51016108	TRANSFORMATEUR 77291	612	\N	f
AluSepABC001957	51016111	TRANSFORMATEUR 77291	742	\N	f
AluSepABC001958	W0582-001	TRANSFORMATEUR 77291	10	\N	t
AluSepABC001959	7853088	TRANSFORMATEUR 77291	646	\N	f
AluSepABC001960	51016109	TRANSFORMATEUR 77291	587	\N	f
AluSepABC001961	91-03E7344-002	TRANSFORMATEUR 77291	659	\N	f
AluSepABC001962	91-03E7344-001	TRANSFORMATEUR 77291	611	\N	f
AluSepABC001963	91-03E7300-002	TRANSFORMATEUR 77291	730	\N	f
AluSepABC001964	91-03E7303-002	TRANSFORMATEUR 77291	625	\N	f
AluSepABC001965	91-03E7303-001	TRANSFORMATEUR 77291	650	\N	f
AluSepABC001966	91-03E7300-001	TRANSFORMATEUR 77291	727	\N	f
AluSepABC001967	91-03E7302-004	TRANSFORMATEUR 77291	666	\N	f
AluSepABC001968	91-03E7302-002	TRANSFORMATEUR 77291	700	\N	f
AluSepABC001969	91-03E7302-003	TRANSFORMATEUR 77291	631	\N	f
AluSepABC001970	B325-0175	TRANSFORMATEUR 77291	524	\N	f
AluSepABC001971	91-03E7298-002	TRANSFORMATEUR 77291	634	\N	f
AluSepABC001972	91-03E7300-003	TRANSFORMATEUR 77291	587	\N	f
AluSepABC001973	A325-0175	TRANSFORMATEUR 77291	550	\N	f
AluSepABC001974	91-03E7299-001	TRANSFORMATEUR 77291	661	\N	f
AluSepABC001975	91-03E7299-003	TRANSFORMATEUR 77291	704	\N	f
AluSepABC001976	91-03E7300-005	TRANSFORMATEUR 77291	613	\N	f
AluSepABC001977	91-03E7300-006	TRANSFORMATEUR 77291	656	\N	f
AluSepABC001978	91-03E7300-004	TRANSFORMATEUR 77291	669	\N	f
AluSepABC001979	51016112	TRANSFORMATEUR 77291	684	\N	f
AluSepABC001980	51016113	TRANSFORMATEUR 77291	799	\N	f
AluSepABC001981	91-03E7298-001	TRANSFORMATEUR 77291	594	\N	f
AluSepABC001982	91-03E7302-001	TRANSFORMATEUR 77291	606	\N	f
AluSepABC001983	91-03E7255-001	TRANSFORMATEUR 77291	683	\N	f
AluSepABC001984	91-03E7301-001	TRANSFORMATEUR 77291	577	\N	f
AluSepABC001985	91-03E7299-005	TRANSFORMATEUR 77291	629	\N	f
AluSepABC001986	91-03E7299-004	TRANSFORMATEUR 77291	656	\N	f
AluSepABC001987	91-03E7301-005	TRANSFORMATEUR 77291	601	\N	f
AluSepABC001988	91-03E7301-006	TRANSFORMATEUR 77291	576	\N	f
AluSepABC001989	91-03E7302-005	TRANSFORMATEUR 77291	638	\N	f
AluSepABC001990	91-03E7301-003	TRANSFORMATEUR 77291	607	\N	f
AluSepABC001991	B325-0174	TRANSFORMATEUR 77291	552	\N	f
AluSepABC001992	A325-0174	TRANSFORMATEUR 77291	546	\N	f
AluSepABC001993	91-03E7298-003	TRANSFORMATEUR 77291	700	\N	f
AluSepABC001994	91-03E7299-002	TRANSFORMATEUR 77291	638	\N	f
AluSepABC001995	1132787	TRANSFORMATEUR 77291	567	\N	f
AluSepABC001996	91-03E7301-002	TRANSFORMATEUR 77291	565	\N	f
AluSepABC001997	61-0169835	TRANSFORMATEUR 77291	273	\N	f
AluSepABC001998	61-01-69834	TRANSFORMATEUR 77291	209	\N	f
AluSepABC001999	61-01-69834	TRANSFORMATEUR 77291	207	\N	f
AluSepABC002000	61-0169835	TRANSFORMATEUR 77291	258	\N	f
AluSepABC002001	61-0169835	TRANSFORMATEUR 77291	337	\N	f
AluSepABC002002	61-01-69834	TRANSFORMATEUR 77291	318	\N	f
AluSepABC002003	61-0169835	TRANSFORMATEUR 77291	336	\N	f
AluSepABC002004	61-01-69834	TRANSFORMATEUR 77291	301	\N	f
AluSepABC002005	91-03E7300-004	TRANSFORMATEUR 77291	469	\N	f
AluSepABC002006	91-03E7301-005	TRANSFORMATEUR 77291	572	\N	f
AluSepABC002007	7853088	TRANSFORMATEUR 77291	711	\N	f
AluSepABC002008	7853087	TRANSFORMATEUR 77291	667	\N	f
AluSepABC002009	91-03E7301-002	TRANSFORMATEUR 77291	560	\N	f
AluSepABC002010	91-037299-003	TRANSFORMATEUR 77291	657	\N	f
AluSepABC002011	91-03E7299-002	TRANSFORMATEUR 77291	610	\N	f
AluSepABC002012	91-03E7300-001	TRANSFORMATEUR 77291	638	\N	f
AluSepABC002013	91-03E7303-001	TRANSFORMATEUR 77291	614	\N	f
AluSepABC002014	91-03E7303-002	TRANSFORMATEUR 77291	602	\N	f
AluSepABC002015	A32S0175	TRANSFORMATEUR 77291	562	\N	f
AluSepABC002016	91-03E7300-005	TRANSFORMATEUR 77291	603	\N	f
AluSepABC002017	91-03E7302-001	TRANSFORMATEUR 77291	617	\N	f
AluSepABC002018	91-03E7300-003	TRANSFORMATEUR 77291	574	\N	f
AluSepABC002019	91-03E7301-006	TRANSFORMATEUR 77291	566	\N	f
AluSepABC002020	91-03E7299-004	TRANSFORMATEUR 77291	627	\N	f
AluSepABC002021	91-03E7301-001	TRANSFORMATEUR 77291	542	\N	f
AluSepABC002022	91-03E7302-005	TRANSFORMATEUR 77291	692	\N	f
AluSepABC002023	61-0169835	TRANSFORMATEUR 77291	314	\N	f
AluSepABC002024	A32S0251	TRANSFORMATEUR 77291	619	\N	f
AluSepABC002025	7853083	TRANSFORMATEUR 77291	667	\N	f
AluSepABC002026	51016113	TRANSFORMATEUR 77291	762	\N	f
AluSepABC002027	51016109	TRANSFORMATEUR 77291	634	\N	f
AluSepABC002028	7853084	TRANSFORMATEUR 77291	647	\N	f
AluSepABC002029	51016108	TRANSFORMATEUR 77291	613	\N	f
AluSepABC002030	7853085	TRANSFORMATEUR 77291	716	\N	f
AluSepABC002031	51016111	TRANSFORMATEUR 77291	794	\N	f
AluSepABC002032	61-01-69834	TRANSFORMATEUR 77291	335	\N	f
AluSepABC002033	6394-0101	TRANSFORMATEUR 77291	295	\N	f
AluSepABC002034	1132787	TRANSFORMATEUR 77291	606	\N	f
AluSepABC002035	91-03E7301-004	TRANSFORMATEUR 77291	667	\N	f
AluSepABC002037	XC030-001	TX PC # 173-B	2655	\N	f
AluSepABC002038	91-03E7302-002	TRANSFORMATEUR 77291	675	\N	f
AluSepABC002039	7853086	TRANSFORMATEUR 77291	810	\N	f
AluSepABC002040	91-03E7255-001	TRANSFORMATEUR 77291	666	\N	f
AluSepABC002041	91-03E7298-001	TRANSFORMATEUR 77291	641	\N	f
AluSepABC002042	4046506001	TRANSFORMATEUR 77291	0	\N	f
AluSepABC002043	91-03E7344-001	TRANSFORMATEUR 77291	601	\N	f
AluSepABC002044	W0582-001	TRANSFORMATEUR 77291	2723	\N	f
AluSepABC002045	91-03E7344-002	TRANSFORMATEUR 77291	635	\N	f
AluSepABC002046	91-03E7302-003	TRANSFORMATEUR 77291	598	\N	f
AluSepABC002047	91-03E7299-005	TRANSFORMATEUR 77291	670	\N	f
AluSepABC002048	91-03E7298-003	TRANSFORMATEUR 77291	638	\N	f
AluSepABC002049	A32S-0174	TRANSFORMATEUR 77291	555	\N	f
AluSepABC002050	91-03E7301-003	TRANSFORMATEUR 77291	557	\N	f
AluSepABC002051	B32S-0174	TRANSFORMATEUR 77291	564	\N	f
AluSepABC002052	91-03E7299-001	TRANSFORMATEUR 77291	500	\N	f
AluSepABC002053	91-03E7298-002	TRANSFORMATEUR 77291	646	\N	f
AluSepABC002054	91-03E7300-006	TRANSFORMATEUR 77291	627	\N	f
AluSepABC002055	B32S-0175	TRANSFORMATEUR 77291	550	\N	f
AluSepABC002056	91-03E7300-002	TRANSFORMATEUR 77291	755	\N	f
AluSepABC002057	91-03E7302-004	TRANSFORMATEUR 77291	633	\N	f
AluSepABC002058	7853086	TRANSFORMATEUR 77291	890	\N	f
AluSepABC002059	51016109	TRANSFORMATEUR 77291	700	\N	f
AluSepABC002060	7853083	TRANSFORMATEUR 77291	730	\N	f
AluSepABC002061	7853085	TRANSFORMATEUR 77291	827	\N	f
AluSepABC002062	51016108	TRANSFORMATEUR 77291	718	\N	f
AluSepABC002063	51016111	TRANSFORMATEUR 77291	814	\N	f
AluSepABC002064	61-01-69834	TRANSFORMATEUR 77291	386	\N	f
AluSepABC002065	7853084	TRANSFORMATEUR 77291	735	\N	f
AluSepABC002066	61-0169835	TRANSFORMATEUR 77291	408	\N	f
AluSepABC002067	1132787	TRANSFORMATEUR 77291	611	\N	f
AluSepABC002068	91-03E7303-001	TRANSFORMATEUR 77291	618	\N	f
AluSepABC002069	W0582-001	TRANSFORMATEUR 77291	1353	\N	f
AluSepABC002070	91-03E7300-005	TRANSFORMATEUR 77291	598	\N	f
AluSepABC002071	91-03E7301-003	TRANSFORMATEUR 77291	578	\N	f
AluSepABC002072	91-03E7303-002	TRANSFORMATEUR 77291	578	\N	f
AluSepABC002073	SET6394-0101	TRANSFORMATEUR 77291	289	\N	f
AluSepABC002074	91-03E7302-005	TRANSFORMATEUR 77291	689	\N	f
AluSepABC002075	91-03E7302-004	TRANSFORMATEUR 77291	665	\N	f
AluSepABC002076	91-03E7302-002	TRANSFORMATEUR 77291	722	\N	f
AluSepABC002077	91-03E7298-002	TRANSFORMATEUR 77291	632	\N	f
AluSepABC002078	B32S-0175	TRANSFORMATEUR 77291	575	\N	f
AluSepABC002079	91-03E7300-003	TRANSFORMATEUR 77291	572	\N	f
AluSepABC002080	91-03E7300-002	TRANSFORMATEUR 77291	682	\N	f
AluSepABC002081	91-03E7300-001	TRANSFORMATEUR 77291	735	\N	f
AluSepABC002082	91-03E7300-006	TRANSFORMATEUR 77291	628	\N	f
AluSepABC002083	91-03E7302-001	TRANSFORMATEUR 77291	724	\N	f
AluSepABC002084	91-03E7344-002	TRANSFORMATEUR 77291	617	\N	f
AluSepABC002085	4046506001	TRANSFORMATEUR 77291	10	\N	t
AluSepABC002086	91-03E7344-001	TRANSFORMATEUR 77291	581	\N	f
AluSepABC002087	91-03E7301-006	TRANSFORMATEUR 77291	592	\N	f
AluSepABC002088	51016113	TRANSFORMATEUR 77291	754	\N	f
AluSepABC002089	91-03E7301-004	TRANSFORMATEUR 77291	687	\N	f
AluSepABC002090	91-03E7300-004	TRANSFORMATEUR 77291	623	\N	f
AluSepABC002091	7853087	TRANSFORMATEUR 77291	736	\N	f
AluSepABC002092	7853088	TRANSFORMATEUR 77291	790	\N	f
AluSepABC002093	91-03E7301-002	TRANSFORMATEUR 77291	588	\N	f
AluSepABC002094	91-03E7301-005	TRANSFORMATEUR 77291	621	\N	f
AluSepABC002095	A325-0251	TRANSFORMATEUR 77291	646	\N	f
AluSepABC002096	91-03E7301-001	TRANSFORMATEUR 77291	613	\N	f
AluSepABC002097	91-03E7302-003	TRANSFORMATEUR 77291	647	\N	f
AluSepABC002098	91-03E7255-001	TRANSFORMATEUR 77291	652	\N	f
AluSepABC002099	B32S-0174	TRANSFORMATEUR 77291	550	\N	f
AluSepABC002100	A325-0175	TRANSFORMATEUR 77291	524	\N	f
AluSepABC002101	XC030-001	TX PC # 173-B	1270	\N	f
AluSepABC002102	91-03E7299-005	TRANSFORMATEUR 77291	666	\N	f
AluSepABC002103	91-03E7299-004	TRANSFORMATEUR 77291	666	\N	f
AluSepABC002104	91-037299-003	TRANSFORMATEUR 77291	699	\N	f
AluSepABC002105	91-03E7299-002	TRANSFORMATEUR 77291	671	\N	f
AluSepABC002106	91-03E7299-001	TRANSFORMATEUR 77291	619	\N	f
AluSepABC002107	91-03E7298-003	TRANSFORMATEUR 77291	645	\N	f
AluSepABC002108	91-03E7298-001	TRANSFORMATEUR 77291	690	\N	f
AluSepABC002109	A32S-0174	TRANSFORMATEUR 77291	566	\N	f
AluSepABC002110	91-03E7344-002	TRANSFORMATEUR 77291	581	\N	f
AluSepABC002111	A32S-0174	TRANSFORMATEUR 77291	495	\N	f
AluSepABC002112	91-03E7298-003	TRANSFORMATEUR 77291	590	\N	f
AluSepABC002113	91-03E7302-004	TRANSFORMATEUR 77291	587	\N	f
AluSepABC002114	91-03E7298-001	TRANSFORMATEUR 77291	678	\N	f
AluSepABC002115	91-03E7301-002	TRANSFORMATEUR 77291	554	\N	f
AluSepABC002116	B32S-0174	TRANSFORMATEUR 77291	558	\N	f
AluSepABC002117	91-03E7300-003	TRANSFORMATEUR 77291	564	\N	f
AluSepABC002118	91-03E7300-005	TRANSFORMATEUR 77291	594	\N	f
AluSepABC002119	91-03E7302-005	TRANSFORMATEUR 77291	640	\N	f
AluSepABC002120	4046506001	TRANSFORMATEUR 77291	0	\N	f
AluSepABC002121	91-03E7300-001	TRANSFORMATEUR 77291	656	\N	f
AluSepABC002122	91-03E7302-001	TRANSFORMATEUR 77291	660	\N	f
AluSepABC002123	W0582-001	TRANSFORMATEUR 77291	437	\N	f
AluSepABC002124	6394-0101	TRANSFORMATEUR 77291	277	\N	f
AluSepABC002125	91-03E7303-002	TRANSFORMATEUR 77291	595	\N	f
AluSepABC002126	91-03E7302-002	TRANSFORMATEUR 77291	650	\N	f
AluSepABC002127	A325-0251	TRANSFORMATEUR 77291	613	\N	f
AluSepABC002128	91-03E7303-001	TRANSFORMATEUR 77291	545	\N	f
AluSepABC002129	91-03E7344-001	TRANSFORMATEUR 77291	606	\N	f
AluSepABC002130	91-03E7300-002	TRANSFORMATEUR 77291	639	\N	f
AluSepABC002131	91-03E7301-004	TRANSFORMATEUR 77291	650	\N	f
AluSepABC002132	91-03E7299-001	TRANSFORMATEUR 77291	609	\N	f
AluSepABC002133	7853084	TRANSFORMATEUR 77291	664	\N	f
AluSepABC002134	91-03E7255-001	TRANSFORMATEUR 77291	600	\N	f
AluSepABC002135	91-03E7301-006	TRANSFORMATEUR 77291	531	\N	f
AluSepABC002136	7853085	TRANSFORMATEUR 77291	766	\N	f
AluSepABC002137	91-03E7299-005	TRANSFORMATEUR 77291	638	\N	f
AluSepABC002138	51016108	TRANSFORMATEUR 77291	627	\N	f
AluSepABC002139	51016109	TRANSFORMATEUR 77291	522	\N	f
AluSepABC002140	61-01-69834	TRANSFORMATEUR 77291	415	\N	f
AluSepABC002141	1132787	TRANSFORMATEUR 77291	626	\N	f
AluSepABC002142	7853083	TRANSFORMATEUR 77291	684	\N	f
AluSepABC002143	61-0169835	TRANSFORMATEUR 77291	533	\N	f
AluSepABC002144	91-03E7299-002	TRANSFORMATEUR 77291	662	\N	f
AluSepABC002145	91-03E7301-005	TRANSFORMATEUR 77291	580	\N	f
AluSepABC002146	XC030-001	TX PC # 173-B	399	\N	f
AluSepABC002147	91-03E7301-003	TRANSFORMATEUR 77291	568	\N	f
AluSepABC002148	91-03E7300-006	TRANSFORMATEUR 77291	635	\N	f
AluSepABC002149	A325-0175	TRANSFORMATEUR 77291	563	\N	f
AluSepABC002150	91-03E7300-004	TRANSFORMATEUR 77291	617	\N	f
AluSepABC002151	91-03E7302-003	TRANSFORMATEUR 77291	639	\N	f
AluSepABC002152	91-037299-003	TRANSFORMATEUR 77291	626	\N	f
AluSepABC002153	91-03E7299-004	TRANSFORMATEUR 77291	648	\N	f
AluSepABC002154	91-03E7301-001	TRANSFORMATEUR 77291	599	\N	f
AluSepABC002155	B32S-0175	TRANSFORMATEUR 77291	502	\N	f
AluSepABC002156	91-03E7298-002	TRANSFORMATEUR 77291	620	\N	f
AluSepABC002157	7853086	TRANSFORMATEUR 77291	802	\N	f
AluSepABC002158	7853087	TRANSFORMATEUR 77291	747	\N	f
AluSepABC002159	51016113	TRANSFORMATEUR 77291	778	\N	f
AluSepABC002160	51016111	TRANSFORMATEUR 77291	847	\N	f
AluSepABC002161	7853088	TRANSFORMATEUR 77291	744	\N	f
\.


--
-- Data for Name: DP; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "DP" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "PhaseA1", "PhaseA2", "PhaseA3", "PhaseB1", "PhaseB2", "PhaseB3", "PhaseC1", "PhaseC2", "PhaseC3") FROM stdin;
\.


--
-- Data for Name: Diagnostic; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Diagnostic" ("TypeAnalyse", "CodeDiagnostic", "DiagnosticE", "DiagnosticA", "DiagnosticF") FROM stdin;
\.


--
-- Data for Name: Documents; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Documents" ("NoEquipement", "NoSerieEquipe", "Document", "DocType", "DocPath", "Description") FROM stdin;
\.


--
-- Data for Name: Eau; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Eau" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Eau", "REMARQUE", "bEau") FROM stdin;
AluSepABC001226	180137-H1	TRANSFORMATEUR 77291	2.60000000000000009	\N	f
AluSepABC001227	180137-H2	TRANSFORMATEUR 77291	2.39999999999999991	\N	f
AluSepABC001228	180137-H3	TRANSFORMATEUR 77291	2.29999999999999982	\N	f
AluSepABC001229	160087-H1	TRANSFORMATEUR 77291	3.89999999999999991	\N	f
AluSepABC001230	160087	TRANSFORMATEUR 77291	1.60000000000000009	\N	f
AluSepABC001231	160087-H2	TRANSFORMATEUR 77291	3.29999999999999982	\N	f
AluSepABC001232	160087-H3	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001233	180138	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001234	180139	TRANSFORMATEUR 77291	3.79999999999999982	\N	f
AluSepABC001235	180140	TRANSFORMATEUR 77291	2.39999999999999991	\N	f
AluSepABC001236	180137	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001237	160090	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001238	180136	TRANSFORMATEUR 77291	3.10000000000000009	\N	f
AluSepABC001239	160086	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001240	160087	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001241	160088	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001242	160089	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001243	180138	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001244	91-03E7301-004	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001245	A32S0251	TRANSFORMATEUR 77291	23	\N	f
AluSepABC001246	SET6394-0101	TRANSFORMATEUR 77291	3.70000000000000018	\N	f
AluSepABC001247	XC030-001	TX PC # 173-B	3.60000000000000009	\N	f
AluSepABC001248	91-03E7303-002	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001249	91-03E7303-001	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001250	91-03E7302-004	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001251	91-03E7302-002	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001252	91-03E7344-001	TRANSFORMATEUR 77291	7.90000000000000036	\N	f
AluSepABC001253	91-03E7344-002	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001254	91-03E7302-005	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001255	B3S6449	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001256	03G122762	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001257	03G122763	TRANSFORMATEUR 77291	4.20000000000000018	\N	f
AluSepABC001258	4046506001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001259	91-03E7302-001	TRANSFORMATEUR 77291	7.09999999999999964	\N	f
AluSepABC001260	W0582-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001261	03G122757	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001262	91-03E7301-003	TRANSFORMATEUR 77291	7.29999999999999982	\N	f
AluSepABC001263	91-03E7300-005	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001264	91-03E7300-003	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001265	03G122759	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001266	03G122761	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001267	PA14201-001	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001268	03G122765	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001269	B32S-0175	TRANSFORMATEUR 77291	9.30000000000000071	\N	f
AluSepABC001270	91-03E7255-001	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001271	03G122764	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001272	03G122758	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001273	91-03E7300-006	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001274	91-03E7298-002	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001275	91-03E7300-001	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001276	91-03E7300-002	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001277	03G122766	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001278	03G122760	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001279	03G122767	TRANSFORMATEUR 77291	4.5	\N	f
AluSepABC001280	180136	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001281	51016111	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001282	7853088	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001283	7853086	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001284	7853085	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001285	7853083	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001286	160089	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001287	160090	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001288	7853087	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001289	160088	TRANSFORMATEUR 77291	8.19999999999999929	\N	f
AluSepABC001290	160086	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001291	1132787	TRANSFORMATEUR 77291	8.09999999999999964	\N	f
AluSepABC001292	51016109	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001293	51016113	TRANSFORMATEUR 77291	8.40000000000000036	\N	f
AluSepABC001294	51016110	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001295	51016108	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001296	7853084	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001297	180138	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001298	51016112	TRANSFORMATEUR 77291	7.70000000000000018	\N	f
AluSepABC001299	A325-0175	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001300	91-03E7299-004	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001301	91-03E7300-004	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001302	91-03E7301-006	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001303	91-03E7301-005	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001304	B32S-0174	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001305	A32S-0174	TRANSFORMATEUR 77291	7.09999999999999964	\N	f
AluSepABC001306	91-03E7299-002	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001307	91-03E7299-005	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001308	91-03E7298-003	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001309	180138	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001310	91-03E7302-003	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001311	91-03E7301-001	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001312	91-03E7299-001	TRANSFORMATEUR 77291	7.70000000000000018	\N	f
AluSepABC001313	160087	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001314	91-03E7299-003	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001315	91-03E7301-002	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001316	CL80011-101-0	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001317	61-0169835	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001318	61-01-69834	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001319	180137	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001320	180140	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001321	91-03E7298-001	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001322	51016113	TRANSFORMATEUR 77291	16	\N	f
AluSepABC001323	B325-0174	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001324	A325-0174	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001325	CL80011-101-0	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001326	CL80011-101-0	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001327	CL80011-101-0	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001328	51016108	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001329	180139	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001330	180139	TRANSFORMATEUR 77291	3.10000000000000009	\N	f
AluSepABC001331	180139	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001332	180139	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001333	CL80011-101-0	TRANSFORMATEUR 77291	3.89999999999999991	\N	f
AluSepABC001334	CL80011-101-0	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001335	CL80011-101-0	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001336	180140	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001337	180140	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001338	180140	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001339	180136	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001340	180136	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001341	180136	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001342	180138	TRANSFORMATEUR 77291	7.40000000000000036	\N	f
AluSepABC001343	180138	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001344	180138	TRANSFORMATEUR 77291	3.70000000000000018	\N	f
AluSepABC001345	180138	TRANSFORMATEUR 77291	0.5	\N	f
AluSepABC001346	180138	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001347	180138	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001348	180138	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001349	51016108	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001350	51016108	TRANSFORMATEUR 77291	22	\N	f
AluSepABC001351	51016108	TRANSFORMATEUR 77291	19	\N	f
AluSepABC001352	51016108	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001353	180137	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001354	CL80011-101-0	TRANSFORMATEUR 77291	1.30000000000000004	\N	f
AluSepABC001355	180136	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001356	180140	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001357	51016108	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001358	51016108	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001359	51016108	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001360	51016108	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001361	51016108	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001362	51016108	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001363	51016108	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001364	CL80011-101-0	TRANSFORMATEUR 77291	9.80000000000000071	\N	f
AluSepABC001365	180137	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001366	CL80011-101-0	TRANSFORMATEUR 77291	9.19999999999999929	\N	f
AluSepABC001367	180137	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001368	51016108	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001369	51016108	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001370	51016108	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001371	51016108	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001372	51016108	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001373	51016108	TRANSFORMATEUR 77291	2.39999999999999991	\N	f
AluSepABC001374	SET6394-0101	TRANSFORMATEUR 77291	3.79999999999999982	\N	f
AluSepABC001375	91-03E7300-002	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001376	91-03E7344-001	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001377	91-03E7344-002	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001378	91-03E7300-005	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001379	91-03E7300-003	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001380	91-03E7301-003	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001381	91-03E7302-005	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001382	91-03E7302-001	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001383	91-03E7300-001	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001384	91-03E7303-001	TRANSFORMATEUR 77291	7.90000000000000036	\N	f
AluSepABC001385	XC030-001	TX PC # 173-B	3	\N	f
AluSepABC001386	4046506001	TRANSFORMATEUR 77291	23	\N	f
AluSepABC001387	91-03E7302-004	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001388	91-03E7302-002	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001389	W0582-001	TRANSFORMATEUR 77291	2.79999999999999982	\N	f
AluSepABC001390	91-03E7303-002	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001391	51016109	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001392	A325-0251	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001393	91-03E7298-001	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001394	61-0169835	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001395	61-01-69834	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001396	7853083	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001397	7853084	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001398	7853085	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001399	7853086	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001400	7853087	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001401	91-03E7299-001	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001402	51016108	TRANSFORMATEUR 77291	8.40000000000000036	\N	f
AluSepABC001403	51016110	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001404	51016111	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001405	51016113	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001406	51016112	TRANSFORMATEUR 77291	9.90000000000000036	\N	f
AluSepABC001407	1132787	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001408	7853088	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001409	91-03E7298-002	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001410	91-03E7302-003	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001411	91-03E7298-003	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001412	91-03E7300-006	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001413	B325-0175	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001414	91-03E7299-005	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001415	91-03E7299-002	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001416	91-03E7301-004	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001417	B325-0174	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001418	91-03E7299-003	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001419	A325-0175	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001420	91-03E7301-006	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001421	91-03E7301-005	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001422	91-03E7300-004	TRANSFORMATEUR 77291	7.29999999999999982	\N	f
AluSepABC001423	91-03E7299-004	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001424	91-03E7301-002	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001425	91-03E7301-001	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001426	91-03E7255-001	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001427	A325-0174	TRANSFORMATEUR 77291	8.09999999999999964	\N	f
AluSepABC001428	51016112	TRANSFORMATEUR 77291	9.19999999999999929	\N	f
AluSepABC001429	51016112	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001430	51016112	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001431	51016111	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001432	7853086	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001433	61-0169835	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001434	61-01-69834	TRANSFORMATEUR 77291	3.39999999999999991	\N	f
AluSepABC001435	03G122761	TRANSFORMATEUR 77291	3.39999999999999991	\N	f
AluSepABC001436	03G122762	TRANSFORMATEUR 77291	3.79999999999999982	\N	f
AluSepABC001437	03G122765	TRANSFORMATEUR 77291	2.60000000000000009	\N	f
AluSepABC001438	61-01-69834	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001439	A325-0251	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001440	7853083	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001441	7853084	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001442	7853085	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001443	7853086	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001444	7853088	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001445	7853087	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001446	51016109	TRANSFORMATEUR 77291	7.90000000000000036	\N	f
AluSepABC001447	51016108	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001448	51016111	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001449	SET6394-0101	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001450	91-03E7301-004	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001451	XC030-001	TX PC # 173-B	8.40000000000000036	\N	f
AluSepABC001452	51016110	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001453	91-03E7302-001	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001454	51016113	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001455	51016112	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001456	1132787	TRANSFORMATEUR 77291	8.09999999999999964	\N	f
AluSepABC001457	91-03E7298-001	TRANSFORMATEUR 77291	7.90000000000000036	\N	f
AluSepABC001458	61-01-69834	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001459	61-0169835	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001460	4046506001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001461	W0582-001	TRANSFORMATEUR 77291	3.10000000000000009	\N	f
AluSepABC001462	A325-0175	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001463	91-03E7300-002	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001464	91-03E7303-002	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001465	91-03E7303-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001466	91-03E7300-001	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001467	91-03E7302-004	TRANSFORMATEUR 77291	7.29999999999999982	\N	f
AluSepABC001468	91-03E7302-002	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001469	91-03E7302-003	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001470	91-03E7300-006	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001471	91-03E7301-005	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001472	91-03E7298-002	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001473	91-03E7299-001	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001474	91-03E7299-003	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001475	91-03E7344-001	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001476	B325-0175	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001477	91-03E7299-004	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001478	91-03E7344-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001479	91-03E7255-001	TRANSFORMATEUR 77291	7.09999999999999964	\N	f
AluSepABC001480	91-03E7301-002	TRANSFORMATEUR 77291	9.19999999999999929	\N	f
AluSepABC001481	91-03E7300-004	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001482	91-03E7302-005	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001483	91-03E7301-006	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001484	91-03E7301-003	TRANSFORMATEUR 77291	9.40000000000000036	\N	f
AluSepABC001485	A325-0174	TRANSFORMATEUR 77291	3.29999999999999982	\N	f
AluSepABC001486	91-03E7299-002	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001487	91-03E7299-005	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001488	91-03E7298-003	TRANSFORMATEUR 77291	7.70000000000000018	\N	f
AluSepABC001489	91-03E7300-003	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001490	91-03E7300-005	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001491	B325-0174	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001492	91-03E7301-001	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001493	61-0169835	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001494	7853088	TRANSFORMATEUR 77291	4.5	\N	f
AluSepABC001495	61-01-69834	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001496	7853087	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001497	51016113	TRANSFORMATEUR 77291	7.29999999999999982	\N	f
AluSepABC001498	7853084	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001499	51016109	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001500	51016108	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001501	51016110	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001502	51016111	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001503	7853083	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001504	7853085	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001505	7853086	TRANSFORMATEUR 77291	3.20000000000000018	\N	f
AluSepABC001506	51016112	TRANSFORMATEUR 77291	8.19999999999999929	\N	f
AluSepABC001507	1132787	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001508	61-0169835	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001509	61-01-69834	TRANSFORMATEUR 77291	2.60000000000000009	\N	f
AluSepABC001510	91-03E7301-005	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001511	7853085	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001512	7853088	TRANSFORMATEUR 77291	9.30000000000000071	\N	f
AluSepABC001513	7853084	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001514	91-03E7300-006	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001515	91-03E7303-001	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001516	91-03E7300-001	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001517	91-03E7298-002	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001518	B32S-0175	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001519	91-03E7301-006	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001520	91-03E7255-001	TRANSFORMATEUR 77291	4.90000000000000036	\N	f
AluSepABC001521	A32S-0174	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001522	51016109	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001523	91-03E7301-003	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001524	91-03E7344-001	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001525	91-03E7344-002	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001526	B32S-0174	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001527	51016108	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001528	91-03E7302-004	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001529	61-01-69834	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001530	7853083	TRANSFORMATEUR 77291	3.70000000000000018	\N	f
AluSepABC001531	7853086	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001532	7853087	TRANSFORMATEUR 77291	7.90000000000000036	\N	f
AluSepABC001533	51016111	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001534	51016113	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001535	51016112	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001536	51016110	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001537	91-03E7302-002	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001538	91-03E7303-002	TRANSFORMATEUR 77291	3.29999999999999982	\N	f
AluSepABC001539	SET6394-0101	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001540	91-03E7301-004	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001541	91-03E7302-003	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001542	W0582-001	TRANSFORMATEUR 77291	2.79999999999999982	\N	f
AluSepABC001543	91-03E7298-003	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001544	A325-0251	TRANSFORMATEUR 77291	7.40000000000000036	\N	f
AluSepABC001545	91-03E7299-002	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001546	91-03E7301-001	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001547	XC030-001	TX PC # 173-B	5.29999999999999982	\N	f
AluSepABC001548	A325-0175	TRANSFORMATEUR 77291	6.90000000000000036	\N	f
AluSepABC001549	91-03E7300-003	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001550	4046506001	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001551	91-03E7302-001	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001552	91-03E7299-001	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001553	91-03E7298-001	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001554	91-037299-003	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001555	91-03E7302-005	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001556	91-03E7300-005	TRANSFORMATEUR 77291	3.89999999999999991	\N	f
AluSepABC001557	91-03E7301-002	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001558	91-03E7300-004	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001559	91-03E7299-004	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001560	91-03E7299-005	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001561	61-0169835	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001562	91-03E7300-002	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001563	1132787	TRANSFORMATEUR 77291	7.29999999999999982	\N	f
AluSepABC001564	51016108	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001565	51016110	TRANSFORMATEUR 77291	8.09999999999999964	\N	f
AluSepABC001566	7853088	TRANSFORMATEUR 77291	3.29999999999999982	\N	f
AluSepABC001567	61-0169835	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001568	7853084	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001569	7853087	TRANSFORMATEUR 77291	4.5	\N	f
AluSepABC001570	51016113	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001571	7853085	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001572	7853083	TRANSFORMATEUR 77291	1.69999999999999996	\N	f
AluSepABC001573	51016111	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001574	7853086	TRANSFORMATEUR 77291	4.5	\N	f
AluSepABC001575	51016109	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001576	61-01-69834	TRANSFORMATEUR 77291	2.5	\N	f
AluSepABC001577	51016112	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001578	51016112	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001579	61-0169835	TRANSFORMATEUR 77291	1.80000000000000004	\N	f
AluSepABC001580	7853086	TRANSFORMATEUR 77291	2.5	\N	f
AluSepABC001581	61-01-69834	TRANSFORMATEUR 77291	1.80000000000000004	\N	f
AluSepABC001582	7853088	TRANSFORMATEUR 77291	2.29999999999999982	\N	f
AluSepABC001583	7853084	TRANSFORMATEUR 77291	2.60000000000000009	\N	f
AluSepABC001584	51016108	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001585	51016111	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001586	7853083	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001587	51016110	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001588	7853085	TRANSFORMATEUR 77291	2.10000000000000009	\N	f
AluSepABC001589	51016109	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001590	7853087	TRANSFORMATEUR 77291	2.60000000000000009	\N	f
AluSepABC001591	51016113	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001592	W0582-001	TRANSFORMATEUR 77291	2	\N	f
AluSepABC001593	4046506001	TRANSFORMATEUR 77291	8.09999999999999964	\N	f
AluSepABC001594	51016108	TRANSFORMATEUR 77291	3.89999999999999991	\N	f
AluSepABC001595	51016113	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001596	7853088	TRANSFORMATEUR 77291	2.5	\N	f
AluSepABC001597	1132787	TRANSFORMATEUR 77291	3.39999999999999991	\N	f
AluSepABC001598	7853084	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001599	7853086	TRANSFORMATEUR 77291	3.10000000000000009	\N	f
AluSepABC001600	7853085	TRANSFORMATEUR 77291	4.29999999999999982	\N	f
AluSepABC001601	51016109	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001602	7853087	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001603	51016111	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001604	7853083	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001605	51016112	TRANSFORMATEUR 77291	5.5	\N	f
AluSepABC001606	51016110	TRANSFORMATEUR 77291	7.09999999999999964	\N	f
AluSepABC001607	91-03E7300-004	TRANSFORMATEUR 77291	7.40000000000000036	\N	f
AluSepABC001608	91-037299-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001609	A32S-0174	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001610	91-03E7301-003	TRANSFORMATEUR 77291	9.90000000000000036	\N	f
AluSepABC001611	91-03E7298-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001612	B32S-0175	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001613	91-03E7298-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001614	91-03E7299-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001615	B32S-0174	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001616	91-03E7299-002	TRANSFORMATEUR 77291	9.40000000000000036	\N	f
AluSepABC001617	91-03E7300-001	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001618	91-03E7300-002	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001619	91-03E7298-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001620	91-03E7300-006	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001621	91-03E7299-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001622	91-03E7303-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001623	91-03E7255-001	TRANSFORMATEUR 77291	8.5	\N	f
AluSepABC001624	91-03E7344-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001625	W0582-001	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001626	91-03E7344-002	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001627	91-03E7302-004	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001628	91-03E7302-003	TRANSFORMATEUR 77291	9.40000000000000036	\N	f
AluSepABC001629	91-03E7302-002	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001630	91-03E7299-004	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001631	61-0169835	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001632	51016109	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001634	51016111	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001635	7853084	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001636	51016108	TRANSFORMATEUR 77291	8.40000000000000036	\N	f
AluSepABC001637	7853085	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001638	61-01-69834	TRANSFORMATEUR 77291	8.59999999999999964	\N	f
AluSepABC001639	6394-0101	TRANSFORMATEUR 77291	4.20000000000000018	\N	f
AluSepABC001640	1132787	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001641	91-03E7301-004	TRANSFORMATEUR 77291	9.30000000000000071	\N	f
AluSepABC001642	XC030-001	TX PC # 173-B	14	\N	f
AluSepABC001643	A32S0251	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001644	51016113	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001645	91-03E7301-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001646	7853086	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001647	4046506001	TRANSFORMATEUR 77291	25	\N	f
AluSepABC001648	A32S0175	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001649	91-03E7303-002	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001650	91-03E7300-005	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001651	91-03E7302-001	TRANSFORMATEUR 77291	9.30000000000000071	\N	f
AluSepABC001652	91-03E7301-006	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001653	91-03E7300-003	TRANSFORMATEUR 77291	9.90000000000000036	\N	f
AluSepABC001654	91-03E7301-002	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001655	91-03E7301-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001656	7853088	TRANSFORMATEUR 77291	9.19999999999999929	\N	f
AluSepABC001657	7853087	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001658	7853083	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001659	91-03E7302-005	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001660	51016108	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001661	7853085	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
ALUSEPMS 000006	160087	REDRESSEUR 25                 	6.79999999999999982	\N	f
AluSepABC001662	7853084	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001663	7853083	TRANSFORMATEUR 77291	3.39999999999999991	\N	f
AluSepABC001664	7853086	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001665	1132787	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001666	51016111	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001667	61-01-69834	TRANSFORMATEUR 77291	3.10000000000000009	\N	f
AluSepABC001668	61-0169835	TRANSFORMATEUR 77291	4	\N	f
AluSepABC001669	51016109	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001670	91-03E7300-006	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001671	91-03E7300-001	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001672	91-03E7303-002	TRANSFORMATEUR 77291	5.59999999999999964	\N	f
AluSepABC001673	91-03E7303-001	TRANSFORMATEUR 77291	7.40000000000000036	\N	f
AluSepABC001674	91-03E7302-005	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001675	91-03E7302-004	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001676	91-03E7302-002	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001677	91-03E7301-003	TRANSFORMATEUR 77291	8.19999999999999929	\N	f
AluSepABC001678	91-03E7298-002	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001679	91-03E7300-005	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001680	91-03E7300-003	TRANSFORMATEUR 77291	5.79999999999999982	\N	f
AluSepABC001681	91-03E7300-002	TRANSFORMATEUR 77291	4.5	\N	f
AluSepABC001682	W0582-001	TRANSFORMATEUR 77291	3	\N	f
AluSepABC001683	91-03E7302-001	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001684	91-03E7344-002	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001685	4046506001	TRANSFORMATEUR 77291	17.3000000000000007	\N	f
AluSepABC001686	SET6394-0101	TRANSFORMATEUR 77291	4.70000000000000018	\N	f
AluSepABC001687	91-03E7344-001	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001688	B32S-0175	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001689	91-03E7301-004	TRANSFORMATEUR 77291	9.40000000000000036	\N	f
AluSepABC001690	7853088	TRANSFORMATEUR 77291	2.89999999999999991	\N	f
AluSepABC001691	51016113	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001692	7853087	TRANSFORMATEUR 77291	3.89999999999999991	\N	f
AluSepABC001693	91-03E7255-001	TRANSFORMATEUR 77291	5.09999999999999964	\N	f
AluSepABC001694	91-03E7300-004	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001695	91-03E7301-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001696	91-03E7299-005	TRANSFORMATEUR 77291	8.19999999999999929	\N	f
AluSepABC001697	B32S-0174	TRANSFORMATEUR 77291	5.40000000000000036	\N	f
AluSepABC001698	91-037299-003	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001699	91-03E7299-004	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001700	91-03E7299-002	TRANSFORMATEUR 77291	7.40000000000000036	\N	f
AluSepABC001701	91-03E7299-001	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001702	91-03E7301-002	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001703	91-03E7298-003	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001704	91-03E7301-005	TRANSFORMATEUR 77291	9.59999999999999964	\N	f
AluSepABC001705	91-03E7298-001	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001706	A325-0251	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001707	XC030-001	TX PC # 173-B	12	\N	f
AluSepABC001708	91-03E7302-003	TRANSFORMATEUR 77291	6.20000000000000018	\N	f
AluSepABC001709	A32S-0174	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001710	A325-0175	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001711	91-03E7301-006	TRANSFORMATEUR 77291	9	\N	f
AluSepABC001712	51016112	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001713	51016110	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001714	7853084	TRANSFORMATEUR 77291	8.80000000000000071	\N	f
AluSepABC001715	7853083	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001716	7853088	TRANSFORMATEUR 77291	3.79999999999999982	\N	f
AluSepABC001717	7853087	TRANSFORMATEUR 77291	4.40000000000000036	\N	f
AluSepABC001718	1132787	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001719	7853086	TRANSFORMATEUR 77291	3.5	\N	f
AluSepABC001720	7853085	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001721	51016110	TRANSFORMATEUR 77291	8.40000000000000036	\N	f
AluSepABC001722	51016108	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001723	51016111	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001724	51016113	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001725	51016112	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001726	51016109	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001727	91-03E7302-002	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001728	91-03E7344-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001729	91-03E7300-002	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001730	91-03E7303-001	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001731	91-03E7298-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001732	B32S-0175	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001733	91-03E7301-006	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001734	91-03E7298-003	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001735	91-03E7301-002	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001736	A32S-0174	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001737	91-03E7302-004	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001738	91-03E7303-002	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001739	A325-0251	TRANSFORMATEUR 77291	17	\N	f
AluSepABC001740	91-03E7344-001	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001741	6394-0101	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001742	91-03E7300-003	TRANSFORMATEUR 77291	17	\N	f
AluSepABC001743	91-03E7300-006	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001744	91-03E7301-003	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001745	91-03E7301-005	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001746	XC030-001	TX PC # 173-B	19	\N	f
AluSepABC001747	91-03E7301-004	TRANSFORMATEUR 77291	19	\N	f
AluSepABC001748	91-037299-003	TRANSFORMATEUR 77291	16	\N	f
AluSepABC001749	B32S-0174	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001750	91-03E7300-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001751	4046506001	TRANSFORMATEUR 77291	17	\N	f
AluSepABC001752	W0582-001	TRANSFORMATEUR 77291	23	\N	f
AluSepABC001753	91-03E7302-001	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001754	91-03E7300-005	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001755	91-03E7302-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001756	91-03E7255-001	TRANSFORMATEUR 77291	14	\N	f
AluSepABC001757	61-0169835	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001758	7853085	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001759	51016108	TRANSFORMATEUR 77291	8.80000000000000071	\N	f
AluSepABC001760	51016109	TRANSFORMATEUR 77291	9.09999999999999964	\N	f
AluSepABC001761	1132787	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001762	7853083	TRANSFORMATEUR 77291	17	\N	f
AluSepABC001763	7853084	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001764	61-01-69834	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001765	91-03E7299-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001766	91-03E7301-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001767	91-03E7299-001	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001768	91-03E7302-003	TRANSFORMATEUR 77291	15	\N	f
AluSepABC001769	91-03E7300-004	TRANSFORMATEUR 77291	39	\N	f
AluSepABC001770	91-03E7299-005	TRANSFORMATEUR 77291	18	\N	f
AluSepABC001771	91-03E7298-002	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001772	A325-0175	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001773	91-03E7299-004	TRANSFORMATEUR 77291	15	\N	f
AluSepABC001774	51016111	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001775	7853088	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001776	7853086	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001777	7853087	TRANSFORMATEUR 77291	4.79999999999999982	\N	f
AluSepABC001778	51016113	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001779	4046506001	TRANSFORMATEUR 77291	17	\N	f
AluSepABC001780	91-03E7303-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001781	91-03E7299-002	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001782	91-03E7344-001	TRANSFORMATEUR 77291	8.40000000000000036	\N	f
AluSepABC001783	91-03E7298-002	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001784	91-03E7300-006	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001785	91-03E7302-002	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001786	91-03E7344-002	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001787	91-03E7299-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001788	91-03E7303-002	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001789	91-03E7300-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001790	A32S-0174	TRANSFORMATEUR 77291	8.80000000000000071	\N	f
AluSepABC001791	91-03E7300-004	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001792	91-03E7301-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001793	91-03E7299-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001794	91-03E7300-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001795	91-03E7301-005	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001796	91-03E7302-003	TRANSFORMATEUR 77291	9.90000000000000036	\N	f
AluSepABC001797	91-03E7301-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001798	91-03E7302-001	TRANSFORMATEUR 77291	9.80000000000000071	\N	f
AluSepABC001799	91-03E7300-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001800	91-03E7301-006	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001801	91-03E7301-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001802	A32S0251	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001803	91-03E7299-004	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001804	XC030-001	TX PC # 173-B	19	\N	f
AluSepABC001805	91-03E7298-003	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001806	6394-0101	TRANSFORMATEUR 77291	8.69999999999999929	\N	f
AluSepABC001807	91-03E7255-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001808	91-03E7301-004	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001809	91-03E7298-001	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001810	91-03E7302-004	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001811	A32S0175	TRANSFORMATEUR 77291	8	\N	f
AluSepABC001812	W0582-001	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001813	B32S-0175	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001814	7853084	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001815	61-0169835	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001816	51016113	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001817	51016112	TRANSFORMATEUR 77291	7	\N	f
AluSepABC001818	51016111	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001819	7853083	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001820	7853088	TRANSFORMATEUR 77291	4.59999999999999964	\N	f
AluSepABC001821	7853087	TRANSFORMATEUR 77291	6	\N	f
AluSepABC001822	1132787	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001823	91-037299-003	TRANSFORMATEUR 77291	9.30000000000000071	\N	f
AluSepABC001824	51016109	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001825	91-03E7300-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001826	61-01-69834	TRANSFORMATEUR 77291	3.60000000000000009	\N	f
AluSepABC001827	B32S-0174	TRANSFORMATEUR 77291	8.80000000000000071	\N	f
AluSepABC001828	51016108	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001829	51016110	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001830	7853086	TRANSFORMATEUR 77291	5.90000000000000036	\N	f
AluSepABC001831	7853085	TRANSFORMATEUR 77291	5	\N	f
AluSepABC001832	91-03E7302-005	TRANSFORMATEUR 77291	9.40000000000000036	\N	f
AluSepABC001833	91-03E7302-002	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001834	61-01-69834	TRANSFORMATEUR 77291	5.29999999999999982	\N	f
AluSepABC001835	7853086	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001836	51016111	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001837	51016110	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001838	51016108	TRANSFORMATEUR 77291	6.79999999999999982	\N	f
AluSepABC001839	51016109	TRANSFORMATEUR 77291	6.40000000000000036	\N	f
AluSepABC001840	7853083	TRANSFORMATEUR 77291	5.20000000000000018	\N	f
AluSepABC001841	61-0169835	TRANSFORMATEUR 77291	4.09999999999999964	\N	f
AluSepABC001842	7853085	TRANSFORMATEUR 77291	6.09999999999999964	\N	f
AluSepABC001843	7853087	TRANSFORMATEUR 77291	6.29999999999999982	\N	f
AluSepABC001844	1132787	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001845	7853088	TRANSFORMATEUR 77291	6.70000000000000018	\N	f
AluSepABC001846	7853084	TRANSFORMATEUR 77291	6.59999999999999964	\N	f
AluSepABC001847	B32S-0175	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001848	91-03E7344-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001849	91-03E7300-001	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001850	91-03E7303-002	TRANSFORMATEUR 77291	7.59999999999999964	\N	f
AluSepABC001851	91-03E7300-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001852	91-03E7301-005	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001853	6394-0101	TRANSFORMATEUR 77291	9.09999999999999964	\N	f
AluSepABC001854	91-03E7301-004	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001855	91-03E7298-001	TRANSFORMATEUR 77291	9.09999999999999964	\N	f
AluSepABC001856	4046506001	TRANSFORMATEUR 77291	31	\N	f
AluSepABC001857	91-03E7300-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001858	XC030-001	TX PC # 173-B	8.09999999999999964	\N	f
AluSepABC001859	91-03E7298-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001860	B32S-0174	TRANSFORMATEUR 77291	7.20000000000000018	\N	f
AluSepABC001861	91-03E7301-001	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001862	91-03E7300-005	TRANSFORMATEUR 77291	9.90000000000000036	\N	f
AluSepABC001863	91-03E7303-001	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001864	A32S-0174	TRANSFORMATEUR 77291	7.79999999999999982	\N	f
AluSepABC001865	91-03E7299-002	TRANSFORMATEUR 77291	9.69999999999999929	\N	f
AluSepABC001866	91-037299-003	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001867	91-03E7299-004	TRANSFORMATEUR 77291	6.5	\N	f
AluSepABC001868	91-03E7299-005	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001869	91-03E7301-003	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001870	91-03E7255-001	TRANSFORMATEUR 77291	10	\N	f
AluSepABC001871	91-03E7300-006	TRANSFORMATEUR 77291	7.5	\N	f
AluSepABC001872	91-03E7298-003	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001873	91-03E7302-004	TRANSFORMATEUR 77291	9.09999999999999964	\N	f
AluSepABC001874	A32S0251	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001875	91-03E7301-006	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001876	91-03E7300-004	TRANSFORMATEUR 77291	9.5	\N	f
AluSepABC001877	91-03E7299-001	TRANSFORMATEUR 77291	9.59999999999999964	\N	f
AluSepABC001878	91-03E7301-002	TRANSFORMATEUR 77291	11	\N	f
AluSepABC001879	A32S0175	TRANSFORMATEUR 77291	8.30000000000000071	\N	f
AluSepABC001880	91-03E7302-001	TRANSFORMATEUR 77291	8.90000000000000036	\N	f
AluSepABC001881	91-03E7302-005	TRANSFORMATEUR 77291	9.80000000000000071	\N	f
AluSepABC001882	51016112	TRANSFORMATEUR 77291	13	\N	f
AluSepABC001883	51016113	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001884	W0582-001	TRANSFORMATEUR 77291	5.70000000000000018	\N	f
AluSepABC001885	91-03E7344-002	TRANSFORMATEUR 77291	12	\N	f
AluSepABC001886	91-03E7302-003	TRANSFORMATEUR 77291	8.19999999999999929	\N	f
ALUSEPMS 000004	A32S0251	SPARE 77227	0		f
ALUSEPMS 000018	160087	REDRESSEUR 25	8.30000000000000071		f
ALUSEPMS 000020	160087	REDRESSEUR 25	6.90000000000000036		f
ALUSEPMS 000022	160087	REDRESSEUR 25	4		f
ALUSEPMS 000024	160087	REDRESSEUR 25	8.30000000000000071		f
ALUSEPMS 000026	160087	REDRESSEUR 25	9.30000000000000071		f
ALUSEPMS 000028	160087	REDRESSEUR 25	9.40000000000000036		f
ALUSEPMS 000030	160087	REDRESSEUR 25	6.90000000000000036		f
ALUSEPMS 000032	160087	REDRESSEUR 25	8.19999999999999929		f
ALUSEPMS 000034	160087	REDRESSEUR 25                 	6.40000000000000036	\N	f
ALUSEPMS 000036	160087	REDRESSEUR 25	6.5		f
ALUSEPMS 000040	160087	REDRESSEUR 25	7.70000000000000018		f
ALUSEPMS 000044	160087	REDRESSEUR 25                 	7.70000000000000018	\N	f
ALUSEPMS 000046	160087	REDRESSEUR 25	0		f
\.


--
-- Data for Name: EquipeExportLabo; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "EquipeExportLabo" ("NomFichier", "ClefAnalyse", "Etat", "Remarque", "NoAnalyse", "NoSerieEquipe", "NoEquipement") FROM stdin;
testALUSEP001.std	ALUSEPMS 000014	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000013	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000012	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000011	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000010	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000009	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000008	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000007	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000006	1	Importé le 03-11-06		160087	REDRESSEUR 25
testALUSEP001.std	ALUSEPMS 000005	1	Importé le 03-11-06		160087	REDRESSEUR 25
A venirALUSEP002.std	ALUSEPMS 000006	1	Importé le 09-11-06		160087	REDRESSEUR 25
A venirALUSEP002.std	ALUSEPMS 000005	1	Importé le 09-11-06		160087	REDRESSEUR 25
A venir 2ALUSEP003.std	ALUSEPMS 000034	1	Importé le 09-11-06		160087	REDRESSEUR 25
A venir 2ALUSEP003.std	ALUSEPMS 000033	1	Importé le 09-11-06		160087	REDRESSEUR 25
4500130958ALUSEP004.std	ALUSEPMS 000044	1	Importé le 16-11-06		160087	REDRESSEUR 25
4500130958ALUSEP004.std	ALUSEPMS 000043	1	Importé le 16-11-06		160087	REDRESSEUR 25
\.


--
-- Data for Name: Equipe_Tap_Tension; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Equipe_Tap_Tension" ("NoEquipement", "NoSerieEquipe", "Bobine", "Tap_Num", "Tap_Tension") FROM stdin;
Série 1	Série 1	1	1	0
Série 2	Série 2	1	1	0
\.


--
-- Data for Name: Equipement; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Equipement" ("NoEquipement", "TypeEquipement", "Site", "Localisation", "LitreHuile", "Description", "NoSerieEquipe", "Manufacturier", "Annee", "Modifier", "NoExploitation", "Scelle", "CouvSoude", "TriPhase", "Commentaire", "Capteur", "NoClient", "DateV", "Ins_Vis_Par", "CommentaireV", "Compteur", "Filtreur", "Tension1", "Tension2", "Tension3", "Puissance1", "Puissance2", "Puissance3", "Bobine", "Auto_Transfo", "Raccord_Bobine1", "Raccord_Bobine2", "Raccord_Bobine3", "BIL1", "BIL2", "BIL3", "Ecran_Electro1", "Ecran_Electro2", "Ecran_Electro3", "ChangeurP1", "ChangeurP2", "ChangeurP3", "Bushing_Neutre1", "Bushing_Neutre2", "Bushing_Neutre3", "Resistance_Neutre1", "ResInf1", "Resistance_Neutre2", "ResInf2", "Bobine_Materiel", "Formule_Ratio", "Etiquette1", "Etiquette2", "Etiquette3", "Frequence", "Impedance1", "Imp_Base1", "Impedance2", "Imp_Base2", "Temp_elevation", "Nbr_Change_Prise", "NormePhy", "NormeGD", "NormeFur", "Formule_Ratio2", "Etiquette4", "Etiquette5", "Etiquette6", "TypeHuile", "Resistance_Neutre0", "ResInf0", "Bush_Serie1", "Bush_Serie2", "Bush_Serie3", "Bush_Serie4", "Bush_Serie5", "Bush_Serie6", "Bush_Serie7", "Bush_Serie8", "Bush_Serie9", "Bush_Serie10", "Bush_Serie11", "Bush_Serie12", "LocAmont1", "LocAmont2", "LocAmont3", "LocAmont4", "LocAmont5", "LocAval1", "LocAval2", "LocAval3", "LocAval4", "LocAval5", "LocTie", "LocEntretienEtat", "LocAnalyseEtat", "LocPos", "PosPhys", "MWActuel", "MVARActuel", "MWReserve", "MVARReserve", "MWUltime", "MVARUltime", "Tension4", "Puissance4", "Raccord_Bobine4", "BIL4", "Ecran_Electro4", "ChangeurP4", "Bushing_Neutre4", "Resistance_Neutre3", "Etiquette7", "Etiquette8", "ResInf3", "Formule_Ratio3", "PuisForce11", "PuisForce12", "PuisForce13", "PuisForce14", "PuisForce21", "PuisForce22", "PuisForce23", "PuisForce24", "Impedance3", "Imp_Base3", "Bush_Mfr_H1", "Bush_Mfr_H2", "Bush_Mfr_H3", "Bush_Mfr_HN", "Bush_Mfr_X1", "Bush_Mfr_X2", "Bush_Mfr_X3", "Bush_Mfr_XN", "Bush_Mfr_T1", "Bush_Mfr_T2", "Bush_Mfr_T3", "Bush_Mfr_TN", "Bush_Mfr_Q1", "Bush_Mfr_Q2", "Bush_Mfr_Q3", "Bush_Mfr_QN", "Bush_Type_H", "Bush_Type_HN", "Bush_Type_X", "Bush_Type_XN", "Bush_Type_T", "Bush_Type_TN", "Bush_Type_Q", "Bush_Type_QN", "Valider", "EnValidation", "NoSerieEquipeAnc", "NoEquipementAnc", "Fratrie") FROM stdin;
REGULATEUR 24	T	Alouette	Sous-station principale	71450	\N	180140	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 25	T	Alouette	Sous-station principale	71450		180137	ABB	2003	f	AAI	f	f	t				\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	201	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	137	0	137	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
REGULATEUR 25-H1	B	Alouette	REGULATEUR 25	71450	\N	180137-H1	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REGULATEUR 25;180137	REGULATEUR 25	180137	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 25-H2	B	Alouette	REGULATEUR 25	71450	\N	180137-H2	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REGULATEUR 25;180137	REGULATEUR 25	180137	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 25-H3	B	Alouette	REGULATEUR 25	71450	\N	180137-H3	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REGULATEUR 25;180137	REGULATEUR 25	180137	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
Sous-station principale	L	Alouette	\N	0		Sous-station principale		2006	f		f	f	f				\N	\N	\N	0	\N	0	0	0	0	0	0	1	f	101	101	101	0	0	0	f	f	f	1	0	0	0	0	0	0	f	0	f	0	0	H1-H2/X0-X2	H1-H2/X0-X2	H1-H2/X0-X2	60	0	0	0	0	1	0	DEFAULT D	C57104	DOBLE	1	H1-H2/X0-X2	H1-H2/X0-X2	H1-H2/X0-X2	0	0	f													Alouette;Alouette	Alouette	Alouette	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0		\N	\N			\N	\N			\N	\N		\N	\N	\N	\N							\N	\N	f	f	\N	\N	0
SPARE 77227	T	Alouette	Sous-station principale	2941	\N	A32S0251	ABB	1991	f	n/a	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
SPARE 77274	T	Alouette	Sous-station principale	1760	\N	6394-0101	ABB	1992	f	n/a	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX AL12 # 031	T	Alouette	Sous-station principale	1695		91-03E7300-006	ABB	1991	f	POSTE AL 12	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX SGE # 041	T	Alouette	Sous-station principale	1815		91-03E7255-001	ABB	1991	f	POSTE S.G.E.	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX EL11 # 061	T	Alouette	Sous-station principale	1695		91-03E7300-001	ABB	1991	f	POSTE EL 11	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX EL3 # 081	T	Alouette	Sous-station principale	1695		91-03E7300-003	ABB	1991	f	POSTE EL 3	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX EL3 # 082	T	Alouette	Sous-station principale	1695		91-03E7300-005	ABB	1991	f	POSTE EL 3	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX SA # 091	T	Alouette	Sous-station principale	1695		91-03E7298-001	ABB	1991	f	POSTE SA	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX SA # 092	T	Alouette	Sous-station principale	1695		91-03E7298-003	ABB	1991	f	POSTE SA	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX CO # 101	T	Alouette	Sous-station principale	1695		91-03E7299-005	ABB	1991	f	POSTE CO	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX CO # 102	T	Alouette	Sous-station principale	1695		91-03E7299-002	ABB	1991	f	POSTE CO	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX CO # 103	T	Alouette	Sous-station principale	2941		A325-0174	ABB	1991	f	POSTE CO	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX CO # 104	T	Alouette	Sous-station principale	2941		B325-0174	ABB	1991	f	POSTE CO	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
REDRESSEUR #5	T	Alouette	Sous-station principale	43678	\N	51016113	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX CB # 121	T	Alouette	Sous-station principale	1815		91-03E7302-005	ABB	1991	f	POSTE CB	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX CB # 122	T	Alouette	Sous-station principale	1815		91-03E7302-001	ABB	1991	f	POSTE CB	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX MS # 131	T	Alouette	Sous-station principale	1695		91-03E7301-003	ABB	1991	f	POSTE M.S.	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX NP # 141	T	Alouette	Sous-station principale	1695		91-03E7301-005	ABB	1991	f	POSTE N.P.	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX NP # 142	T	Alouette	Sous-station principale	1695		91-03E7301-006	ABB	1991	f	POSTE N.P.	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX HT # 151	T	Alouette	Sous-station principale	1695		91-03E7300-004	ABB	1991	f	POSTE H.T	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX HT # 152	T	Alouette	Sous-station principale	1695		91-03E7299-004	ABB	1991	f	POSTE H.T.	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX FOA # 161	T	Alouette	Sous-station principale	1695		91-03E7301-001	ABB	1991	f	POSTE FOA	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX FOA # 162	T	Alouette	Sous-station principale	1695		91-03E7301-002	ABB	1991	f	POSTE FOA	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
REDRESSEUR #6	T	Alouette	Sous-station principale	43678	\N	51016112	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX AL11 # 022	T	Alouette	Sous-station principale	1695		91-03E7299-001	ABB	1991	f	POSTE AL II	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	Boucle 25KV	Boucle 25KV	0
TX AL11 # 023	T	Alouette	Sous-station principale	2941		A325-0175	ABB	1991	f	POSTE AL-11	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL12 # 033	T	Alouette	Sous-station principale	2941		B325-0175	ABB	1991	f	POSTE AL 12	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX SGE # 042	T	Alouette	Sous-station principale	1815		91-03E7302-003	ABB	1991	f	POSTE SGE	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TRANSFORMATEUR 77227	T	Alouette	Sous-station principale	4672	\N	A325-0251	ABB	1991	f	SPARE	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TRANSFORMATEUR 77274	T	Alouette	Sous-station principale	1760	\N	SET6394-0101	ABB	1992	f	SPARE	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX SGE SPARE 77275	T	Alouette	Sous-station principale	1695		91-03E7301-004	ABB	1991	f	SPARE ( S.G.E)	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX PC # 173-B	T	Alouette	Sous-station principale	2596		XC030-001	CARTE INT.	1992	f	POSTE PCA (PR2)	f	f	t				\N	\N	\N	0	\N	4160	600	0	4	0	0	1	f	101	201	201	75	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	4	0	4	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL11 # 021	T	Alouette	Sous-station principale	1695		91-03E7299-003	ABB	1991	f	POSTE AL II	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
REDRESSEUR #7	T	Alouette	Sous-station principale	20000	\N	1132787	ABB	1996	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	1200	0	29	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	29	0	29	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX PC # 171-A	T	Alouette	Sous-station principale	4046		4046506001	FERRANTI PACKARD	1991	f	131 POSTE MS	f	f	t				\N	\N	\N	0	\N	24940	4160	0	7.5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	7.5	0	7.5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX PC # 173-A	T	Alouette	Sous-station principale	2596		W0582-001	CARTE INT.	1991	f	PORT-Canada	f	f	t				\N	\N	\N	0	\N	4160	600	0	4	0	0	1	f	101	201	201	75	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	4	0	4	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
Série 1	L	Alouette		0		Série 1		1992	f		f	f	t				\N	\N	\N	\N	\N	0	0	0	0	0	0	1	f	101	201	201	0	0	0	f	f	f	1	0	0	0	0	0	0	f	0	f	0	200	H1-H2/X0-X2	H2-H3/X0-X3	H3-H1/X0-X1	60	0	0	0	0	1	0		C57104	DOBLE	\N				0	0	f													Alouette;Alouette	Alouette	Alouette	\N	\N	\N	\N	\N	\N	\N	f	\N	\N	\N	\N	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	0	0	\N	0	0	0	\N	\N	\N		\N	\N			\N	\N			\N	\N		\N	\N	\N	\N							\N	\N	f	f	test	test	\N
TX EL11 # 063	T	Alouette	Sous-station principale	1800		91-03E7303-002	ABB	1991	f	POSTE EL 11	f	f	t				\N	\N	\N	0	\N	24940	4160	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL2 # 071	T	Alouette	Sous-station principale	1815		91-03E7302-004	ABB	1991	f	POSTE EL 2	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL2 # 072	T	Alouette	Sous-station principale	1815		91-03E7302-002	ABB	1991	f	POSTE EL2	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL2 # 073	T	Alouette	Sous-station principale	1695		91-03E7344-001	ABB	1991	f	POSTE EL 2	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL12 # 032	T	Alouette	Sous-station principale	1695		91-03E7298-002	ABB	1991	f	POSTE AL-12	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL11 # 062	T	Alouette	Sous-station principale	1695		91-03E7300-002	ABB	1991	f	POSTE EL 11	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL11 # 064	T	Alouette	Sous-station principale	1800		91-03E7303-001	ABB	1991	f	POSTE EL 11	f	f	t				\N	\N	\N	0	\N	24940	4160	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL2 # 074	T	Alouette	Sous-station principale	1695		91-03E7344-002	ABB	1991	f	POSTE EL 2	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX PC # 171-B	T	Alouette	Sous-station principale	3323		B3S6449	WESTINGHOUSE	1979	f	POSTE PC	f	f	t				\N	\N	\N	0	\N	24940	4160	0	7.5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	7.5	0	7.5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL21 # 211	T	Alouette	Sous-station principale	2257		03G122762	PAUWELS	2003	f	POSTE AL-21	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL21 # 212	T	Alouette	Sous-station principale	2257		03G122763	PAUWELS	2003	f	POSTE AL 21	f	f	t				\N	\N	\N	0	\N	24940	600	0	2000	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2000	0	2000	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL21 # 213	T	Alouette	Sous-station principale	5311		03G122757	PAUWELS	2004	f	POSTE AL 21	f	f	t				\N	\N	\N	0	\N	24940	4160	0	10000	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	10000	0	10000	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL22 # 221	T	Alouette	Sous-station principale	2257		03G122764	PAUWELS	2003	f	POSTE AL 22	f	f	t				\N	\N	\N	0	\N	24940	600	0	2000	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2000	0	2000	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL22 # 222	T	Alouette	Sous-station principale	2257		03G122765	PAUWELS	2003	f	POSTE AL 22	f	f	t				\N	\N	\N	0	\N	24940	600	0	2000	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2000	0	2000	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL22 # 223	T	Alouette	Sous-station principale	4796		03G122758	PAUWELS	2004	f	POSTE AL22	f	f	t				\N	\N	\N	0	\N	24940	4160	0	10000	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	10000	0	10000	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL21 # 231	T	Alouette	Sous-station principale	2257		03G122766	PAUWELS	2003	f	POSTE EL-21	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL21 # 232	T	Alouette	Sous-station principale	2257		03G122767	PAUWELS	2003	f	POSTE EL 21	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL22 # 241	T	Alouette	Sous-station principale	1873		PA14201-001	ABB	2003	f	POSTE EL 22	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX EL22 # 242	T	Alouette	Sous-station principale	2419		03G122761	PAUWELS	2003	f	POSTE EL 22	f	f	t				\N	\N	\N	0	\N	24940	600	0	3	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	3	0	3	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL23 # 272	T	Alouette	Sous-station principale	4868		03G122760	PAUWELS	2004	f	POSTE AL 23	f	f	t				\N	\N	\N	0	\N	24940	4160	0	7.5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	7.5	0	7.5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL23 # 271	T	Alouette	Sous-station principale	4868		03G122759	PAUWELS	2004	f	POSTE AL 23	f	f	t				\N	\N	\N	0	\N	24940	4160	0	7.5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	7.5	0	7.5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Boucle 25KV;Boucle 25KV	Boucle 25KV	Boucle 25KV	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
Alouette	S		\N	0		Alouette		2006	f		f	f	f				\N	\N	\N	0	\N	0	0	0	0	0	0	1	f	101	101	101	0	0	0	f	f	f	1	0	0	0	0	0	0	f	0	f	0	0	H1-H2/X0-X2	H1-H2/X0-X2	H1-H2/X0-X2	60	0	0	0	0	1	0	DEFAULT D	C57104	DOBLE	1	H1-H2/X0-X2	H1-H2/X0-X2	H1-H2/X0-X2	0	0	f													;			\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0		\N	\N			\N	\N			\N	\N		\N	\N	\N	\N							\N	\N	f	f	\N	\N	0
AUXILIAIRE TA3	T	Alouette	Sous-station principale	43370		CL80011-101-0	FERRANTI PACKARD	2004	f	AAI	f	f	t				\N	\N	\N	0	\N	161000	25000	0	37.5	0	0	1	f	101	201	201	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	37.5	0	37.5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
AUXILIAIRE TA1	T	Alouette	Sous-station principale	26494	\N	61-01-69834	FEDERAL PIONEER	1991	f	N/A	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	25000	0	62.5	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	62.5	0	62.5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
AUXILIAIRE TA2	T	Alouette	Sous-station principale	26495	\N	61-0169835	FEDERAL PIONEER	1991	f	n/a	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	25000	0	62.5	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	62.5	0	62.5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 22	T	Alouette	Sous-station principale	57400	\N	160088	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
TX AL11 # 021	T	Alouette	Sous-station principale	1695		91-037299-003	ABB	1991	f	n/a	f	f	t				\N	\N	\N	0	\N	24940	600	0	2	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	2	0	2	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL11 # 023	T	Alouette	Sous-station principale	2941		A32S0175	ABB	1991	f	n/a	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
TX AL12 # 033	T	Alouette	Sous-station principale	2941		B32S-0175	ABB	1991	f	POSTE AL 12	f	f	t				\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	201	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
POSTE CO	T	Alouette	Sous-station principale	2941	\N	A32S-0174	ABB	1991	f	TRANSFORMATEUR 103	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
POSTE CO-	T	Alouette	Sous-station principale	2941	\N	B32S-0174	ABB	1991	f	TRANSFORMATEUR 104	f	f	t		\N	\N	\N	\N	\N	0	\N	24940	4160	0	5	0	0	1	f	101	201	0	150	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	5	0	5	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Sous-station principale;Sous-station principale	Sous-station principale	Sous-station principale	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 21	T	Alouette	Sous-station principale	57400		160086	ABB	2003	f	AAI	f	f	t				\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	201	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	100				60	0	141	0	141	0	0	DEFAULT-H T	C57104	DOBLE	1				0	0	f	 	 	 	 	 	 	 	 	 	 	 	 	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	 	\N	\N	 	 	\N	\N	 	 	\N	\N	 	\N	\N	\N	\N	 	 	 	 	 	 	\N	\N	f	f	NoSerieAnc	NoEquipementAnc	0
REDRESSEUR #1	T	Alouette	Sous-station principale	43678	\N	51016109	abb	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR #2	T	Alouette	Sous-station principale	43678	\N	51016108	N/A	1991	f	N/A	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR #3	T	Alouette	Sous-station principale	43678	\N	51016110	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR #4	T	Alouette	Sous-station principale	43678	\N	51016111	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	65000	1200	0	82	0	0	1	f	101	201	0	350	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	82	0	82	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 23	T	Alouette	Sous-station principale	57400	\N	160090	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 24	T	Alouette	Sous-station principale	57400	\N	160089	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 25	T	Alouette	Sous-station principale	57400	\N	160087	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	f	160087	REDRESSEUR 25	0
REDRESSEUR 25-H1	B	Alouette	REDRESSEUR 25	57400	\N	160087-H1	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REDRESSEUR 25;160087	REDRESSEUR 25	160087	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 25-H2	B	Alouette	REDRESSEUR 25	57400	\N	160087-H2	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REDRESSEUR 25;160087	REDRESSEUR 25	160087	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REDRESSEUR 25-H3	B	Alouette	REDRESSEUR 25	57400	\N	160087-H3	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	42000	1127	0	141	0	0	1	f	101	201	0	250	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	141	0	141	0	0	\N	\N	\N	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	REDRESSEUR 25;160087	REDRESSEUR 25	160087	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
RÉGULATEUR #1	T	Alouette	Sous-station principale	47931	\N	7853083	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
RÉGULATEUR #2	T	Alouette	Sous-station principale	47931	\N	7853084	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
RÉGULATEUR #3	T	Alouette	Sous-station principale	47931	\N	7853085	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
RÉGULATEUR #4	T	Alouette	Sous-station principale	47931	\N	7853086	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR #5	T	Alouette	Sous-station principale	47931	\N	7853088	ABB	1991	f	n/a	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
RÉGULATEUR #6	T	Alouette	Sous-station principale	47931	\N	7853087	ABB	1991	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	65000	0	88.4000000000000057	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	88.4000000000000057	0	88.4000000000000057	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 1;Série 1	Série 1	Série 1	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 21	T	Alouette	Sous-station principale	71450	\N	180136	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	150	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	150	0	150	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 22	T	Alouette	Sous-station principale	71450	\N	180138	ABB	2003	f	N/A	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
REGULATEUR 23	T	Alouette	Sous-station principale	71450	\N	180139	ABB	2003	f	AAI	f	f	t		\N	\N	\N	\N	\N	0	\N	161000	42000	0	137	0	0	1	f	101	201	0	750	0	0	f	f	f	0	0	0	0	0	0	0	t	0	t	0	1	\N	\N	\N	60	0	137	0	137	0	0	DEFAULT-H T	C57104	DOBLE	1	\N	\N	\N	0	\N	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Série 2;Série 2	Série 2	Série 2	\N	\N	\N	\N	\N	\N	\N	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	f	\N	\N	0
Série 2	L			0		Série 2		2005	f		f	f	t				\N	\N	\N	\N	\N	0	0	0	0	0	0	1	f	101	201	201	0	0	0	f	f	f	1	0	0	0	0	0	0	f	0	f	0	200	H1-H2/X0-X2	H2-H3/X0-X3	H3-H1/X0-X1	60	0	0	0	0	1	0		C57104	DOBLE	\N				0	0	f													Alouette;Alouette	Alouette	Alouette	\N	\N	\N	\N	\N	\N	\N	f	\N	\N	\N	\N	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	0	0	\N	0	0	0	\N	\N	\N		\N	\N			\N	\N			\N	\N		\N	\N	\N	\N							\N	\N	f	f	Série 2	Série 2	\N
Boucle 25KV	L	Alouette		0		Boucle 25KV		1991	f		f	f	t				\N	\N	\N	\N	\N	0	0	0	0	0	0	1	f	101	201	201	0	0	0	f	f	f	1	0	0	0	0	0	0	f	0	f	0	200	H1-H2/X0-X2	H2-H3/X0-X3	H3-H1/X0-X1	60	0	0	0	0	1	0	DEFAULT-H T	C57104	DOBLE	\N				0	0	f													Alouette;Alouette	Alouette	Alouette	\N	\N	\N	\N	\N	\N	\N	f	\N	\N	\N	\N	0	0	0	0	0	0	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	0	0	\N	0	0	0	\N	\N	\N		\N	\N			\N	\N			\N	\N		\N	\N	\N	\N							\N	\N	f	f	Boucle 25KV	Boucle 25KV	\N
\.


--
-- Data for Name: FichierExportLabo; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "FichierExportLabo" ("NomFichier", "DateSortie", labo) FROM stdin;
testALUSEP001.std	2006-11-03 13:57:47	GE Syprotec
A venirALUSEP002.std	2006-11-06 17:58:44	GE Syprotec
A venir 2ALUSEP003.std	2006-11-06 17:59:55	GE Syprotec
4500130958ALUSEP004.std	2006-11-14 17:44:13	GE Syprotec
\.


--
-- Data for Name: Furane; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Furane" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "HMF", "FOL", "FAL", "ACF", "MEF", "bHMF", "bFOL", "bFAL", "bACF", "bMEF") FROM stdin;
AluSepABC001887	CL80011-101-0	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001888	180137	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001889	180137	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001890	CL80011-101-0	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001891	7853088	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001892	51016110	TRANSFORMATEUR 77291	5	5	8	5	5	t	t	f	t	t
AluSepABC001893	61-01-69834	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001894	61-0169835	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001895	51016108	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	f	t	t
AluSepABC001896	7853084	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001897	7853087	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001898	51016112	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001899	51016113	TRANSFORMATEUR 77291	5	5	14	5	5	t	t	f	t	t
AluSepABC001900	7853085	TRANSFORMATEUR 77291	5	60	5	5	5	t	f	t	t	t
AluSepABC001901	51016111	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001902	7853086	TRANSFORMATEUR 77291	5	52	5	5	5	t	f	t	t	t
AluSepABC001903	51016109	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	f	t	t
AluSepABC001904	7853083	TRANSFORMATEUR 77291	5	40	5	5	5	t	f	t	t	t
AluSepABC001905	1132787	TRANSFORMATEUR 77291	5	5	7	5	5	t	t	f	t	t
AluSepABC001906	7853086	TRANSFORMATEUR 77291	5	40	7	5	5	t	f	f	t	t
AluSepABC001907	7853083	TRANSFORMATEUR 77291	5	22	8	5	8	t	f	f	t	f
AluSepABC001908	1132787	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001909	7853085	TRANSFORMATEUR 77291	5	30	8	5	11	t	f	f	t	f
AluSepABC001910	7853088	TRANSFORMATEUR 77291	5	27	5	5	5	t	f	t	t	t
AluSepABC001911	7853087	TRANSFORMATEUR 77291	5	32	5	5	5	t	f	t	t	t
AluSepABC001912	7853084	TRANSFORMATEUR 77291	5	13	5	5	5	t	f	t	t	t
AluSepABC001913	51016112	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001914	51016113	TRANSFORMATEUR 77291	5	5	10	5	5	t	t	f	t	t
AluSepABC001915	51016111	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001916	51016110	TRANSFORMATEUR 77291	5	5	8	5	5	t	t	f	t	t
AluSepABC001917	51016108	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001918	51016109	TRANSFORMATEUR 77291	5	5	5	7	5	t	f	f	f	t
AluSepABC001919	W0582-001	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
AluSepABC001920	51016113	TRANSFORMATEUR 77291	5	5	8	5	5	t	t	f	t	t
AluSepABC001921	7853088	TRANSFORMATEUR 77291	5	30	5	5	5	t	f	t	t	t
AluSepABC001922	51016111	TRANSFORMATEUR 77291	5	5	5	5	5	t	t	t	t	t
ALUSEPMS 000038	160087	REDRESSEUR 25	5	9	10	5	5	t	f	f	t	t
\.


--
-- Data for Name: Gaz_Dissous; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Gaz_Dissous" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "H2", "CH4", "C2H2", "C2H4", "C2H6", "CO", "CO2", "O2", "N2", "CAP_GAZ", "bH2", "bCH4", "bC2H2", "bC2H4", "bC2H6", "bCO", "bCO2", "bO2", "bN2", "ContenuGaz", "Noise", "Tzone1", "Tzone2", "Flow_gas", "Pcell", "Toil_hs", "Tpga", "RH_pga", "Normalization_Temperature", "Oil_Pressure", "Poil_pump", "Toil_cond", "Oil_Temperature", "N_fill", "N_drain", "Mic1", "Mic2", opt_36, opt_37, opt_38, opt_39, opt_40, opt_41, opt_42, opt_43, opt_44, opt_45, opt_46, opt_47, opt_48, opt_49, opt_50) FROM stdin;
AluSepABC000580	180137-H1	TRANSFORMATEUR 77291	1.39999999999999991	0.5	0.100000000000000006	0.200000000000000011	0.200000000000000011	3.39999999999999991	64	3541	17187	0	f	f	t	t	t	f	f	f	f	2.14000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000581	180137-H3	TRANSFORMATEUR 77291	1.60000000000000009	0.400000000000000022	0.100000000000000006	0.200000000000000011	0.200000000000000011	3.70000000000000018	69	4017	20126	0	f	f	t	t	t	f	f	f	f	2.47999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000582	180137-H2	TRANSFORMATEUR 77291	1.10000000000000009	0.400000000000000022	0.100000000000000006	0.200000000000000011	0.200000000000000011	3.10000000000000009	55	3408	17070	0	f	f	t	t	t	f	f	f	f	2.10999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000583	160087	TRANSFORMATEUR 77291	4.20000000000000018	1.80000000000000004	0.200000000000000011	0.400000000000000022	0.400000000000000022	153	475	6620	22695	0	f	f	t	f	t	f	f	f	f	3.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000584	160087-H3	TRANSFORMATEUR 77291	0.699999999999999956	0.299999999999999989	0.200000000000000011	0.400000000000000022	0.5	8.69999999999999929	108	9868	26283	0	f	f	t	t	t	f	f	f	f	3.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000585	160087-H1	TRANSFORMATEUR 77291	1.5	0.5	0.299999999999999989	0.800000000000000044	0.900000000000000022	8.90000000000000036	166	21856	51513	0	f	f	t	t	t	f	f	f	f	7.49000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000586	160087-H2	TRANSFORMATEUR 77291	1.10000000000000009	0.400000000000000022	0.299999999999999989	0.599999999999999978	0.599999999999999978	8.59999999999999964	136	14742	34691	0	f	f	t	t	t	f	f	f	f	5.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000587	180138	TRANSFORMATEUR 77291	8.59999999999999964	2	0.100000000000000006	0.800000000000000044	0.299999999999999989	129	454	1735	8788	0	f	f	f	f	f	f	f	f	f	1.14999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000588	180139	TRANSFORMATEUR 77291	9.69999999999999929	2.10000000000000009	0.100000000000000006	0.900000000000000022	0.299999999999999989	142	508	2443	16665	0	f	f	t	f	f	f	f	f	f	2.04000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000589	160087	TRANSFORMATEUR 77291	14	4.40000000000000036	0.299999999999999989	1.19999999999999996	0.599999999999999978	311	1811	4117	27267	0	f	f	f	f	f	f	f	f	f	3.47999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000590	160086	TRANSFORMATEUR 77291	15	4.79999999999999982	0.200000000000000011	1.19999999999999996	0.5	367	2070	5219	35230	0	f	f	f	f	f	f	f	f	f	4.45999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000591	180136	TRANSFORMATEUR 77291	5.90000000000000036	2.10000000000000009	0.100000000000000006	0.800000000000000044	0.200000000000000011	156	437	4533	14724	0	f	f	f	f	f	f	f	f	f	2.04999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000592	160090	TRANSFORMATEUR 77291	14	4.90000000000000036	0.599999999999999978	3.10000000000000009	0.699999999999999956	129	1052	1684	9895	0	f	f	f	f	f	f	f	f	f	1.31000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000593	180140	TRANSFORMATEUR 77291	6.59999999999999964	2.20000000000000018	0.200000000000000011	1.10000000000000009	0.299999999999999989	152	475	3773	14997	0	f	f	f	f	f	f	f	f	f	1.98999999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000594	180137	TRANSFORMATEUR 77291	4	1.60000000000000009	0.100000000000000006	0.5	0.200000000000000011	142	435	3542	11516	0	f	f	t	f	t	f	f	f	f	1.6100000000000001	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000595	160088	TRANSFORMATEUR 77291	14	4.09999999999999964	0.200000000000000011	1.5	0.599999999999999978	289	1941	4101	28770	0	f	f	f	f	f	f	f	f	f	3.64000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000596	160089	TRANSFORMATEUR 77291	21	5.40000000000000036	0.299999999999999989	1.19999999999999996	0.599999999999999978	363	2189	6353	42059	0	f	f	t	f	f	f	f	f	f	5.30999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000597	160087	TRANSFORMATEUR 77291	17	4.20000000000000018	0.299999999999999989	1.10000000000000009	0.599999999999999978	304	1999	4446	27770	0	f	f	f	f	f	f	f	f	f	3.5299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000598	180137	TRANSFORMATEUR 77291	8.90000000000000036	1.69999999999999996	0.100000000000000006	0.400000000000000022	0.200000000000000011	151	578	3779	13478	0	f	f	t	f	t	f	f	f	f	1.87000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000599	180138	TRANSFORMATEUR 77291	31	1.5	0.100000000000000006	0.5	0.200000000000000011	101	297	1881	8700	0	f	f	t	f	t	f	f	f	f	1.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000600	180139	TRANSFORMATEUR 77291	16	1.89999999999999991	0.100000000000000006	0.800000000000000044	0.200000000000000011	139	514	2043	12878	0	f	f	t	f	f	f	f	f	f	1.60000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000601	180138	TRANSFORMATEUR 77291	233	2	0.100000000000000006	0.900000000000000022	0.400000000000000022	127	495	2432	10176	0	f	f	f	f	f	f	f	f	f	1.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000602	160087	TRANSFORMATEUR 77291	14	3.70000000000000018	0.299999999999999989	1	0.599999999999999978	292	1850	4172	24995	0	f	f	f	f	f	f	f	f	f	3.20000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000603	180140	TRANSFORMATEUR 77291	8.80000000000000071	2	0.200000000000000011	0.900000000000000022	0.200000000000000011	153	500	3075	11340	0	f	f	f	f	f	f	f	f	f	1.54000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000604	160090	TRANSFORMATEUR 77291	13	3.60000000000000009	0.299999999999999989	2	0.5	123	1063	1279	7335	0	f	f	f	f	f	f	f	f	f	0.989999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000605	160088	TRANSFORMATEUR 77291	14	3.5	0.299999999999999989	1.19999999999999996	0.5	273	1962	4774	26562	0	f	f	f	f	f	f	f	f	f	3.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000606	SET6394-0101	TRANSFORMATEUR 77291	3.10000000000000009	2.39999999999999991	0.5	1	1.10000000000000009	49	271	9814	78982	0	f	f	t	t	t	f	f	f	f	9.07000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000607	A32S0251	TRANSFORMATEUR 77291	913	2.10000000000000009	0.5	1.19999999999999996	1.10000000000000009	214	187	14111	77709	0	f	f	t	f	t	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000608	91-03E7301-004	TRANSFORMATEUR 77291	18	1.80000000000000004	0.400000000000000022	0.900000000000000022	1	154	795	13033	65892	0	f	f	t	t	t	f	f	f	f	8.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000609	W0582-001	TRANSFORMATEUR 77291	5.79999999999999982	12	0.400000000000000022	5.09999999999999964	3.10000000000000009	772	2829	1020	60732	0	f	f	t	f	f	f	f	f	f	6.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000610	4046506001	TRANSFORMATEUR 77291	29	51	0.5	1.69999999999999996	3.39999999999999991	2409	9959	23241	130261	0	f	f	t	f	f	f	f	f	f	16.879999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000611	91-03E7301-003	TRANSFORMATEUR 77291	20	3.60000000000000009	0.5	1	1.10000000000000009	350	2509	14189	96125	0	f	f	t	t	t	f	f	f	f	11.5999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000612	91-03E7300-005	TRANSFORMATEUR 77291	34	7.40000000000000036	0.5	3.5	1.39999999999999991	559	3063	10522	102317	0	f	f	t	f	f	f	f	f	f	11.9199999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000613	91-03E7300-003	TRANSFORMATEUR 77291	21	5.40000000000000036	0.5	3.70000000000000018	1.19999999999999996	515	2891	8823	74010	0	f	f	t	f	f	f	f	f	f	8.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000614	03G122759	TRANSFORMATEUR 77291	4.59999999999999964	1.30000000000000004	0.5	1	1.10000000000000009	72	346	11218	77174	0	f	f	t	t	t	f	f	f	f	9.08999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000615	03G122760	TRANSFORMATEUR 77291	2.5	1.19999999999999996	0.5	1	1.10000000000000009	61	381	13429	90073	0	f	f	t	t	t	f	f	f	f	10.6699999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000616	91-03E7301-002	TRANSFORMATEUR 77291	15	5.09999999999999964	0.400000000000000022	1.30000000000000004	1	522	3241	2593	74190	0	f	f	t	f	t	f	f	f	f	8.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000617	91-03E7301-001	TRANSFORMATEUR 77291	13	5.29999999999999982	0.5	1.39999999999999991	1.10000000000000009	428	3108	949	81398	0	f	f	t	f	t	f	f	f	f	8.83000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000618	91-03E7299-004	TRANSFORMATEUR 77291	5.40000000000000036	5.5	0.400000000000000022	0.900000000000000022	3.39999999999999991	272	1323	863	79895	0	f	f	t	t	f	f	f	f	f	8.44999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000619	91-03E7300-004	TRANSFORMATEUR 77291	24	6.09999999999999964	0.400000000000000022	1.10000000000000009	3.29999999999999982	322	1933	1186	79041	0	f	f	t	f	f	f	f	f	f	8.40000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000620	91-03E7301-005	TRANSFORMATEUR 77291	47	3.79999999999999982	0.5	1	1.10000000000000009	348	2130	1581	74374	0	f	f	t	t	t	f	f	f	f	8.08999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000621	91-03E7301-006	TRANSFORMATEUR 77291	53	4.5	0.400000000000000022	0.900000000000000022	1	325	1887	466	73747	0	f	f	t	t	f	f	f	f	f	7.84999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000622	03G122761	TRANSFORMATEUR 77291	3.70000000000000018	1.5	0.5	1	1.10000000000000009	59	558	20825	61732	0	f	f	t	t	t	f	f	f	f	8.48000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000623	PA14201-001	TRANSFORMATEUR 77291	62	20	0.5	1	3.89999999999999991	210	280	14095	75572	0	f	f	t	t	f	f	f	f	f	9.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000624	03G122757	TRANSFORMATEUR 77291	8.69999999999999929	1.89999999999999991	0.5	1	1.10000000000000009	104	522	9479	81300	0	f	f	t	t	t	f	f	f	f	9.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000625	03G122763	TRANSFORMATEUR 77291	2.5	1.39999999999999991	0.400000000000000022	0.900000000000000022	1	60	563	15517	63894	0	f	f	t	t	t	f	f	f	f	8.14000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000626	03G122762	TRANSFORMATEUR 77291	4.09999999999999964	1.60000000000000009	0.5	1	1.10000000000000009	69	618	18747	67954	0	f	f	t	t	t	f	f	f	f	8.9399999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000627	XC030-001	TX PC # 173-B	2.70000000000000018	4.70000000000000018	0.299999999999999989	0.699999999999999956	2.79999999999999982	112	530	548	54197	0	f	f	t	t	f	f	f	f	f	5.66000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000628	B3S6449	TRANSFORMATEUR 77291	5.90000000000000036	3	0.5	15	1.10000000000000009	182	2706	17747	69860	0	f	f	t	f	t	f	f	f	f	9.28999999999999915	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000629	91-03E7302-001	TRANSFORMATEUR 77291	1.19999999999999996	1.19999999999999996	0.5	2.29999999999999982	1.10000000000000009	47	1018	26513	88589	0	f	f	t	f	t	f	f	f	f	12.0199999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000630	91-03E7302-005	TRANSFORMATEUR 77291	11	7.90000000000000036	0.5	3	1.60000000000000009	573	3966	4464	90432	0	f	f	t	f	f	f	f	f	f	10.3300000000000001	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000631	91-03E7344-002	TRANSFORMATEUR 77291	11	2.70000000000000018	0.5	1.5	1.10000000000000009	262	2258	20393	89179	0	f	f	t	f	t	f	f	f	f	11.6999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000632	91-03E7344-001	TRANSFORMATEUR 77291	21	19	0.5	60	10	450	4081	8749	85308	0	f	f	t	f	f	f	f	f	f	10.4199999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000633	91-03E7302-002	TRANSFORMATEUR 77291	20	5.09999999999999964	0.5	1	1.80000000000000004	294	1553	3826	85462	0	f	f	t	t	f	f	f	f	f	9.39000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000634	91-03E7303-001	TRANSFORMATEUR 77291	8.30000000000000071	3.70000000000000018	0.5	1.10000000000000009	1.10000000000000009	350	3045	10697	81063	0	f	f	t	f	t	f	f	f	f	9.8100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000635	91-03E7302-004	TRANSFORMATEUR 77291	8	6.20000000000000018	0.5	1.39999999999999991	1.10000000000000009	498	3127	6431	92466	0	f	f	t	f	t	f	f	f	f	10.5999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000636	91-03E7303-002	TRANSFORMATEUR 77291	7.79999999999999982	5.20000000000000018	0.5	1.60000000000000009	1.10000000000000009	567	1747	11090	84882	0	f	f	t	f	t	f	f	f	f	10.1600000000000001	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000637	03G122767	TRANSFORMATEUR 77291	3.10000000000000009	1.19999999999999996	0.400000000000000022	0.900000000000000022	1	46	452	11346	65008	0	f	f	t	t	t	f	f	f	f	7.79999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000638	03G122766	TRANSFORMATEUR 77291	5	3.29999999999999982	0.400000000000000022	3.79999999999999982	1	68	586	11936	67554	0	f	f	t	f	t	f	f	f	f	8.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000639	03G122758	TRANSFORMATEUR 77291	9.80000000000000071	2.70000000000000018	0.5	1	1.10000000000000009	173	999	13986	100958	0	f	f	t	t	t	f	f	f	f	11.7599999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000640	03G122765	TRANSFORMATEUR 77291	3.79999999999999982	2.5	0.5	2.20000000000000018	1.10000000000000009	74	867	21161	68197	0	f	f	t	f	t	f	f	f	f	9.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000641	03G122764	TRANSFORMATEUR 77291	4.5	1.39999999999999991	0.400000000000000022	0.900000000000000022	1	69	669	12599	68734	0	f	f	t	t	t	f	f	f	f	8.33999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000642	91-03E7255-001	TRANSFORMATEUR 77291	54	8.5	0.400000000000000022	1	5.20000000000000018	322	1361	768	73471	0	f	f	t	f	f	f	f	f	f	7.86000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000643	B32S-0175	TRANSFORMATEUR 77291	18	16	0.5	54	5.59999999999999964	1038	9705	645	81016	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000644	B32S-0174	TRANSFORMATEUR 77291	36	10	0.5	21	2.5	1186	4094	1152	90392	0	f	f	t	f	f	f	f	f	f	10.0299999999999994	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000645	A32S-0174	TRANSFORMATEUR 77291	24	11	0.5	25	2.89999999999999991	1159	4641	730	83541	0	f	f	t	f	f	f	f	f	f	9.42999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000646	91-03E7299-002	TRANSFORMATEUR 77291	6	3.79999999999999982	0.400000000000000022	0.900000000000000022	1	330	1757	1472	75677	0	f	f	t	t	t	f	f	f	f	8.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000647	91-03E7299-005	TRANSFORMATEUR 77291	5.79999999999999982	6.70000000000000018	0.400000000000000022	0.900000000000000022	4.59999999999999964	358	2523	559	77365	0	f	f	t	t	f	f	f	f	f	8.36999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000648	91-03E7298-003	TRANSFORMATEUR 77291	4.90000000000000036	2.79999999999999982	0.400000000000000022	2.29999999999999982	1	212	2915	11851	64016	0	f	f	t	f	t	f	f	f	f	8.28999999999999915	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000649	91-03E7298-001	TRANSFORMATEUR 77291	22	5.70000000000000018	0.5	1	6.90000000000000036	322	2121	1455	80397	0	f	f	t	t	f	f	f	f	f	8.72000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000650	91-03E7302-003	TRANSFORMATEUR 77291	5.59999999999999964	7.5	0.400000000000000022	1.10000000000000009	4.20000000000000018	383	1815	941	72534	0	f	f	t	f	f	f	f	f	f	7.88999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000651	A325-0175	TRANSFORMATEUR 77291	48	16	0.5	25	6.40000000000000036	1400	6441	1287	90762	0	f	f	t	f	f	f	f	f	f	10.3599999999999994	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000652	91-03E7299-001	TRANSFORMATEUR 77291	9.30000000000000071	5.40000000000000036	0.400000000000000022	1.19999999999999996	1	482	2801	979	67781	0	f	f	t	f	t	f	f	f	f	7.55999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000653	91-03E7299-003	TRANSFORMATEUR 77291	8	7.29999999999999982	0.400000000000000022	1.19999999999999996	2.5	509	3106	437	70457	0	f	f	t	f	f	f	f	f	f	7.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000654	CL80011-101-0	TRANSFORMATEUR 77291	36	1.60000000000000009	0.200000000000000011	0.5	0.5	172	514	5389	27380	0	f	f	t	f	t	f	f	f	f	3.52000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000655	61-0169835	TRANSFORMATEUR 77291	12	4.29999999999999982	0.400000000000000022	60	0.900000000000000022	682	2747	504	59662	0	f	f	t	f	t	f	f	f	f	6.71999999999999975	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000656	61-01-69834	TRANSFORMATEUR 77291	10	4.90000000000000036	0.400000000000000022	56	1	644	2968	650	71918	0	f	f	t	f	t	f	f	f	f	8.10999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000657	180137	TRANSFORMATEUR 77291	6.59999999999999964	1.39999999999999991	0.200000000000000011	0.400000000000000022	0.5	124	524	7754	28944	0	f	f	t	t	t	f	f	f	f	3.89000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000658	180140	TRANSFORMATEUR 77291	14	1.69999999999999996	0.200000000000000011	0.800000000000000044	0.400000000000000022	128	495	4163	20245	0	f	f	f	f	t	f	f	f	f	2.58999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000659	91-03E7300-002	TRANSFORMATEUR 77291	1.19999999999999996	1	0.5	1	1.10000000000000009	56	656	22599	80538	0	f	f	t	t	t	f	f	f	f	10.75	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000660	91-03E7300-001	TRANSFORMATEUR 77291	8.5	4.20000000000000018	0.5	1	1.10000000000000009	345	3211	13223	79297	0	f	f	t	f	t	f	f	f	f	10.0199999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000661	91-03E7298-002	TRANSFORMATEUR 77291	24	5.59999999999999964	0.5	1.30000000000000004	1.10000000000000009	521	3865	12476	82284	0	f	f	t	f	t	f	f	f	f	10.2400000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000662	91-03E7300-006	TRANSFORMATEUR 77291	15	5.40000000000000036	0.5	1.5	1.10000000000000009	616	3784	6496	87638	0	f	f	t	f	t	f	f	f	f	10.1899999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000663	180138	TRANSFORMATEUR 77291	8.90000000000000036	1.30000000000000004	0.100000000000000006	0.5	0.200000000000000011	88	359	527	12386	0	f	f	t	f	t	f	f	f	f	1.37000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000664	180138	TRANSFORMATEUR 77291	68	1.69999999999999996	0.200000000000000011	0.599999999999999978	0.400000000000000022	110	470	4376	21744	0	f	f	t	f	t	f	f	f	f	2.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000665	180136	TRANSFORMATEUR 77291	14	1.60000000000000009	0.100000000000000006	0.5	0.200000000000000011	125	410	5065	18362	0	f	f	t	f	t	f	f	f	f	2.45000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000666	7853087	TRANSFORMATEUR 77291	14	21	0.200000000000000011	1.80000000000000004	4.79999999999999982	688	4338	726	36596	0	f	f	t	f	f	f	f	f	f	4.33999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000667	7853086	TRANSFORMATEUR 77291	17	30	0.200000000000000011	2.70000000000000018	6.09999999999999964	519	3395	932	28365	0	f	f	t	f	f	f	f	f	f	3.45999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000668	7853088	TRANSFORMATEUR 77291	10	33	0.400000000000000022	5.90000000000000036	6.40000000000000036	830	4295	1168	62019	0	f	f	t	f	f	f	f	f	f	7.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000669	7853085	TRANSFORMATEUR 77291	21	22	0.200000000000000011	2.70000000000000018	4.70000000000000018	669	4031	433	24728	0	f	f	t	f	f	f	f	f	f	3.10999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000670	7853084	TRANSFORMATEUR 77291	13	21	0.200000000000000011	2.5	4.90000000000000036	710	3443	471	37333	0	f	f	t	f	f	f	f	f	f	4.44000000000000039	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000671	7853083	TRANSFORMATEUR 77291	11	21	0.200000000000000011	1.80000000000000004	5.09999999999999964	649	3366	974	33669	0	f	f	t	f	f	f	f	f	f	4.11000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000672	160087	TRANSFORMATEUR 77291	14	3.39999999999999991	0.299999999999999989	1	0.5	254	1455	4660	29340	0	f	f	f	f	t	f	f	f	f	3.68000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000673	160089	TRANSFORMATEUR 77291	23	3.89999999999999991	0.200000000000000011	1	0.5	288	1662	3955	34536	0	f	f	t	f	t	f	f	f	f	4.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000674	160090	TRANSFORMATEUR 77291	15	3.60000000000000009	0.299999999999999989	1.80000000000000004	0.599999999999999978	117	968	2249	17031	0	f	f	f	f	f	f	f	f	f	2.10999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000675	1132787	TRANSFORMATEUR 77291	9.40000000000000036	3.39999999999999991	0.5	15	1.60000000000000009	367	3984	22526	66532	0	f	f	t	f	f	f	f	f	f	9.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000676	160086	TRANSFORMATEUR 77291	17	3.79999999999999982	0.299999999999999989	1	0.599999999999999978	311	1833	5601	38335	0	f	f	t	f	t	f	f	f	f	4.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000677	160088	TRANSFORMATEUR 77291	17	3.29999999999999982	0.200000000000000011	1.19999999999999996	0.400000000000000022	234	1284	2289	26276	0	f	f	f	f	f	f	f	f	f	3.12999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000678	51016112	TRANSFORMATEUR 77291	6	23	0.299999999999999989	3.79999999999999982	7.79999999999999982	515	4610	859	51988	0	f	f	t	f	f	f	f	f	f	5.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000679	51016113	TRANSFORMATEUR 77291	5.5	33	0.5	29	9.30000000000000071	797	9277	855	83532	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000680	51016111	TRANSFORMATEUR 77291	4.29999999999999982	242	0.200000000000000011	245	110	404	4040	636	36378	0	f	f	t	f	f	f	f	f	f	4.37000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000681	51016110	TRANSFORMATEUR 77291	5.79999999999999982	20	0.299999999999999989	8.5	6.59999999999999964	465	5337	908	47271	0	f	f	t	f	f	f	f	f	f	5.51999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000682	51016109	TRANSFORMATEUR 77291	4.5	57	0.400000000000000022	28	19	682	5446	611	6774	0	f	f	t	f	f	f	f	f	f	7.58999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000683	51016108	TRANSFORMATEUR 77291	4.59999999999999964	4.90000000000000036	0.200000000000000011	4.29999999999999982	0.900000000000000022	138	1163	716	29271	0	f	f	t	f	f	f	f	f	f	3.20000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000684	51016113	TRANSFORMATEUR 77291	3.89999999999999991	26	0.5	18	6.70000000000000018	649	7466	6598	81108	0	f	f	t	f	f	f	f	f	f	10.1400000000000006	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000685	B325-0174	TRANSFORMATEUR 77291	35	9.19999999999999929	0.5	18	2.39999999999999991	1040	3349	7011	85377	0	f	f	t	f	f	f	f	f	f	10.4900000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000686	A325-0174	TRANSFORMATEUR 77291	19	9.69999999999999929	0.5	22	3	974	3307	4663	73893	0	f	f	t	f	f	f	f	f	f	8.76999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000687	1132787	TRANSFORMATEUR 77291	3.20000000000000018	1.89999999999999991	0.5	9.30000000000000071	1.10000000000000009	106	2577	28274	66670	0	f	f	t	f	f	f	f	f	f	10.2300000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000688	51016112	TRANSFORMATEUR 77291	5.5	22	0.299999999999999989	3.70000000000000018	7.09999999999999964	483	4221	236	44441	0	f	f	t	f	f	f	f	f	f	5.16000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000689	51016113	TRANSFORMATEUR 77291	6.29999999999999982	33	0.5	21	9.19999999999999929	817	8819	3831	92831	0	f	f	t	f	f	f	f	f	f	11.0899999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000690	51016111	TRANSFORMATEUR 77291	5.40000000000000036	250	0.299999999999999989	248	108	396	4050	1448	37297	0	f	f	t	f	f	f	f	f	f	4.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000691	51016110	TRANSFORMATEUR 77291	5.90000000000000036	20	0.299999999999999989	7.29999999999999982	5.20000000000000018	486	5275	3217	46463	0	f	f	t	f	f	f	f	f	f	5.78000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000692	51016109	TRANSFORMATEUR 77291	6.09999999999999964	57	0.5	29	18	684	5259	1804	73968	0	f	f	t	f	f	f	f	f	f	8.51999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000693	51016108	TRANSFORMATEUR 77291	3.79999999999999982	3.5	0.200000000000000011	2.70000000000000018	0.800000000000000044	110	1033	936	26712	0	f	f	t	f	f	f	f	f	f	2.97999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000694	7853088	TRANSFORMATEUR 77291	10	34	0.400000000000000022	5.09999999999999964	6.40000000000000036	820	4128	1259	62644	0	f	f	t	f	f	f	f	f	f	7.12999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000695	7853087	TRANSFORMATEUR 77291	12	21	0.200000000000000011	1.69999999999999996	4.59999999999999964	734	4408	1042	35621	0	f	f	t	f	f	f	f	f	f	4.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000696	7853086	TRANSFORMATEUR 77291	20	32	0.200000000000000011	2.70000000000000018	7.09999999999999964	540	3913	1421	29837	0	f	f	t	f	f	f	f	f	f	3.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000697	7853085	TRANSFORMATEUR 77291	21	23	0.200000000000000011	2.60000000000000009	5	669	4022	1564	29406	0	f	f	t	f	f	f	f	f	f	3.68999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000698	7853084	TRANSFORMATEUR 77291	13	20	0.200000000000000011	2.10000000000000009	4.90000000000000036	697	3904	1385	33289	0	f	f	t	f	f	f	f	f	f	4.08999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000699	7853083	TRANSFORMATEUR 77291	13	23	0.200000000000000011	1.80000000000000004	5.40000000000000036	672	4066	1209	36846	0	f	f	t	f	f	f	f	f	f	4.42999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000700	61-0169835	TRANSFORMATEUR 77291	4.79999999999999982	2.5	0.5	56	1.10000000000000009	458	2258	15908	67589	0	f	f	t	f	t	f	f	f	f	8.97000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000701	CL80011-101-0	TRANSFORMATEUR 77291	15	0.5	0.200000000000000011	0.299999999999999989	0.400000000000000022	49	109	7176	21233	0	f	f	f	t	t	f	f	f	f	2.93999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000702	61-01-69834	TRANSFORMATEUR 77291	7.29999999999999982	2.89999999999999991	0.5	51	1.10000000000000009	424	2130	16941	64661	0	f	f	t	f	t	f	f	f	f	8.77999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000703	CL80011-101-0	TRANSFORMATEUR 77291	10	0.400000000000000022	0.200000000000000011	0.200000000000000011	0.200000000000000011	34	58	5907	15612	0	f	f	f	t	t	f	f	f	f	2.22999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000704	CL80011-101-0	TRANSFORMATEUR 77291	0.599999999999999978	0.200000000000000011	0.100000000000000006	0.200000000000000011	0.200000000000000011	1.30000000000000004	32	3239	10108	0	f	f	t	t	t	f	f	f	f	1.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000705	CL80011-101-0	TRANSFORMATEUR 77291	0.599999999999999978	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	2.79999999999999982	49	3957	15773	0	f	f	t	t	t	f	f	f	f	2.02000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000706	CL80011-101-0	TRANSFORMATEUR 77291	0.800000000000000044	0.200000000000000011	0.200000000000000011	0.299999999999999989	0.400000000000000022	3.10000000000000009	117	7266	23713	0	f	f	t	t	t	f	f	f	f	3.20000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000707	CL80011-101-0	TRANSFORMATEUR 77291	0.800000000000000044	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	1.69999999999999996	48	4962	17856	0	f	f	t	t	t	f	f	f	f	2.35000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000708	51016108	TRANSFORMATEUR 77291	2.10000000000000009	2.39999999999999991	0.200000000000000011	2.10000000000000009	0.5	77	832	5646	33239	0	f	f	t	f	f	f	f	f	f	4.05999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000709	180139	TRANSFORMATEUR 77291	5.40000000000000036	0.599999999999999978	0.100000000000000006	0.200000000000000011	0.200000000000000011	38	149	4431	12208	0	f	f	t	t	t	f	f	f	f	1.71999999999999997	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000710	180139	TRANSFORMATEUR 77291	1	0.200000000000000011	0.400000000000000022	0.800000000000000044	0.900000000000000022	6.29999999999999982	64	13838	57141	0	f	f	t	t	t	f	f	f	f	7.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000711	180139	TRANSFORMATEUR 77291	0.299999999999999989	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	2.89999999999999991	25	1071	5455	0	f	f	t	t	t	f	f	f	f	0.660000000000000031	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000712	180139	TRANSFORMATEUR 77291	0.299999999999999989	0.200000000000000011	0.100000000000000006	0.200000000000000011	0.200000000000000011	3.10000000000000009	33	1170	4998	0	f	f	t	t	t	f	f	f	f	0.619999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000713	CL80011-101-0	TRANSFORMATEUR 77291	4.5	2	2.79999999999999982	1.69999999999999996	0.200000000000000011	2.10000000000000009	31	1313	4631	0	f	f	f	f	t	f	f	f	f	0.619999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000714	CL80011-101-0	TRANSFORMATEUR 77291	3.10000000000000009	1.30000000000000004	1.69999999999999996	1	0.200000000000000011	1.60000000000000009	23	841	3558	0	f	f	f	f	t	f	f	f	f	0.440000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000715	CL80011-101-0	TRANSFORMATEUR 77291	5.79999999999999982	2.79999999999999982	4	2.5	0.400000000000000022	3.39999999999999991	58	8532	30457	0	f	f	f	f	t	f	f	f	f	3.9700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000716	180140	TRANSFORMATEUR 77291	0.699999999999999956	0.200000000000000011	0.200000000000000011	0.400000000000000022	0.5	9.69999999999999929	52	10724	34234	0	f	f	t	t	t	f	f	f	f	4.55999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000717	180140	TRANSFORMATEUR 77291	0.699999999999999956	0.200000000000000011	0.200000000000000011	0.299999999999999989	0.400000000000000022	6.09999999999999964	42	6192	24950	0	f	f	t	t	t	f	f	f	f	3.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000718	180140	TRANSFORMATEUR 77291	0.800000000000000044	0.299999999999999989	0.400000000000000022	0.900000000000000022	1	8.59999999999999964	65	18653	61251	0	t	t	t	t	t	f	f	f	f	8.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000719	180136	TRANSFORMATEUR 77291	0.5	0.200000000000000011	0.100000000000000006	0.200000000000000011	0.200000000000000011	8.90000000000000036	46	4052	19155	0	f	t	t	t	t	f	f	f	f	2.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000720	180136	TRANSFORMATEUR 77291	0.200000000000000011	0.200000000000000011	0.100000000000000006	0.200000000000000011	0.200000000000000011	5	28	866	5937	0	f	f	t	t	t	f	f	f	f	0.709999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000721	180136	TRANSFORMATEUR 77291	0.200000000000000011	0.200000000000000011	0.100000000000000006	0.200000000000000011	0.200000000000000011	2.79999999999999982	13	302	2403	0	t	f	t	t	t	f	f	f	f	0.270000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000722	180138	TRANSFORMATEUR 77291	0.5	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	1.89999999999999991	23	1289	5364	0	f	t	t	t	t	f	f	f	f	0.739999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000723	180138	TRANSFORMATEUR 77291	0.200000000000000011	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	2.5	23	1830	6348	0	t	f	t	t	t	f	f	f	f	0.839999999999999969	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000724	180138	TRANSFORMATEUR 77291	0.200000000000000011	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	1.89999999999999991	20	1197	4448	0	t	f	t	t	t	f	f	f	f	0.57999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000725	180138	TRANSFORMATEUR 77291	4	0.400000000000000022	0.100000000000000006	0.200000000000000011	0.200000000000000011	28	109	3227	7579	0	f	f	t	t	t	f	f	f	f	1.12999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000726	180138	TRANSFORMATEUR 77291	0.299999999999999989	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	1	23	2331	6241	0	f	t	t	t	t	f	f	f	f	0.869999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000727	180138	TRANSFORMATEUR 77291	0.200000000000000011	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	1	30	3197	8444	0	t	t	t	t	t	f	f	f	f	1.19999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000728	180138	TRANSFORMATEUR 77291	0.200000000000000011	0.100000000000000006	0.100000000000000006	0.200000000000000011	0.200000000000000011	0.800000000000000044	28	2539	6112	0	t	t	t	t	t	f	f	f	f	0.890000000000000013	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000729	51016108	TRANSFORMATEUR 77291	2.10000000000000009	2	0.200000000000000011	1.19999999999999996	0.5	56	702	4976	28263	0	f	f	t	f	f	f	f	f	f	3.4700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000730	51016108	TRANSFORMATEUR 77291	1.60000000000000009	2.39999999999999991	0.100000000000000006	1.10000000000000009	0.599999999999999978	58	616	405	21509	0	f	f	t	f	f	f	f	f	f	2.31999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000731	51016108	TRANSFORMATEUR 77291	2.20000000000000018	2.70000000000000018	0.200000000000000011	1.30000000000000004	0.599999999999999978	65	672	242	25710	0	f	f	t	f	f	f	f	f	f	2.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000732	51016108	TRANSFORMATEUR 77291	1.39999999999999991	2.29999999999999982	0.200000000000000011	1.10000000000000009	0.5	55	558	866	25214	0	f	f	t	f	f	f	f	f	f	2.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000733	180137	TRANSFORMATEUR 77291	1.69999999999999996	0.400000000000000022	0.100000000000000006	0.200000000000000011	0.200000000000000011	27	106	5526	11836	0	f	f	t	t	t	f	f	f	f	1.77000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000734	CL80011-101-0	TRANSFORMATEUR 77291	11	0.400000000000000022	0.299999999999999989	0.400000000000000022	0.5	33	72	10090	29395	0	f	f	f	t	t	f	f	f	f	4.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000735	180136	TRANSFORMATEUR 77291	0.599999999999999978	0.200000000000000011	0.200000000000000011	0.400000000000000022	0.5	3.29999999999999982	91	10275	27659	0	f	f	t	t	t	f	f	f	f	3.85000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000736	51016108	TRANSFORMATEUR 77291	1.60000000000000009	1.80000000000000004	0.200000000000000011	0.800000000000000044	0.400000000000000022	43	614	5614	24599	0	f	f	t	f	f	f	f	f	f	3.10999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000737	51016108	TRANSFORMATEUR 77291	1.60000000000000009	1.89999999999999991	0.299999999999999989	0.900000000000000022	0.599999999999999978	37	611	9739	40097	0	f	f	t	f	t	f	f	f	f	5.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000738	51016108	TRANSFORMATEUR 77291	0.800000000000000044	1.69999999999999996	0.200000000000000011	0.800000000000000044	0.400000000000000022	37	569	6375	25519	0	f	f	t	f	f	f	f	f	f	3.27000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000739	CL80011-101-0	TRANSFORMATEUR 77291	20	6.79999999999999982	14	8.80000000000000071	1.10000000000000009	2.79999999999999982	324	37516	82940	0	f	f	f	f	t	f	f	f	f	12.4199999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000740	CL80011-101-0	TRANSFORMATEUR 77291	39	10	10	4.90000000000000036	1.10000000000000009	4.29999999999999982	324	33462	71499	0	f	f	f	f	t	f	f	f	f	10.8699999999999992	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000741	51016108	TRANSFORMATEUR 77291	1	1.60000000000000009	0.200000000000000011	0.699999999999999956	0.400000000000000022	34	533	5700	25014	0	f	f	t	f	f	f	f	f	f	3.2200000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000742	51016108	TRANSFORMATEUR 77291	0.800000000000000044	1.60000000000000009	0.200000000000000011	0.599999999999999978	0.5	32	502	6706	28493	0	f	f	t	f	t	f	f	f	f	3.68000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000743	51016108	TRANSFORMATEUR 77291	1.10000000000000009	1.5	0.299999999999999989	0.699999999999999956	0.699999999999999956	30	498	11899	45126	0	f	f	t	t	t	f	f	f	f	5.88999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000744	51016108	TRANSFORMATEUR 77291	1	1.60000000000000009	0.299999999999999989	0.699999999999999956	0.699999999999999956	27	475	11175	44691	0	f	f	t	t	t	f	f	f	f	5.79999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000745	180137	TRANSFORMATEUR 77291	1.39999999999999991	0.299999999999999989	0.5	1	1.10000000000000009	2.39999999999999991	143	22293	68713	0	f	f	t	t	t	f	f	f	f	9.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000746	180137	TRANSFORMATEUR 77291	0.400000000000000022	0.299999999999999989	0.200000000000000011	0.400000000000000022	0.5	2	142	12784	26435	0	f	f	t	t	t	f	f	f	f	3.97999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000747	CL80011-101-0	TRANSFORMATEUR 77291	14	3.20000000000000018	6.20000000000000018	3.89999999999999991	1.10000000000000009	2.29999999999999982	310	33056	67938	0	f	f	f	f	t	f	f	f	f	10.3399999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000748	CL80011-101-0	TRANSFORMATEUR 77291	18	3.79999999999999982	5.90000000000000036	3.29999999999999982	1.10000000000000009	2.5	329	35382	78309	0	f	f	f	f	t	f	f	f	f	11.6899999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000749	51016108	TRANSFORMATEUR 77291	1.19999999999999996	1.60000000000000009	0.200000000000000011	0.800000000000000044	0.400000000000000022	36	455	4559	27290	0	f	f	t	f	t	f	f	f	f	3.29000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000750	51016108	TRANSFORMATEUR 77291	0.900000000000000022	1.39999999999999991	0.299999999999999989	0.800000000000000044	0.599999999999999978	37	445	8796	35222	0	f	f	t	f	t	f	f	f	f	4.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000751	51016108	TRANSFORMATEUR 77291	1	1.60000000000000009	0.200000000000000011	0.800000000000000044	0.5	34	420	6161	36858	0	f	f	t	f	t	f	f	f	f	4.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000752	51016108	TRANSFORMATEUR 77291	0.800000000000000044	0.800000000000000044	0.200000000000000011	0.5	0.5	24	198	7608	33555	0	f	f	t	f	t	f	f	f	f	4.26999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000753	51016108	TRANSFORMATEUR 77291	1	1.19999999999999996	0.200000000000000011	0.5	0.400000000000000022	26	295	3858	24718	0	f	f	t	f	t	f	f	f	f	3	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000754	51016108	TRANSFORMATEUR 77291	4.40000000000000036	31	0.200000000000000011	9.19999999999999929	11	295	3780	3633	34740	0	f	f	t	f	f	f	f	f	f	4.28000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000755	03G122761	TRANSFORMATEUR 77291	5.70000000000000018	1.19999999999999996	0.299999999999999989	0.900000000000000022	0.5	27	526	24335	61929	0	f	f	t	t	t	f	f	f	f	8.86999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000756	4046506001	TRANSFORMATEUR 77291	23	42	0.400000000000000022	1.89999999999999991	2.5	1829	7800	26625	124496	0	f	f	f	f	f	f	f	f	f	16.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000757	W0582-001	TRANSFORMATEUR 77291	5.5	8.30000000000000071	0.200000000000000011	3.5	2.20000000000000018	516	1927	2446	50695	0	f	f	t	f	f	f	f	f	f	5.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000758	91-03E7299-001	TRANSFORMATEUR 77291	8.09999999999999964	4.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	416	2685	23281	73941	0	f	f	t	t	t	f	f	f	f	10.1400000000000006	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000759	91-03E7299-003	TRANSFORMATEUR 77291	6.90000000000000036	5.09999999999999964	0.299999999999999989	0.900000000000000022	0.699999999999999956	478	3304	12548	78368	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000760	A325-0175	TRANSFORMATEUR 77291	49	15	0.299999999999999989	24	3.5	1551	6524	1635	97147	0	f	f	t	f	f	f	f	f	f	10.7699999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000761	91-03E7298-002	TRANSFORMATEUR 77291	26	5.90000000000000036	0.299999999999999989	1.30000000000000004	0.599999999999999978	541	3795	15064	95936	0	f	f	t	f	f	f	f	f	f	11.6699999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000762	B325-0175	TRANSFORMATEUR 77291	19	13	0.299999999999999989	49	3.79999999999999982	1162	9775	4955	89923	0	f	f	t	f	f	f	f	f	f	10.6400000000000006	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000763	91-03E7302-002	TRANSFORMATEUR 77291	21	3	0.299999999999999989	0.900000000000000022	0.5	257	1361	9252	87173	0	f	f	t	t	t	f	f	f	f	9.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000764	91-03E7300-001	TRANSFORMATEUR 77291	8.19999999999999929	4.09999999999999964	0.299999999999999989	0.900000000000000022	0.5	312	2894	19360	76317	0	f	f	t	t	f	f	f	f	f	9.85999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000765	91-03E7302-004	TRANSFORMATEUR 77291	7.59999999999999964	5.09999999999999964	0.299999999999999989	0.900000000000000022	0.599999999999999978	399	2421	13644	90301	0	f	f	t	t	f	f	f	f	f	10.5500000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000766	91-03E7300-006	TRANSFORMATEUR 77291	15	5	0.299999999999999989	1.10000000000000009	0.5	529	3164	12012	80693	0	f	f	t	f	f	f	f	f	f	9.50999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000767	91-03E7302-003	TRANSFORMATEUR 77291	6.09999999999999964	3.89999999999999991	0.400000000000000022	0.900000000000000022	0.5	339	1588	6839	78877	0	f	f	f	t	f	f	f	f	f	8.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000768	91-03E7303-001	TRANSFORMATEUR 77291	7.40000000000000036	3.79999999999999982	0.299999999999999989	1	0.5	342	2703	11627	74942	0	f	f	t	f	f	f	f	f	f	9.0600000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000769	91-03E7303-002	TRANSFORMATEUR 77291	7.20000000000000018	4.70000000000000018	0.299999999999999989	1.19999999999999996	0.5	488	1410	13988	71252	0	f	f	t	f	t	f	f	f	f	8.94999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000770	91-03E7300-002	TRANSFORMATEUR 77291	0.900000000000000022	0.800000000000000044	0.299999999999999989	0.900000000000000022	0.5	36	598	24646	66980	0	t	f	t	t	t	f	f	f	f	9.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000771	91-03E7344-001	TRANSFORMATEUR 77291	26	18	0.299999999999999989	57	9.19999999999999929	404	3443	12484	78324	0	f	f	t	f	f	f	f	f	f	9.84999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000772	91-03E7344-002	TRANSFORMATEUR 77291	6	1.89999999999999991	0.299999999999999989	0.900000000000000022	0.5	150	1433	23954	69634	0	f	f	t	t	t	f	f	f	f	9.88000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000773	91-03E7300-005	TRANSFORMATEUR 77291	30	5.40000000000000036	0.299999999999999989	1.80000000000000004	0.800000000000000044	421	2102	12915	74260	0	f	f	t	f	f	f	f	f	f	9.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000774	91-03E7300-003	TRANSFORMATEUR 77291	19	4.90000000000000036	0.299999999999999989	3.5	1.10000000000000009	432	2320	17524	75767	0	f	f	t	f	f	f	f	f	f	9.85999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000775	91-03E7299-005	TRANSFORMATEUR 77291	6.29999999999999982	4	0.299999999999999989	0.900000000000000022	0.5	357	2357	3038	84650	0	f	f	t	t	t	f	f	f	f	9.27999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000776	91-03E7299-002	TRANSFORMATEUR 77291	6.90000000000000036	3.5	0.299999999999999989	0.900000000000000022	0.5	300	1526	13227	79737	0	f	f	t	t	t	f	f	f	f	9.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000777	A325-0174	TRANSFORMATEUR 77291	21	9.80000000000000071	0.299999999999999989	22	2.20000000000000018	1036	3404	5091	85901	0	f	f	f	f	f	f	f	f	f	9.85999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000778	91-03E7301-003	TRANSFORMATEUR 77291	19	3.10000000000000009	0.299999999999999989	0.900000000000000022	0.5	286	1988	12369	78335	0	f	f	t	t	t	f	f	f	f	9.32000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000779	91-03E7302-005	TRANSFORMATEUR 77291	10	6.29999999999999982	0.299999999999999989	2.20000000000000018	0.900000000000000022	495	3320	2549	79487	0	f	f	t	f	f	f	f	f	f	8.6899999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000780	XC030-001	TX PC # 173-B	2.39999999999999991	3.79999999999999982	0.200000000000000011	0.800000000000000044	2.10000000000000009	97	398	4365	66287	0	f	f	t	t	f	f	f	f	f	7.19000000000000039	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000781	91-03E7302-001	TRANSFORMATEUR 77291	1.30000000000000004	1.30000000000000004	0.299999999999999989	2.5	0.599999999999999978	49	1621	23411	65228	0	f	f	t	f	f	f	f	f	f	9.33999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000782	SET6394-0101	TRANSFORMATEUR 77291	2.70000000000000018	2.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	47	250	10041	74578	0	f	f	t	t	t	f	f	f	f	8.66000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000783	B325-0174	TRANSFORMATEUR 77291	35	9.09999999999999964	0.299999999999999989	18	3	984	3193	9544	97010	0	f	f	t	f	f	f	f	f	f	11.2599999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000784	91-03E7301-006	TRANSFORMATEUR 77291	55	3	0.299999999999999989	0.900000000000000022	0.5	273	1687	13023	84338	0	f	f	t	t	t	f	f	f	f	9.69999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000785	91-03E7301-005	TRANSFORMATEUR 77291	44	3.20000000000000018	0.299999999999999989	0.900000000000000022	1.89999999999999991	280	1790	11404	76937	0	f	f	t	t	f	f	f	f	f	9.13000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000786	91-03E7300-004	TRANSFORMATEUR 77291	27	2.89999999999999991	0.299999999999999989	0.900000000000000022	0.800000000000000044	257	1612	11779	84858	0	f	f	t	t	f	f	f	f	f	9.91999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000787	91-03E7299-004	TRANSFORMATEUR 77291	6.40000000000000036	2.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	233	1134	8773	83459	0	f	f	t	t	t	f	f	f	f	9.42999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000788	91-03E7301-002	TRANSFORMATEUR 77291	16	4.70000000000000018	0.299999999999999989	0.900000000000000022	0.5	449	2957	16962	70556	0	f	f	t	t	t	f	f	f	f	9.30000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000789	91-03E7301-001	TRANSFORMATEUR 77291	14	3.70000000000000018	0.299999999999999989	0.900000000000000022	0.5	334	2544	12239	73484	0	f	f	t	f	t	f	f	f	f	8.99000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000790	91-03E7255-001	TRANSFORMATEUR 77291	62	4.5	0.299999999999999989	0.900000000000000022	0.5	299	1321	11409	84294	0	f	f	t	t	f	f	f	f	f	9.80000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000791	91-03E7301-004	TRANSFORMATEUR 77291	19	1.69999999999999996	0.299999999999999989	0.900000000000000022	0.5	136	725	19355	71595	0	f	f	t	t	t	f	f	f	f	9.39000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000792	A325-0251	TRANSFORMATEUR 77291	66	1.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	200	312	19081	85635	0	f	f	t	t	t	f	f	f	f	10.8100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000793	91-03E7298-001	TRANSFORMATEUR 77291	20	3.89999999999999991	0.299999999999999989	0.900000000000000022	0.699999999999999956	302	1939	1911	84011	0	f	f	t	t	f	f	f	f	f	8.98000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000794	61-0169835	TRANSFORMATEUR 77291	11	2.79999999999999982	0.299999999999999989	57	0.5	560	2544	11842	67145	0	f	f	t	f	t	f	f	f	f	8.55000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000795	61-01-69834	TRANSFORMATEUR 77291	9	2.60000000000000009	0.299999999999999989	54	0.5	474	2312	17303	76986	0	f	f	t	f	t	f	f	f	f	10.0299999999999994	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000796	7853083	TRANSFORMATEUR 77291	10	21	0.200000000000000011	1.60000000000000009	5	644	4115	2432	40353	0	f	f	t	f	f	f	f	f	f	4.88999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000797	7853084	TRANSFORMATEUR 77291	12	19	0.100000000000000006	1.89999999999999991	4.5	669	3848	1618	31927	0	f	f	t	f	f	f	f	f	f	3.89999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000798	7853085	TRANSFORMATEUR 77291	18	21	0.100000000000000006	2.10000000000000009	4.5	644	3659	1714	28991	0	f	f	t	f	f	f	f	f	f	3.60999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000799	7853086	TRANSFORMATEUR 77291	15	29	0.100000000000000006	2.70000000000000018	6.40000000000000036	521	3405	1312	30671	0	f	f	t	f	f	f	f	f	f	3.68000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000800	7853088	TRANSFORMATEUR 77291	9.19999999999999929	31	0.200000000000000011	5.20000000000000018	6	724	3765	2499	64764	0	f	f	t	f	f	f	f	f	f	7.36000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000801	7853087	TRANSFORMATEUR 77291	11	20	0.100000000000000006	1.60000000000000009	4.09999999999999964	691	4152	1417	35800	0	f	f	t	f	f	f	f	f	f	4.38999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000802	51016109	TRANSFORMATEUR 77291	5.09999999999999964	53	0.200000000000000011	28	17	612	4877	658	66796	0	f	f	t	f	f	f	f	f	f	7.61000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000803	51016108	TRANSFORMATEUR 77291	4.90000000000000036	31	0.100000000000000006	9.90000000000000036	10	281	3325	1376	34853	0	f	f	t	f	f	f	f	f	f	4.13999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000804	51016110	TRANSFORMATEUR 77291	5.5	19	0.200000000000000011	7	4.90000000000000036	448	4708	2693	40620	0	f	f	t	f	f	f	f	f	f	5.03000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000805	51016111	TRANSFORMATEUR 77291	4.29999999999999982	245	0.200000000000000011	248	107	376	3905	2239	39700	0	f	f	t	f	f	f	f	f	f	4.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000806	51016113	TRANSFORMATEUR 77291	5.59999999999999964	32	0.299999999999999989	21	8	763	8138	1966	86370	0	f	f	t	f	f	f	f	f	f	10.0600000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000807	51016112	TRANSFORMATEUR 77291	5.20000000000000018	19	0.200000000000000011	3.60000000000000009	6.29999999999999982	444	3781	2173	52634	0	f	f	t	f	f	f	f	f	f	6.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000808	1132787	TRANSFORMATEUR 77291	6.79999999999999982	2.79999999999999982	0.299999999999999989	11	1.39999999999999991	275	3292	25696	64995	0	f	f	t	f	f	f	f	f	f	9.66000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000809	91-03E7298-003	TRANSFORMATEUR 77291	4	2.79999999999999982	0.299999999999999989	1.69999999999999996	0.699999999999999956	188	3132	28119	68868	0	f	f	t	f	f	f	f	f	f	10.2899999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000810	61-01-69834	TRANSFORMATEUR 77291	8.09999999999999964	2.20000000000000018	0.299999999999999989	51	0.5	379	2146	26645	70338	0	f	f	t	f	t	f	f	f	f	10.1400000000000006	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000811	7853086	TRANSFORMATEUR 77291	16	27	0.100000000000000006	2.60000000000000009	5.90000000000000036	491	3560	2018	34661	0	f	f	t	f	f	f	f	f	f	4.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000812	51016111	TRANSFORMATEUR 77291	5.20000000000000018	250	0.200000000000000011	253	109	407	4593	7339	64369	0	f	f	t	f	f	f	f	f	f	7.88999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000813	51016112	TRANSFORMATEUR 77291	5.09999999999999964	20	0.200000000000000011	3.79999999999999982	5	479	4343	4140	67635	0	f	f	t	f	f	f	f	f	f	7.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000814	51016112	TRANSFORMATEUR 77291	3.89999999999999991	17	0.200000000000000011	4.79999999999999982	6	375	3979	234	49068	0	f	f	t	f	f	f	f	f	f	5.45000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000815	51016112	TRANSFORMATEUR 77291	5.09999999999999964	19	0.200000000000000011	5.59999999999999964	5.90000000000000036	428	4023	2018	59841	0	f	f	t	f	f	f	f	f	f	6.63999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000816	61-0169835	TRANSFORMATEUR 77291	3.29999999999999982	1.69999999999999996	0.200000000000000011	49	0.400000000000000022	333	1705	14821	59026	0	f	f	t	f	t	f	f	f	f	7.87000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000817	61-01-69834	TRANSFORMATEUR 77291	4.40000000000000036	2.10000000000000009	0.299999999999999989	57	0.5	352	2160	16044	64974	0	f	f	t	f	t	f	f	f	f	8.65000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000818	03G122761	TRANSFORMATEUR 77291	1.89999999999999991	0.900000000000000022	0.200000000000000011	0.800000000000000044	0.400000000000000022	18	563	22031	52692	0	f	f	t	t	t	f	f	f	f	7.71999999999999975	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000819	03G122762	TRANSFORMATEUR 77291	0.699999999999999956	0.800000000000000044	0.200000000000000011	0.699999999999999956	0.400000000000000022	6.90000000000000036	479	17477	51649	0	t	f	t	t	t	f	f	f	f	7.13999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000820	03G122765	TRANSFORMATEUR 77291	2.20000000000000018	1.69999999999999996	0.200000000000000011	2.20000000000000018	0.5	20	680	20644	50424	0	f	f	t	f	f	f	f	f	f	7.34999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000821	61-0169835	TRANSFORMATEUR 77291	7.09999999999999964	2	0.200000000000000011	46	0.400000000000000022	390	1680	3822	53834	0	f	f	t	f	f	f	f	f	f	6.33000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000822	51016112	TRANSFORMATEUR 77291	4.59999999999999964	18	0.100000000000000006	2.60000000000000009	6.20000000000000018	447	3145	379	36548	0	f	f	t	f	f	f	f	f	f	4.23000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000823	61-01-69834	TRANSFORMATEUR 77291	5.29999999999999982	2	0.200000000000000011	53	0.400000000000000022	350	1635	5078	54568	0	f	f	t	f	f	f	f	f	f	6.42999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000824	51016112	TRANSFORMATEUR 77291	5.40000000000000036	19	0.200000000000000011	3.20000000000000018	6.09999999999999964	438	3117	427	43054	0	f	f	t	f	f	f	f	f	f	4.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000825	61-01-69834	TRANSFORMATEUR 77291	4.90000000000000036	2.29999999999999982	0.200000000000000011	62	0.400000000000000022	355	2073	11116	60339	0	f	f	t	f	t	f	f	f	f	7.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000826	51016109	TRANSFORMATEUR 77291	4.59999999999999964	51	0.200000000000000011	27	16	694	5034	1862	71981	0	f	f	t	f	f	f	f	f	f	8.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000827	7853087	TRANSFORMATEUR 77291	9.69999999999999929	18	0.100000000000000006	1.30000000000000004	3.79999999999999982	781	4300	529	30267	0	f	f	t	f	f	f	f	f	f	3.64999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000828	7853088	TRANSFORMATEUR 77291	11	30	0.200000000000000011	3	5.59999999999999964	835	4081	516	53909	0	f	f	t	f	f	f	f	f	f	6.08999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000829	7853086	TRANSFORMATEUR 77291	17	26	0.0899999999999999967	2.20000000000000018	5.40000000000000036	542	3262	420	22217	0	f	f	t	f	f	f	f	f	f	2.70999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000830	7853083	TRANSFORMATEUR 77291	8.90000000000000036	20	0.100000000000000006	1.30000000000000004	4.79999999999999982	711	4166	484	29784	0	f	f	t	f	f	f	f	f	f	3.64000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000831	7853085	TRANSFORMATEUR 77291	13	20	0.0899999999999999967	1.80000000000000004	4.70000000000000018	707	3754	1431	26765	0	f	f	t	f	f	f	f	f	f	3.31000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000832	7853084	TRANSFORMATEUR 77291	8.80000000000000071	17	0.0899999999999999967	1.39999999999999991	3.89999999999999991	710	3789	792	26017	0	f	f	t	f	f	f	f	f	f	3.18999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000833	SET6394-0101	TRANSFORMATEUR 77291	1.89999999999999991	2.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	44	243	10105	76980	0	f	f	t	t	t	f	f	f	f	8.86999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000834	A325-0251	TRANSFORMATEUR 77291	41	1.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	188	283	20656	81647	0	f	f	t	t	t	f	f	f	f	10.6199999999999992	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000835	91-03E7301-004	TRANSFORMATEUR 77291	19	1.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	129	682	17208	67395	0	f	f	t	t	t	f	f	f	f	8.92999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000836	XC030-001	TX PC # 173-B	2	3.5	0.200000000000000011	0.599999999999999978	1.60000000000000009	90	368	1221	52367	0	f	f	t	t	f	f	f	f	f	5.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000837	51016111	TRANSFORMATEUR 77291	4.5	252	0.100000000000000006	256	109	425	4115	1375	35242	0	f	f	t	f	f	f	f	f	f	4.36000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000838	51016110	TRANSFORMATEUR 77291	6.20000000000000018	17	0.100000000000000006	6.40000000000000036	4.5	488	4858	1872	34209	0	f	f	t	f	f	f	f	f	f	4.28000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000839	91-03E7298-001	TRANSFORMATEUR 77291	23	3.29999999999999982	0.200000000000000011	0.800000000000000044	0.400000000000000022	296	1852	1688	77630	0	f	f	t	t	t	f	f	f	f	8.36999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000840	1132787	TRANSFORMATEUR 77291	8.19999999999999929	2.39999999999999991	0.299999999999999989	8	1.39999999999999991	236	3264	26488	67118	0	f	f	t	f	f	f	f	f	f	10.0800000000000001	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000841	51016112	TRANSFORMATEUR 77291	4.70000000000000018	18	0.200000000000000011	2.60000000000000009	5.79999999999999982	446	3777	1749	37985	0	f	f	t	f	f	f	f	f	f	4.55999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000842	91-03E7302-001	TRANSFORMATEUR 77291	8.40000000000000036	5.09999999999999964	0.299999999999999989	3	3	421	2899	10178	71397	0	f	f	t	f	f	f	f	f	f	8.72000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000843	51016113	TRANSFORMATEUR 77291	6.59999999999999964	29	0.299999999999999989	21	7.09999999999999964	899	8399	1272	83118	0	f	f	t	f	f	f	f	f	f	9.69999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000844	91-03E7255-001	TRANSFORMATEUR 77291	67	4.09999999999999964	0.299999999999999989	0.900000000000000022	0.5	286	1212	8424	75995	0	f	f	t	t	f	f	f	f	f	8.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000845	61-01-69834	TRANSFORMATEUR 77291	3.89999999999999991	2.20000000000000018	0.200000000000000011	63	0.400000000000000022	313	2088	14018	58648	0	f	f	t	f	t	f	f	f	f	7.78000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000846	61-0169835	TRANSFORMATEUR 77291	4.70000000000000018	1.69999999999999996	0.299999999999999989	50	0.5	320	1982	15486	65391	0	f	f	t	f	t	f	f	f	f	8.65000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000847	51016108	TRANSFORMATEUR 77291	6.59999999999999964	29	0.0899999999999999967	8.69999999999999929	10	302	3232	934	28198	0	f	f	t	f	f	f	f	f	f	3.43999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000848	W0582-001	TRANSFORMATEUR 77291	5.40000000000000036	10	0.200000000000000011	4.20000000000000018	2.89999999999999991	580	1981	1248	52103	0	f	f	t	f	f	f	f	f	f	5.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000849	4046506001	TRANSFORMATEUR 77291	23	42	0.400000000000000022	2.10000000000000009	2.5	1875	6980	25021	122209	0	f	f	f	f	f	f	f	f	f	15.7899999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000850	B325-0174	TRANSFORMATEUR 77291	36	8.80000000000000071	0.299999999999999989	16	2.29999999999999982	1048	3181	12017	88685	0	f	f	t	f	f	f	f	f	f	11	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000851	91-03E7301-001	TRANSFORMATEUR 77291	11	3.5	0.299999999999999989	0.900000000000000022	0.5	324	2414	12598	75947	0	f	f	t	t	t	f	f	f	f	9.48000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000852	A325-0174	TRANSFORMATEUR 77291	21	9.19999999999999929	0.299999999999999989	18	2	1051	3089	7563	77426	0	f	f	t	f	f	f	f	f	f	9.34999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000853	91-03E7301-002	TRANSFORMATEUR 77291	16	4.40000000000000036	0.299999999999999989	0.900000000000000022	0.5	440	2879	16217	69442	0	f	f	t	t	t	f	f	f	f	9.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000854	91-03E7299-002	TRANSFORMATEUR 77291	4.90000000000000036	3.10000000000000009	0.299999999999999989	0.900000000000000022	0.5	275	1413	16099	73805	0	f	f	t	t	t	f	f	f	f	9.53999999999999915	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000855	91-03E7299-004	TRANSFORMATEUR 77291	5	2.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	231	1080	5806	77302	0	f	f	t	t	t	f	f	f	f	8.86999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000856	91-03E7299-005	TRANSFORMATEUR 77291	5.59999999999999964	3.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	315	2024	7734	77217	0	f	f	t	t	t	f	f	f	f	9.09999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000857	91-03E7300-004	TRANSFORMATEUR 77291	25	2.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	251	1422	7882	75065	0	f	f	t	t	t	f	f	f	f	8.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000858	91-03E7300-003	TRANSFORMATEUR 77291	19	4.5	0.299999999999999989	3.5	1	423	2193	17345	71369	0	f	f	t	f	f	f	f	f	f	9.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000859	91-03E7301-005	TRANSFORMATEUR 77291	48	3.10000000000000009	0.299999999999999989	0.900000000000000022	0.599999999999999978	287	1748	10668	75872	0	f	f	t	t	f	f	f	f	f	9.14000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000860	91-03E7300-005	TRANSFORMATEUR 77291	34	4.90000000000000036	0.299999999999999989	1.19999999999999996	0.699999999999999956	411	2022	11586	74411	0	f	f	t	f	f	f	f	f	f	9.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000861	91-03E7301-006	TRANSFORMATEUR 77291	59	2.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	273	1615	8494	73265	0	f	f	t	t	t	f	f	f	f	8.72000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000862	91-03E7298-003	TRANSFORMATEUR 77291	3.60000000000000009	2.60000000000000009	0.299999999999999989	1.39999999999999991	0.699999999999999956	184	2911	22019	64622	0	f	f	t	f	f	f	f	f	f	9.4399999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000863	91-03E7302-005	TRANSFORMATEUR 77291	11	5.70000000000000018	0.299999999999999989	1.80000000000000004	0.800000000000000044	506	3190	4144	77169	0	f	f	t	f	f	f	f	f	f	8.83999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000864	91-03E7344-002	TRANSFORMATEUR 77291	7.29999999999999982	1.19999999999999996	0.299999999999999989	0.900000000000000022	0.5	89	1077	25520	72289	0	f	f	t	t	t	f	f	f	f	10.3800000000000008	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000865	91-03E7301-003	TRANSFORMATEUR 77291	22	3	0.299999999999999989	0.900000000000000022	0.5	302	2027	13126	78764	0	f	f	t	t	t	f	f	f	f	9.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000866	91-03E7344-001	TRANSFORMATEUR 77291	27	17	0.299999999999999989	51	8.40000000000000036	418	3381	10164	74984	0	f	f	t	f	f	f	f	f	f	9.30000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000867	91-03E7300-002	TRANSFORMATEUR 77291	0.900000000000000022	0.5	0.299999999999999989	0.900000000000000022	0.5	17	654	25787	61897	0	t	f	t	t	t	f	f	f	f	9.30000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000868	91-03E7303-002	TRANSFORMATEUR 77291	6.59999999999999964	4.29999999999999982	0.299999999999999989	1	0.5	483	1351	15892	70132	0	f	f	t	f	t	f	f	f	f	9.30000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000869	91-03E7303-001	TRANSFORMATEUR 77291	6.5	3.10000000000000009	0.299999999999999989	0.900000000000000022	0.599999999999999978	304	2468	12969	67646	0	f	f	t	t	f	f	f	f	f	8.73000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000870	91-03E7300-001	TRANSFORMATEUR 77291	8.30000000000000071	3.70000000000000018	0.299999999999999989	0.900000000000000022	0.699999999999999956	288	2685	19663	68432	0	f	f	t	t	f	f	f	f	f	9.57000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000871	91-03E7302-004	TRANSFORMATEUR 77291	8.09999999999999964	5	0.299999999999999989	1	0.599999999999999978	458	2517	7173	77597	0	f	f	t	f	f	f	f	f	f	9.17999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000872	91-03E7302-002	TRANSFORMATEUR 77291	21	2.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	253	1276	5945	74402	0	f	f	t	t	t	f	f	f	f	8.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000873	91-03E7302-003	TRANSFORMATEUR 77291	4.40000000000000036	3.5	0.299999999999999989	0.900000000000000022	0.5	335	1520	10426	71628	0	f	f	t	t	t	f	f	f	f	8.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000874	91-03E7300-006	TRANSFORMATEUR 77291	15	4.5	0.299999999999999989	1.10000000000000009	0.5	539	3002	12584	74088	0	f	f	t	f	t	f	f	f	f	9.44999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000875	B325-0175	TRANSFORMATEUR 77291	20	12	0.299999999999999989	41	3.5	1094	8144	7610	85665	0	f	f	t	f	f	f	f	f	f	10.7300000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000876	91-03E7298-002	TRANSFORMATEUR 77291	29	5.29999999999999982	0.299999999999999989	1.10000000000000009	0.5	499	3388	19650	82418	0	f	f	t	f	t	f	f	f	f	11.1099999999999994	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000877	A325-0175	TRANSFORMATEUR 77291	51	13	0.299999999999999989	23	3	1475	5725	1212	90027	0	f	f	t	f	f	f	f	f	f	10.0899999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000878	91-03E7299-001	TRANSFORMATEUR 77291	7.29999999999999982	3.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	420	2336	20247	72865	0	f	f	t	t	t	f	f	f	f	9.69999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000879	91-03E7299-003	TRANSFORMATEUR 77291	7.09999999999999964	4.59999999999999964	0.299999999999999989	0.900000000000000022	0.5	450	2946	12700	75037	0	f	f	t	t	t	f	f	f	f	9.3100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000880	61-0169835	TRANSFORMATEUR 77291	1.60000000000000009	1.39999999999999991	0.200000000000000011	45	0.400000000000000022	224	1479	17158	54872	0	f	f	t	f	t	f	f	f	f	8.07000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000881	61-01-69834	TRANSFORMATEUR 77291	5.5	2.39999999999999991	0.299999999999999989	68	0.599999999999999978	350	2404	17135	61527	0	f	f	t	f	f	f	f	f	f	8.38000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000882	7853087	TRANSFORMATEUR 77291	10	20	0.100000000000000006	1.30000000000000004	4.40000000000000036	830	4990	296	31028	0	f	f	t	f	f	f	f	f	f	3.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000883	7853088	TRANSFORMATEUR 77291	11	31	0.200000000000000011	3	6	857	4377	454	54309	0	f	f	t	f	f	f	f	f	f	6.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000884	7853086	TRANSFORMATEUR 77291	19	29	0.0899999999999999967	2.5	6.20000000000000018	598	3972	281	23231	0	f	f	t	f	f	f	f	f	f	2.83000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000885	7853085	TRANSFORMATEUR 77291	13	21	0.0899999999999999967	1.89999999999999991	4.20000000000000018	743	4355	284	24978	0	f	f	t	f	f	f	f	f	f	3.06000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000886	7853084	TRANSFORMATEUR 77291	9.09999999999999964	18	0.0899999999999999967	1.80000000000000004	4.20000000000000018	754	4472	272	27906	0	f	f	t	f	f	f	f	f	f	3.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000887	7853083	TRANSFORMATEUR 77291	8.69999999999999929	21	0.100000000000000006	1.30000000000000004	4.70000000000000018	755	4909	254	30676	0	f	f	t	f	f	f	f	f	f	3.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000888	1132787	TRANSFORMATEUR 77291	3.70000000000000018	2.39999999999999991	0.299999999999999989	6.59999999999999964	1.5	191	3146	26572	60861	0	f	f	t	f	f	f	f	f	f	9.26999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000889	51016112	TRANSFORMATEUR 77291	4.59999999999999964	18	0.100000000000000006	2.79999999999999982	6	461	4234	551	37417	0	f	f	t	f	f	f	f	f	f	4.33000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000890	51016113	TRANSFORMATEUR 77291	6.90000000000000036	30	0.299999999999999989	21	7.5	930	9479	309	79895	0	f	f	t	f	f	f	f	f	f	9.21000000000000085	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000891	51016111	TRANSFORMATEUR 77291	5.40000000000000036	267	0.100000000000000006	262	112	443	4774	263	32808	0	f	f	t	f	f	f	f	f	f	3.91999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000892	51016110	TRANSFORMATEUR 77291	6.90000000000000036	19	0.200000000000000011	7	5	519	5886	375	43937	0	f	f	t	f	f	f	f	f	f	5.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000893	51016108	TRANSFORMATEUR 77291	5.5	30	0.0899999999999999967	8.90000000000000036	10	322	3837	271	27174	0	f	f	t	f	f	f	f	f	f	3.18999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000894	51016109	TRANSFORMATEUR 77291	4.09999999999999964	53	0.200000000000000011	28	17	735	5497	264	65443	0	f	f	t	f	f	f	f	f	f	7.26999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000895	61-0169835	TRANSFORMATEUR 77291	3.20000000000000018	1.39999999999999991	0.200000000000000011	46	0.400000000000000022	245	1766	16192	58456	0	f	f	t	f	t	f	f	f	f	7.87999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000896	61-01-69834	TRANSFORMATEUR 77291	22	4.59999999999999964	0.299999999999999989	49	0.5	308	2718	186281	691891	0	f	f	t	f	t	f	f	f	f	88.4000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000897	A32S-0174	TRANSFORMATEUR 77291	20	9.19999999999999929	0.299999999999999989	16	1.80000000000000004	955	3232	6476	80406	0	f	f	t	f	f	f	f	f	f	9.40000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000898	91-03E7302-002	TRANSFORMATEUR 77291	22	2.89999999999999991	0.200000000000000011	0.800000000000000044	0.400000000000000022	229	1260	5567	76465	0	f	f	t	t	t	f	f	f	f	8.40000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000899	61-01-69834	TRANSFORMATEUR 77291	9.40000000000000036	2.39999999999999991	0.200000000000000011	61	0.400000000000000022	369	2417	15786	59662	0	f	f	t	f	t	f	f	f	f	7.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000900	91-03E7302-004	TRANSFORMATEUR 77291	7.79999999999999982	5	0.299999999999999989	0.900000000000000022	0.5	388	2425	7870	77177	0	f	f	t	t	f	f	f	f	f	8.8100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000901	91-03E7344-001	TRANSFORMATEUR 77291	27	16	0.299999999999999989	48	6.79999999999999982	393	3575	11116	78727	0	f	f	t	f	f	f	f	f	f	9.38000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000902	91-03E7344-002	TRANSFORMATEUR 77291	1.39999999999999991	0.900000000000000022	0.299999999999999989	0.900000000000000022	0.5	43	694	24745	67916	0	f	f	t	t	t	f	f	f	f	9.47000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000903	B32S-0174	TRANSFORMATEUR 77291	37	8.59999999999999964	0.299999999999999989	13	1.80000000000000004	954	3167	10284	89784	0	f	f	t	f	f	f	f	f	f	10.6600000000000001	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000904	7853083	TRANSFORMATEUR 77291	5.5	18	0.100000000000000006	1.10000000000000009	3.89999999999999991	647	4492	761	29638	0	f	f	t	f	f	f	f	f	f	3.60000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000905	51016110	TRANSFORMATEUR 77291	7.09999999999999964	16	0.100000000000000006	6.29999999999999982	4.20000000000000018	422	5257	261	29007	0	f	f	t	f	f	f	f	f	f	3.54000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000906	7853086	TRANSFORMATEUR 77291	15	25	0.0899999999999999967	2.29999999999999982	5.29999999999999982	526	3711	669	23741	0	f	f	t	f	f	f	f	f	f	2.91999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000907	51016111	TRANSFORMATEUR 77291	4.70000000000000018	246	0.0899999999999999967	250	101	367	4321	324	26961	0	f	f	t	f	f	f	f	f	f	3.31000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000908	51016108	TRANSFORMATEUR 77291	5.5	28	0.0899999999999999967	9.30000000000000071	9.59999999999999964	292	3730	232	27700	0	f	f	t	f	f	f	f	f	f	3.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000909	51016109	TRANSFORMATEUR 77291	4.79999999999999982	51	0.200000000000000011	29	16	693	5465	335	67298	0	f	f	t	f	f	f	f	f	f	7.46999999999999975	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000910	7853085	TRANSFORMATEUR 77291	15	20	0.0899999999999999967	1.69999999999999996	4.09999999999999964	698	4444	309	23230	0	f	f	t	f	f	f	f	f	f	2.87000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000911	7853084	TRANSFORMATEUR 77291	8.80000000000000071	18	0.0899999999999999967	1.5	4	728	4681	373	29215	0	f	f	t	f	f	f	f	f	f	3.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000912	91-03E7300-006	TRANSFORMATEUR 77291	14	4.40000000000000036	0.299999999999999989	1	0.5	479	2859	9691	72131	0	f	f	t	f	t	f	f	f	f	8.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000913	91-03E7303-001	TRANSFORMATEUR 77291	11	3.39999999999999991	0.299999999999999989	0.900000000000000022	0.5	310	2632	11852	71698	0	f	f	t	t	t	f	f	f	f	8.78999999999999915	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000914	91-03E7300-001	TRANSFORMATEUR 77291	7.29999999999999982	3.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	287	2728	17897	70763	0	f	f	t	t	t	f	f	f	f	9.27999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000915	91-03E7298-002	TRANSFORMATEUR 77291	28	5.09999999999999964	0.299999999999999989	1	0.5	475	3409	15577	79475	0	f	f	t	f	t	f	f	f	f	9.98000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000916	B32S-0175	TRANSFORMATEUR 77291	20	12	0.299999999999999989	36	3.29999999999999982	1059	8827	5964	86193	0	f	f	t	f	f	f	f	f	f	10.3399999999999999	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000917	91-03E7301-003	TRANSFORMATEUR 77291	22	2.89999999999999991	0.299999999999999989	0.900000000000000022	0.5	279	1911	10913	72776	0	f	f	t	t	t	f	f	f	f	8.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000918	91-03E7301-005	TRANSFORMATEUR 77291	50	3	0.299999999999999989	0.900000000000000022	0.5	272	1685	9829	73729	0	f	f	t	t	t	f	f	f	f	8.61999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000919	91-03E7255-001	TRANSFORMATEUR 77291	66	3.70000000000000018	0.299999999999999989	0.900000000000000022	0.5	254	1103	9206	74993	0	f	f	t	t	t	f	f	f	f	8.65000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000920	91-03E7301-006	TRANSFORMATEUR 77291	61	2.79999999999999982	0.299999999999999989	0.900000000000000022	0.5	250	1536	8815	73608	0	f	f	t	t	t	f	f	f	f	8.52999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000921	91-03E7302-005	TRANSFORMATEUR 77291	11	5.59999999999999964	0.299999999999999989	1.5	0.800000000000000044	445	3302	5025	76554	0	f	f	t	f	f	f	f	f	f	8.66000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000922	91-037299-003	TRANSFORMATEUR 77291	6.70000000000000018	4.70000000000000018	0.299999999999999989	0.900000000000000022	0.599999999999999978	420	2880	11366	73873	0	f	f	t	t	f	f	f	f	f	8.89000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000923	91-03E7298-001	TRANSFORMATEUR 77291	23	3.20000000000000018	0.200000000000000011	0.800000000000000044	0.400000000000000022	258	1775	3272	77590	0	f	f	t	t	t	f	f	f	f	8.35999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000924	91-03E7299-001	TRANSFORMATEUR 77291	6.5	4	0.299999999999999989	0.900000000000000022	0.5	404	2463	16774	68261	0	f	f	t	t	t	f	f	f	f	8.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000925	91-03E7302-001	TRANSFORMATEUR 77291	7.09999999999999964	4.79999999999999982	0.299999999999999989	2.29999999999999982	0.699999999999999956	372	2724	13276	70945	0	f	f	t	f	f	f	f	f	f	8.80000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000926	4046506001	TRANSFORMATEUR 77291	22	40	0.5	2.10000000000000009	2.5	1661	6718	24606	115074	0	f	f	f	f	f	f	f	f	f	15.0700000000000003	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000927	91-03E7300-003	TRANSFORMATEUR 77291	20	4.40000000000000036	0.299999999999999989	3.29999999999999982	0.900000000000000022	395	2165	13166	70861	0	f	f	t	f	f	f	f	f	f	8.92999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000928	A325-0175	TRANSFORMATEUR 77291	48	14	0.299999999999999989	21	3.29999999999999982	1306	6004	327	84277	0	f	f	t	f	f	f	f	f	f	9.41999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000929	XC030-001	TX PC # 173-B	1.5	4.20000000000000018	0.200000000000000011	0.5	2.10000000000000009	83	364	578	51027	0	f	f	t	t	f	f	f	f	f	5.28000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000930	91-03E7300-005	TRANSFORMATEUR 77291	34	4.59999999999999964	0.299999999999999989	1.10000000000000009	0.599999999999999978	365	1928	11250	71800	0	f	f	t	f	f	f	f	f	f	8.71000000000000085	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000931	A325-0251	TRANSFORMATEUR 77291	136	1.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	167	227	22696	77695	0	f	f	t	t	t	f	f	f	f	10.2400000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000932	SET6394-0101	TRANSFORMATEUR 77291	1.80000000000000004	2.39999999999999991	0.200000000000000011	0.800000000000000044	0.400000000000000022	43	234	10046	74508	0	f	f	t	t	t	f	f	f	f	8.47000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000933	91-03E7301-004	TRANSFORMATEUR 77291	20	1.60000000000000009	0.299999999999999989	0.900000000000000022	0.5	124	667	18413	65951	0	f	f	t	t	t	f	f	f	f	8.59999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000934	91-03E7302-003	TRANSFORMATEUR 77291	5.79999999999999982	3.5	0.200000000000000011	0.800000000000000044	0.400000000000000022	320	1494	7547	71117	0	f	f	t	t	t	f	f	f	f	8.13000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000935	W0582-001	TRANSFORMATEUR 77291	6.40000000000000036	14	0.200000000000000011	5.90000000000000036	5.70000000000000018	655	2447	391	61555	0	f	f	t	f	f	f	f	f	f	6.63999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000936	91-03E7298-003	TRANSFORMATEUR 77291	4	2.79999999999999982	0.299999999999999989	1.30000000000000004	0.599999999999999978	191	3104	21830	66467	0	f	f	t	f	f	f	f	f	f	9.33000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000937	91-03E7301-001	TRANSFORMATEUR 77291	11.5	3.5	0.299999999999999989	0.900000000000000022	0.5	321	2423	12791	77025	0	f	f	t	t	t	f	f	f	f	9.35999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000938	91-03E7299-002	TRANSFORMATEUR 77291	5	3.20000000000000018	0.299999999999999989	0.900000000000000022	0.5	278	1401	13883	77400	0	f	f	t	t	t	f	f	f	f	9.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000939	91-03E7303-002	TRANSFORMATEUR 77291	5.5	4.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	447	1311	13694	70002	0	f	f	t	f	t	f	f	f	f	8.71000000000000085	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000940	91-03E7301-002	TRANSFORMATEUR 77291	16	4.29999999999999982	0.299999999999999989	1	0.5	406	2856	15184	68241	0	f	f	t	f	t	f	f	f	f	8.8100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000941	61-0169835	TRANSFORMATEUR 77291	3.20000000000000018	1.60000000000000009	0.200000000000000011	47	0.400000000000000022	268	1792	17781	61190	0	f	f	t	f	t	f	f	f	f	8.30000000000000071	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000942	91-03E7300-004	TRANSFORMATEUR 77291	23	2.5	0.299999999999999989	0.900000000000000022	0.5	225	1388	8375	74021	0	f	f	t	t	t	f	f	f	f	8.63000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000943	91-03E7300-002	TRANSFORMATEUR 77291	0.900000000000000022	1.69999999999999996	0.299999999999999989	1.89999999999999991	0.699999999999999956	43	1405	24596	63741	0	t	f	t	f	f	f	f	f	f	9.16000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000944	91-03E7299-005	TRANSFORMATEUR 77291	4.90000000000000036	3.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	285	2014	7109	79100	0	f	f	t	t	t	f	f	f	f	9.01999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000945	91-03E7299-004	TRANSFORMATEUR 77291	5.5	2.5	0.299999999999999989	0.900000000000000022	0.5	198	1002	7467	74967	0	f	f	t	t	t	f	f	f	f	8.59999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000946	61-0169835	TRANSFORMATEUR 77291	8.09999999999999964	2.20000000000000018	0.200000000000000011	57	0.400000000000000022	368	2193	15200	63279	0	f	f	t	f	t	f	f	f	f	8.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000947	7853083	TRANSFORMATEUR 77291	6.29999999999999982	17	0.100000000000000006	1	3.70000000000000018	696	4556	563	28721	0	f	f	t	f	f	f	f	f	f	3.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000948	51016109	TRANSFORMATEUR 77291	4.29999999999999982	50	0.200000000000000011	29	15	719	5366	290	65514	0	f	f	t	f	f	f	f	f	f	7.37000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000949	7853086	TRANSFORMATEUR 77291	17	26	0.0899999999999999967	2.29999999999999982	5.29999999999999982	592	3955	237	22236	0	f	f	t	f	f	f	f	f	f	2.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000950	51016111	TRANSFORMATEUR 77291	4.5	217	0.0899999999999999967	214	84	343	3829	544	23484	0	f	f	t	f	f	f	f	f	f	2.93999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000951	51016113	TRANSFORMATEUR 77291	8.59999999999999964	28	0.299999999999999989	21	5.79999999999999982	997	9031	424	103311	0	f	f	t	f	f	f	f	f	f	11.5500000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000952	51016112	TRANSFORMATEUR 77291	6.70000000000000018	16	0.100000000000000006	2.60000000000000009	5.20000000000000018	424	3908	562	36855	0	f	f	t	f	f	f	f	f	f	4.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000953	7853085	TRANSFORMATEUR 77291	14	18	0.0899999999999999967	1.5	3.70000000000000018	707	4306	319	21710	0	f	f	t	f	f	f	f	f	f	2.74000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000954	7853087	TRANSFORMATEUR 77291	8.90000000000000036	18	0.200000000000000011	1.30000000000000004	3.70000000000000018	808	5172	614	33126	0	f	f	t	f	f	f	f	f	f	4.09999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000955	1132787	TRANSFORMATEUR 77291	8.40000000000000036	2.70000000000000018	0.299999999999999989	4.90000000000000036	1.30000000000000004	216	2986	25625	61209	0	f	f	t	f	f	f	f	f	f	9.35999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000956	7853084	TRANSFORMATEUR 77291	7.29999999999999982	16	0.0899999999999999967	1.19999999999999996	3.5	723	4321	502	23973	0	f	f	t	f	f	f	f	f	f	3.00999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000957	51016108	TRANSFORMATEUR 77291	5.40000000000000036	27	0.0899999999999999967	8.69999999999999929	8.80000000000000071	289	3532	481	26595	0	f	f	t	f	f	f	f	f	f	3.18999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000958	61-0169835	TRANSFORMATEUR 77291	3.70000000000000018	1.69999999999999996	0.200000000000000011	44	0.400000000000000022	266	1704	16611	60812	0	f	f	t	f	t	f	f	f	f	8.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000959	61-01-69834	TRANSFORMATEUR 77291	7.70000000000000018	2.20000000000000018	0.200000000000000011	59	0.400000000000000022	351	2312	16304	60912	0	f	f	t	f	f	f	f	f	f	8.33999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000960	7853088	TRANSFORMATEUR 77291	11	27	0.200000000000000011	2.29999999999999982	5.09999999999999964	870	4465	366	51108	0	f	f	t	f	f	f	f	f	f	5.87000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000961	51016110	TRANSFORMATEUR 77291	7.70000000000000018	15	0.0899999999999999967	5.79999999999999982	3.70000000000000018	421	4987	347	27621	0	f	f	t	f	f	f	f	f	f	3.43000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000962	51016109	TRANSFORMATEUR 77291	4.5	52	0.200000000000000011	31	16	778	5629	280	67220	0	f	f	t	f	f	f	f	f	f	7.44000000000000039	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000963	7853085	TRANSFORMATEUR 77291	12	19	0.0899999999999999967	1.60000000000000009	4.09999999999999964	718	4339	608	23248	0	f	f	t	f	f	f	f	f	f	2.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000964	51016110	TRANSFORMATEUR 77291	8.59999999999999964	17	0.100000000000000006	6.79999999999999982	5.09999999999999964	464	5504	201	28769	0	f	f	t	f	f	f	f	f	f	3.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000965	7853083	TRANSFORMATEUR 77291	6.79999999999999982	19	0.100000000000000006	1.30000000000000004	4.40000000000000036	780	4891	232	30221	0	f	f	t	f	f	f	f	f	f	3.64999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000966	51016111	TRANSFORMATEUR 77291	4.90000000000000036	260	0.0899999999999999967	272	110	408	4409	381	26372	0	f	f	t	f	f	f	f	f	f	3.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000967	51016113	TRANSFORMATEUR 77291	7.90000000000000036	27	0.299999999999999989	22	6.40000000000000036	950	9074	295	78163	0	f	f	t	f	f	f	f	f	f	8.89000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000968	51016112	TRANSFORMATEUR 77291	6.70000000000000018	17	0.100000000000000006	2.60000000000000009	6	461	4077	252	34630	0	f	f	t	f	f	f	f	f	f	3.99000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000969	51016108	TRANSFORMATEUR 77291	5.59999999999999964	29	0.0899999999999999967	9.59999999999999964	10	316	3752	244	27681	0	f	f	t	f	f	f	f	f	f	3.22999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000970	7853087	TRANSFORMATEUR 77291	8.40000000000000036	18	0.100000000000000006	1.30000000000000004	3.89999999999999991	833	5094	226	30880	0	f	f	t	f	f	f	f	f	f	3.70999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000971	7853084	TRANSFORMATEUR 77291	7.59999999999999964	17	0.0899999999999999967	1.30000000000000004	4	771	4003	317	25430	0	f	f	t	f	f	f	f	f	f	3.06000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000972	7853088	TRANSFORMATEUR 77291	9.40000000000000036	28	0.200000000000000011	2.39999999999999991	5.70000000000000018	918	4161	392	52095	0	f	f	t	f	f	f	f	f	f	5.75	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000973	61-01-69834	TRANSFORMATEUR 77291	6.09999999999999964	2	0.200000000000000011	58	0.400000000000000022	334	2308	16001	64074	0	f	f	t	f	t	f	f	f	f	8.38000000000000078	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000974	7853086	TRANSFORMATEUR 77291	17	26	0.0899999999999999967	2.29999999999999982	5.79999999999999982	614	3970	426	23286	0	f	f	t	f	f	f	f	f	f	2.87999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000975	61-0169835	TRANSFORMATEUR 77291	3.39999999999999991	1.80000000000000004	0.200000000000000011	46	0.400000000000000022	295	1767	15104	61423	0	f	f	t	f	t	f	f	f	f	7.94000000000000039	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000976	4046506001	TRANSFORMATEUR 77291	22	37	0.599999999999999978	2.29999999999999982	2.5	1555	5992	27099	114766	0	f	f	f	f	f	f	f	f	f	15.0700000000000003	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000977	W0582-001	TRANSFORMATEUR 77291	5.90000000000000036	7.70000000000000018	0.299999999999999989	4.5	1.89999999999999991	579	1699	3256	54125	0	f	f	t	f	f	f	f	f	f	6.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000978	7853087	TRANSFORMATEUR 77291	8.90000000000000036	17	0.200000000000000011	1.30000000000000004	3.70000000000000018	875	5195	777	32902	0	f	f	t	f	f	f	f	f	f	4.01999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000979	51016110	TRANSFORMATEUR 77291	7.59999999999999964	16	0.299999999999999989	6.40000000000000036	4.09999999999999964	431	4962	886	28718	0	f	f	t	f	f	f	f	f	f	3.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000980	7853083	TRANSFORMATEUR 77291	6.29999999999999982	17	0.0599999999999999978	1	3.39999999999999991	723	3846	723	29351	0	f	f	t	f	f	f	f	f	f	3.47999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000981	7853085	TRANSFORMATEUR 77291	12	16	0.299999999999999989	1.39999999999999991	3	684	3848	615	21588	0	f	f	t	f	f	f	f	f	f	2.68999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000982	51016111	TRANSFORMATEUR 77291	4.90000000000000036	235	0.0599999999999999978	244	98	384	3977	642	25510	0	f	f	t	f	f	f	f	f	f	3.10999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000983	51016112	TRANSFORMATEUR 77291	6.5	16	0.299999999999999989	2.39999999999999991	5.40000000000000036	432	3882	197	32880	0	f	f	t	f	f	f	f	f	f	3.81999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000984	51016109	TRANSFORMATEUR 77291	5.59999999999999964	50	0.299999999999999989	30	16	769	5254	238	66189	0	f	f	t	f	f	f	f	f	f	7.37000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000985	7853088	TRANSFORMATEUR 77291	9.5	26	0.299999999999999989	2.20000000000000018	4.90000000000000036	933	4527	4241	64584	0	f	f	t	f	f	f	f	f	f	7.49000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000986	51016113	TRANSFORMATEUR 77291	9.09999999999999964	27	0.299999999999999989	22	5.70000000000000018	101	9237	1430	86588	0	f	f	t	f	f	f	f	f	f	9.9399999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000987	1132787	TRANSFORMATEUR 77291	2.79999999999999982	1.60000000000000009	0.299999999999999989	4.40000000000000036	2	96	2152	29269	62688	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000988	7853084	TRANSFORMATEUR 77291	7.79999999999999982	16	0.299999999999999989	1.19999999999999996	3.5	751	4138	2270	29930	0	f	f	t	f	f	f	f	f	f	3.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000989	51016108	TRANSFORMATEUR 77291	5.70000000000000018	27	0.299999999999999989	9	9.19999999999999929	295	3345	3665	38374	0	f	f	t	f	f	f	f	f	f	4.59999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000990	7853086	TRANSFORMATEUR 77291	16	25	0.299999999999999989	2.20000000000000018	5.09999999999999964	623	0	320	22947	0	f	f	t	f	f	f	f	f	f	2.83000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000991	61-0169835	TRANSFORMATEUR 77291	2.79999999999999982	1.80000000000000004	0.299999999999999989	38	0.5	302	2086	20415	60663	0	f	f	t	f	t	f	f	f	f	8.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000992	91-03E7300-004	TRANSFORMATEUR 77291	27	2.39999999999999991	0.299999999999999989	0.900000000000000022	0.5	199	1242	11912	75889	0	f	f	t	t	t	f	f	f	f	9.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000993	7853086	TRANSFORMATEUR 77291	15	24	0.299999999999999989	2.39999999999999991	4.79999999999999982	596	3931	706	31445	0	f	f	t	f	f	f	f	f	f	3.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000994	7853083	TRANSFORMATEUR 77291	7.79999999999999982	17	0.0599999999999999978	1.10000000000000009	3.60000000000000009	743	4759	582	33860	0	f	f	t	f	f	f	f	f	f	4.13999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000995	7853087	TRANSFORMATEUR 77291	12	14	0.0599999999999999978	1.10000000000000009	2.70000000000000018	643	4176	1305	32185	0	f	f	t	f	f	f	f	f	f	3.9700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000996	7853088	TRANSFORMATEUR 77291	11	23	0.299999999999999989	2.39999999999999991	4.5	854	4274	392	51689	0	f	f	t	f	f	f	f	f	f	5.98000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000997	51016112	TRANSFORMATEUR 77291	5	15	0.0599999999999999978	2.20000000000000018	5.20000000000000018	343	3698	608	34646	0	f	f	t	f	f	f	f	f	f	4.05999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000998	51016109	TRANSFORMATEUR 77291	5	48	0.299999999999999989	29	15	716	5341	607	69836	0	f	f	t	f	f	f	f	f	f	7.87000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC000999	51016113	TRANSFORMATEUR 77291	8.30000000000000071	25	0.299999999999999989	22	5.59999999999999964	891	9000	591	82785	0	f	f	t	f	f	f	f	f	f	9.61999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001000	A32S0251	TRANSFORMATEUR 77291	753	1.80000000000000004	0.299999999999999989	0.900000000000000022	0.5	145	180	23485	76216	0	f	f	t	t	t	f	f	f	f	10.4399999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001002	XC030-001	TX PC # 173-B	1.69999999999999996	3.29999999999999982	0.299999999999999989	0.900000000000000022	0.5	84	387	466	57814	0	f	f	t	t	f	f	f	f	f	6.07000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001003	91-03E7301-004	TRANSFORMATEUR 77291	18	1.5	0.299999999999999989	0.900000000000000022	0.5	105	607	23205	65199	0	f	f	t	t	t	f	f	f	f	9.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001004	1132787	TRANSFORMATEUR 77291	3.39999999999999991	1.60000000000000009	0.299999999999999989	4.29999999999999982	1.30000000000000004	112	2677	28498	60793	0	f	f	t	f	f	f	f	f	f	9.46000000000000085	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001005	6394-0101	TRANSFORMATEUR 77291	2	2.20000000000000018	0.299999999999999989	0.900000000000000022	0.5	39	213	11179	71281	0	f	f	t	t	t	f	f	f	f	8.44999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001006	61-01-69834	TRANSFORMATEUR 77291	2.39999999999999991	1.5	0.299999999999999989	47	0.5	275	1982	19468	60804	0	f	f	t	f	t	f	f	f	f	8.57000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001007	51016111	TRANSFORMATEUR 77291	5.79999999999999982	229	0.0599999999999999978	240	96	340	4051	2917	38959	0	f	f	t	f	f	f	f	f	f	4.83999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001008	7853085	TRANSFORMATEUR 77291	11	17	0.299999999999999989	1.69999999999999996	3.29999999999999982	735	4312	1473	30974	0	f	f	t	f	f	f	f	f	f	3.81000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001009	51016108	TRANSFORMATEUR 77291	5.40000000000000036	25	0.299999999999999989	9.09999999999999964	8.90000000000000036	273	3531	458	27026	0	f	f	t	f	f	f	f	f	f	3.18999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000005	160087	REDRESSEUR 25                 	215	388	6	477	109	447	2760	8995	50482	0	f	f	f	f	f	f	f	f	f	6.66000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001010	7853084	TRANSFORMATEUR 77291	12	17	0.299999999999999989	1.39999999999999991	4.70000000000000018	773	4660	482	28619	0	f	f	t	f	f	f	f	f	f	3.5299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001011	51016112	TRANSFORMATEUR 77291	6.29999999999999982	13	0.0599999999999999978	2.20000000000000018	4.40000000000000036	319	3280	1020	39183	0	f	f	t	f	f	f	f	f	f	4.59999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001012	7853083	TRANSFORMATEUR 77291	9	18	0.0599999999999999978	1.19999999999999996	4.29999999999999982	791	4138	191	29898	0	f	f	t	f	f	f	f	f	f	3.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001013	7853088	TRANSFORMATEUR 77291	8.90000000000000036	24	0.299999999999999989	2	4.79999999999999982	869	4136	169	48355	0	f	f	t	f	f	f	f	f	f	5.42999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001014	51016111	TRANSFORMATEUR 77291	5.90000000000000036	252	0.0599999999999999978	266	104	386	3961	1875	30824	0	f	f	t	f	f	f	f	f	f	3.85000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001015	51016112	TRANSFORMATEUR 77291	5.59999999999999964	15	0.0599999999999999978	2.39999999999999991	9.69999999999999929	352	3369	295	29455	0	f	f	t	f	f	f	f	f	f	3.43999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001016	51016113	TRANSFORMATEUR 77291	8.90000000000000036	26	0.299999999999999989	22	5.70000000000000018	960	8655	235	82293	0	f	f	t	f	f	f	f	f	f	9.14000000000000057	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001017	51016108	TRANSFORMATEUR 77291	5.59999999999999964	25	0.0599999999999999978	8.59999999999999964	8.59999999999999964	259	3070	203	22313	0	f	f	t	f	f	f	f	f	f	2.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001018	7853087	TRANSFORMATEUR 77291	7.20000000000000018	16	0.0599999999999999978	1.39999999999999991	3.20000000000000018	807	4048	155	30339	0	f	f	t	f	f	f	f	f	f	3.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001019	51016110	TRANSFORMATEUR 77291	8.19999999999999929	15	0.00600000000000000012	6	6.29999999999999982	374	3095	606	23042	0	f	f	t	f	f	f	f	f	f	2.85000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001020	7853085	TRANSFORMATEUR 77291	14	18	0.299999999999999989	1.60000000000000009	4.29999999999999982	742	3038	334	22446	0	f	f	t	f	f	f	f	f	f	2.79000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001021	7853086	TRANSFORMATEUR 77291	17	23	0.0599999999999999978	2	5.09999999999999964	588	2939	245	21765	0	f	f	t	f	f	f	f	f	f	2.64999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001022	7853084	TRANSFORMATEUR 77291	9	16	0.00600000000000000012	1.19999999999999996	3.89999999999999991	772	3577	257	23519	0	f	f	t	f	f	f	f	f	f	2.85999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001023	51016109	TRANSFORMATEUR 77291	4.79999999999999982	47	0.299999999999999989	29	15	690	5027	932	65383	0	f	f	t	f	f	f	f	f	f	7.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001024	51016112	TRANSFORMATEUR 77291	5.40000000000000036	13	0.0599999999999999978	1.89999999999999991	4.20000000000000018	324	2327	547	25134	0	f	f	t	f	f	f	f	f	f	2.93999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001025	51016110	TRANSFORMATEUR 77291	7.40000000000000036	13	0.0599999999999999978	5.79999999999999982	3.5	326	2247	639	19874	0	f	f	t	f	f	f	f	f	f	2.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001026	7853085	TRANSFORMATEUR 77291	11	15	0.0599999999999999978	1.30000000000000004	3.20000000000000018	636	2224	435	19591	0	f	f	t	f	f	f	f	f	f	2.45999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001027	51016108	TRANSFORMATEUR 77291	5.29999999999999982	22	0.0599999999999999978	7.90000000000000036	7.90000000000000036	231	2144	487	20539	0	f	f	t	f	f	f	f	f	f	2.4700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001028	51016111	TRANSFORMATEUR 77291	5.79999999999999982	234	0.0599999999999999978	249	98	354	2641	533	25431	0	f	f	t	f	f	f	f	f	f	3.14000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001029	51016113	TRANSFORMATEUR 77291	12	25	0.299999999999999989	23	5.59999999999999964	938	7335	282	80996	0	f	f	t	f	f	f	f	f	f	9.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001030	7853088	TRANSFORMATEUR 77291	9.19999999999999929	23	0.299999999999999989	1.89999999999999991	4.5	888	4121	268	46169	0	f	f	t	f	f	f	f	f	f	5.20000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001031	7853084	TRANSFORMATEUR 77291	21	35	0.299999999999999989	2.70000000000000018	8.5	1757	6089	1182	56605	0	f	f	t	f	f	f	f	f	f	7.03000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001032	7853086	TRANSFORMATEUR 77291	15	20	0.0599999999999999978	1.69999999999999996	4	527	2254	600	19340	0	f	f	t	f	f	f	f	f	f	2.39999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001033	7853087	TRANSFORMATEUR 77291	8	17	0.299999999999999989	1.19999999999999996	3.60000000000000009	857	4858	6026	51219	0	f	f	t	f	f	f	f	f	f	6.36000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001034	7853083	TRANSFORMATEUR 77291	8.19999999999999929	17	0.0599999999999999978	1	3.89999999999999991	785	3321	530	29490	0	f	f	t	f	f	f	f	f	f	3.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001035	51016109	TRANSFORMATEUR 77291	5.79999999999999982	49	0.299999999999999989	31	16	744	5390	257	66092	0	f	f	t	f	f	f	f	f	f	7.30999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001036	7853084	TRANSFORMATEUR 77291	9.30000000000000071	14	0.0599999999999999978	1.19999999999999996	3.10000000000000009	780	4222	1619	26983	0	f	f	t	f	f	f	f	f	f	3.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001037	7853084	TRANSFORMATEUR 77291	9.5	13	0.0599999999999999978	0.900000000000000022	2.60000000000000009	676	3372	1500	23634	0	f	f	t	f	f	f	f	f	f	3.0299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001038	7853084	TRANSFORMATEUR 77291	17	33	0.299999999999999989	2.79999999999999982	7.40000000000000036	1729	7886	6066	72822	0	f	f	t	f	f	f	f	f	f	9.3100000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001039	7853083	TRANSFORMATEUR 77291	7.59999999999999964	16	0.0599999999999999978	1	3.39999999999999991	755	3349	1192	32425	0	f	f	t	f	f	f	f	f	f	4	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001040	7853086	TRANSFORMATEUR 77291	14	20	0.0599999999999999978	1.89999999999999991	4.09999999999999964	544	2724	950	21745	0	f	f	t	f	f	f	f	f	f	2.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001041	7853085	TRANSFORMATEUR 77291	16	20	0.0599999999999999978	1.89999999999999991	4	872	3266	1800	31084	0	f	f	t	f	f	f	f	f	f	3.14999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001042	51016109	TRANSFORMATEUR 77291	4.5	45	0.299999999999999989	29	15	715	4817	1538	69187	0	f	f	t	f	f	f	f	f	f	7.75	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001043	1132787	TRANSFORMATEUR 77291	5.09999999999999964	2.10000000000000009	0.299999999999999989	4.29999999999999982	1.89999999999999991	148	3002	27568	63946	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001044	51016108	TRANSFORMATEUR 77291	4.79999999999999982	23	0.0599999999999999978	8.5	8	247	2376	873	22253	0	f	f	t	f	f	f	f	f	f	2.72999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001045	51016111	TRANSFORMATEUR 77291	6.59999999999999964	247	0.299999999999999989	265	103	389	3708	795	28135	0	f	f	t	f	f	f	f	f	f	3.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001046	61-01-69834	TRANSFORMATEUR 77291	2.10000000000000009	1.5	0.299999999999999989	39	0.5	214	1716	24113	62466	0	f	f	t	f	t	f	f	f	f	9.16999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001047	61-0169835	TRANSFORMATEUR 77291	5.20000000000000018	2.10000000000000009	0.299999999999999989	26	0.5	327	1967	20584	64959	0	f	f	t	f	t	f	f	f	f	9.22000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001048	7853088	TRANSFORMATEUR 77291	8.19999999999999929	20	0.299999999999999989	1.80000000000000004	4	877	4023	3391	49996	0	f	f	t	f	f	f	f	f	f	6.04000000000000004	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001049	51016113	TRANSFORMATEUR 77291	11	23	0.299999999999999989	20	4.20000000000000018	999	8042	3227	92125	0	f	f	t	f	f	f	f	f	f	10.9499999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001050	7853088	TRANSFORMATEUR 77291	8.30000000000000071	20	0.299999999999999989	1.69999999999999996	3.70000000000000018	878	3845	3026	50506	0	f	f	t	f	f	f	f	f	f	6.03000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001051	7853087	TRANSFORMATEUR 77291	6	11	0.299999999999999989	0.900000000000000022	2.20000000000000018	603	3255	1738	25228	0	f	f	t	f	f	f	f	f	f	3.18000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001052	7853083	TRANSFORMATEUR 77291	8.80000000000000071	15	0.100000000000000006	0.900000000000000022	2.79999999999999982	716	4107	750	34216	0	f	f	t	f	f	f	f	f	f	4.05999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001053	7853084	TRANSFORMATEUR 77291	9.59999999999999964	15	0.100000000000000006	1.19999999999999996	3.29999999999999982	805	3777	732	24921	0	f	f	t	f	f	f	f	f	f	3.10000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001054	7853083	TRANSFORMATEUR 77291	16	26	0.299999999999999989	2.10000000000000009	5.09999999999999964	1291	6764	6354	101723	0	f	f	t	f	f	f	f	f	f	12.1099999999999994	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001055	7853084	TRANSFORMATEUR 77291	16	14	0.299999999999999989	1.39999999999999991	3	768	3518	3144	50620	0	f	f	t	f	f	f	f	f	f	6.01999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001056	7853085	TRANSFORMATEUR 77291	16	17	0.0599999999999999978	1.69999999999999996	3.20000000000000018	710	3654	720	31042	0	f	f	t	f	f	f	f	f	f	3.7799999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001057	7853086	TRANSFORMATEUR 77291	18	23	0.0599999999999999978	2.29999999999999982	4.5	630	3514	876	39994	0	f	f	t	f	f	f	f	f	f	4.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001058	7853088	TRANSFORMATEUR 77291	9.40000000000000036	20	0.299999999999999989	2	4.09999999999999964	929	4056	783	54832	0	f	f	t	f	f	f	f	f	f	6.30999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001059	7853087	TRANSFORMATEUR 77291	7.79999999999999982	15	0.299999999999999989	1.19999999999999996	3.10000000000000009	797	4265	850	31444	0	f	f	t	f	f	f	f	f	f	3.89000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001060	1132787	TRANSFORMATEUR 77291	3.89999999999999991	1.89999999999999991	0.299999999999999989	3.89999999999999991	1.69999999999999996	100	2810	23968	57423	0	f	f	t	f	f	f	f	f	f	8.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001061	51016109	TRANSFORMATEUR 77291	6.59999999999999964	47	0.299999999999999989	31	15	769	4784	2639	73720	0	f	f	t	f	f	f	f	f	f	8.44999999999999929	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001062	51016111	TRANSFORMATEUR 77291	7	247	0.299999999999999989	257	101	382	3601	2749	33430	0	f	f	t	f	f	f	f	f	f	4.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001063	51016113	TRANSFORMATEUR 77291	11	22	0.299999999999999989	22	4.90000000000000036	968	7747	3740	89166	0	f	f	t	f	f	f	f	f	f	10.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001064	51016110	TRANSFORMATEUR 77291	8.09999999999999964	13	0.299999999999999989	6	3.29999999999999982	326	4030	870	23815	0	f	f	t	f	f	f	f	f	f	2.99000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001065	51016111	TRANSFORMATEUR 77291	5.70000000000000018	246	0.299999999999999989	257	103	385	3656	949	28679	0	f	f	t	f	f	f	f	f	f	3.5299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001066	51016113	TRANSFORMATEUR 77291	11	22	0.299999999999999989	22	4.09999999999999964	962	7769	626	80486	0	f	f	t	f	f	f	f	f	f	9.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001067	51016112	TRANSFORMATEUR 77291	5.29999999999999982	12	0.299999999999999989	1.89999999999999991	4.5	315	2697	1185	27964	0	f	f	t	f	f	f	f	f	f	3.29999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001068	51016109	TRANSFORMATEUR 77291	5	45	0.299999999999999989	30	15	749	4701	1125	69223	0	f	f	t	f	f	f	f	f	f	7.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001069	51016108	TRANSFORMATEUR 77291	6.20000000000000018	24	0.299999999999999989	9.19999999999999929	8.09999999999999964	258	2877	1079	28096	0	f	f	t	f	f	f	f	f	f	3.31000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001070	7853085	TRANSFORMATEUR 77291	16	16	0.299999999999999989	1.5	3	764	3277	530	23853	0	f	f	t	f	f	f	f	f	f	2.97999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001071	61-0169835	TRANSFORMATEUR 77291	3.60000000000000009	2.29999999999999982	0.299999999999999989	2.60000000000000009	0.5	284	1984	15460	63407	0	f	f	t	f	t	f	f	f	f	8.27999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001072	7853088	TRANSFORMATEUR 77291	10	17	0.299999999999999989	1.80000000000000004	3.20000000000000018	966	3664	518	45162	0	f	f	t	f	f	f	f	f	f	5.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001073	7853086	TRANSFORMATEUR 77291	19	23	0.299999999999999989	3.60000000000000009	4.5	718	3724	1718	40519	0	f	f	t	f	f	f	f	f	f	4.80999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001074	7853087	TRANSFORMATEUR 77291	10	16	0.299999999999999989	1.30000000000000004	5	840	3389	398	33928	0	f	f	t	f	f	f	f	f	f	4.05999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001075	51016113	TRANSFORMATEUR 77291	14	22	0.299999999999999989	24	4.20000000000000018	1121	7635	453	85745	0	f	f	t	f	f	f	f	f	f	9.84999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001076	51016109	TRANSFORMATEUR 77291	5.5	46	0.299999999999999989	33	15	835	5028	307	67171	0	f	f	t	f	f	f	f	f	f	7.41999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001077	51016108	TRANSFORMATEUR 77291	6.09999999999999964	24	0.299999999999999989	9.59999999999999964	7.70000000000000018	282	2884	1350	37236	0	f	f	t	f	f	f	f	f	f	4.30999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001078	7853083	TRANSFORMATEUR 77291	11	14	0.299999999999999989	0.900000000000000022	2.89999999999999991	867	4024	510	30394	0	f	f	t	t	f	f	f	f	f	3.70000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001079	1132787	TRANSFORMATEUR 77291	7.20000000000000018	3.29999999999999982	0.299999999999999989	3.89999999999999991	2.29999999999999982	260	4380	30679	76859	0	f	f	t	f	f	f	f	f	f	11.2899999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001080	61-01-69834	TRANSFORMATEUR 77291	2.5	2	0.299999999999999989	25	0.5	290	2089	22595	64061	0	f	f	t	f	t	f	f	f	f	9.00999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001081	7853084	TRANSFORMATEUR 77291	5.90000000000000036	6.40000000000000036	0.299999999999999989	1.80000000000000004	1.5	393	2042	19411	84044	0	f	f	t	f	f	f	f	f	f	10.9299999999999997	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001082	51016111	TRANSFORMATEUR 77291	6.90000000000000036	252	0.299999999999999989	273	104	403	2430	539	25528	0	f	f	t	f	f	f	f	f	f	3.16000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001083	W0582-001	TRANSFORMATEUR 77291	6	6.20000000000000018	0.299999999999999989	3.20000000000000018	0.599999999999999978	436	1583	5699	50907	0	f	f	t	f	f	f	f	f	f	6.00999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001084	61-01-69834	TRANSFORMATEUR 77291	3.5	2.60000000000000009	0.299999999999999989	13	0.5	326	2296	21674	63542	0	f	f	t	f	f	f	f	f	f	8.98000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001085	1132787	TRANSFORMATEUR 77291	10	4.5	0.299999999999999989	3.79999999999999982	2.89999999999999991	402	4827	25877	65552	0	f	f	t	f	f	f	f	f	f	9.85999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001086	51016113	TRANSFORMATEUR 77291	15	21	0.299999999999999989	23	4.09999999999999964	1085	8033	360	84209	0	f	f	t	f	f	f	f	f	f	9.60999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001087	61-0169835	TRANSFORMATEUR 77291	5.5	2.89999999999999991	0.299999999999999989	1.10000000000000009	0.5	276	1993	23444	62684	0	f	f	t	f	t	f	f	f	f	9.02999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001088	51016108	TRANSFORMATEUR 77291	4.59999999999999964	23	0.299999999999999989	9.69999999999999929	7.70000000000000018	258	2722	801	38357	0	f	f	t	f	f	f	f	f	f	4.29999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001089	51016110	TRANSFORMATEUR 77291	8.59999999999999964	13	0.299999999999999989	5.90000000000000036	4.29999999999999982	298	3694	891	23203	0	f	f	t	f	f	f	f	f	f	2.85999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001090	7853086	TRANSFORMATEUR 77291	16	19	0.299999999999999989	1.80000000000000004	4.90000000000000036	604	3079	819	23823	0	f	f	t	f	f	f	f	f	f	2.89000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001091	7853085	TRANSFORMATEUR 77291	17	14	0.299999999999999989	1.39999999999999991	4	697	3365	896	23803	0	f	f	t	f	f	f	f	f	f	2.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001092	51016109	TRANSFORMATEUR 77291	5.70000000000000018	46	0.299999999999999989	34	15	868	4894	421	68906	0	f	f	t	f	f	f	f	f	f	7.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001093	61-0169835	TRANSFORMATEUR 77291	9.40000000000000036	3.10000000000000009	0.299999999999999989	1.10000000000000009	0.5	358	2234	20864	66688	0	f	f	t	f	t	f	f	f	f	9.22000000000000064	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001094	1132787	TRANSFORMATEUR 77291	9.40000000000000036	5.90000000000000036	0.299999999999999989	3.39999999999999991	2.39999999999999991	386	4494	24815	64537	0	f	f	t	f	f	f	f	f	f	9.58999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001095	7853087	TRANSFORMATEUR 77291	11	12	0.299999999999999989	1.10000000000000009	2.70000000000000018	758	3582	622	32200	0	f	f	t	f	f	f	f	f	f	3.83999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001096	7853088	TRANSFORMATEUR 77291	13	16	0.299999999999999989	1.5	3	899	3523	773	41031	0	f	f	t	f	f	f	f	f	f	4.71999999999999975	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001097	7853083	TRANSFORMATEUR 77291	11	12	0.299999999999999989	1.10000000000000009	2.79999999999999982	794	3611	958	29825	0	f	f	t	f	f	f	f	f	f	3.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001098	51016111	TRANSFORMATEUR 77291	7.59999999999999964	243	0.299999999999999989	269	103	355	2874	748	26780	0	f	f	t	f	f	f	f	f	f	3.27000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001099	7853084	TRANSFORMATEUR 77291	12	12	0.299999999999999989	1	2.79999999999999982	766	3445	808	25469	0	f	f	t	f	f	f	f	f	f	3.14999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001100	51016112	TRANSFORMATEUR 77291	6.20000000000000018	12	0.299999999999999989	1.89999999999999991	4.29999999999999982	302	2737	851	26839	0	f	f	t	f	f	f	f	f	f	3.14999999999999991	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001101	61-01-69834	TRANSFORMATEUR 77291	0.900000000000000022	2.70000000000000018	0.299999999999999989	10	0.5	367	2449	22477	65746	0	t	f	t	f	t	f	f	f	f	9.27999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001102	51016113	TRANSFORMATEUR 77291	17	27	0.299999999999999989	22	4	1131	8108	532	93619	0	f	f	t	f	f	f	f	f	f	10.5700000000000003	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001103	7853088	TRANSFORMATEUR 77291	15	16	0.299999999999999989	1.30000000000000004	2.89999999999999991	947	3454	5576	50611	0	f	f	t	f	f	f	f	f	f	6.12000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001104	51016111	TRANSFORMATEUR 77291	9.80000000000000071	277	0.299999999999999989	303	113	422	3432	557	25409	0	f	f	t	f	f	f	f	f	f	3.08999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001105	51016113	TRANSFORMATEUR 77291	18	12	0.299999999999999989	22	3.60000000000000009	1210	7810	523	93065	0	f	f	t	f	f	f	f	f	f	10.3000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001106	51016111	TRANSFORMATEUR 77291	9.40000000000000036	252	0.100000000000000006	252	96	361	3007	503	25183	0	f	f	t	f	f	f	f	f	f	3.02000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001107	7853088	TRANSFORMATEUR 77291	13	8.69999999999999929	0.100000000000000006	1.39999999999999991	3.29999999999999982	813	2923	715	33332	0	f	f	t	f	f	f	f	f	f	3.81999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001108	7853085	TRANSFORMATEUR 77291	12	7	0.100000000000000006	1	4.40000000000000036	625	2805	852	27265	0	f	f	f	f	f	f	f	f	f	3.20999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001109	7853087	TRANSFORMATEUR 77291	11	6.90000000000000036	0.200000000000000011	0.900000000000000022	4.70000000000000018	798	3703	543	29357	0	f	f	f	f	f	f	f	f	f	3.49000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001110	51016111	TRANSFORMATEUR 77291	11	284	0.299999999999999989	302	116	389	3216	4395	42405	0	f	f	t	f	f	f	f	f	f	5.20999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001111	61-0169835	TRANSFORMATEUR 77291	0.900000000000000022	1.30000000000000004	0.299999999999999989	0.900000000000000022	0.5	114	1078	27344	62253	0	f	f	t	t	t	f	f	f	f	9.35999999999999943	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001112	7853088	TRANSFORMATEUR 77291	12	8.09999999999999964	0.100000000000000006	1.19999999999999996	2.70000000000000018	833	3019	910	37566	0	f	f	t	f	f	f	f	f	f	4.28000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001113	61-01-69834	TRANSFORMATEUR 77291	9.80000000000000071	1.30000000000000004	0.299999999999999989	0.900000000000000022	0.5	305	1703	12096	64298	0	f	f	t	t	t	f	f	f	f	8.01999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001114	51016108	TRANSFORMATEUR 77291	8.30000000000000071	21	0.100000000000000006	9.59999999999999964	10	267	2579	451	25201	0	f	f	t	f	f	f	f	f	f	2.89000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001115	7853084	TRANSFORMATEUR 77291	11	6.40000000000000036	0.100000000000000006	0.900000000000000022	4.59999999999999964	770	3520	448	24382	0	f	f	t	f	f	f	f	f	f	2.93000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001116	51016110	TRANSFORMATEUR 77291	11	9.90000000000000036	0.100000000000000006	5.59999999999999964	5.79999999999999982	306	3724	426	24619	0	f	f	t	f	f	f	f	f	f	2.91999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001117	7853083	TRANSFORMATEUR 77291	9.59999999999999964	6.40000000000000036	0.100000000000000006	0.599999999999999978	3.89999999999999991	898	3825	433	28941	0	f	f	f	f	f	f	f	f	f	3.43999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001118	7853086	TRANSFORMATEUR 77291	23	11	0.100000000000000006	1.5	4.90000000000000036	652	2884	400	21814	0	f	f	t	f	f	f	f	f	f	2.60999999999999988	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001119	51016109	TRANSFORMATEUR 77291	7	36	0.299999999999999989	31	14	880	4692	425	70082	0	f	f	t	f	f	f	f	f	f	7.67999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001120	1132787	TRANSFORMATEUR 77291	11	1.39999999999999991	0.299999999999999989	1.60000000000000009	2.5	357	2187	22441	61828	0	f	f	t	f	f	f	f	f	f	8.99000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001121	51016112	TRANSFORMATEUR 77291	8.5	11	0.100000000000000006	1.60000000000000009	8.19999999999999929	311	2728	305	33308	0	f	f	t	f	f	f	f	f	f	3.70000000000000018	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001122	51016113	TRANSFORMATEUR 77291	17	10	0.299999999999999989	21	3.60000000000000009	1167	7829	531	91822	0	f	f	t	f	f	f	f	f	f	10.0999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001123	7853088	TRANSFORMATEUR 77291	17	9.40000000000000036	0.200000000000000011	1.30000000000000004	2.39999999999999991	870	2402	2161	42700	0	f	f	t	f	f	f	f	f	f	4.87999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001124	51016111	TRANSFORMATEUR 77291	14	230	0.299999999999999989	241	90	326	2557	1686	27375	0	f	f	t	f	f	f	f	f	f	3.31999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001125	7853088	TRANSFORMATEUR 77291	20	10	2	2	3	876	3000	1800	31900	0	f	f	t	t	f	f	f	f	f	3.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001126	51016111	TRANSFORMATEUR 77291	20	205	2	274	101	371	2870	4300	33000	0	f	f	t	f	f	f	f	f	f	4.11000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001127	7853088	TRANSFORMATEUR 77291	20	10	2	4	5	845	1240	12900	69800	0	f	f	t	f	f	f	f	f	f	8.48000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001128	51016111	TRANSFORMATEUR 77291	20	245	2	287	104	327	2630	15600	69300	0	f	f	t	f	f	f	f	f	f	8.86999999999999922	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001129	7853088	TRANSFORMATEUR 77291	15	15	2	4	4	769	1090	14000	73100	0	f	f	t	f	f	f	f	f	f	8.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001130	51016111	TRANSFORMATEUR 77291	20	240	2	276	101	308	2480	4960	32700	0	f	f	t	f	f	f	f	f	f	4.12999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001131	7853088	TRANSFORMATEUR 77291	15	15	2	2	2	795	1780	4090	35800	0	f	f	t	t	t	f	f	f	f	4.25	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001132	51016111	TRANSFORMATEUR 77291	20	195	2	218	80	256	2020	7580	39600	0	f	f	t	f	f	f	f	f	f	5.00999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001133	1132787	TRANSFORMATEUR 77291	10	5	2	2	2	57	260	18900	48900	0	f	t	t	t	t	f	f	f	f	6.79999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001134	1132787	TRANSFORMATEUR 77291	10	5	2	2	2	5	49	2520	5940	0	t	t	t	t	t	t	f	f	f	0.849999999999999978	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001135	7853085	TRANSFORMATEUR 77291	25	5	2	2	2	503	2170	1840	15600	0	f	t	t	t	t	f	f	f	f	2.02000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001136	7853086	TRANSFORMATEUR 77291	35	10	2	2	4	473	1860	1200	16000	0	f	f	t	t	f	f	f	f	f	1.94999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001137	7853087	TRANSFORMATEUR 77291	20	10	2	2	2	594	1020	6410	53700	0	f	f	t	t	t	f	f	f	f	6.17999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001138	7853088	TRANSFORMATEUR 77291	20	5	2	2	2	640	2090	2550	27100	0	f	f	t	t	t	f	f	f	f	3.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001139	51016110	TRANSFORMATEUR 77291	25	5	2	5	2	240	2860	12500	55900	0	f	f	t	f	f	f	f	f	f	7.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001140	51016111	TRANSFORMATEUR 77291	35	195	2	222	81	285	2180	2070	20300	0	f	f	t	f	f	f	f	f	f	2.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001141	51016113	TRANSFORMATEUR 77291	25	5	2	8	2	884	4900	5380	79400	0	f	t	t	f	t	f	f	f	f	9.0600000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001142	51016112	TRANSFORMATEUR 77291	25	5	2	2	3	225	2060	3970	31600	0	f	t	t	t	f	f	f	f	f	3.7799999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001143	7853083	TRANSFORMATEUR 77291	15	10	2	2	2	773	2990	3440	33300	0	f	f	t	t	t	f	f	f	f	4.04999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001144	7853084	TRANSFORMATEUR 77291	10	5	2	2	2	659	2820	13400	65700	0	f	f	t	t	t	f	f	f	f	8.25999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001145	61-01-69834	TRANSFORMATEUR 77291	10	5	2	2	2	111	809	29500	62400	0	t	t	t	t	t	f	f	f	f	9.27999999999999936	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001146	61-0169835	TRANSFORMATEUR 77291	10	5	2	2	2	146	928	27800	63400	0	f	t	t	t	t	f	f	f	f	9.23000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001147	51016109	TRANSFORMATEUR 77291	20	25	2	21	8	645	3280	2020	51600	0	f	f	t	f	f	f	f	f	f	5.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001148	51016108	TRANSFORMATEUR 77291	15	20	2	9	7	255	2290	4220	23000	0	f	f	t	f	f	f	f	f	f	2.97999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001149	51016111	TRANSFORMATEUR 77291	45	230	2	249	88	312	2070	3520	20800	0	f	f	t	f	f	f	f	f	f	2.75	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001150	7853085	TRANSFORMATEUR 77291	30	5	2	2	2	621	2160	4880	27900	0	f	t	t	t	t	f	f	f	f	3.56000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001151	7853084	TRANSFORMATEUR 77291	20	5	2	2	2	641	2320	3340	20800	0	f	t	t	t	t	f	f	f	f	2.70999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001152	7853086	TRANSFORMATEUR 77291	45	5	2	2	2	574	1820	3150	19100	0	f	f	t	t	f	f	f	f	f	2.4700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001153	7853087	TRANSFORMATEUR 77291	20	5	2	2	2	669	2260	4130	30800	0	f	t	t	t	t	f	f	f	f	3.7799999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001154	7853088	TRANSFORMATEUR 77291	30	5	2	2	2	774	2140	6170	39900	0	f	t	t	t	t	f	f	f	f	4.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001155	51016108	TRANSFORMATEUR 77291	25	10	2	11	6	287	1840	13000	63000	0	f	f	t	f	f	f	f	f	f	7.83000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001156	51016110	TRANSFORMATEUR 77291	35	5	2	6	2	265	2470	2890	14900	0	f	t	t	f	t	f	f	f	f	2.04999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001157	51016111	TRANSFORMATEUR 77291	60	210	2	241	88	301	1960	4200	23100	0	f	f	t	f	f	f	f	f	f	3.02000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001158	51016113	TRANSFORMATEUR 77291	25	5	2	2	2	631	3680	21500	10100	0	f	t	t	t	f	f	f	f	f	12.6400000000000006	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001159	51016112	TRANSFORMATEUR 77291	25	5	2	2	3	221	1650	3400	17000	0	f	t	t	t	f	f	f	f	f	2.22999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001160	7853083	TRANSFORMATEUR 77291	15	5	2	2	2	754	2660	7350	42600	0	f	t	t	t	f	f	f	f	f	5.33999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001161	61-01-69834	TRANSFORMATEUR 77291	10	5	2	2	2	151	799	29500	65100	0	t	t	t	t	t	f	f	f	f	9.5600000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001162	61-0169835	TRANSFORMATEUR 77291	10	5	2	2	2	93	525	30000	65300	0	t	t	t	t	t	f	f	f	f	9.58999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001163	51016109	TRANSFORMATEUR 77291	25	20	2	15	7	558	2820	8920	65400	0	f	f	t	f	f	f	f	f	f	7.76999999999999957	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001164	7853088	TRANSFORMATEUR 77291	25	5	2	2	2	503	377	4130	27300	0	f	t	t	t	t	f	f	f	f	3.22999999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001165	51016111	TRANSFORMATEUR 77291	45	100	2	115	42	196	1220	8370	35800	0	f	f	t	f	f	f	f	f	f	4.58999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001166	7853088	TRANSFORMATEUR 77291	30	5	2	2	2	747	1800	8940	55600	0	f	t	t	t	f	f	f	f	f	6.70999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001167	51016111	TRANSFORMATEUR 77291	50	155	2	191	71	283	1850	2670	18600	0	f	f	t	f	f	f	f	f	f	2.41000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001168	51016113	TRANSFORMATEUR 77291	25	5	2	2	2	350	2060	13600	74500	0	f	t	t	t	t	f	f	f	f	9.0600000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001169	7853088	TRANSFORMATEUR 77291	30	5	2	2	2	737	1890	2470	33000	0	f	t	t	t	t	f	f	f	f	3.81000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001170	51016111	TRANSFORMATEUR 77291	60	120	2	158	59	287	1780	2960	23800	0	f	f	t	f	f	f	f	f	f	2.93999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001171	51016111	TRANSFORMATEUR 77291	65	80	2	132	46	250	1570	2730	18200	0	f	f	t	f	f	f	f	f	f	2.31000000000000005	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001172	51016111	TRANSFORMATEUR 77291	55	110	2	125	45	285	1610	4910	33900	0	f	f	t	f	f	f	f	f	f	4.11000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001173	7853088	TRANSFORMATEUR 77291	30	5	2	2	2	678	1540	4040	36100	0	f	t	t	t	t	f	f	f	f	4.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001174	51016111	TRANSFORMATEUR 77291	60	50	2	127	45	263	1610	3410	19700	0	f	f	t	f	f	f	f	f	f	2.5299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001175	51016111	TRANSFORMATEUR 77291	60	50	2	127	45	263	1610	3410	19700	0	f	f	t	f	f	f	f	f	f	2.5299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001176	61-01-69834	TRANSFORMATEUR 77291	10	5	2	2	2	124	502	31000	63000	0	t	t	t	t	t	f	f	f	f	9.46000000000000085	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001177	61-0169835	TRANSFORMATEUR 77291	10	5	2	2	2	98	394	3100	61600	0	t	t	t	t	t	f	f	f	f	9.32000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001178	51016111	TRANSFORMATEUR 77291	50	95	2	102	39	238	1490	6290	18400	0	f	f	t	f	f	f	f	f	f	2.66999999999999993	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001179	51016113	TRANSFORMATEUR 77291	30	5	2	2	2	280	1730	4130	30200	0	f	t	t	t	f	f	f	f	f	3.64000000000000012	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001180	7853085	TRANSFORMATEUR 77291	35	5	2	2	2	554	1990	2650	19500	0	f	t	t	t	t	f	f	f	f	2.4700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001181	7853086	TRANSFORMATEUR 77291	45	5	2	2	2	531	1680	14200	65000	0	f	t	t	t	t	f	f	f	f	8.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001182	7853087	TRANSFORMATEUR 77291	20	5	2	2	2	593	2040	8320	53900	0	f	t	t	t	t	f	f	f	f	6.48000000000000043	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001183	51016109	TRANSFORMATEUR 77291	35	5	2	12	5	312	1840	1690	19300	0	f	t	t	f	f	f	f	f	f	2.31999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001184	51016108	TRANSFORMATEUR 77291	40	5	2	9	5	249	1540	4330	27600	0	f	t	t	f	f	f	f	f	f	3.37000000000000011	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001185	51016110	TRANSFORMATEUR 77291	55	5	2	4	2	228	2070	3360	19000	0	f	t	t	f	t	f	f	f	f	2.4700000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001186	51016112	TRANSFORMATEUR 77291	40	5	2	2	2	232	1460	8010	44100	0	f	t	t	t	f	f	f	f	f	5.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001187	7853083	TRANSFORMATEUR 77291	20	5	2	2	2	699	2300	2200	28300	0	f	t	t	t	t	f	f	f	f	3.35000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001188	7853084	TRANSFORMATEUR 77291	20	5	2	2	2	502	1680	3330	29600	0	f	t	t	t	t	f	f	f	f	3.52000000000000002	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001189	7853083	TRANSFORMATEUR 77291	20	5	2	2	2	558	1730	9660	43600	0	f	t	t	t	t	f	f	f	f	5.54999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001190	7853085	TRANSFORMATEUR 77291	20	5	2	2	2	425	1520	4610	23900	0	f	t	t	t	t	f	f	f	f	3.04999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001191	7853084	TRANSFORMATEUR 77291	15	5	2	2	2	404	1370	4610	19300	0	f	t	t	t	t	f	f	f	f	2.56999999999999984	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001192	7853086	TRANSFORMATEUR 77291	30	5	2	2	2	386	1230	5560	32200	0	f	t	t	t	t	f	f	f	f	3.93999999999999995	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001193	7853087	TRANSFORMATEUR 77291	10	5	2	2	2	402	1760	13300	47800	0	f	t	t	t	t	f	f	f	f	6.33000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001194	7853088	TRANSFORMATEUR 77291	20	5	2	2	2	474	1340	7840	37500	0	f	t	t	t	t	f	f	f	f	4.71999999999999975	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001195	61-01-69834	TRANSFORMATEUR 77291	10	5	2	2	2	121	375	29100	60600	0	t	t	t	t	t	f	f	f	f	9.00999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001196	61-0169835	TRANSFORMATEUR 77291	10	5	2	2	2	124	294	27600	58000	0	t	t	t	t	t	f	f	f	f	8.59999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001197	51016109	TRANSFORMATEUR 77291	50	5	2	13	5	289	1420	2080	16500	0	f	t	t	f	f	f	f	f	f	2.0299999999999998	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001198	51016108	TRANSFORMATEUR 77291	50	5	2	11	4	241	1170	8280	38000	0	f	t	t	f	f	f	f	f	f	4.78000000000000025	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001199	51016110	TRANSFORMATEUR 77291	65	5	2	5	2	184	1540	9370	39600	0	f	t	t	f	t	f	f	f	f	5.08000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001200	51016111	TRANSFORMATEUR 77291	60	40	2	58	20	274	1310	1670	15100	0	f	f	t	f	f	f	f	f	f	1.85000000000000009	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001201	51016113	TRANSFORMATEUR 77291	45	5	2	2	2	272	1380	3700	19700	0	f	t	t	t	t	f	f	f	f	2.50999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001202	51016112	TRANSFORMATEUR 77291	40	5	2	2	2	202	1160	5610	26000	0	f	t	t	f	t	f	f	f	f	3.29999999999999982	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001203	7853083	TRANSFORMATEUR 77291	10	5	2	2	2	273	979	13800	45500	0	f	t	t	t	t	f	f	f	f	6.05999999999999961	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001204	7853085	TRANSFORMATEUR 77291	10	5	2	2	2	169	879	14600	40700	0	f	t	t	t	t	f	f	f	f	5.63999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001205	7853084	TRANSFORMATEUR 77291	10	5	2	2	2	195	887	12300	38400	0	f	t	t	t	t	f	f	f	f	5.17999999999999972	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001206	7853086	TRANSFORMATEUR 77291	10	5	2	2	2	150	646	19300	64900	0	f	t	t	t	t	f	f	f	f	8.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001207	7853087	TRANSFORMATEUR 77291	10	5	2	2	2	195	950	18500	52700	0	f	t	t	t	t	f	f	f	f	7.24000000000000021	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001208	7853088	TRANSFORMATEUR 77291	10	5	2	2	2	176	610	16500	50300	0	f	t	t	t	t	f	f	f	f	6.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001209	61-01-69834	TRANSFORMATEUR 77291	10	5	2	2	2	69	195	23500	52500	0	t	t	t	t	t	f	f	f	f	7.62999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001210	61-0169835	TRANSFORMATEUR 77291	10	5	2	2	2	86	187	22000	52900	0	t	t	t	t	t	f	f	f	f	7.50999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001211	51016109	TRANSFORMATEUR 77291	60	5	2	2	2	170	718	6740	24100	0	f	t	t	f	t	f	f	f	f	3.18000000000000016	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001212	51016108	TRANSFORMATEUR 77291	40	5	2	10	2	120	663	13800	46400	0	f	f	t	f	f	f	f	f	f	6.09999999999999964	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001213	51016110	TRANSFORMATEUR 77291	45	5	2	4	2	102	889	13000	40900	0	f	t	t	f	t	f	f	f	f	5.5	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001214	51016111	TRANSFORMATEUR 77291	45	10	2	18	5	130	637	10500	35800	0	f	f	t	f	f	f	f	f	f	4.70999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001215	51016113	TRANSFORMATEUR 77291	40	5	2	2	2	161	906	17100	60300	0	f	t	t	t	t	f	f	f	f	7.86000000000000032	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
AluSepABC001216	51016112	TRANSFORMATEUR 77291	30	5	2	2	2	117	813	15500	47300	0	f	t	t	t	t	f	f	f	f	6.37999999999999989	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000001	51016109	REDRESSEUR #1	0	0	0	0	0	0	0	0	0	0	f	f	f	f	f	f	f	f	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000002	91-03E7300-006	TX AL12 # 031	0	0	0	0	0	0	0	0	0	0	f	f	f	f	f	f	f	f	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000003	A32S0251	SPARE 77227	0	0	0	0	0	0	0	0	0	0	f	f	f	f	f	f	f	f	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000014	160087	REDRESSEUR 25	14	6	0.299999999999999989	1.60000000000000009	0.800000000000000044	427	2613	5928	37928	0	f	f	f	f	f	f	f	f	f	4.75999999999999979	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000019	160087	REDRESSEUR 25	176	251	6.40000000000000036	333	62	466	2774	5652	37678	0	f	f	f	f	f	f	f	f	f	4.83999999999999986	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000021	160087	REDRESSEUR 25	179	253	6.79999999999999982	335	62	470	2801	5627	38316	0	f	f	f	f	f	f	f	f	f	4.88999999999999968	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000023	160087	REDRESSEUR 25	188	293	6.40000000000000036	379	74	439	2770	10168	53833	0	f	f	f	f	f	f	f	f	f	6.90000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000031	160087	REDRESSEUR 25	150	190	6.5	258	39	440	2610	8252	47115	0	f	f	f	f	f	f	f	f	f	6.07000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000033	160087	REDRESSEUR 25                 	218	397	6.09999999999999964	488	113	449	2762	7036	43070	0	f	f	f	f	f	f	f	f	f	5.65000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000025	160087	REDRESSEUR 25	204	311	6.70000000000000018	400	80	458	2819	8604	49564	0	f	f	f	f	f	f	f	f	f	6.32000000000000028	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000027	160087	REDRESSEUR 25	208	341	6.40000000000000036	429	92	465	2739	3095	39782	0	f	f	f	f	f	f	f	f	f	5.15000000000000036	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000029	160087	REDRESSEUR 25	212	363	6.20000000000000018	456	99	442	2771	7146	42940	0	f	f	f	f	f	f	f	f	f	5.58000000000000007	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000035	160087	REDRESSEUR 25	224	385	6.29999999999999982	482	107	474	2896	11463	62119	0	f	f	f	f	f	f	f	f	f	224	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000037	160087	REDRESSEUR 25	180	250	6.59999999999999964	330	60	473	2861	12041	62130	0	f	f	f	f	f	f	f	f	f	7.91000000000000014	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000043	160087	REDRESSEUR 25                 	225	411	5.79999999999999982	500	115	457	2797	8304	47838	0	f	f	f	f	f	f	f	f	f	6.20999999999999996	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
ALUSEPMS 000045	160087	REDRESSEUR 25	0	0	0	0	0	0	0	0	0	0	f	f	f	f	f	f	f	f	f	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
\.


--
-- Data for Name: HDSecurite; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "HDSecurite" ("HDSerial", "PercepSerial") FROM stdin;
\.


--
-- Data for Name: Inspection_Visuel; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Inspection_Visuel" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Cuve_Jt_Couvercle", "Cuve_boucle_acces", "Cuve_Jt_Radiateurs", "Cuve_Relais_Gaz", "Cuve_Niveau", "Cuve_Temp_Bobinage", "Cuve_Temp_Bobinage2", "Cuve_Temp_Huile", "Cuve_Temp_Huile2", "Cuve_Pression", "Cuve_Valve_Sup", "Cuve_Valve_Echant", "Cuve_Pompe_Huile", "Cuve_Vent", "Cuve_Cap_Gaz", "Cuve_Peinture", "Cuve_Chauffage", "Cuve_PresUnit", "Cp_Jt", "Cp_Niveau", "Cp_Temp", "Cp_Temp2", "Cp_Pression", "Cp_Pression2", "Cp_Valve_Sup", "Cp_Peinture", "Cp_Num_Operation", "Cp_Filtre", "Cp_Compteur", "Cp_Jt_Echant", "Cp_Position_Prises", "Cp_PresUnit", "Ce_Jt_Tuyau", "Ce_Niveau", "Ce_Peinture", "Ce_Dessicat", "Ta_Jt", "Ta_Niveau", "Ta_Proprete", "Matt_Valeur", "Matt_Raccord", "SS_Indicateur", "Assise", "Temp_Ambiant", "Charge", "Con_Raccord_Electrique", "Con_aspect_General", "Rad_Ventilation", "Rad_Aspect_General", "Notes", "Cuve_Temp_Bob_Decl1", "Cuve_Temp_Bob_Decl2", "Cuve_Temp_Bob_Decl3", "Cuve_Temp_Liq_Decl1", "Cuve_Temp_Liq_Decl2", "Cuve_Temp_Liq_Decl3", "Cuve_TempContact_Bob_Decl1", "Cuve_TempContact_Liq_Decl1") FROM stdin;
\.


--
-- Data for Name: Laboratoire; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Laboratoire" ("CodeLaboratoire", "Laboratoire") FROM stdin;
1	Aucun / None
2	Morgan Schaffer
3	GE Syprotec
4	General Electric    
\.


--
-- Data for Name: Localisation; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Localisation" ("Site", "Localisation", "Description") FROM stdin;
\.


--
-- Data for Name: Metaux_Dans_Huiles; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Metaux_Dans_Huiles" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Aluminium", "Fer", "Plomb", "Etain", "Zinc", "Nickel", "Argent", "Cuivre", "bAlu", "bFer", "bEtain", "bZinc", "bNickel", "bArgent", "bPlomb", "bCuivre") FROM stdin;
ALUSEPMS 000041	160087	REDRESSEUR 25	0.200000000000000011	0.0500000000000000028	0.299999999999999989	0.599999999999999978	0.0500000000000000028	0.200000000000000011	0.0500000000000000028	0.100000000000000006	t	t	t	t	t	t	t	f
\.


--
-- Data for Name: NestedNodesImage; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "NestedNodesImage" ("ID", "Caption", "Key", "Tag", "Image", "SelectedImage", "ParentKey") FROM stdin;
1	Alouette.sei	FAlouette.sei		15	16	
2	Alouette	SAlouette;Alouette		1	1	FAlouette.sei
3	Sous-station principale	ESous-station principale;Sous-station principale		17	17	SAlouette;Alouette
4	SPARE 77227	ESPARE 77227;A32S0251		3	3	ESous-station principale;Sous-station principale
5	SPARE 77274	ESPARE 77274;6394-0101		3	3	ESous-station principale;Sous-station principale
6	TRANSFORMATEUR 77227	ETRANSFORMATEUR 77227;A325-0251		3	3	ESous-station principale;Sous-station principale
7	TRANSFORMATEUR 77274	ETRANSFORMATEUR 77274;SET6394-0101		3	3	ESous-station principale;Sous-station principale
8	TX SGE SPARE 77275	ETX SGE SPARE 77275;91-03E7301-004		3	3	ESous-station principale;Sous-station principale
9	AUXILIAIRE TA3	EAUXILIAIRE TA3;CL80011-101-0		3	3	ESous-station principale;Sous-station principale
10	AUXILIAIRE TA1	EAUXILIAIRE TA1;61-01-69834		3	3	ESous-station principale;Sous-station principale
11	AUXILIAIRE TA2	EAUXILIAIRE TA2;61-0169835		3	3	ESous-station principale;Sous-station principale
12	TX AL11 # 021	ETX AL11 # 021;91-037299-003		3	3	ESous-station principale;Sous-station principale
13	TX AL11 # 023	ETX AL11 # 023;A32S0175		3	3	ESous-station principale;Sous-station principale
14	TX AL12 # 033	ETX AL12 # 033;B32S-0175		3	3	ESous-station principale;Sous-station principale
15	POSTE CO	EPOSTE CO;A32S-0174		3	3	ESous-station principale;Sous-station principale
16	POSTE CO-	EPOSTE CO-;B32S-0174		3	3	ESous-station principale;Sous-station principale
17	Série 1	ESérie 1;Série 1		17	17	SAlouette;Alouette
18	REDRESSEUR #1	EREDRESSEUR #1;51016109		3	3	ESérie 1;Série 1
19	REDRESSEUR #2	EREDRESSEUR #2;51016108		3	3	ESérie 1;Série 1
20	REDRESSEUR #3	EREDRESSEUR #3;51016110		3	3	ESérie 1;Série 1
21	REDRESSEUR #4	EREDRESSEUR #4;51016111		3	3	ESérie 1;Série 1
22	REDRESSEUR #5	EREDRESSEUR #5;51016113		3	3	ESérie 1;Série 1
23	REDRESSEUR #6	EREDRESSEUR #6;51016112		3	3	ESérie 1;Série 1
24	REDRESSEUR #7	EREDRESSEUR #7;1132787		3	3	ESérie 1;Série 1
25	RÉGULATEUR #1	ERÉGULATEUR #1;7853083		3	3	ESérie 1;Série 1
26	RÉGULATEUR #2	ERÉGULATEUR #2;7853084		3	3	ESérie 1;Série 1
27	RÉGULATEUR #3	ERÉGULATEUR #3;7853085		3	3	ESérie 1;Série 1
28	RÉGULATEUR #4	ERÉGULATEUR #4;7853086		3	3	ESérie 1;Série 1
29	REGULATEUR #5	EREGULATEUR #5;7853088		3	3	ESérie 1;Série 1
30	RÉGULATEUR #6	ERÉGULATEUR #6;7853087		3	3	ESérie 1;Série 1
31	Série 2	ESérie 2;Série 2		2	2	SAlouette;Alouette
32	REGULATEUR 24	EREGULATEUR 24;180140		3	3	ESérie 2;Série 2
33	REGULATEUR 25	EREGULATEUR 25;180137		3	3	ESérie 2;Série 2
34	REGULATEUR 25-H1	EREGULATEUR 25-H1;180137-H1		9	9	EREGULATEUR 25;180137
35	REGULATEUR 25-H2	EREGULATEUR 25-H2;180137-H2		9	9	EREGULATEUR 25;180137
36	REGULATEUR 25-H3	EREGULATEUR 25-H3;180137-H3		9	9	EREGULATEUR 25;180137
37	REDRESSEUR 21	EREDRESSEUR 21;160086		3	3	ESérie 2;Série 2
38	REDRESSEUR 22	EREDRESSEUR 22;160088		3	3	ESérie 2;Série 2
39	REDRESSEUR 23	EREDRESSEUR 23;160090		3	3	ESérie 2;Série 2
40	REDRESSEUR 24	EREDRESSEUR 24;160089		3	3	ESérie 2;Série 2
41	REDRESSEUR 25	EREDRESSEUR 25;160087		11	11	ESérie 2;Série 2
42	REDRESSEUR 25-H1	EREDRESSEUR 25-H1;160087-H1		9	9	EREDRESSEUR 25;160087
43	REDRESSEUR 25-H2	EREDRESSEUR 25-H2;160087-H2		9	9	EREDRESSEUR 25;160087
44	REDRESSEUR 25-H3	EREDRESSEUR 25-H3;160087-H3		9	9	EREDRESSEUR 25;160087
45	REGULATEUR 21	EREGULATEUR 21;180136		3	3	ESérie 2;Série 2
46	REGULATEUR 22	EREGULATEUR 22;180138		3	3	ESérie 2;Série 2
47	REGULATEUR 23	EREGULATEUR 23;180139		3	3	ESérie 2;Série 2
48	Boucle 25KV	EBoucle 25KV;Boucle 25KV		17	17	SAlouette;Alouette
49	TX AL12 # 031	ETX AL12 # 031;91-03E7300-006		3	3	EBoucle 25KV;Boucle 25KV
50	TX SGE # 041	ETX SGE # 041;91-03E7255-001		3	3	EBoucle 25KV;Boucle 25KV
51	TX EL11 # 061	ETX EL11 # 061;91-03E7300-001		3	3	EBoucle 25KV;Boucle 25KV
52	TX EL3 # 081	ETX EL3 # 081;91-03E7300-003		3	3	EBoucle 25KV;Boucle 25KV
53	TX EL3 # 082	ETX EL3 # 082;91-03E7300-005		3	3	EBoucle 25KV;Boucle 25KV
54	TX SA # 091	ETX SA # 091;91-03E7298-001		3	3	EBoucle 25KV;Boucle 25KV
55	TX SA # 092	ETX SA # 092;91-03E7298-003		3	3	EBoucle 25KV;Boucle 25KV
56	TX CO # 101	ETX CO # 101;91-03E7299-005		3	3	EBoucle 25KV;Boucle 25KV
57	TX CO # 102	ETX CO # 102;91-03E7299-002		3	3	EBoucle 25KV;Boucle 25KV
58	TX CO # 103	ETX CO # 103;A325-0174		3	3	EBoucle 25KV;Boucle 25KV
59	TX CO # 104	ETX CO # 104;B325-0174		3	3	EBoucle 25KV;Boucle 25KV
60	TX CB # 121	ETX CB # 121;91-03E7302-005		3	3	EBoucle 25KV;Boucle 25KV
61	TX CB # 122	ETX CB # 122;91-03E7302-001		3	3	EBoucle 25KV;Boucle 25KV
62	TX MS # 131	ETX MS # 131;91-03E7301-003		3	3	EBoucle 25KV;Boucle 25KV
63	TX NP # 141	ETX NP # 141;91-03E7301-005		3	3	EBoucle 25KV;Boucle 25KV
64	TX NP # 142	ETX NP # 142;91-03E7301-006		3	3	EBoucle 25KV;Boucle 25KV
65	TX HT # 151	ETX HT # 151;91-03E7300-004		3	3	EBoucle 25KV;Boucle 25KV
66	TX HT # 152	ETX HT # 152;91-03E7299-004		3	3	EBoucle 25KV;Boucle 25KV
67	TX FOA # 161	ETX FOA # 161;91-03E7301-001		3	3	EBoucle 25KV;Boucle 25KV
68	TX FOA # 162	ETX FOA # 162;91-03E7301-002		3	3	EBoucle 25KV;Boucle 25KV
69	TX AL11 # 022	ETX AL11 # 022;91-03E7299-001		3	3	EBoucle 25KV;Boucle 25KV
70	TX AL11 # 023	ETX AL11 # 023;A325-0175		3	3	EBoucle 25KV;Boucle 25KV
71	TX AL12 # 033	ETX AL12 # 033;B325-0175		3	3	EBoucle 25KV;Boucle 25KV
72	TX SGE # 042	ETX SGE # 042;91-03E7302-003		3	3	EBoucle 25KV;Boucle 25KV
73	TX PC # 173-B	ETX PC # 173-B;XC030-001		3	3	EBoucle 25KV;Boucle 25KV
74	TX AL11 # 021	ETX AL11 # 021;91-03E7299-003		3	3	EBoucle 25KV;Boucle 25KV
75	TX PC # 171-A	ETX PC # 171-A;4046506001		3	3	EBoucle 25KV;Boucle 25KV
76	TX PC # 173-A	ETX PC # 173-A;W0582-001		3	3	EBoucle 25KV;Boucle 25KV
77	TX EL11 # 063	ETX EL11 # 063;91-03E7303-002		3	3	EBoucle 25KV;Boucle 25KV
78	TX EL2 # 071	ETX EL2 # 071;91-03E7302-004		3	3	EBoucle 25KV;Boucle 25KV
79	TX EL2 # 072	ETX EL2 # 072;91-03E7302-002		3	3	EBoucle 25KV;Boucle 25KV
80	TX EL2 # 073	ETX EL2 # 073;91-03E7344-001		3	3	EBoucle 25KV;Boucle 25KV
81	TX AL12 # 032	ETX AL12 # 032;91-03E7298-002		3	3	EBoucle 25KV;Boucle 25KV
82	TX EL11 # 062	ETX EL11 # 062;91-03E7300-002		3	3	EBoucle 25KV;Boucle 25KV
83	TX EL11 # 064	ETX EL11 # 064;91-03E7303-001		3	3	EBoucle 25KV;Boucle 25KV
84	TX EL2 # 074	ETX EL2 # 074;91-03E7344-002		3	3	EBoucle 25KV;Boucle 25KV
85	TX PC # 171-B	ETX PC # 171-B;B3S6449		3	3	EBoucle 25KV;Boucle 25KV
86	TX AL21 # 211	ETX AL21 # 211;03G122762		3	3	EBoucle 25KV;Boucle 25KV
87	TX AL21 # 212	ETX AL21 # 212;03G122763		3	3	EBoucle 25KV;Boucle 25KV
88	TX AL21 # 213	ETX AL21 # 213;03G122757		3	3	EBoucle 25KV;Boucle 25KV
89	TX AL22 # 221	ETX AL22 # 221;03G122764		3	3	EBoucle 25KV;Boucle 25KV
90	TX AL22 # 222	ETX AL22 # 222;03G122765		3	3	EBoucle 25KV;Boucle 25KV
91	TX AL22 # 223	ETX AL22 # 223;03G122758		3	3	EBoucle 25KV;Boucle 25KV
92	TX EL21 # 231	ETX EL21 # 231;03G122766		3	3	EBoucle 25KV;Boucle 25KV
93	TX EL21 # 232	ETX EL21 # 232;03G122767		3	3	EBoucle 25KV;Boucle 25KV
94	TX EL22 # 241	ETX EL22 # 241;PA14201-001		3	3	EBoucle 25KV;Boucle 25KV
95	TX EL22 # 242	ETX EL22 # 242;03G122761		3	3	EBoucle 25KV;Boucle 25KV
96	TX AL23 # 272	ETX AL23 # 272;03G122760		3	3	EBoucle 25KV;Boucle 25KV
97	TX AL23 # 271	ETX AL23 # 271;03G122759		3	3	EBoucle 25KV;Boucle 25KV
\.


--
-- Data for Name: NormeIsolation; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "NormeIsolation" ("C", "F", "NotSeal", "Seal") FROM stdin;
0	32	1.56000000000000005	1.57000000000000006
1	33.7999999999999972	1.54000000000000004	1.54000000000000004
2	35.6000000000000014	1.52000000000000002	1.5
3	37.3999999999999986	1.5	1.46999999999999997
4	39.2000000000000028	1.47999999999999998	1.43999999999999995
5	41	1.45999999999999996	1.40999999999999992
6	42.7999999999999972	1.44999999999999996	1.37000000000000011
7	44.6000000000000014	1.43999999999999995	1.34000000000000008
8	46.3999999999999986	1.42999999999999994	1.31000000000000005
9	48.2000000000000028	1.40999999999999992	1.28000000000000003
10	50	1.37999999999999989	1.25
11	51.7999999999999972	1.35000000000000009	1.21999999999999997
12	53.6000000000000014	1.31000000000000005	1.18999999999999995
13	55.3999999999999986	1.27000000000000002	1.15999999999999992
14	57.2000000000000028	1.23999999999999999	1.1399999999999999
15	59	1.19999999999999996	1.1100000000000001
16	60.7999999999999972	1.15999999999999992	1.09000000000000008
17	62.6000000000000014	1.12000000000000011	1.07000000000000006
18	64.4000000000000057	1.08000000000000007	1.05000000000000004
19	66.2000000000000028	1.04000000000000004	1.02000000000000002
20	68	1	1
21	69.7999999999999972	0.959999999999999964	0.979999999999999982
22	71.5999999999999943	0.910000000000000031	0.959999999999999964
23	73.4000000000000057	0.869999999999999996	0.939999999999999947
24	75.2000000000000028	0.82999999999999996	0.92000000000000004
25	77	0.790000000000000036	0.900000000000000022
26	78.7999999999999972	0.760000000000000009	0.880000000000000004
27	80.5999999999999943	0.729999999999999982	0.859999999999999987
28	82.4000000000000057	0.699999999999999956	0.839999999999999969
29	84.2000000000000028	0.67000000000000004	0.819999999999999951
30	86	0.630000000000000004	0.800000000000000044
31	87.7999999999999972	0.599999999999999978	0.780000000000000027
32	89.5999999999999943	0.57999999999999996	0.760000000000000009
33	91.4000000000000057	0.560000000000000053	0.75
34	93.2000000000000028	0.530000000000000027	0.729999999999999982
35	95	0.510000000000000009	0.709999999999999964
36	96.7999999999999972	0.489999999999999991	0.699999999999999956
37	98.5999999999999943	0.469999999999999973	0.689999999999999947
38	100.400000000000006	0.450000000000000011	0.67000000000000004
39	102.200000000000003	0.440000000000000002	0.660000000000000031
40	104	0.419999999999999984	0.650000000000000022
41	105.799999999999997	0.400000000000000022	0.630000000000000004
42	107.599999999999994	0.380000000000000004	0.619999999999999996
43	109.400000000000006	0.369999999999999996	0.599999999999999978
44	111.200000000000003	0.359999999999999987	0.589999999999999969
45	113	0.340000000000000024	0.569999999999999951
46	114.799999999999997	0.330000000000000016	0.560000000000000053
47	116.599999999999994	0.309999999999999998	0.550000000000000044
48	118.400000000000006	0.299999999999999989	0.540000000000000036
49	120.200000000000003	0.28999999999999998	0.520000000000000018
50	122	0.280000000000000027	0.510000000000000009
52	125.599999999999994	0.260000000000000009	0.489999999999999991
54	129.199999999999989	0.23000000000000001	0.469999999999999973
56	132.800000000000011	0.209999999999999992	0.450000000000000011
58	136.400000000000006	0.190000000000000002	0.429999999999999993
60	140	0.170000000000000012	0.409999999999999976
62	143.599999999999994	0.160000000000000003	0.400000000000000022
64	147.199999999999989	0.149999999999999994	0.380000000000000004
66	150.800000000000011	0.140000000000000013	0.359999999999999987
68	154.400000000000006	0.130000000000000004	0.349999999999999978
70	158	0.119999999999999996	0.330000000000000016
72	161.599999999999994	0.119999999999999996	0.320000000000000007
74	165.199999999999989	0.110000000000000001	0.309999999999999998
76	168.800000000000011	0.100000000000000006	0.299999999999999989
78	172.400000000000006	0.0899999999999999967	0.280000000000000027
80	176	0.0899999999999999967	0.270000000000000018
\.


--
-- Data for Name: NormePhysique; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "NormePhysique" ("NORME", "TypeEquipement", "Acide_Min", "Acide_Max", "IFT_Min", "IFT_Max", "D1816_Min", "D1816_Max", "D877_Min", "D877_Max", "COULEUR_Min", "COULEUR_Max", "DENSITE_Min", "DENSITE_Max", "FACTEURP_Min", "FACTEURP_Max", "EAU_Min", "EAU_Max", "PECLAIR_Min", "PECLAIR_Max", "PECOULEMENT_Min", "PECOULEMENT_Max", "VISCOSITE_Min", "VISCOSITE_Max", "D1816_2_MIN", "D1816_2_MAX", "FacteurP100_MIN", "FacteurP100_MAX", "TypeHuile", "CEI156_Min", "CEI156_Max") FROM stdin;
DEFAULT D	D	0	0.400000000000000022	0	0	19	24	21	25	0	0	0	0	0	0	35	50	145	145	-45	-45	11	11	0	0	\N	\N	0	0	0
DEFAULT P	P	0	0.400000000000000022	0	0	19	24	21	25	0	0	0	0	0	0	35	50	145	145	-45	-45	11	11	0	0	\N	\N	0	0	0
DEFAULT-H T	T	0.0500000000000000028	0.100000000000000006	28	32	17	20	25	29	0	3.5	0.839999999999999969	0.906000000000000028	0.100000000000000006	0.299999999999999989	30	34.8999999999999986	145	145	-45	-45	11	11	34	40	3	4	0	0	0
DEFAULT-R T	T	0.25	0.25	22	28	0	0	25	29	0	3.5	0.839999999999999969	0.906000000000000028	0.330000000000000016	1	35	50	\N	265	\N	-20	\N	119	34	40	3	4	2	0	0
DEFAULT-S T	T	10	10	0	0	0	0	25	29	1	1	0.949999999999999956	1.05000000000000004	0.100000000000000006	0.100000000000000006	50	50	\N	340	\N	0	\N	50	34	40	10	10	1	0	0
NONE/AUCUN	T	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
NONE/AUCUN-R	T	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	2	0	0
NONE/AUCUN-S	T	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1	0	0
S.D.MYERS	T	0.0500000000000000028	0.100000000000000006	28	32	0	0	25	29	0	3.5	0.839999999999999969	0.906000000000000028	0.100000000000000006	0.299999999999999989	30	34.8999999999999986	145	145	-45	-45	11	11	34	40	3	4	0	0	0
\.


--
-- Data for Name: NormesFuranne; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "NormesFuranne" ("Norme", "C1", "C2", "C3", "C4") FROM stdin;
DOBLE	100	250	250	250
NONE/AUCUN	0	0	0	0
\.


--
-- Data for Name: NormesGaz; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "NormesGaz" ("Nom", "Condition", "H2", "CH4", "C2H2", "C2H4", "C2H6", "CO", "CO2", "TDCG", "TypeHuile") FROM stdin;
C57104	1	100	120	35	50	65	350	2500	720	0
C57104	2	700	400	50	100	100	570	4000	1920	0
C57104	3	1800	1000	80	200	150	1400	10000	4630	0
C57104-R	1	100	120	35	50	65	350	2500	720	2
C57104-R	2	700	400	50	100	100	570	4000	1920	2
C57104-R	3	1800	1000	80	200	150	1400	10000	4630	2
NONE/AUCUN	1	0	0	0	0	0	0	0	0	1
NONE/AUCUN	2	0	0	0	0	0	0	0	0	1
NONE/AUCUN	3	0	0	0	0	0	0	0	0	1
\.


--
-- Data for Name: PHY; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "PHY" ("ClefAnalyse", "NoEquipement", "NoSerieEquipe", "D1816", "D1816_2", "D877", "IFT", "Acid", "FacteurP", "FacteurP100", "Densite", "PEclair", "PEcoulement", "Viscosite", "Couleur", "FBoue", "PAniline", "SCorrosif", "VISUEL", "CEI156", "bD1816", "bD1816_2", "bD877", "bCEI156", "TestD1816", "TestD1816_2", "TestD877", "TestCEI156", "TestIFT", "TestAcid", "TestFacteurP", "TestFacteurP100", "TestDensite", "TestPEclair", "TestPEcoulement", "TestViscosite", "TestCouleur", "TestFBoue", "TestPAniline", "TestSCorrosif", "TestVisuel") FROM stdin;
AluSepABC000001	TRANSFORMATEUR 77291	180137-H1	0	69	0	45.8999999999999986	0.00300000000000000006	0	0	0.880199999999999982	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000002	TRANSFORMATEUR 77291	180137-H2	0	63	0	44.7999999999999972	0.00300000000000000006	0	0	0.879199999999999982	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000003	TRANSFORMATEUR 77291	180137-H3	0	69	0	45.1000000000000014	0.00300000000000000006	0	0	0.879199999999999982	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000004	TRANSFORMATEUR 77291	160087-H1	0	57	0	46	0.00300000000000000006	0	0	0.881199999999999983	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000005	TRANSFORMATEUR 77291	160087	0	51	0	52.6000000000000014	0.00300000000000000006	0	0	0.876700000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000006	TRANSFORMATEUR 77291	160087-H2	0	55	0	45.7000000000000028	0.00300000000000000006	0	0	0.879199999999999982	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000007	TRANSFORMATEUR 77291	160087-H3	0	52	0	46.7999999999999972	0.00300000000000000006	0	0	0.881199999999999983	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000008	TRANSFORMATEUR 77291	91-03E7301-004	0	71	0	50.5	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000009	TRANSFORMATEUR 77291	A32S0251	0	62	0	44.2000000000000028	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000010	TRANSFORMATEUR 77291	SET6394-0101	0	74	0	47.6000000000000014	0.00300000000000000006	0	0	0.883700000000000041	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000011	TX PC # 173-B	XC030-001	0	52	0	44.5	0.00300000000000000006	0	0	0.879000000000000004	0	0	0	2.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000012	TRANSFORMATEUR 77291	91-03E7303-002	0	72	0	47.7999999999999972	0.00300000000000000006	0	0	0.861999999999999988	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000013	TRANSFORMATEUR 77291	91-03E7303-001	0	75	0	49.1000000000000014	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000014	TRANSFORMATEUR 77291	91-03E7302-004	0	75	0	48.2000000000000028	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000015	TRANSFORMATEUR 77291	91-03E7302-002	0	69	0	47.1000000000000014	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000016	TRANSFORMATEUR 77291	91-03E7344-001	0	75	0	46.7000000000000028	0.00300000000000000006	0	0	0.862600000000000033	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000017	TRANSFORMATEUR 77291	91-03E7344-002	0	59	0	46.2999999999999972	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000018	TRANSFORMATEUR 77291	91-03E7302-005	0	61	0	45.2999999999999972	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000019	TRANSFORMATEUR 77291	B3S6449	0	62	0	38.3999999999999986	0.00600000000000000012	0	0	0.86080000000000001	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000020	TRANSFORMATEUR 77291	03G122762	0	64	0	50	0.00300000000000000006	0	0	0.890900000000000025	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000021	TRANSFORMATEUR 77291	03G122763	0	56	0	50	0.00300000000000000006	0	0	0.890900000000000025	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000022	TRANSFORMATEUR 77291	4046506001	0	58	0	0	0.00300000000000000006	0	0	0.963999999999999968	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000023	TRANSFORMATEUR 77291	91-03E7302-001	0	56	0	43.2999999999999972	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000024	TRANSFORMATEUR 77291	W0582-001	0	61	0	42.1000000000000014	0.00899999999999999932	0	0	0.879000000000000004	0	0	0	3.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000025	TRANSFORMATEUR 77291	03G122757	0	68	0	47.2000000000000028	0.00300000000000000006	0	0	0.891900000000000026	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000026	TRANSFORMATEUR 77291	91-03E7301-003	0	68	0	48.5	0.00300000000000000006	0	0	0.862800000000000011	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000027	TRANSFORMATEUR 77291	91-03E7300-005	0	72	0	46.6000000000000014	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000028	TRANSFORMATEUR 77291	91-03E7300-003	0	66	0	46.2999999999999972	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000029	TRANSFORMATEUR 77291	03G122759	0	68	0	49.2000000000000028	0.00300000000000000006	0	0	0.889800000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000030	TRANSFORMATEUR 77291	03G122761	0	74	0	47.8999999999999986	0.00300000000000000006	0	0	0.892900000000000027	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000031	TRANSFORMATEUR 77291	PA14201-001	0	72	0	46	0.00300000000000000006	0	0	0.883600000000000052	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000032	TRANSFORMATEUR 77291	03G122765	0	57	0	49.2000000000000028	0.00300000000000000006	0	0	0.890800000000000036	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000033	TRANSFORMATEUR 77291	B32S-0175	0	65	0	39.1000000000000014	0.00600000000000000012	0	0	0.865600000000000036	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000034	TRANSFORMATEUR 77291	91-03E7255-001	0	52	0	46.7000000000000028	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000035	TRANSFORMATEUR 77291	03G122764	0	57	0	49.3999999999999986	0.00300000000000000006	0	0	0.890800000000000036	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000036	TRANSFORMATEUR 77291	03G122758	0	66	0	45	0.00300000000000000006	0	0	0.889800000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000037	TRANSFORMATEUR 77291	91-03E7300-006	0	71	0	47.2000000000000028	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000038	TRANSFORMATEUR 77291	91-03E7298-002	0	56	0	46.2999999999999972	0.00300000000000000006	0	0	0.862800000000000011	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000039	TRANSFORMATEUR 77291	91-03E7300-001	0	71	0	47.2000000000000028	0.00300000000000000006	0	0	0.862800000000000011	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000040	TRANSFORMATEUR 77291	91-03E7300-002	0	66	0	47.7000000000000028	0.00300000000000000006	0	0	0.862800000000000011	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000041	TRANSFORMATEUR 77291	03G122766	0	57	0	49.8999999999999986	0.00300000000000000006	0	0	0.890399999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000042	TRANSFORMATEUR 77291	03G122760	0	59	0	48.8999999999999986	0.00300000000000000006	0	0	0.889599999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000043	TRANSFORMATEUR 77291	03G122767	0	73	0	49.3999999999999986	0.00300000000000000006	0	0	0.890399999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000044	TRANSFORMATEUR 77291	180136	0	74	0	54.2000000000000028	0.00300000000000000006	0	0	0.873399999999999954	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000045	TRANSFORMATEUR 77291	51016111	0	73	0	45.5	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000046	TRANSFORMATEUR 77291	7853088	0	69	0	46.3999999999999986	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000047	TRANSFORMATEUR 77291	7853086	0	72	0	48.1000000000000014	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000048	TRANSFORMATEUR 77291	7853085	0	70	0	47.7999999999999972	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000049	TRANSFORMATEUR 77291	7853083	0	65	0	48.2999999999999972	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000050	TRANSFORMATEUR 77291	160089	0	73	0	47.2000000000000028	0.00300000000000000006	0	0	0.88160000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000051	TRANSFORMATEUR 77291	160090	0	62	0	48.8999999999999986	0.00300000000000000006	0	0	0.882000000000000006	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000052	TRANSFORMATEUR 77291	7853087	0	62	0	45	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000053	TRANSFORMATEUR 77291	160088	0	71	0	47.3999999999999986	0.00300000000000000006	0	0	0.88160000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000054	TRANSFORMATEUR 77291	160086	0	54	0	52	0.00300000000000000006	0	0	0.874800000000000022	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000055	TRANSFORMATEUR 77291	1132787	0	73	0	42.6000000000000014	0.00300000000000000006	0	0	0.866999999999999993	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000056	TRANSFORMATEUR 77291	51016109	0	71	0	45.3999999999999986	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000057	TRANSFORMATEUR 77291	51016113	0	75	0	42.1000000000000014	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000058	TRANSFORMATEUR 77291	51016110	0	67	0	45.5	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000059	TRANSFORMATEUR 77291	51016108	0	69	0	44.6000000000000014	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000060	TRANSFORMATEUR 77291	7853084	0	63	0	48	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000061	TRANSFORMATEUR 77291	180138	0	71	0	50.1000000000000014	0.00300000000000000006	0	0	0.881399999999999961	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000062	TRANSFORMATEUR 77291	51016112	0	65	0	47.7999999999999972	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000063	TRANSFORMATEUR 77291	A325-0175	0	58	0	40.3999999999999986	0.00600000000000000012	0	0	0.864399999999999946	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000064	TRANSFORMATEUR 77291	91-03E7299-004	0	56	0	48.1000000000000014	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000065	TRANSFORMATEUR 77291	91-03E7300-004	0	19	0	47.5	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000066	TRANSFORMATEUR 77291	91-03E7301-006	0	70	0	48.1000000000000014	0.00300000000000000006	0	0	0.862400000000000055	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000067	TRANSFORMATEUR 77291	91-03E7301-005	0	63	0	48.2999999999999972	0.00300000000000000006	0	0	0.862199999999999966	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000068	TRANSFORMATEUR 77291	B32S-0174	0	61	0	41	0.00600000000000000012	0	0	0.863800000000000012	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000069	TRANSFORMATEUR 77291	A32S-0174	0	58	0	41.7999999999999972	0.00600000000000000012	0	0	0.865199999999999969	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000070	TRANSFORMATEUR 77291	91-03E7299-002	0	62	0	48.6000000000000014	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000071	TRANSFORMATEUR 77291	91-03E7299-005	0	58	0	49	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000072	TRANSFORMATEUR 77291	91-03E7298-003	0	59	0	45.7000000000000028	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000073	TRANSFORMATEUR 77291	180138	0	75	0	48.7000000000000028	0.00300000000000000006	0	0	0.881000000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000074	TRANSFORMATEUR 77291	91-03E7302-003	0	75	0	47.5	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000075	TRANSFORMATEUR 77291	91-03E7301-001	0	71	0	48.3999999999999986	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000076	TRANSFORMATEUR 77291	91-03E7299-001	0	72	0	48.7000000000000028	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000077	TRANSFORMATEUR 77291	160087	0	62	0	52.2999999999999972	0.00300000000000000006	0	0	0.872600000000000042	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000078	TRANSFORMATEUR 77291	91-03E7299-003	0	75	0	47.7999999999999972	0.00300000000000000006	0	0	0.862400000000000055	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000079	TRANSFORMATEUR 77291	91-03E7301-002	0	74	0	48	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000080	TRANSFORMATEUR 77291	CL80011-101-0	0	68	0	48.8999999999999986	0.00300000000000000006	0	0	0.873800000000000021	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000081	TRANSFORMATEUR 77291	61-0169835	0	71	0	40.3999999999999986	0.00600000000000000012	0	0	0.865600000000000036	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000082	TRANSFORMATEUR 77291	61-01-69834	0	71	0	39.2999999999999972	0.00899999999999999932	0	0	0.864399999999999946	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000083	TRANSFORMATEUR 77291	180137	0	72	0	54	0.00300000000000000006	0	0	0.872199999999999975	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000084	TRANSFORMATEUR 77291	180140	0	75	0	50.2999999999999972	0.00300000000000000006	0	0	0.88160000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000085	TRANSFORMATEUR 77291	91-03E7298-001	0	71	0	48.6000000000000014	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000086	TRANSFORMATEUR 77291	CL80011-101-0	0	47	0	48.8999999999999986	0.00300000000000000006	0	0	0.880000000000000004	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000087	TRANSFORMATEUR 77291	CL80011-101-0	0	53	0	47.7999999999999972	0.00300000000000000006	0	0	0.879499999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000088	TRANSFORMATEUR 77291	CL80011-101-0	0	54	0	48.6000000000000014	0.00300000000000000006	0	0	0.880000000000000004	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000089	TRANSFORMATEUR 77291	51016108	0	60	0	47.2000000000000028	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000090	TRANSFORMATEUR 77291	180139	0	65	0	47.2000000000000028	0.00300000000000000006	0	0	0.884600000000000053	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000091	TRANSFORMATEUR 77291	180138	0	60	0	49.6000000000000014	0.00300000000000000006	0	0	0.884299999999999975	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000092	TRANSFORMATEUR 77291	51016108	0	59	0	44.8999999999999986	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000093	TRANSFORMATEUR 77291	51016108	0	59	0	44.6000000000000014	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000094	TRANSFORMATEUR 77291	51016108	0	57	0	45.2000000000000028	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000095	TRANSFORMATEUR 77291	51016108	0	58	0	45.3999999999999986	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000096	TRANSFORMATEUR 77291	180137	0	49	0	52.5	0.00300000000000000006	0	0	0.875600000000000045	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000097	TRANSFORMATEUR 77291	CL80011-101-0	0	55	0	52.3999999999999986	0.00300000000000000006	0	0	0.875900000000000012	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000098	TRANSFORMATEUR 77291	180136	0	55	0	44.1000000000000014	0.00300000000000000006	0	0	0.880900000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000099	TRANSFORMATEUR 77291	180140	0	52	0	44.3999999999999986	0.00300000000000000006	0	0	0.881399999999999961	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000100	TRANSFORMATEUR 77291	51016108	0	53	0	45.1000000000000014	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000101	TRANSFORMATEUR 77291	51016108	0	47	0	44.7999999999999972	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000102	TRANSFORMATEUR 77291	51016108	0	53	0	42.7999999999999972	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000103	TRANSFORMATEUR 77291	51016108	0	58	0	46.2000000000000028	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000104	TRANSFORMATEUR 77291	51016108	0	59	0	45.7999999999999972	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000105	TRANSFORMATEUR 77291	51016108	0	53	0	45.3999999999999986	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000106	TRANSFORMATEUR 77291	51016108	0	60	0	45.5	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000107	TRANSFORMATEUR 77291	CL80011-101-0	0	56	0	49.7000000000000028	0.00300000000000000006	0.00100000000000000002	0.0719999999999999946	0.87609999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000108	TRANSFORMATEUR 77291	180137	0	60	0	43.2000000000000028	0.00300000000000000006	0.00600000000000000012	0.222000000000000003	0.882600000000000051	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000109	TRANSFORMATEUR 77291	CL80011-101-0	0	53	0	51	0.00300000000000000006	0.00100000000000000002	0.0500000000000000028	0.875600000000000045	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000110	TRANSFORMATEUR 77291	180137	0	55	0	42.7000000000000028	0.00300000000000000006	0.0149999999999999994	0.225000000000000006	0.882299999999999973	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000111	TRANSFORMATEUR 77291	51016108	0	61	0	44.2000000000000028	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000112	TRANSFORMATEUR 77291	51016108	0	58	0	44.2000000000000028	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000113	TRANSFORMATEUR 77291	51016108	0	44	0	44.7999999999999972	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000114	TRANSFORMATEUR 77291	51016108	0	46	0	44.5	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000115	TRANSFORMATEUR 77291	51016108	0	45	0	44.5	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000116	TRANSFORMATEUR 77291	51016108	0	50	0	45.2000000000000028	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000117	TRANSFORMATEUR 77291	SET6394-0101	0	55	0	47.8999999999999986	0.00600000000000000012	0	0	0.884399999999999964	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000118	TRANSFORMATEUR 77291	91-03E7300-002	0	48	0	47.5	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000119	TRANSFORMATEUR 77291	91-03E7344-001	0	36	0	47.1000000000000014	0.00300000000000000006	0	0	0.865500000000000047	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000120	TRANSFORMATEUR 77291	91-03E7344-002	0	31	0	46.2000000000000028	0.00300000000000000006	0	0	0.866099999999999981	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000121	TRANSFORMATEUR 77291	91-03E7300-005	0	34	0	47	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000122	TRANSFORMATEUR 77291	91-03E7300-003	0	28	0	46.6000000000000014	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000123	TRANSFORMATEUR 77291	91-03E7301-003	0	35	0	47.7000000000000028	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000124	TRANSFORMATEUR 77291	91-03E7302-005	0	66	0	45.3999999999999986	0.00300000000000000006	0	0	0.866500000000000048	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000125	TRANSFORMATEUR 77291	91-03E7302-001	0	40	0	48.5	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000126	TRANSFORMATEUR 77291	91-03E7300-001	0	31	0	46.7999999999999972	0.00300000000000000006	0	0	0.865500000000000047	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000127	TRANSFORMATEUR 77291	91-03E7303-001	0	43	0	48.5	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000128	TX PC # 173-B	XC030-001	0	57	0	46.7999999999999972	0.00300000000000000006	0	0	0.884199999999999986	0	0	0	2.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000129	TRANSFORMATEUR 77291	4046506001	0	61	0	0	0.00300000000000000006	0	0	0.96919999999999995	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000130	TRANSFORMATEUR 77291	91-03E7302-004	0	45	0	47.5	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000131	TRANSFORMATEUR 77291	91-03E7302-002	0	36	0	47.7999999999999972	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000132	TRANSFORMATEUR 77291	W0582-001	0	55	0	45.8999999999999986	0.0210000000000000013	0	0	0.878399999999999959	0	0	0	3.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000133	TRANSFORMATEUR 77291	91-03E7303-002	0	24	0	47.7000000000000028	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000134	TRANSFORMATEUR 77291	51016109	0	41	0	43.2000000000000028	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000135	TRANSFORMATEUR 77291	A325-0251	0	55	0	47.8999999999999986	0.00300000000000000006	0	0	0.866900000000000004	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000136	TRANSFORMATEUR 77291	91-03E7298-001	0	33	0	51.8999999999999986	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000137	TRANSFORMATEUR 77291	61-0169835	0	57	0	43	0.00300000000000000006	0	0	0.867600000000000038	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000138	TRANSFORMATEUR 77291	61-01-69834	0	46	0	41.1000000000000014	0.00600000000000000012	0	0	0.867600000000000038	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000139	TRANSFORMATEUR 77291	7853083	0	23	0	47.2999999999999972	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000140	TRANSFORMATEUR 77291	7853084	0	25	0	48	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000141	TRANSFORMATEUR 77291	7853085	0	38	0	51.1000000000000014	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000142	TRANSFORMATEUR 77291	7853086	0	32	0	48	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000143	TRANSFORMATEUR 77291	7853087	0	37	0	50.6000000000000014	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000144	TRANSFORMATEUR 77291	91-03E7299-001	0	41	0	48.2999999999999972	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000145	TRANSFORMATEUR 77291	51016108	0	43	0	45.7999999999999972	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000146	TRANSFORMATEUR 77291	51016110	0	28	0	49.2999999999999972	0.00300000000000000006	0	0	0.86619999999999997	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000147	TRANSFORMATEUR 77291	51016111	0	33	0	48.2999999999999972	0.00300000000000000006	0	0	0.86619999999999997	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000148	TRANSFORMATEUR 77291	51016113	0	34	0	42.7000000000000028	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000149	TRANSFORMATEUR 77291	51016112	0	40	0	48	0.00300000000000000006	0	0	0.866999999999999993	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000150	TRANSFORMATEUR 77291	1132787	0	28	0	45.2000000000000028	0.00300000000000000006	0	0	0.870399999999999952	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000151	TRANSFORMATEUR 77291	7853088	0	41	0	50.1000000000000014	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000152	TRANSFORMATEUR 77291	91-03E7298-002	0	41	0	47.8999999999999986	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000153	TRANSFORMATEUR 77291	91-03E7302-003	0	42	0	47.8999999999999986	0.00300000000000000006	0	0	0.865500000000000047	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000154	TRANSFORMATEUR 77291	91-03E7298-003	0	24	0	45.2000000000000028	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000155	TRANSFORMATEUR 77291	91-03E7300-006	0	40	0	47	0.00300000000000000006	0	0	0.865999999999999992	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000156	TRANSFORMATEUR 77291	B325-0175	0	35	0	40	0.00899999999999999932	0	0	0.867099999999999982	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000157	TRANSFORMATEUR 77291	91-03E7299-005	0	35	0	48.3999999999999986	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000158	TRANSFORMATEUR 77291	91-03E7299-002	0	35	0	47.7000000000000028	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000159	TRANSFORMATEUR 77291	91-03E7301-004	0	36	0	48.7999999999999972	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000160	TRANSFORMATEUR 77291	B325-0174	0	48	0	40.6000000000000014	0.00600000000000000012	0	0	0.866999999999999993	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000161	TRANSFORMATEUR 77291	91-03E7299-003	0	54	0	48.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000162	TRANSFORMATEUR 77291	A325-0175	0	39	0	41	0.0050000000000000001	0	0	0.867099999999999982	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000163	TRANSFORMATEUR 77291	91-03E7301-006	0	46	0	48.2000000000000028	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000164	TRANSFORMATEUR 77291	91-03E7301-005	0	34	0	48.2999999999999972	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000165	TRANSFORMATEUR 77291	91-03E7300-004	0	35	0	47.7000000000000028	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000166	TRANSFORMATEUR 77291	91-03E7299-004	0	41	0	47.2000000000000028	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000167	TRANSFORMATEUR 77291	91-03E7301-002	0	49	0	50.7000000000000028	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000168	TRANSFORMATEUR 77291	91-03E7301-001	0	50	0	51.2000000000000028	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000169	TRANSFORMATEUR 77291	91-03E7255-001	0	42	0	47.1000000000000014	0.00300000000000000006	0	0	0.867199999999999971	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000170	TRANSFORMATEUR 77291	A325-0174	0	42	0	40.8999999999999986	0.00600000000000000012	0	0	0.867199999999999971	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000171	TRANSFORMATEUR 77291	51016111	0	38	0	45.6000000000000014	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000172	TRANSFORMATEUR 77291	7853086	0	47	0	47.6000000000000014	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000173	TRANSFORMATEUR 77291	61-0169835	0	68	0	38.7000000000000028	0.00600000000000000012	0	0	0.866999999999999993	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000174	TRANSFORMATEUR 77291	61-01-69834	0	70	0	38.8999999999999986	0.00600000000000000012	0	0	0.866999999999999993	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000175	TRANSFORMATEUR 77291	61-01-69834	0	75	0	42.2000000000000028	0.00600000000000000012	0	0	0.869099999999999984	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000176	TRANSFORMATEUR 77291	A325-0251	0	61	0	45	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000177	TRANSFORMATEUR 77291	7853083	0	59	0	47.6000000000000014	0.00300000000000000006	0	0	0.865299999999999958	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000178	TRANSFORMATEUR 77291	7853084	0	59	0	48.5	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000179	TRANSFORMATEUR 77291	7853085	0	60	0	47.7000000000000028	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000180	TRANSFORMATEUR 77291	7853086	0	55	0	50	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000181	TRANSFORMATEUR 77291	7853088	0	69	0	46.7000000000000028	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000182	TRANSFORMATEUR 77291	7853087	0	62	0	48.5	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000183	TRANSFORMATEUR 77291	51016109	0	59	0	44.7000000000000028	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000184	TRANSFORMATEUR 77291	51016108	0	42	0	45.6000000000000014	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000185	TRANSFORMATEUR 77291	51016111	0	57	0	45.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000186	TRANSFORMATEUR 77291	SET6394-0101	0	69	0	46.7000000000000028	0.00899999999999999932	0	0	0.866500000000000048	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000187	TRANSFORMATEUR 77291	91-03E7301-004	0	57	0	51.1000000000000014	0.00300000000000000006	0	0	0.864099999999999979	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000188	TX PC # 173-B	XC030-001	0	68	0	43.5	0.00600000000000000012	0	0	0.881000000000000005	0	0	0	2.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000189	TRANSFORMATEUR 77291	51016110	0	57	0	45.7000000000000028	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000190	TRANSFORMATEUR 77291	91-03E7302-001	0	52	0	43.7000000000000028	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000191	TRANSFORMATEUR 77291	51016113	0	58	0	43.7999999999999972	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000192	TRANSFORMATEUR 77291	51016112	0	39	0	45.3999999999999986	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000193	TRANSFORMATEUR 77291	1132787	0	65	0	42.7000000000000028	0.00300000000000000006	0	0	0.869199999999999973	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000194	TRANSFORMATEUR 77291	91-03E7298-001	0	55	0	46.2000000000000028	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000195	TRANSFORMATEUR 77291	61-01-69834	0	58	0	40.3999999999999986	0.0100000000000000002	0	0	0.865199999999999969	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000196	TRANSFORMATEUR 77291	61-0169835	0	69	0	38.7999999999999972	0.00800000000000000017	0	0	0.864800000000000013	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000197	TRANSFORMATEUR 77291	4046506001	0	53	0	0	0.00300000000000000006	0	0	0.967600000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000198	TRANSFORMATEUR 77291	W0582-001	0	38	0	43	0.0210000000000000013	0	0	0.879000000000000004	0	0	0	3.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000199	TRANSFORMATEUR 77291	A325-0175	0	72	0	40.3999999999999986	0.0109999999999999994	0	0	0.865500000000000047	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000200	TRANSFORMATEUR 77291	91-03E7300-002	0	54	0	47.5	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000201	TRANSFORMATEUR 77291	91-03E7303-002	0	68	0	50.6000000000000014	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000202	TRANSFORMATEUR 77291	91-03E7303-001	0	65	0	49.8999999999999986	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000203	TRANSFORMATEUR 77291	91-03E7300-001	0	53	0	46.2000000000000028	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000204	TRANSFORMATEUR 77291	91-03E7302-004	0	66	0	47.7999999999999972	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000205	TRANSFORMATEUR 77291	91-03E7302-002	0	75	0	47.2999999999999972	0.00300000000000000006	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000206	TRANSFORMATEUR 77291	91-03E7302-003	0	75	0	47.3999999999999986	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000207	TRANSFORMATEUR 77291	91-03E7300-006	0	68	0	49.5	0.00600000000000000012	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000208	TRANSFORMATEUR 77291	91-03E7301-005	0	52	0	49.2000000000000028	0.00300000000000000006	0	0	0.862600000000000033	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000209	TRANSFORMATEUR 77291	91-03E7298-002	0	70	0	47.7999999999999972	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000210	TRANSFORMATEUR 77291	91-03E7299-001	0	66	0	49.6000000000000014	0.00300000000000000006	0	0	0.866099999999999981	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000211	TRANSFORMATEUR 77291	91-03E7299-003	0	67	0	47.2000000000000028	0.00300000000000000006	0	0	0.864299999999999957	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000212	TRANSFORMATEUR 77291	91-03E7344-001	0	69	0	46.3999999999999986	0.00300000000000000006	0	0	0.864299999999999957	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000213	TRANSFORMATEUR 77291	B325-0175	0	71	0	41.3999999999999986	0.0109999999999999994	0	0	0.864999999999999991	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000214	TRANSFORMATEUR 77291	91-03E7299-004	0	71	0	48.2000000000000028	0.00300000000000000006	0	0	0.864099999999999979	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000215	TRANSFORMATEUR 77291	91-03E7344-002	0	50	0	46.8999999999999986	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000216	TRANSFORMATEUR 77291	91-03E7255-001	0	65	0	46.6000000000000014	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000217	TRANSFORMATEUR 77291	91-03E7301-002	0	73	0	47.2999999999999972	0.00300000000000000006	0	0	0.863099999999999978	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000218	TRANSFORMATEUR 77291	91-03E7300-004	0	47	0	48	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000219	TRANSFORMATEUR 77291	91-03E7302-005	0	63	0	45	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000220	TRANSFORMATEUR 77291	91-03E7301-006	0	61	0	48	0.00300000000000000006	0	0	0.862800000000000011	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000221	TRANSFORMATEUR 77291	91-03E7301-003	0	50	0	47.3999999999999986	0.00300000000000000006	0	0	0.863299999999999956	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000222	TRANSFORMATEUR 77291	A325-0174	0	72	0	41.7000000000000028	0.00899999999999999932	0	0	0.865900000000000003	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000223	TRANSFORMATEUR 77291	91-03E7299-002	0	69	0	50.1000000000000014	0.00300000000000000006	0	0	0.863700000000000023	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000224	TRANSFORMATEUR 77291	91-03E7299-005	0	43	0	48.8999999999999986	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000225	TRANSFORMATEUR 77291	91-03E7298-003	0	64	0	48.2000000000000028	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000226	TRANSFORMATEUR 77291	91-03E7300-003	0	66	0	47.2999999999999972	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000227	TRANSFORMATEUR 77291	91-03E7300-005	0	64	0	47.2999999999999972	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000228	TRANSFORMATEUR 77291	B325-0174	0	61	0	41	0.00899999999999999932	0	0	0.864800000000000013	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000229	TRANSFORMATEUR 77291	91-03E7301-001	0	65	0	47.1000000000000014	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000230	TRANSFORMATEUR 77291	61-0169835	0	75	0	40.7999999999999972	0.00899999999999999932	0	0	0.86619999999999997	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000231	TRANSFORMATEUR 77291	61-01-69834	0	75	0	40.7000000000000028	0.00899999999999999932	0	0	0.867199999999999971	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000232	TRANSFORMATEUR 77291	91-03E7301-005	0	57	0	47.7000000000000028	0.00300000000000000006	0	0	0.862700000000000022	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000233	TRANSFORMATEUR 77291	7853085	0	60	0	47.7000000000000028	0.00300000000000000006	0	0	0.86509999999999998	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000234	TRANSFORMATEUR 77291	7853088	0	67	0	46.5	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000235	TRANSFORMATEUR 77291	7853084	0	67	0	47.7999999999999972	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000236	TRANSFORMATEUR 77291	91-03E7300-006	0	70	0	48.2999999999999972	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000237	TRANSFORMATEUR 77291	91-03E7303-001	0	54	0	49.5	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000238	TRANSFORMATEUR 77291	91-03E7300-001	0	55	0	46.2999999999999972	0.00300000000000000006	0	0	0.86399999999999999	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000239	TRANSFORMATEUR 77291	91-03E7298-002	0	56	0	47.5	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000240	TRANSFORMATEUR 77291	B32S-0175	0	59	0	39.8999999999999986	0.00899999999999999932	0	0	0.865700000000000025	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000241	TRANSFORMATEUR 77291	91-03E7301-006	0	54	0	47.2999999999999972	0.00300000000000000006	0	0	0.860199999999999965	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000242	TRANSFORMATEUR 77291	91-03E7255-001	0	55	0	46.3999999999999986	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000243	TRANSFORMATEUR 77291	A32S-0174	0	69	0	41.1000000000000014	0.00899999999999999932	0	0	0.866800000000000015	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000244	TRANSFORMATEUR 77291	51016109	0	56	0	43.5	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000245	TRANSFORMATEUR 77291	91-03E7301-003	0	60	0	47.6000000000000014	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000246	TRANSFORMATEUR 77291	91-03E7344-001	0	67	0	48.3999999999999986	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000247	TRANSFORMATEUR 77291	91-03E7344-002	0	71	0	46.7000000000000028	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000248	TRANSFORMATEUR 77291	B32S-0174	0	75	0	42.1000000000000014	0.00600000000000000012	0	0	0.866299999999999959	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000249	TRANSFORMATEUR 77291	51016108	0	50	0	47.1000000000000014	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000250	TRANSFORMATEUR 77291	91-03E7302-004	0	50	0	48.7000000000000028	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000251	TRANSFORMATEUR 77291	61-01-69834	0	73	0	41.2000000000000028	0.00600000000000000012	0	0	0.866600000000000037	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000252	TRANSFORMATEUR 77291	7853083	0	67	0	47.6000000000000014	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000253	TRANSFORMATEUR 77291	7853086	0	51	0	47.2999999999999972	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000254	TRANSFORMATEUR 77291	7853087	0	70	0	49.3999999999999986	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000255	TRANSFORMATEUR 77291	51016111	0	70	0	44.8999999999999986	0.00300000000000000006	0	0	0.863299999999999956	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000256	TRANSFORMATEUR 77291	51016113	0	67	0	42.5	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000257	TRANSFORMATEUR 77291	51016112	0	64	0	45.7000000000000028	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000258	TRANSFORMATEUR 77291	51016110	0	58	0	46.8999999999999986	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000259	TRANSFORMATEUR 77291	91-03E7302-002	0	54	0	47	0.00300000000000000006	0	0	0.865299999999999958	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000260	TRANSFORMATEUR 77291	91-03E7303-002	0	60	0	47.8999999999999986	0.00300000000000000006	0	0	0.862400000000000055	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000261	TRANSFORMATEUR 77291	SET6394-0101	0	66	0	46.7999999999999972	0.0050000000000000001	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000262	TRANSFORMATEUR 77291	91-03E7301-004	0	75	0	48.2999999999999972	0.00300000000000000006	0	0	0.865999999999999992	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000263	TRANSFORMATEUR 77291	91-03E7302-003	0	61	0	47.8999999999999986	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000264	TRANSFORMATEUR 77291	W0582-001	0	61	0	41.3999999999999986	0.0149999999999999994	0	0	0.880299999999999971	0	0	0	4	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000265	TRANSFORMATEUR 77291	91-03E7298-003	0	68	0	45	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000266	TRANSFORMATEUR 77291	A325-0251	0	66	0	44.2000000000000028	0.00300000000000000006	0	0	0.864299999999999957	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000267	TRANSFORMATEUR 77291	91-03E7299-002	0	71	0	47	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000268	TRANSFORMATEUR 77291	91-03E7301-001	0	72	0	47.6000000000000014	0.00300000000000000006	0	0	0.863299999999999956	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000269	TX PC # 173-B	XC030-001	0	39	0	40.7000000000000028	0.00899999999999999932	0	0	0.881299999999999972	0	0	0	3	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000270	TRANSFORMATEUR 77291	A325-0175	0	63	0	42	0.00899999999999999932	0	0	0.864099999999999979	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000271	TRANSFORMATEUR 77291	91-03E7300-003	0	74	0	47	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000272	TRANSFORMATEUR 77291	4046506001	0	64	0	0	0.00300000000000000006	0	0	0.965500000000000025	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000273	TRANSFORMATEUR 77291	91-03E7302-001	0	46	0	45.3999999999999986	0.00300000000000000006	0	0	0.866600000000000037	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000274	TRANSFORMATEUR 77291	91-03E7299-001	0	65	0	48.7000000000000028	0.00300000000000000006	0	0	0.864199999999999968	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000275	TRANSFORMATEUR 77291	91-03E7298-001	0	56	0	48.1000000000000014	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000276	TRANSFORMATEUR 77291	91-037299-003	0	56	0	47.7000000000000028	0.00300000000000000006	0	0	0.863199999999999967	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000277	TRANSFORMATEUR 77291	91-03E7302-005	0	60	0	45.7000000000000028	0.00300000000000000006	0	0	0.86619999999999997	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000278	TRANSFORMATEUR 77291	91-03E7300-005	0	64	0	46.6000000000000014	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000279	TRANSFORMATEUR 77291	91-03E7301-002	0	51	0	46.7999999999999972	0.00300000000000000006	0	0	0.863099999999999978	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000280	TRANSFORMATEUR 77291	91-03E7300-004	0	67	0	47.1000000000000014	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000281	TRANSFORMATEUR 77291	91-03E7299-004	0	73	0	47.5	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000282	TRANSFORMATEUR 77291	91-03E7299-005	0	74	0	48	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000283	TRANSFORMATEUR 77291	61-0169835	0	60	0	40.7999999999999972	0.00600000000000000012	0	0	0.866099999999999981	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000284	TRANSFORMATEUR 77291	91-03E7300-002	0	63	0	46.6000000000000014	0.00300000000000000006	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000285	TRANSFORMATEUR 77291	1132787	0	69	0	43.1000000000000014	0.00600000000000000012	0	0	0.86839999999999995	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000286	TRANSFORMATEUR 77291	51016108	0	60	0	44.7000000000000028	0.00300000000000000006	0	0	0.863099999999999978	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000287	TRANSFORMATEUR 77291	51016110	0	65	0	45.2999999999999972	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000288	TRANSFORMATEUR 77291	7853088	0	69	0	46.7999999999999972	0.00300000000000000006	0	0	0.865299999999999958	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000289	TRANSFORMATEUR 77291	61-0169835	0	64	0	39.8999999999999986	0.00600000000000000012	0	0	0.866700000000000026	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000290	TRANSFORMATEUR 77291	7853084	0	57	0	47.5	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000291	TRANSFORMATEUR 77291	7853087	0	44	0	44.3999999999999986	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000292	TRANSFORMATEUR 77291	51016113	0	57	0	41.2999999999999972	0.00600000000000000012	0	0	0.864700000000000024	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000293	TRANSFORMATEUR 77291	7853085	0	55	0	47	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000294	TRANSFORMATEUR 77291	7853083	0	57	0	46.8999999999999986	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000295	TRANSFORMATEUR 77291	51016111	0	64	0	45.3999999999999986	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000296	TRANSFORMATEUR 77291	7853086	0	61	0	46.7000000000000028	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000297	TRANSFORMATEUR 77291	51016109	0	56	0	43.7999999999999972	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000298	TRANSFORMATEUR 77291	61-01-69834	0	61	0	40.2000000000000028	0.00600000000000000012	0	0	0.86619999999999997	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000299	TRANSFORMATEUR 77291	51016112	0	58	0	47.3999999999999986	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000300	TRANSFORMATEUR 77291	91-03E7300-004	0	60	0	47.7000000000000028	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000301	TRANSFORMATEUR 77291	91-037299-003	0	55	0	47.3999999999999986	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000302	TRANSFORMATEUR 77291	A32S-0174	0	59	0	40.3999999999999986	0.00600000000000000012	0	0	0.865900000000000003	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000303	TRANSFORMATEUR 77291	91-03E7301-003	0	57	0	47.7999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000304	TRANSFORMATEUR 77291	91-03E7298-002	0	60	0	46.7999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000305	TRANSFORMATEUR 77291	B32S-0175	0	52	0	39.3999999999999986	0.00800000000000000017	0	0	0.865399999999999947	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000306	TRANSFORMATEUR 77291	91-03E7298-003	0	56	0	45.7000000000000028	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000307	TRANSFORMATEUR 77291	91-03E7299-001	0	60	0	48.3999999999999986	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000308	TRANSFORMATEUR 77291	B32S-0174	0	53	0	40.7999999999999972	0.00800000000000000017	0	0	0.864900000000000002	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000309	TRANSFORMATEUR 77291	91-03E7299-002	0	50	0	47.7999999999999972	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000310	TRANSFORMATEUR 77291	91-03E7300-001	0	56	0	46.7999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000311	TRANSFORMATEUR 77291	91-03E7300-002	0	53	0	47.2999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000312	TRANSFORMATEUR 77291	91-03E7298-001	0	57	0	48.1000000000000014	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000313	TRANSFORMATEUR 77291	91-03E7300-006	0	59	0	46.7000000000000028	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000314	TRANSFORMATEUR 77291	91-03E7299-005	0	54	0	48.5	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000315	TRANSFORMATEUR 77291	91-03E7303-001	0	60	0	46.2999999999999972	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000316	TRANSFORMATEUR 77291	91-03E7255-001	0	58	0	46.2999999999999972	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000317	TRANSFORMATEUR 77291	91-03E7344-001	0	58	0	47.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000318	TRANSFORMATEUR 77291	W0582-001	0	52	0	43.8999999999999986	0.00600000000000000012	0	0	0.881399999999999961	0	0	0	4	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000319	TRANSFORMATEUR 77291	91-03E7344-002	0	60	0	46.7999999999999972	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000320	TRANSFORMATEUR 77291	91-03E7302-004	0	54	0	46.2999999999999972	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000321	TRANSFORMATEUR 77291	91-03E7302-003	0	57	0	46.8999999999999986	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000322	TRANSFORMATEUR 77291	91-03E7302-002	0	55	0	46.5	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000323	TRANSFORMATEUR 77291	91-03E7299-004	0	54	0	47.7999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000324	TRANSFORMATEUR 77291	61-0169835	0	60	0	42.3999999999999986	0.0109999999999999994	0	0	0.86619999999999997	0	0	0	1.5	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000325	TRANSFORMATEUR 77291	51016109	0	55	0	44.1000000000000014	0.0050000000000000001	0	0	0.864099999999999979	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000327	TRANSFORMATEUR 77291	51016111	0	60	0	41.3999999999999986	0.00600000000000000012	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000328	TRANSFORMATEUR 77291	7853084	0	60	0	47.3999999999999986	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000329	TRANSFORMATEUR 77291	51016108	0	58	0	45.5	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000330	TRANSFORMATEUR 77291	7853085	0	56	0	46.8999999999999986	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000331	TRANSFORMATEUR 77291	61-01-69834	0	60	0	42.2000000000000028	0.0120000000000000002	0	0	0.866399999999999948	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000332	TRANSFORMATEUR 77291	6394-0101	0	57	0	46.7000000000000028	0.0140000000000000003	0	0	0.882399999999999962	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000333	TRANSFORMATEUR 77291	1132787	0	60	0	43.8999999999999986	0.00300000000000000006	0	0	0.86839999999999995	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
ALUSEPMS 000039	REDRESSEUR 25	160087	0	64	0	51.7000000000000028	0.00300000000000000006	0	0.0630000000000000004	0.874099999999999988	0	0	0	0.5	0	0	 	Claire	\N	f	f	f	f	f	t	f	f	t	t	f	f	t	f	f	f	t	f	f	f	t
AluSepABC000334	TRANSFORMATEUR 77291	91-03E7301-004	0	59	0	48.7999999999999972	0.00300000000000000006	0	0	0.864500000000000046	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000335	TX PC # 173-B	XC030-001	0	60	0	44.6000000000000014	0.00800000000000000017	0	0	0.880800000000000027	0	0	0	3	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000336	TRANSFORMATEUR 77291	A32S0251	0	56	0	44.1000000000000014	0.00600000000000000012	0	0	0.865500000000000047	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000337	TRANSFORMATEUR 77291	51016113	0	58	0	40.6000000000000014	0.00899999999999999932	0	0	0.864700000000000024	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000338	TRANSFORMATEUR 77291	91-03E7301-005	0	56	0	46.8999999999999986	0.00300000000000000006	0	0	0.862099999999999977	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000339	TRANSFORMATEUR 77291	7853086	0	55	0	46.7999999999999972	0.00300000000000000006	0	0	0.864299999999999957	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000340	TRANSFORMATEUR 77291	4046506001	0	0	55	0	0.00300000000000000006	0	0	0.968799999999999994	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000341	TRANSFORMATEUR 77291	A32S0175	0	57	0	39.3999999999999986	0.0109999999999999994	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000342	TRANSFORMATEUR 77291	91-03E7303-002	0	56	0	47.2000000000000028	0.00300000000000000006	0	0	0.860899999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000343	TRANSFORMATEUR 77291	91-03E7300-005	0	58	0	45.7999999999999972	0.00600000000000000012	0	0	0.863600000000000034	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000344	TRANSFORMATEUR 77291	91-03E7302-001	0	54	0	42.7999999999999972	0.00899999999999999932	0	0	0.86399999999999999	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000345	TRANSFORMATEUR 77291	91-03E7301-006	0	51	0	47.2000000000000028	0.00300000000000000006	0	0	0.862600000000000033	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000346	TRANSFORMATEUR 77291	91-03E7300-003	0	56	0	44.8999999999999986	0.00600000000000000012	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000347	TRANSFORMATEUR 77291	91-03E7301-002	0	53	0	46.7000000000000028	0.00300000000000000006	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000348	TRANSFORMATEUR 77291	91-03E7301-001	0	58	0	46.2000000000000028	0.00300000000000000006	0	0	0.862500000000000044	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000349	TRANSFORMATEUR 77291	7853088	0	55	0	45.7000000000000028	0.00600000000000000012	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000350	TRANSFORMATEUR 77291	7853087	0	55	0	46.7000000000000028	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000351	TRANSFORMATEUR 77291	7853083	0	59	0	46.6000000000000014	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000352	TRANSFORMATEUR 77291	91-03E7302-005	0	60	0	44.7999999999999972	0.00600000000000000012	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000353	TRANSFORMATEUR 77291	51016108	0	59	0	47.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000354	TRANSFORMATEUR 77291	7853085	0	56	0	49.6000000000000014	0.00300000000000000006	0	0	0.866900000000000004	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000355	TRANSFORMATEUR 77291	7853084	0	60	0	48.2999999999999972	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000356	TRANSFORMATEUR 77291	7853083	0	57	0	48.5	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000357	TRANSFORMATEUR 77291	7853086	0	74	0	48.3999999999999986	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000358	TRANSFORMATEUR 77291	1132787	0	42	0	45.7999999999999972	0.00300000000000000006	0	0	0.868900000000000006	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000359	TRANSFORMATEUR 77291	51016111	0	54	0	46.8999999999999986	0.00600000000000000012	0	0	0.86509999999999998	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000360	TRANSFORMATEUR 77291	61-01-69834	0	67	0	43.7999999999999972	0.00600000000000000012	0	0	0.867099999999999982	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000361	TRANSFORMATEUR 77291	61-0169835	0	64	0	43.6000000000000014	0.00600000000000000012	0	0	0.866600000000000037	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000362	TRANSFORMATEUR 77291	51016109	0	60	0	45.6000000000000014	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000363	TRANSFORMATEUR 77291	91-03E7300-006	0	51	0	48.2000000000000028	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000364	TRANSFORMATEUR 77291	91-03E7300-001	0	55	0	46.2999999999999972	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000365	TRANSFORMATEUR 77291	91-03E7303-002	0	65	0	48.7000000000000028	0.00300000000000000006	0	0	0.863700000000000023	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000366	TRANSFORMATEUR 77291	91-03E7303-001	0	59	0	48.8999999999999986	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000367	TRANSFORMATEUR 77291	91-03E7302-005	0	56	0	45.2999999999999972	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000368	TRANSFORMATEUR 77291	91-03E7302-004	0	56	0	48.5	0.00300000000000000006	0	0	0.86619999999999997	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000369	TRANSFORMATEUR 77291	91-03E7302-002	0	59	0	45.5	0.00300000000000000006	0	0	0.866700000000000026	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000370	TRANSFORMATEUR 77291	91-03E7301-003	0	53	0	48.7999999999999972	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000371	TRANSFORMATEUR 77291	91-03E7298-002	0	60	0	46.2000000000000028	0.00300000000000000006	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000372	TRANSFORMATEUR 77291	91-03E7300-005	0	58	0	47.2999999999999972	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000373	TRANSFORMATEUR 77291	91-03E7300-003	0	48	0	47.5	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000374	TRANSFORMATEUR 77291	91-03E7300-002	0	57	0	48.1000000000000014	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000375	TRANSFORMATEUR 77291	W0582-001	0	60	0	44.7999999999999972	0.0210000000000000013	0	0	0.882600000000000051	0	0	0	4	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000376	TRANSFORMATEUR 77291	91-03E7302-001	0	48	0	44.5	0.00300000000000000006	0	0	0.866099999999999981	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000377	TRANSFORMATEUR 77291	91-03E7344-002	0	64	0	48	0.00300000000000000006	0	0	0.865600000000000036	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000378	TRANSFORMATEUR 77291	4046506001	0	0	54	0	0.00300000000000000006	0	0	0.96830000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000379	TRANSFORMATEUR 77291	SET6394-0101	0	57	0	47.5	0.00899999999999999932	0	0	0.883900000000000019	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000380	TRANSFORMATEUR 77291	91-03E7344-001	0	60	0	47.8999999999999986	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000381	TRANSFORMATEUR 77291	B32S-0175	0	59	0	40.3999999999999986	0.0050000000000000001	0	0	0.865800000000000014	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000382	TRANSFORMATEUR 77291	91-03E7301-004	0	56	0	50.8999999999999986	0.00300000000000000006	0	0	0.866099999999999981	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000383	TRANSFORMATEUR 77291	7853088	0	50	0	46.7999999999999972	0.00300000000000000006	0	0	0.866900000000000004	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000384	TRANSFORMATEUR 77291	51016113	0	69	0	42.1000000000000014	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000385	TRANSFORMATEUR 77291	7853087	0	42	0	48.6000000000000014	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000386	TRANSFORMATEUR 77291	91-03E7255-001	0	60	0	46.3999999999999986	0.00300000000000000006	0	0	0.866299999999999959	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000387	TRANSFORMATEUR 77291	91-03E7300-004	0	50	0	48.7999999999999972	0.00300000000000000006	0	0	0.863900000000000001	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000388	TRANSFORMATEUR 77291	91-03E7301-001	0	54	0	47.6000000000000014	0.00300000000000000006	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000389	TRANSFORMATEUR 77291	91-03E7299-005	0	60	0	48.6000000000000014	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000390	TRANSFORMATEUR 77291	B32S-0174	0	58	0	41.8999999999999986	0.0129999999999999994	0	0	0.866800000000000015	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000391	TRANSFORMATEUR 77291	91-037299-003	0	59	0	47.6000000000000014	0.00300000000000000006	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000392	TRANSFORMATEUR 77291	91-03E7299-004	0	60	0	50.6000000000000014	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000393	TRANSFORMATEUR 77291	91-03E7299-002	0	59	0	48.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000394	TRANSFORMATEUR 77291	91-03E7299-001	0	57	0	46.3999999999999986	0.00300000000000000006	0	0	0.865199999999999969	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000395	TRANSFORMATEUR 77291	91-03E7301-002	0	53	0	48.2999999999999972	0.00300000000000000006	0	0	0.862099999999999977	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000396	TRANSFORMATEUR 77291	91-03E7298-003	0	62	0	45.6000000000000014	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000397	TRANSFORMATEUR 77291	91-03E7301-005	0	44	0	47.7999999999999972	0.00300000000000000006	0	0	0.864099999999999979	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000398	TRANSFORMATEUR 77291	91-03E7298-001	0	56	0	45.6000000000000014	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000399	TRANSFORMATEUR 77291	A325-0251	0	52	0	45.5	0.00300000000000000006	0	0	0.866600000000000037	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000400	TX PC # 173-B	XC030-001	0	60	0	46.2000000000000028	0.0050000000000000001	0	0	0.8871	0	0	0	2.5	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000401	TRANSFORMATEUR 77291	91-03E7302-003	0	58	0	47.6000000000000014	0.00300000000000000006	0	0	0.865700000000000025	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000402	TRANSFORMATEUR 77291	A32S-0174	0	60	0	42.2000000000000028	0.0050000000000000001	0	0	0.866600000000000037	0	0	0	1.5	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000403	TRANSFORMATEUR 77291	A325-0175	0	60	0	41.1000000000000014	0.0149999999999999994	0	0	0.867600000000000038	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000404	TRANSFORMATEUR 77291	91-03E7301-006	0	52	0	48.7999999999999972	0.00300000000000000006	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000405	TRANSFORMATEUR 77291	51016112	0	47	0	47.2000000000000028	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000406	TRANSFORMATEUR 77291	51016110	0	49	0	48.8999999999999986	0.00600000000000000012	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000407	TRANSFORMATEUR 77291	7853084	0	0	48	47.7000000000000028	0.00300000000000000006	0	0	0.866299999999999959	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000408	TRANSFORMATEUR 77291	7853083	0	0	49	48.8999999999999986	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000409	TRANSFORMATEUR 77291	7853088	0	0	50	45.7000000000000028	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000410	TRANSFORMATEUR 77291	7853087	0	0	48	45.1000000000000014	0.00600000000000000012	0	0	0.866500000000000048	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000411	TRANSFORMATEUR 77291	1132787	0	0	63	45.8999999999999986	0.00600000000000000012	0	0	0.86850000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000412	TRANSFORMATEUR 77291	7853086	0	0	45	46.8999999999999986	0.00300000000000000006	0	0	0.866299999999999959	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000413	TRANSFORMATEUR 77291	7853085	0	0	26	46.2000000000000028	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000414	TRANSFORMATEUR 77291	51016110	0	0	54	47.5	0.00600000000000000012	0	0	0.865399999999999947	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000415	TRANSFORMATEUR 77291	51016108	0	0	57	47.6000000000000014	0.00600000000000000012	0	0	0.864399999999999946	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000416	TRANSFORMATEUR 77291	51016111	0	0	54	47.5	0.00600000000000000012	0	0	0.864900000000000002	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000417	TRANSFORMATEUR 77291	51016113	0	0	47	45.8999999999999986	0.00600000000000000012	0	0	0.866399999999999948	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000418	TRANSFORMATEUR 77291	51016112	0	0	54	48.6000000000000014	0.0050000000000000001	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000419	TRANSFORMATEUR 77291	51016109	0	0	49	46.5	0.00600000000000000012	0	0	0.865399999999999947	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000420	TRANSFORMATEUR 77291	91-03E7302-002	0	55	0	42.7999999999999972	0.00600000000000000012	0	0	0.864800000000000013	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000421	TRANSFORMATEUR 77291	91-03E7344-002	0	40	0	45.5	0.00600000000000000012	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000422	TRANSFORMATEUR 77291	91-03E7300-002	0	55	0	45.6000000000000014	0.00600000000000000012	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000423	TRANSFORMATEUR 77291	91-03E7303-001	0	45	0	46.7999999999999972	0.00600000000000000012	0	0	0.862800000000000011	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000424	TRANSFORMATEUR 77291	91-03E7298-001	0	47	0	46.8999999999999986	0.00600000000000000012	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000425	TRANSFORMATEUR 77291	B32S-0175	0	44	0	33.2000000000000028	0.0219999999999999987	0	0	0.866700000000000026	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000426	TRANSFORMATEUR 77291	91-03E7301-006	0	59	0	46.8999999999999986	0.00300000000000000006	0	0	0.862199999999999966	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000427	TRANSFORMATEUR 77291	91-03E7298-003	0	50	0	45.5	0.00800000000000000017	0	0	0.863800000000000012	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000428	TRANSFORMATEUR 77291	91-03E7301-002	0	39	0	45.2999999999999972	0.0050000000000000001	0	0	0.863299999999999956	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000429	TRANSFORMATEUR 77291	A32S-0174	0	57	0	40.1000000000000014	0.00800000000000000017	0	0	0.864700000000000024	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000430	TRANSFORMATEUR 77291	91-03E7302-004	0	50	0	46.2999999999999972	0.00600000000000000012	0	0	0.864700000000000024	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000431	TRANSFORMATEUR 77291	91-03E7303-002	0	49	0	45.5	0.00600000000000000012	0	0	0.861700000000000021	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000432	TRANSFORMATEUR 77291	A325-0251	0	51	0	42.8999999999999986	0.00600000000000000012	0	0	0.862700000000000022	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000433	TRANSFORMATEUR 77291	91-03E7344-001	0	42	0	46.6000000000000014	0.0050000000000000001	0	0	0.870099999999999985	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000434	TRANSFORMATEUR 77291	6394-0101	0	57	0	45.5	0.00899999999999999932	0	0	0.88270000000000004	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000435	TRANSFORMATEUR 77291	91-03E7300-003	0	58	0	44.8999999999999986	0.00600000000000000012	0	0	0.862199999999999966	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000436	TRANSFORMATEUR 77291	91-03E7300-006	0	54	0	45.5	0.00600000000000000012	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000437	TRANSFORMATEUR 77291	91-03E7301-003	0	50	0	45.6000000000000014	0.00899999999999999932	0	0	0.863700000000000023	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000438	TRANSFORMATEUR 77291	91-03E7301-005	0	55	0	46.2000000000000028	0.00800000000000000017	0	0	0.862199999999999966	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000439	TX PC # 173-B	XC030-001	0	50	0	42.1000000000000014	0.00600000000000000012	0	0	0.881800000000000028	0	0	0	3	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000440	TRANSFORMATEUR 77291	91-03E7301-004	0	57	0	47	0.00600000000000000012	0	0	0.864199999999999968	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000441	TRANSFORMATEUR 77291	91-037299-003	0	56	0	46.1000000000000014	0.00600000000000000012	0	0	0.860199999999999965	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000442	TRANSFORMATEUR 77291	B32S-0174	0	58	0	39.7000000000000028	0.00899999999999999932	0	0	0.863600000000000034	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000443	TRANSFORMATEUR 77291	91-03E7300-001	0	48	0	43.7999999999999972	0.00800000000000000017	0	0	0.863099999999999978	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000444	TRANSFORMATEUR 77291	4046506001	0	0	45	0	0.00300000000000000006	0	0	0.96599999999999997	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000445	TRANSFORMATEUR 77291	W0582-001	0	55	0	42.7000000000000028	0.0189999999999999995	0	0	0.860600000000000032	0	0	0	4	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000446	TRANSFORMATEUR 77291	91-03E7302-001	0	51	0	42.5	0.0050000000000000001	0	0	0.862600000000000033	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000447	TRANSFORMATEUR 77291	91-03E7300-005	0	41	0	44.7999999999999972	0.0050000000000000001	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000448	TRANSFORMATEUR 77291	91-03E7302-005	0	56	0	43.7000000000000028	0.00600000000000000012	0	0	0.863600000000000034	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000449	TRANSFORMATEUR 77291	91-03E7255-001	0	53	0	44.5	0.00600000000000000012	0	0	0.862600000000000033	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000450	TRANSFORMATEUR 77291	61-0169835	0	60	0	43	0.00600000000000000012	0	0	0.86509999999999998	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000451	TRANSFORMATEUR 77291	7853085	0	59	0	44.6000000000000014	0.00600000000000000012	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000452	TRANSFORMATEUR 77291	51016108	0	47	0	43.7000000000000028	0.00600000000000000012	0	0	0.862600000000000033	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000453	TRANSFORMATEUR 77291	51016109	0	55	0	43.1000000000000014	0.0050000000000000001	0	0	0.863600000000000034	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000454	TRANSFORMATEUR 77291	1132787	0	57	0	42.7999999999999972	0.00600000000000000012	0	0	0.867600000000000038	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000455	TRANSFORMATEUR 77291	7853083	0	52	0	45.7000000000000028	0.00600000000000000012	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000456	TRANSFORMATEUR 77291	7853084	0	46	0	46.2999999999999972	0.0050000000000000001	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000457	TRANSFORMATEUR 77291	61-01-69834	0	55	0	41.8999999999999986	0.0050000000000000001	0	0	0.864600000000000035	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000458	TRANSFORMATEUR 77291	91-03E7299-002	0	60	0	46.2000000000000028	0.0050000000000000001	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000459	TRANSFORMATEUR 77291	91-03E7301-001	0	53	0	45.7999999999999972	0.0050000000000000001	0	0	0.862600000000000033	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000460	TRANSFORMATEUR 77291	91-03E7299-001	0	57	0	46.7999999999999972	0.00600000000000000012	0	0	0.864099999999999979	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000461	TRANSFORMATEUR 77291	91-03E7302-003	0	57	0	46.2999999999999972	0.00300000000000000006	0	0	0.861099999999999977	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000462	TRANSFORMATEUR 77291	91-03E7300-004	0	23	0	45.5	0.00600000000000000012	0	0	0.862099999999999977	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000463	TRANSFORMATEUR 77291	91-03E7299-005	0	55	0	46.2000000000000028	0.0050000000000000001	0	0	0.863600000000000034	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000464	TRANSFORMATEUR 77291	91-03E7298-002	0	50	0	44.8999999999999986	0.00600000000000000012	0	0	0.864099999999999979	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000465	TRANSFORMATEUR 77291	A325-0175	0	48	0	39.7999999999999972	0.00899999999999999932	0	0	0.864600000000000035	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000466	TRANSFORMATEUR 77291	91-03E7299-004	0	60	0	46.1000000000000014	0.00600000000000000012	0	0	0.861600000000000033	0	0	0	1	0	0	 	0	0	f	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000467	TRANSFORMATEUR 77291	51016111	0	41	0	41.3999999999999986	0.00600000000000000012	0	0	0.86509999999999998	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000468	TRANSFORMATEUR 77291	7853088	0	56	0	42.7999999999999972	0.00300000000000000006	0	0	0.864099999999999979	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000469	TRANSFORMATEUR 77291	7853086	0	43	0	45	0.00600000000000000012	0	0	0.864099999999999979	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000470	TRANSFORMATEUR 77291	7853087	0	43	0	42.6000000000000014	0.00600000000000000012	0	0	0.866600000000000037	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000471	TRANSFORMATEUR 77291	51016113	0	53	0	40	0.00899999999999999932	0	0	0.863600000000000034	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000472	TRANSFORMATEUR 77291	4046506001	0	0	42	0	0.00400000000000000008	0	0	0.966799999999999993	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000473	TRANSFORMATEUR 77291	91-03E7303-001	0	45	0	50.2000000000000028	0.00400000000000000008	0	0	0.864199999999999968	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000474	TRANSFORMATEUR 77291	91-03E7299-002	0	47	0	50.2999999999999972	0.00400000000000000008	0	0	0.864700000000000024	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000475	TRANSFORMATEUR 77291	91-03E7344-001	0	43	0	48.1000000000000014	0.00899999999999999932	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000476	TRANSFORMATEUR 77291	91-03E7298-002	0	59	0	49.7000000000000028	0.00400000000000000008	0	0	0.863500000000000045	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000477	TRANSFORMATEUR 77291	91-03E7300-006	0	37	0	48.3999999999999986	0.0100000000000000002	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000478	TRANSFORMATEUR 77291	91-03E7302-002	0	40	0	47.7999999999999972	0.00600000000000000012	0	0	0.866299999999999959	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000479	TRANSFORMATEUR 77291	91-03E7344-002	0	24	0	47.7999999999999972	0.00300000000000000006	0	0	0.86619999999999997	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000480	TRANSFORMATEUR 77291	91-03E7299-005	0	34	0	48.8999999999999986	0.00600000000000000012	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000481	TRANSFORMATEUR 77291	91-03E7303-002	0	38	0	52.3999999999999986	0.0539999999999999994	0	0	0.863299999999999956	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000482	TRANSFORMATEUR 77291	91-03E7300-003	0	45	0	50.7999999999999972	0.00700000000000000015	0	0	0.864299999999999957	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000483	TRANSFORMATEUR 77291	A32S-0174	0	39	0	41.5	0.0250000000000000014	0	0	0.866999999999999993	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000484	TRANSFORMATEUR 77291	91-03E7300-004	0	32	0	47.6000000000000014	0.00400000000000000008	0	0	0.864800000000000013	0	0	0	0.100000000000000006	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000485	TRANSFORMATEUR 77291	91-03E7301-001	0	35	0	48.2999999999999972	0.00700000000000000015	0	0	0.863600000000000034	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000486	TRANSFORMATEUR 77291	91-03E7299-001	0	48	0	50	0.00400000000000000008	0	0	0.86619999999999997	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000487	TRANSFORMATEUR 77291	91-03E7300-005	0	35	0	48.6000000000000014	0.0160000000000000003	0	0	0.864600000000000035	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000488	TRANSFORMATEUR 77291	91-03E7301-005	0	53	0	49.3999999999999986	0.00400000000000000008	0	0	0.86399999999999999	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000489	TRANSFORMATEUR 77291	91-03E7302-003	0	52	0	50.3999999999999986	0.00400000000000000008	0	0	0.863900000000000001	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000490	TRANSFORMATEUR 77291	91-03E7301-002	0	46	0	49.3999999999999986	0.00400000000000000008	0	0	0.8629	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000491	TRANSFORMATEUR 77291	91-03E7302-001	0	46	0	46.3999999999999986	0.00400000000000000008	0	0	0.865900000000000003	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000492	TRANSFORMATEUR 77291	91-03E7300-002	0	57	0	48.2000000000000028	0.00400000000000000008	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000493	TRANSFORMATEUR 77291	91-03E7301-006	0	46	0	50.6000000000000014	0.00400000000000000008	0	0	0.862500000000000044	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000494	TRANSFORMATEUR 77291	91-03E7301-003	0	52	0	51.2999999999999972	0.00400000000000000008	0	0	0.862999999999999989	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000495	TRANSFORMATEUR 77291	A32S0251	0	50	0	45.6000000000000014	0.00400000000000000008	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000496	TRANSFORMATEUR 77291	91-03E7299-004	0	49	0	49.7999999999999972	0.00400000000000000008	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000497	TX PC # 173-B	XC030-001	0	54	0	48.6000000000000014	0.00400000000000000008	0	0	0.882499999999999951	0	0	0	2.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000498	TRANSFORMATEUR 77291	91-03E7298-003	0	22	0	47.7000000000000028	0.00400000000000000008	0	0	0.864700000000000024	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000499	TRANSFORMATEUR 77291	6394-0101	0	40	0	48.2999999999999972	0.0100000000000000002	0	0	0.883600000000000052	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000500	TRANSFORMATEUR 77291	91-03E7255-001	0	41	0	46.7999999999999972	0.00400000000000000008	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000501	TRANSFORMATEUR 77291	91-03E7301-004	0	42	0	50.3999999999999986	0.00400000000000000008	0	0	0.865999999999999992	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000502	TRANSFORMATEUR 77291	91-03E7298-001	0	35	0	48.3999999999999986	0.00400000000000000008	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000503	TRANSFORMATEUR 77291	91-03E7302-004	0	51	0	53.2000000000000028	0.00700000000000000015	0	0	0.864500000000000046	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000504	TRANSFORMATEUR 77291	A32S0175	0	44	0	40.8999999999999986	0.00800000000000000017	0	0	0.866399999999999948	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000505	TRANSFORMATEUR 77291	W0582-001	0	56	0	48.7999999999999972	0.0170000000000000012	0	0	0.876000000000000001	0	0	0	4	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000506	TRANSFORMATEUR 77291	B32S-0175	0	46	0	40.8999999999999986	0.00800000000000000017	0	0	0.865999999999999992	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000507	TRANSFORMATEUR 77291	7853084	0	53	0	49	0.00600000000000000012	0	0	0.866099999999999981	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000508	TRANSFORMATEUR 77291	61-0169835	0	62	0	47.5	0.00400000000000000008	0	0	0.867199999999999971	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000509	TRANSFORMATEUR 77291	51016113	0	34	0	45	0.00400000000000000008	0	0	0.86509999999999998	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000510	TRANSFORMATEUR 77291	51016112	0	38	0	50.6000000000000014	0.00400000000000000008	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000511	TRANSFORMATEUR 77291	51016111	0	46	0	46.5	0.00400000000000000008	0	0	0.86509999999999998	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000512	TRANSFORMATEUR 77291	7853083	0	58	0	48.3999999999999986	0.00400000000000000008	0	0	0.865600000000000036	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000513	TRANSFORMATEUR 77291	7853088	0	43	0	51	0.00400000000000000008	0	0	0.866099999999999981	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000514	TRANSFORMATEUR 77291	7853087	0	62	0	46.2999999999999972	0.00700000000000000015	0	0	0.866700000000000026	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000515	TRANSFORMATEUR 77291	1132787	0	43	0	50.2000000000000028	0.00400000000000000008	0	0	0.869700000000000029	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000516	TRANSFORMATEUR 77291	91-037299-003	0	40	0	50	0.00400000000000000008	0	0	0.864500000000000046	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000517	TRANSFORMATEUR 77291	51016109	0	44	0	45.6000000000000014	0.00899999999999999932	0	0	0.865900000000000003	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000518	TRANSFORMATEUR 77291	91-03E7300-001	0	58	0	42.6000000000000014	0.00400000000000000008	0	0	0.864999999999999991	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000519	TRANSFORMATEUR 77291	61-01-69834	0	39	0	50.5	0.00899999999999999932	0	0	0.868099999999999983	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000520	TRANSFORMATEUR 77291	B32S-0174	0	37	0	41	0.00800000000000000017	0	0	0.866500000000000048	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000521	TRANSFORMATEUR 77291	51016108	0	51	0	46.7999999999999972	0.00400000000000000008	0	0	0.86399999999999999	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000522	TRANSFORMATEUR 77291	51016110	0	48	0	47.7000000000000028	0.00400000000000000008	0	0	0.864999999999999991	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000523	TRANSFORMATEUR 77291	7853086	0	59	0	47.6000000000000014	0.00400000000000000008	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000524	TRANSFORMATEUR 77291	7853085	0	42	0	46.3999999999999986	0.00899999999999999932	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000525	TRANSFORMATEUR 77291	91-03E7302-005	0	45	0	48.2999999999999972	0.00400000000000000008	0	0	0.865999999999999992	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000526	TRANSFORMATEUR 77291	91-03E7302-002	0	51	0	45.7000000000000028	0.00300000000000000006	0	0	0.86839999999999995	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000527	TRANSFORMATEUR 77291	61-01-69834	0	59	0	44.2999999999999972	0.00300000000000000006	0	0	0.868800000000000017	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000528	TRANSFORMATEUR 77291	7853086	0	57	0	46.1000000000000014	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000529	TRANSFORMATEUR 77291	51016111	0	36	0	44.2999999999999972	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000530	TRANSFORMATEUR 77291	51016110	0	34	0	43.8999999999999986	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000531	TRANSFORMATEUR 77291	51016108	0	51	0	45	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000532	TRANSFORMATEUR 77291	51016109	0	37	0	42.8999999999999986	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000533	TRANSFORMATEUR 77291	7853083	0	44	0	45.8999999999999986	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000534	TRANSFORMATEUR 77291	61-0169835	0	59	0	45.8999999999999986	0.00100000000000000002	0	0	0.868800000000000017	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000535	TRANSFORMATEUR 77291	7853085	0	51	0	46.3999999999999986	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000536	TRANSFORMATEUR 77291	7853087	0	39	0	46.5	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000537	TRANSFORMATEUR 77291	1132787	0	54	0	45	0.00300000000000000006	0	0	0.870800000000000018	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000538	TRANSFORMATEUR 77291	7853088	0	53	0	46	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000539	TRANSFORMATEUR 77291	7853084	0	54	0	46.5	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000540	TRANSFORMATEUR 77291	B32S-0175	0	58	0	39.2000000000000028	0.0100000000000000002	0	0	0.867399999999999949	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000541	TRANSFORMATEUR 77291	91-03E7344-001	0	49	0	46.6000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000542	TRANSFORMATEUR 77291	91-03E7300-001	0	59	0	46.3999999999999986	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000543	TRANSFORMATEUR 77291	91-03E7303-002	0	47	0	46.7999999999999972	0.00300000000000000006	0	0	0.863399999999999945	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000544	TRANSFORMATEUR 77291	91-03E7300-002	0	56	0	46.8999999999999986	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000545	TRANSFORMATEUR 77291	91-03E7301-005	0	59	0	47	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000546	TRANSFORMATEUR 77291	6394-0101	0	58	0	47	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000547	TRANSFORMATEUR 77291	91-03E7301-004	0	36	0	48	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000548	TRANSFORMATEUR 77291	91-03E7298-001	0	58	0	47	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000549	TRANSFORMATEUR 77291	4046506001	0	0	39	0	0.00300000000000000006	0	0	0.96830000000000005	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000550	TRANSFORMATEUR 77291	91-03E7300-003	0	59	0	46	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000551	TX PC # 173-B	XC030-001	0	59	0	42.6000000000000014	0.00300000000000000006	0	0	0.884399999999999964	0	0	0	2	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000552	TRANSFORMATEUR 77291	91-03E7298-002	0	60	0	45.1000000000000014	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000553	TRANSFORMATEUR 77291	B32S-0174	0	55	0	40.2000000000000028	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000554	TRANSFORMATEUR 77291	91-03E7301-001	0	59	0	46.2999999999999972	0.00300000000000000006	0	0	0.864399999999999946	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000555	TRANSFORMATEUR 77291	91-03E7300-005	0	60	0	46.2000000000000028	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000556	TRANSFORMATEUR 77291	91-03E7303-001	0	57	0	47.7000000000000028	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000557	TRANSFORMATEUR 77291	A32S-0174	0	61	0	40.6000000000000014	0.0100000000000000002	0	0	0.86839999999999995	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000558	TRANSFORMATEUR 77291	91-03E7299-002	0	58	0	47	0.00300000000000000006	0	0	0.864800000000000013	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000559	TRANSFORMATEUR 77291	91-037299-003	0	52	0	47.2000000000000028	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000560	TRANSFORMATEUR 77291	91-03E7299-004	0	59	0	47.7000000000000028	0.00300000000000000006	0	0	0.865900000000000003	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000561	TRANSFORMATEUR 77291	91-03E7299-005	0	60	0	46.8999999999999986	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000562	TRANSFORMATEUR 77291	91-03E7301-003	0	59	0	46	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000563	TRANSFORMATEUR 77291	91-03E7255-001	0	60	0	45.7000000000000028	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000564	TRANSFORMATEUR 77291	91-03E7300-006	0	59	0	46.7000000000000028	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000565	TRANSFORMATEUR 77291	91-03E7298-003	0	60	0	45	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000566	TRANSFORMATEUR 77291	91-03E7302-004	0	60	0	46.7999999999999972	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000567	TRANSFORMATEUR 77291	A32S0251	0	42	0	42.8999999999999986	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000568	TRANSFORMATEUR 77291	91-03E7301-006	0	53	0	47	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000569	TRANSFORMATEUR 77291	91-03E7300-004	0	46	0	46.3999999999999986	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000570	TRANSFORMATEUR 77291	91-03E7299-001	0	58	0	47.2000000000000028	0.00300000000000000006	0	0	0.866399999999999948	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000571	TRANSFORMATEUR 77291	91-03E7301-002	0	58	0	47	0.00300000000000000006	0	0	0.865399999999999947	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000572	TRANSFORMATEUR 77291	A32S0175	0	61	0	38.8999999999999986	0.0149999999999999994	0	0	0.867399999999999949	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000573	TRANSFORMATEUR 77291	91-03E7302-001	0	56	0	43.6000000000000014	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000574	TRANSFORMATEUR 77291	91-03E7302-005	0	50	0	45.5	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000575	TRANSFORMATEUR 77291	51016112	0	39	0	44.6000000000000014	0.00300000000000000006	0	0	0.866800000000000015	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000576	TRANSFORMATEUR 77291	51016113	0	43	0	37.7000000000000028	0.00300000000000000006	0	0	0.867800000000000016	0	0	0	1.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000577	TRANSFORMATEUR 77291	W0582-001	0	41	0	41	0.0140000000000000003	0	0	0.882800000000000029	0	0	0	1	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000578	TRANSFORMATEUR 77291	91-03E7344-002	0	54	0	46.5	0.00300000000000000006	0	0	0.867399999999999949	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
AluSepABC000579	TRANSFORMATEUR 77291	91-03E7302-003	0	29	0	47	0.00300000000000000006	0	0	0.865800000000000014	0	0	0	0.5	0	0	 	0	0	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f
ALUSEPMS 000016	REDRESSEUR 25	160087	0	45	0	51.1000000000000014	0.00300000000000000006	0	0.0630000000000000004	0.873700000000000032	0	0	0	0.5	0	0	 	Claire	\N	f	f	f	f	f	t	f	f	t	t	f	t	t	f	f	f	t	f	f	f	t
\.


--
-- Data for Name: Particules; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Particules" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "2um", "5um", "10um", "15um", "25um", "50um", "100um", "ISO4406_1", "ISO4406_2", "ISO4406_3", "NAS1638") FROM stdin;
ALUSEPMS 000042	160087	REDRESSEUR 25	19919	7664.5	2834.5	1181.5	316	38.5	4.5	17	16	13	0
\.


--
-- Data for Name: ProfilEchantFluid; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "ProfilEchantFluid" ("NoProfil", "Description", "Period", "GD", "EAU_SER", "ANT_SER", "BPC_SER", "Lieu_SER", "EAU_POT", "ANT_POT", "BPC_POT", "PAR", "MDH", "TestD1816", "TestD1816_2", "TestD877", "TestCEI156", "TestIFT", "TestAcid", "TestFacteurP", "TestFacteurP100", "TestDensite", "TestPEclair", "TestPEcoulement", "TestViscosite", "TestCouleur", "TestFBoue", "TestPAniline", "TestSCorrosif", "TestVisuel", "Lieu_POT", "EAU_FIO", "ANT_FIO", "BPC_FIO", "Lieu_FIO", "FUR_SER", "FUR_POT") FROM stdin;
HDEP	Tracking	\N	t	f	f	f	1	f	f	f	f	f	t	f	f	f	t	t	f	f	f	f	f	f	t	f	f	f	t	1	f	f	f	1	f	f
HEVAL	Evaluation	\N	t	t	t	f	1	f	f	f	t	f	t	f	f	f	t	t	t	t	f	f	f	f	t	f	f	f	t	1	f	f	f	1	t	f
TOPS	Essai complet	\N	f	f	f	f	0	f	f	f	f	f	t	f	f	f	t	t	t	t	t	t	t	t	t	t	f	t	t	1	f	f	f	1	f	f
\.


--
-- Data for Name: ProfilTestElec; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "ProfilTestElec" ("NoProfil", "Description", "Period", "TRAV", "RES_ISOL", "BOB_PF", "BOB_PF_DOB", "DP", "BOB_RES", "INSP_VIS", "TTR") FROM stdin;
EDEP	Tracking	\N	f	t	t	f	f	f	t	f
EEVAL	Evaluation	\N	f	t	t	f	f	t	t	t
\.


--
-- Data for Name: QCFormNum; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "QCFormNum" ("NumForm", "NumISO", "NumRef", "ISOImp") FROM stdin;
1	\N	Lot	f
2	\N	Analyses	f
3	\N	Cedule	f
4	\N	Clients	f
5	\N	Equipement	f
6	\N	Etiquette	f
7	\N	Seringue	f
8	\N	BCD	f
9	\N	BCDDoble	f
10	\N	PHY	f
11	\N	GD	f
12	\N	FUR	f
13	\N	BPC	f
14	\N	DBPC	f
15	\N	EAU	f
16	\N	MDH	f
17	\N	InspV	f
18	\N	ResI	f
19	\N	ResB	f
20	\N	Trav	f
21	\N	TTR	f
22	\N	PAR	f
23	\N	DP	f
\.


--
-- Data for Name: Recommandation; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Recommandation" ("TypeAnalyse", "CodeRecommandation", "RecommandationE", "RecommandationA", "RecommandationF") FROM stdin;
BPC	1	\N	Less than 50 ppm --> Not contaminated	Moins de 50 ppm --> Non Contaminé
BPC	2	\N	More than 50 ppm --> Contaminated	50 ppm et plus --> Contaminé
DBPC	1	\N	No action	Aucune action
DBPC	2	\N	Between 200 and 500 ppm --> Sample one litre for physical and schedule addition of DBPC	Entre 200 et 500 ppm --> Prendre un litre pour physique et planifier l'ajout de DBPC
DBPC	3	\N	Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.	Moins de 200 ppm --> Prendre un litre pour physique et vérifier la dégradation de l'huile. Traiter l'huile si nécessaire puis ajout de DBPC.
DBPC	4	\N	Other recommendations (specify)	Autre recommandations (spécifier)
DBPC	5	\N	Future, do not use	Futur, ne pas utiliser
FUR	1	\N	No action	Aucune action
FUR	2	\N	Other recommendations (specify)	Autre recommandations (spécifier)
FUR	3	\N	Future, do not use	Futur, ne pas utiliser
FUR	4	\N	Future, do not use	Futur, ne pas utiliser
GD	1	\N	No action	Aucune action
GD	2	\N	Resample 4 ml for BPC up to scheduled date	Reprise de 4 ml pour l'analyse de BPC d'ici la date planifiée
GD	3	\N	Resample 4 ml for BPC and one syringe for dissolved gases up to scheduled date	Reprise de 4 ml pour l'analyse de BPC et une seringue pour l'analyse des gaz dissous d'ici la date planifiée
GD	4	\N	Resample one syringe for dissolved gases and dissolved water up to scheduled date	Reprise d'une seringue pour l'analyse des gaz dissous et de l'eau dissoute dans l'huile d'ici la date planifiée
GD	5	\N	Resample one syringe for dissolved gases within 24 hours and send immediately to lab	Reprise d'une seringue pour l'analyse des gaz dissous dans les 24 heures et expédier IMMÉDIATEMENT
GD	6	\N	Resample one syringe for dissolved gases up to scheduled date	Reprise d'une seringue pour l'analyse des gaz dissous à la date  planifiée
GD	7	\N	Leave in service and resample one syringe for dissolved gases up to schedule date and schedule internal inspection	Laisser en service et reprendre une seringue pour analyse des gaz dissous à la date planifiée et planifier une inspection interne
GD	8	\N	Deenergize immediately and schedule internal inspection.  Reenergize in extreme cases only	Mettre hors tension IMMÉDIATEMENT et planifier une inspection interne. N'utiliser qu'en cas d'extrême besoin
GD	9	\N	Deenergize immediately and schedule internal inspection	Mettre hors service IMMÉDIATEMENT et planifier une inspection interne
GD	10	\N	Sample a syringe for furfurals analysis	Prendre une seringue pour l'analyse des furfurals
GD	11	\N	Sample 48 hours after equipment has been loaded	Prendre un échantillon 48 heures après la remise sous charge
GD	12	\N	Verify tap changer contacts in main tank and/or leaks from tap changer compartment and resample after repair	Vérifier contacts du changeur de prises dans cuve princ. et/ou fuite entre sél. ou comm. et cuve princ. et reprendre une seringue après réparation
GD	13	\N	Resample one syringe for dissolved gases, water and DBPC up to scheduled date	Reprise d'une seringue pour l'analyse des gaz dissous, eau et DBPC pour la date planifiée
GD	14	\N	Resample one syringe for water up to scheduled date	Reprise d'une seringue pour l'analyse de l'eau totale dans l'huile d'ici la date  planifiée
GD	15	\N	Resample one syringe for dissolved water and DBPC up to scheduled date	Reprise d'une seringue pour l'analyse de l'eau dans l'huile et des DBPC pour la date planifiée
GD	16	\N	Resample 4 ml for DBPC up to scheduled date	Reprise de 4 ml pour l'analyse des DBPC d'ici la date planifiée
GD	20	\N	Other recommendations (specify)	Autre recommandations (spécifier)
GD	21	\N	Future, do not use	Futur, ne pas utiliser
GD	22	\N	Future, do not use	Futur, ne pas utiliser
HYD	1	\N	No action	Aucune action
HYD	2	\N	Other recommendations (specify)	Autre recommandations (spécifier)
HYD	3	\N	Future, do not use	Futur, ne pas utiliser
HYD	4	\N	Future, do not use	Futur, ne pas utiliser
MDH	1	\N	No action	Aucune action
MDH	2	\N	Other recommendations (specify)	Autre recommandations (spécifier)
MDH	3	\N	Future, do not use	Futur, ne pas utiliser
MDH	4	\N	Future, do not use	Futur, ne pas utiliser
PHY	1	\N	No action	Aucune action
PHY	2	\N	Resample 4 ml for BPC up to scheduled date	Reprise de 4 ml pour l'analyse de BPC d'ici la date planifiée
PHY	3	\N	Resample 4 ml for BPC and one litre for physical up to scheduled date	Reprise de 4 ml pour l'analyse de BPC et un litre pour l'analyse physique d'ici la date planifiée
PHY	4	\N	Resample one litre for power factor up to schedule date	Reprise d'un litre pour l'analyse du facteur de puissance d'ici la date planifiée
PHY	5	\N	Resample 2 litres for physical and power factor up to scheduled date	Reprise de 2 litres d'huile pour essai physiques et le facteur de puissance d'ici la date planifiée
PHY	6	\N	Resample one litre for physical up to scheduled date	Reprise d'un litre d'huile pour essai physique pour la date planifiée
PHY	7	\N	Leave in service and schedule coil dryout within one year and resample for water content after 1 month of normal and constant operation	Laisser en service et planifier un séchage du bobinage d'ici 1 an et reprendre 1 litre d'huile pour le contenu en eau après un mois d'opération normal
PHY	8	\N	Leave in service and schedule a complete oil treatment (degassing and fuller earth) within scheduled date	Laisser en service et planifier un traitement complet de l'huile (dégazage et terre de foulon) vers la date planifiée
PHY	9	\N	Leave in service and schedule replacement of oil at scheduled date.  Process used oil	Laisser en service et planifier le remplacement de l'huile vers la date planifiée. Traiter l'huile usée
PHY	10	\N	Leave in service and schedule oil replacement immediately. Discard old oil	Laisser en service et planifier le remplacement immédiat de l'huile. Mettre l'huile usée au rebut
PHY	11	\N	Take out of service and process oil in the equipment	Mettre hors service et traiter l'huile dans l'équipement
PHY	12	\N	Take out of service and replace oil.  Process old oil	Mettre hors service et remplacer l'huile. Traiter l'huile usée
PHY	13	\N	Take out of service and replace oil. Discard old oil	Mettre hors service et remplacer l'huile. Mettre l'huile usée au rebut
PHY	14	\N	Resample one syringe  for water and BPC within scheduled date	Reprise d'une seringue pour l'analyse de l'eau et des BPC pour la date planifiée
PHY	15	\N	Resample one syringe for water only within scheduled date	Reprise d'une seringue d'huile pour analyse d'eau pour la date planifiée
PHY	16	\N	Resample 4 ml of oil for DBPC  within scheduled date	Reprise de 4 ml d'huile pour la concentration de DBPC pour la date planifiée
PHY	17	\N	Resample one litre for physical and 4 ml for DBPC within scheduled date	Reprise d'un litre d'huile pour l'analyse physique et de 4 ml pour la concentration de DBPC pour la date planifiée
PHY	18	\N	Resample one litre for physical and one syringe for water within scheduled date	Reprise d'un litre pour physique et d'une seringue d'huile pour l'analyse d'eau pour la date planifiée
PHY	19	\N	Resample one litre for metal in oil and one litre for physical within scheduled date	Reprise d'un litre d'huile pour l'analyse des métaux et un litre pour l'analyse physique pour la date planifiée
PHY	20	\N	Resample one litre for metal in oil within scheduled date	Reprise d'un litre pour l'analyse des métaux dans l'huile pour la date planifiée
PHY	21	\N	Resample one syringe for furfurals within scheduled date	Reprise d'une seringue pour l'analyse des furfurals pour la date planifiée
PHY	24	\N	Other recommendations (specify)	Autre recommandations (spécifier)
PHY	25	\N	Future, do not use	Futur, ne pas utiliser
PHY	26	\N	Future, do not use	Futur, ne pas utiliser
\.


--
-- Data for Name: Res_Bobine; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Res_Bobine" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Bobine", "Tap_Num", "Mesure1", "Temp1", "Mesure2", "Temp2", "Mesure3", "Temp3", "Corr1", "Corr2", "Corr3") FROM stdin;
\.


--
-- Data for Name: Res_Isolation; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Res_Isolation" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "TestKV1", "Multiplier1", "Meter1", "TestKV2", "Meter2", "Multiplier2", "TestKV3", "Meter3", "Multiplier3", "TestKV4", "Meter4", "Multiplier4", "TestKV5", "Meter5", "Multiplier5", "Type_Doble") FROM stdin;
\.


--
-- Data for Name: ResultatAnalyse; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "ResultatAnalyse" ("NoEquipement", "NoSerieEquipe", "TypeAnalyse", "Site", "Localisation", "CodeGravite", "Desc1", "Desc2", "Desc3") FROM stdin;
REDRESSEUR 24	160089	GD	Alouette	Sous-station principale	2	Monox. de carbone CO (363.00)   Écart moyen.	Biox. de carbone CO2 (2189.00)   Écart moyen.	La concentration du monoxyde de carbone (CO) ( 363) est supérieure à la norme (3
REDRESSEUR 25	160087	GD	Alouette	Sous-station principale	2	1.768041Tendance du CTGC : La vitesse d'accroissement des gaz est en augmentatio	Dégradation thermique ou électrique de la cellulose	Dégradation thermique ou électrique de la cellulose
REDRESSEUR 25	160087	PHY	Alouette	Sous-station principale	2	Diélec.D1816(2mm) (51.00)   Écart moyen.		
REGULATEUR 25	180137	EAU	Alouette	Sous-station principale	1	Humidité (1.33)   Écart élevé.		
REGULATEUR 21	180136	GD	Alouette	Sous-station principale	1	Monox. de carbone CO (156.00)   Écart élevé.		
REGULATEUR 22	180138	GD	Alouette	Sous-station principale	1	Monox. de carbone CO (129.00)   Écart élevé.		
REGULATEUR 23	180139	EAU	Alouette	Sous-station principale	2	Humidité (1.19)   Écart moyen.		
REGULATEUR 23	180139	GD	Alouette	Sous-station principale	1	Monox. de carbone CO (142.00)   Écart élevé.		
\.


--
-- Data for Name: Securite; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Securite" ("Nom", "Mot de Passe", "Niveau") FROM stdin;
\.


--
-- Data for Name: SeringueInventaire; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "SeringueInventaire" ("SerialNum", "Laboratoire") FROM stdin;
\.


--
-- Data for Name: TTR; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "TTR" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "Bobine", "Tap_Num", "Mesure1", "Mesure2", "Mesure3", "CouExitation1", "CouExitation2", "CouExitation3", "Ratio", "ErrCal1", "ErrCal2", "ErrCal3", "Select") FROM stdin;
\.


--
-- Data for Name: Traverse; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Traverse" ("ClefAnalyse", "NoSerieEquipe", "NoEquipement", "H1", "H2", "H3", "Hn", "H1C1", "H2C1", "H3C1", "HnC1", "H1C2", "H2C2", "H3C2", "HnC2", "X1", "X2", "X3", "Xn", "X1C1", "X2C1", "X3C1", "XnC1", "X1C2", "X2C2", "X3C2", "XnC2", "T1", "T2", "T3", "Tn", "T1C1", "T2C1", "T3C1", "TnC1", "T1C2", "T2C2", "T3C2", "TnC2", "Temperature", "Facteur", "Facteur1", "Facteur2", "Q1", "Q2", "Q3", "QN", "Q1C1", "Q2C1", "Q3C1", "QNC1", "Q1C2", "Q2C2", "Q3C2", "QNC2", "Facteur3", "Humidite", "Test_kV_H1", "Test_kV_H2", "Test_kV_H3", "Test_kV_HN", "Test_kV_X1", "Test_kV_X2", "Test_kV_X3", "Test_kV_XN", "Test_kV_T1", "Test_kV_T2", "Test_kV_T3", "Test_kV_TN", "Test_kV_Q1", "Test_kV_Q2", "Test_kV_Q3", "Test_kV_QN", "Test_PFC2_H1", "Test_PFC2_H2", "Test_PFC2_H3", "Test_PFC2_HN", "Test_PFC2_X1", "Test_PFC2_X2", "Test_PFC2_X3", "Test_PFC2_XN", "Test_PFC2_T1", "Test_PFC2_T2", "Test_PFC2_T3", "Test_PFC2_TN", "Test_PFC2_Q1", "Test_PFC2_Q2", "Test_PFC2_Q3", "Test_PFC2_QN", "FacteurN", "FacteurN1", "FacteurN2", "FacteurN3") FROM stdin;
\.


--
-- Data for Name: TypeEquipement; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "TypeEquipement" ("TypeEquipement", "DescriptionTypeEquipement", "Desc_Anglais", "Desc_Espagnol") FROM stdin;
A	Disjoncteur à air	Air circuit breaker	Interruptor del aire
B	Traverse	Bushing	Pasatapas
C	Condensateur	Capacitor	Condensador
D	Disjoncteur	Breaker	Interruptor
E	Source de puissance	Power Source	Fuente de alimentación
G	Cable	Cable	Cable
H	Armoire de commutation	Switchgear	Dispositivo de distribución
I	Machine induction	Induction machine	Máquina de la inducción
J	Machine synchrone	Synchronous machine	Máquina síncrono
L	Localisation	Localization	Localización
P	Changeur de prise	Tap changer	Conmutador de conexiones
R	Redresseur	Rectifier	Rectificador
S	Site	Site	Sitio
T	Transformateur	Transformer	Transformador
Y	Réservoir	Tank	Depósito
Z	Sectionneur	Switch	Seccionador
\.


--
-- Data for Name: Version; Type: TABLE DATA; Schema: public; Owner: vision
--

COPY "Version" ("Version") FROM stdin;
18
\.


--
-- Name: Analyse_DatePrelevement_NoEquipement_NoSerieEquipe_TypeAnal_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Analyse"
    ADD CONSTRAINT "Analyse_DatePrelevement_NoEquipement_NoSerieEquipe_TypeAnal_key" UNIQUE ("DatePrelevement", "NoEquipement", "NoSerieEquipe", "TypeAnalyse", "ClefAnalyse");


--
-- Name: Analyse_NoEquipement_NoSerieEquipe_DatePrelevement_ClefAnal_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Analyse"
    ADD CONSTRAINT "Analyse_NoEquipement_NoSerieEquipe_DatePrelevement_ClefAnal_key" UNIQUE ("NoEquipement", "NoSerieEquipe", "DatePrelevement", "ClefAnalyse", "TypeAnalyse");


--
-- Name: Analyse_NoEquipement_NoSerieEquipe_TypeAnalyse_DatePrelevem_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Analyse"
    ADD CONSTRAINT "Analyse_NoEquipement_NoSerieEquipe_TypeAnalyse_DatePrelevem_key" UNIQUE ("NoEquipement", "NoSerieEquipe", "TypeAnalyse", "DatePrelevement", "ClefAnalyse");


--
-- Name: Analyse_TypeAnalyse_NoEquipement_NoSerieEquipe_DatePrelevem_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Analyse"
    ADD CONSTRAINT "Analyse_TypeAnalyse_NoEquipement_NoSerieEquipe_DatePrelevem_key" UNIQUE ("TypeAnalyse", "NoEquipement", "NoSerieEquipe", "DatePrelevement", "ClefAnalyse");


--
-- Name: Analyse_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Analyse"
    ADD CONSTRAINT "Analyse_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: BCD_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "BCD"
    ADD CONSTRAINT "BCD_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: BPC_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "BPC"
    ADD CONSTRAINT "BPC_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Capteur_GAZ_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Capteur_GAZ"
    ADD CONSTRAINT "Capteur_GAZ_pkey" PRIMARY KEY ("Capteur");


--
-- Name: Cedule_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Cedule"
    ADD CONSTRAINT "Cedule_pkey" PRIMARY KEY ("NoEquipement", "NoSerieEquipe", "DateDep", "NoTravaux");


--
-- Name: Clients_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Clients"
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY ("NoClient");


--
-- Name: DBPC_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "DBPC"
    ADD CONSTRAINT "DBPC_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: DP_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "DP"
    ADD CONSTRAINT "DP_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Diagnostic_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Diagnostic"
    ADD CONSTRAINT "Diagnostic_pkey" PRIMARY KEY ("TypeAnalyse", "CodeDiagnostic");


--
-- Name: Eau_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Eau"
    ADD CONSTRAINT "Eau_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: EquipeExportLabo_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "EquipeExportLabo"
    ADD CONSTRAINT "EquipeExportLabo_pkey" PRIMARY KEY ("NomFichier", "ClefAnalyse");


--
-- Name: Equipe_Tap_Tension_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Equipe_Tap_Tension"
    ADD CONSTRAINT "Equipe_Tap_Tension_pkey" PRIMARY KEY ("NoEquipement", "NoSerieEquipe", "Bobine", "Tap_Num");


--
-- Name: Equipement_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Equipement"
    ADD CONSTRAINT "Equipement_pkey" PRIMARY KEY ("NoEquipement", "NoSerieEquipe");


--
-- Name: FichierExportLabo_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "FichierExportLabo"
    ADD CONSTRAINT "FichierExportLabo_pkey" PRIMARY KEY ("NomFichier");


--
-- Name: Furane_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Furane"
    ADD CONSTRAINT "Furane_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Gaz_Dissous_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Gaz_Dissous"
    ADD CONSTRAINT "Gaz_Dissous_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: HDSecurite_PercepSerial_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "HDSecurite"
    ADD CONSTRAINT "HDSecurite_PercepSerial_key" UNIQUE ("PercepSerial");


--
-- Name: Inspection_Visuel_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Inspection_Visuel"
    ADD CONSTRAINT "Inspection_Visuel_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Laboratoire_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Laboratoire"
    ADD CONSTRAINT "Laboratoire_pkey" PRIMARY KEY ("CodeLaboratoire");


--
-- Name: Localisation_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Localisation"
    ADD CONSTRAINT "Localisation_pkey" PRIMARY KEY ("Site", "Localisation");


--
-- Name: Metaux_Dans_Huiles_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Metaux_Dans_Huiles"
    ADD CONSTRAINT "Metaux_Dans_Huiles_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: NormeIsolation_C_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "NormeIsolation"
    ADD CONSTRAINT "NormeIsolation_C_key" UNIQUE ("C");


--
-- Name: NormeIsolation_F_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "NormeIsolation"
    ADD CONSTRAINT "NormeIsolation_F_key" UNIQUE ("F");


--
-- Name: NormePhysique_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "NormePhysique"
    ADD CONSTRAINT "NormePhysique_pkey" PRIMARY KEY ("NORME", "TypeEquipement");


--
-- Name: NormesFuranne_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "NormesFuranne"
    ADD CONSTRAINT "NormesFuranne_pkey" PRIMARY KEY ("Norme");


--
-- Name: NormesGaz_Nom_Condition_key; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "NormesGaz"
    ADD CONSTRAINT "NormesGaz_Nom_Condition_key" UNIQUE ("Nom", "Condition");


--
-- Name: PHY_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "PHY"
    ADD CONSTRAINT "PHY_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Particules_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Particules"
    ADD CONSTRAINT "Particules_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: ProfilEchantFluid_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "ProfilEchantFluid"
    ADD CONSTRAINT "ProfilEchantFluid_pkey" PRIMARY KEY ("NoProfil");


--
-- Name: ProfilTestElec_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "ProfilTestElec"
    ADD CONSTRAINT "ProfilTestElec_pkey" PRIMARY KEY ("NoProfil");


--
-- Name: Recommandation_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Recommandation"
    ADD CONSTRAINT "Recommandation_pkey" PRIMARY KEY ("TypeAnalyse", "CodeRecommandation");


--
-- Name: Res_Bobine_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Res_Bobine"
    ADD CONSTRAINT "Res_Bobine_pkey" PRIMARY KEY ("ClefAnalyse", "NoEquipement", "NoSerieEquipe", "Bobine", "Tap_Num");


--
-- Name: Res_Isolation_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Res_Isolation"
    ADD CONSTRAINT "Res_Isolation_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: Securite_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Securite"
    ADD CONSTRAINT "Securite_pkey" PRIMARY KEY ("Nom");


--
-- Name: SeringueInventaire_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "SeringueInventaire"
    ADD CONSTRAINT "SeringueInventaire_pkey" PRIMARY KEY ("SerialNum");


--
-- Name: TTR_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "TTR"
    ADD CONSTRAINT "TTR_pkey" PRIMARY KEY ("ClefAnalyse", "NoEquipement", "NoSerieEquipe", "Bobine", "Tap_Num");


--
-- Name: Traverse_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "Traverse"
    ADD CONSTRAINT "Traverse_pkey" PRIMARY KEY ("ClefAnalyse");


--
-- Name: TypeEquipement_pkey; Type: CONSTRAINT; Schema: public; Owner: vision; Tablespace: 
--

ALTER TABLE ONLY "TypeEquipement"
    ADD CONSTRAINT "TypeEquipement_pkey" PRIMARY KEY ("TypeEquipement");


--
-- Name: Analyse_ClefAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_ClefAnalyse" ON "Analyse" USING btree ("ClefAnalyse");


--
-- Name: Analyse_Condition_douteuse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_Condition_douteuse" ON "Analyse" USING btree ("NoEquipement", "NoSerieEquipe", "If_OK", "DatePrelevement");


--
-- Name: Analyse_DateAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_DateAnalyse" ON "Analyse" USING btree ("DateAnalyse");


--
-- Name: Analyse_DatePrelevement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_DatePrelevement" ON "Analyse" USING btree ("DatePrelevement");


--
-- Name: Analyse_DateSerie; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_DateSerie" ON "Analyse" USING btree ("DatePrelevement", "NoSerieEquipe", "TypeAnalyse", "ClefAnalyse");


--
-- Name: Analyse_Labo; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_Labo" ON "Analyse" USING btree ("Laboratoire");


--
-- Name: Analyse_NoAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_NoAnalyse" ON "Analyse" USING btree ("NoAnalyse");


--
-- Name: Analyse_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_NoEquipement" ON "Analyse" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Analyse_NoSerieEquipe; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_NoSerieEquipe" ON "Analyse" USING btree ("NoSerieEquipe");


--
-- Name: Analyse_SerieDate; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_SerieDate" ON "Analyse" USING btree ("NoSerieEquipe", "DatePrelevement", "ClefAnalyse", "TypeAnalyse");


--
-- Name: Analyse_TypeAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Analyse_TypeAnalyse" ON "Analyse" USING btree ("TypeAnalyse");


--
-- Name: BCD_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "BCD_NoEquipement" ON "BCD" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: BPC_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "BPC_NoEquipement" ON "BPC" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: DBPC_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "DBPC_NoEquipement" ON "DBPC" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: DP_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "DP_NoEquipement" ON "DP" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Diagnostic_CodeDiagnostic; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Diagnostic_CodeDiagnostic" ON "Diagnostic" USING btree ("CodeDiagnostic");


--
-- Name: Diagnostic_TypeAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Diagnostic_TypeAnalyse" ON "Diagnostic" USING btree ("TypeAnalyse");


--
-- Name: Documents_NoDocument; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Documents_NoDocument" ON "Documents" USING btree ("NoSerieEquipe");


--
-- Name: Eau_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Eau_NoEquipement" ON "Eau" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Equipement_NoClient; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_NoClient" ON "Equipement" USING btree ("NoClient");


--
-- Name: Equipement_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_NoEquipement" ON "Equipement" USING btree ("NoEquipement");


--
-- Name: Equipement_NoSerieEquipe; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_NoSerieEquipe" ON "Equipement" USING btree ("NoSerieEquipe");


--
-- Name: Equipement_ParentsEquip; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_ParentsEquip" ON "Equipement" USING btree ("LocAmont2", "LocAmont3");


--
-- Name: Equipement_ParentsSer; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_ParentsSer" ON "Equipement" USING btree ("LocAmont3", "LocAmont2");


--
-- Name: Equipement_Site; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_Site" ON "Equipement" USING btree ("Site");


--
-- Name: Equipement_SiteEquipe; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_SiteEquipe" ON "Equipement" USING btree ("Site", "NoEquipement");


--
-- Name: Equipement_SiteSerie; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Equipement_SiteSerie" ON "Equipement" USING btree ("Site", "NoSerieEquipe");


--
-- Name: Furane_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Furane_NoEquipement" ON "Furane" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Gaz_Dissous_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Gaz_Dissous_NoEquipement" ON "Gaz_Dissous" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: HDSecurite_HDPercep; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "HDSecurite_HDPercep" ON "HDSecurite" USING btree ("HDSerial", "PercepSerial");


--
-- Name: Inspection_Visuel_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Inspection_Visuel_NoEquipement" ON "Inspection_Visuel" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Metaux_Dans_Huiles_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Metaux_Dans_Huiles_NoEquipement" ON "Metaux_Dans_Huiles" USING btree ("NoSerieEquipe");


--
-- Name: NestedNodesImage_ID; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "NestedNodesImage_ID" ON "NestedNodesImage" USING btree ("ID");


--
-- Name: NestedNodesImage_Key; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "NestedNodesImage_Key" ON "NestedNodesImage" USING btree ("Key");


--
-- Name: NestedNodesImage_ParentKey; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "NestedNodesImage_ParentKey" ON "NestedNodesImage" USING btree ("ParentKey");


--
-- Name: PHY_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "PHY_NoEquipement" ON "PHY" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Particules_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Particules_NoEquipement" ON "Particules" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: Recommandation_CodeRecommendation; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Recommandation_CodeRecommendation" ON "Recommandation" USING btree ("CodeRecommandation");


--
-- Name: Recommandation_TypeAnalyse; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Recommandation_TypeAnalyse" ON "Recommandation" USING btree ("TypeAnalyse");


--
-- Name: Res_Bobine_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Res_Bobine_NoEquipement" ON "Res_Bobine" USING btree ("NoEquipement", "NoSerieEquipe", "ClefAnalyse");


--
-- Name: Res_Isolation_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Res_Isolation_NoEquipement" ON "Res_Isolation" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: ResultatAnalyse_CodeGravite; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "ResultatAnalyse_CodeGravite" ON "ResultatAnalyse" USING btree ("Site", "Localisation", "NoEquipement", "NoSerieEquipe");


--
-- Name: ResultatAnalyse_PrimaryKey; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "ResultatAnalyse_PrimaryKey" ON "ResultatAnalyse" USING btree ("Site", "Localisation", "NoEquipement", "NoSerieEquipe", "TypeAnalyse");


--
-- Name: Securite_Niveau; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Securite_Niveau" ON "Securite" USING btree ("Niveau");


--
-- Name: TTR_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "TTR_NoEquipement" ON "TTR" USING btree ("NoEquipement", "NoSerieEquipe", "ClefAnalyse");


--
-- Name: Traverse_NoEquipement; Type: INDEX; Schema: public; Owner: vision; Tablespace: 
--

CREATE INDEX "Traverse_NoEquipement" ON "Traverse" USING btree ("NoEquipement", "NoSerieEquipe");


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

