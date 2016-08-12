# coding=utf-8
"""empty message

Revision ID: 463c6038d63
Revises: 2aa4c4cd3d01
Create Date: 2016-08-12 16:10:08.244987

"""

# revision identifiers, used by Alembic.
revision = '463c6038d63'
down_revision = '2aa4c4cd3d01'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = u"""
        CREATE TABLE public.country
        (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50),
            iso_name VARCHAR(2)
        );
        INSERT INTO country (id, name, iso_name) VALUES (1, 'Afghanistan', 'AF');
        INSERT INTO country (id, name, iso_name) VALUES (2, 'Åland Islands', 'AX');
        INSERT INTO country (id, name, iso_name) VALUES (3, 'Albania', 'AL');
        INSERT INTO country (id, name, iso_name) VALUES (4, 'Algeria', 'DZ');
        INSERT INTO country (id, name, iso_name) VALUES (5, 'American Samoa', 'AS');
        INSERT INTO country (id, name, iso_name) VALUES (6, 'Andorra', 'AD');
        INSERT INTO country (id, name, iso_name) VALUES (7, 'Angola', 'AO');
        INSERT INTO country (id, name, iso_name) VALUES (8, 'Anguilla', 'AI');
        INSERT INTO country (id, name, iso_name) VALUES (9, 'Antarctica', 'AQ');
        INSERT INTO country (id, name, iso_name) VALUES (10, 'Antigua and Barbuda', 'AG');
        INSERT INTO country (id, name, iso_name) VALUES (11, 'Argentina', 'AR');
        INSERT INTO country (id, name, iso_name) VALUES (12, 'Armenia', 'AM');
        INSERT INTO country (id, name, iso_name) VALUES (13, 'Aruba', 'AW');
        INSERT INTO country (id, name, iso_name) VALUES (14, 'Ascension Island', 'AC');
        INSERT INTO country (id, name, iso_name) VALUES (15, 'Australia', 'AU');
        INSERT INTO country (id, name, iso_name) VALUES (16, 'Austria', 'AT');
        INSERT INTO country (id, name, iso_name) VALUES (17, 'Azerbaijan', 'AZ');
        INSERT INTO country (id, name, iso_name) VALUES (18, 'Bahamas', 'BS');
        INSERT INTO country (id, name, iso_name) VALUES (19, 'Bahrain', 'BH');
        INSERT INTO country (id, name, iso_name) VALUES (20, 'Bangladesh', 'BD');
        INSERT INTO country (id, name, iso_name) VALUES (21, 'Barbados', 'BB');
        INSERT INTO country (id, name, iso_name) VALUES (22, 'Belarus', 'BY');
        INSERT INTO country (id, name, iso_name) VALUES (23, 'Belgium', 'BE');
        INSERT INTO country (id, name, iso_name) VALUES (24, 'Belize', 'BZ');
        INSERT INTO country (id, name, iso_name) VALUES (25, 'Benin', 'BJ');
        INSERT INTO country (id, name, iso_name) VALUES (26, 'Bermuda', 'BM');
        INSERT INTO country (id, name, iso_name) VALUES (27, 'Bhutan', 'BT');
        INSERT INTO country (id, name, iso_name) VALUES (28, 'Bolivia', 'BO');
        INSERT INTO country (id, name, iso_name) VALUES (29, 'Bosnia and Herzegovina', 'BA');
        INSERT INTO country (id, name, iso_name) VALUES (30, 'Botswana', 'BW');
        INSERT INTO country (id, name, iso_name) VALUES (31, 'Bouvet Island', 'BV');
        INSERT INTO country (id, name, iso_name) VALUES (32, 'Brazil', 'BR');
        INSERT INTO country (id, name, iso_name) VALUES (33, 'British Indian Ocean Territory', 'IO');
        INSERT INTO country (id, name, iso_name) VALUES (34, 'British Virgin Islands', 'VG');
        INSERT INTO country (id, name, iso_name) VALUES (35, 'Brunei', 'BN');
        INSERT INTO country (id, name, iso_name) VALUES (36, 'Bulgaria', 'BG');
        INSERT INTO country (id, name, iso_name) VALUES (37, 'Burkina Faso', 'BF');
        INSERT INTO country (id, name, iso_name) VALUES (38, 'Burundi', 'BI');
        INSERT INTO country (id, name, iso_name) VALUES (39, 'Cambodia', 'KH');
        INSERT INTO country (id, name, iso_name) VALUES (40, 'Cameroon', 'CM');
        INSERT INTO country (id, name, iso_name) VALUES (41, 'Canada', 'CA');
        INSERT INTO country (id, name, iso_name) VALUES (42, 'Canary Islands', 'IC');
        INSERT INTO country (id, name, iso_name) VALUES (43, 'Cape Verde', 'CV');
        INSERT INTO country (id, name, iso_name) VALUES (44, 'Caribbean Netherlands', 'BQ');
        INSERT INTO country (id, name, iso_name) VALUES (45, 'Cayman Islands', 'KY');
        INSERT INTO country (id, name, iso_name) VALUES (46, 'Central African Republic', 'CF');
        INSERT INTO country (id, name, iso_name) VALUES (47, 'Ceuta and Melilla', 'EA');
        INSERT INTO country (id, name, iso_name) VALUES (48, 'Chad', 'TD');
        INSERT INTO country (id, name, iso_name) VALUES (49, 'Chile', 'CL');
        INSERT INTO country (id, name, iso_name) VALUES (50, 'China', 'CN');
        INSERT INTO country (id, name, iso_name) VALUES (51, 'Christmas Island', 'CX');
        INSERT INTO country (id, name, iso_name) VALUES (52, 'Clipperton Island', 'CP');
        INSERT INTO country (id, name, iso_name) VALUES (53, 'Cocos [Keeling] Islands', 'CC');
        INSERT INTO country (id, name, iso_name) VALUES (54, 'Colombia', 'CO');
        INSERT INTO country (id, name, iso_name) VALUES (55, 'Comoros', 'KM');
        INSERT INTO country (id, name, iso_name) VALUES (56, 'Congo - Brazzaville', 'CG');
        INSERT INTO country (id, name, iso_name) VALUES (57, 'Congo - Kinshasa', 'CD');
        INSERT INTO country (id, name, iso_name) VALUES (58, 'Cook Islands', 'CK');
        INSERT INTO country (id, name, iso_name) VALUES (59, 'Costa Rica', 'CR');
        INSERT INTO country (id, name, iso_name) VALUES (60, 'Côte d’Ivoire', 'CI');
        INSERT INTO country (id, name, iso_name) VALUES (61, 'Croatia', 'HR');
        INSERT INTO country (id, name, iso_name) VALUES (62, 'Cuba', 'CU');
        INSERT INTO country (id, name, iso_name) VALUES (63, 'Curaçao', 'CW');
        INSERT INTO country (id, name, iso_name) VALUES (64, 'Cyprus', 'CY');
        INSERT INTO country (id, name, iso_name) VALUES (65, 'Czech Republic', 'CZ');
        INSERT INTO country (id, name, iso_name) VALUES (66, 'Denmark', 'DK');
        INSERT INTO country (id, name, iso_name) VALUES (67, 'Diego Garcia', 'DG');
        INSERT INTO country (id, name, iso_name) VALUES (68, 'Djibouti', 'DJ');
        INSERT INTO country (id, name, iso_name) VALUES (69, 'Dominica', 'DM');
        INSERT INTO country (id, name, iso_name) VALUES (70, 'Dominican Republic', 'DO');
        INSERT INTO country (id, name, iso_name) VALUES (71, 'Ecuador', 'EC');
        INSERT INTO country (id, name, iso_name) VALUES (72, 'Egypt', 'EG');
        INSERT INTO country (id, name, iso_name) VALUES (73, 'El Salvador', 'SV');
        INSERT INTO country (id, name, iso_name) VALUES (74, 'Equatorial Guinea', 'GQ');
        INSERT INTO country (id, name, iso_name) VALUES (75, 'Eritrea', 'ER');
        INSERT INTO country (id, name, iso_name) VALUES (76, 'Estonia', 'EE');
        INSERT INTO country (id, name, iso_name) VALUES (77, 'Ethiopia', 'ET');
        INSERT INTO country (id, name, iso_name) VALUES (78, 'European Union', 'EU');
        INSERT INTO country (id, name, iso_name) VALUES (79, 'Falkland Islands', 'FK');
        INSERT INTO country (id, name, iso_name) VALUES (80, 'Faroe Islands', 'FO');
        INSERT INTO country (id, name, iso_name) VALUES (81, 'Fiji', 'FJ');
        INSERT INTO country (id, name, iso_name) VALUES (82, 'Finland', 'FI');
        INSERT INTO country (id, name, iso_name) VALUES (83, 'France', 'FR');
        INSERT INTO country (id, name, iso_name) VALUES (84, 'French Guiana', 'GF');
        INSERT INTO country (id, name, iso_name) VALUES (85, 'French Polynesia', 'PF');
        INSERT INTO country (id, name, iso_name) VALUES (86, 'French Southern Territories', 'TF');
        INSERT INTO country (id, name, iso_name) VALUES (87, 'Gabon', 'GA');
        INSERT INTO country (id, name, iso_name) VALUES (88, 'Gambia', 'GM');
        INSERT INTO country (id, name, iso_name) VALUES (89, 'Georgia', 'GE');
        INSERT INTO country (id, name, iso_name) VALUES (90, 'Germany', 'DE');
        INSERT INTO country (id, name, iso_name) VALUES (91, 'Ghana', 'GH');
        INSERT INTO country (id, name, iso_name) VALUES (92, 'Gibraltar', 'GI');
        INSERT INTO country (id, name, iso_name) VALUES (93, 'Greece', 'GR');
        INSERT INTO country (id, name, iso_name) VALUES (94, 'Greenland', 'GL');
        INSERT INTO country (id, name, iso_name) VALUES (95, 'Grenada', 'GD');
        INSERT INTO country (id, name, iso_name) VALUES (96, 'Guadeloupe', 'GP');
        INSERT INTO country (id, name, iso_name) VALUES (97, 'Guam', 'GU');
        INSERT INTO country (id, name, iso_name) VALUES (98, 'Guatemala', 'GT');
        INSERT INTO country (id, name, iso_name) VALUES (99, 'Guernsey', 'GG');
        INSERT INTO country (id, name, iso_name) VALUES (100, 'Guinea', 'GN');
        INSERT INTO country (id, name, iso_name) VALUES (101, 'Guinea-Bissau', 'GW');
        INSERT INTO country (id, name, iso_name) VALUES (102, 'Guyana', 'GY');
        INSERT INTO country (id, name, iso_name) VALUES (103, 'Haiti', 'HT');
        INSERT INTO country (id, name, iso_name) VALUES (104, 'Heard Island and McDonald Islands', 'HM');
        INSERT INTO country (id, name, iso_name) VALUES (105, 'Honduras', 'HN');
        INSERT INTO country (id, name, iso_name) VALUES (106, 'Hong Kong SAR China', 'HK');
        INSERT INTO country (id, name, iso_name) VALUES (107, 'Hungary', 'HU');
        INSERT INTO country (id, name, iso_name) VALUES (108, 'Iceland', 'IS');
        INSERT INTO country (id, name, iso_name) VALUES (109, 'India', 'IN');
        INSERT INTO country (id, name, iso_name) VALUES (110, 'Indonesia', 'ID');
        INSERT INTO country (id, name, iso_name) VALUES (111, 'Iran', 'IR');
        INSERT INTO country (id, name, iso_name) VALUES (112, 'Iraq', 'IQ');
        INSERT INTO country (id, name, iso_name) VALUES (113, 'Ireland', 'IE');
        INSERT INTO country (id, name, iso_name) VALUES (114, 'Isle of Man', 'IM');
        INSERT INTO country (id, name, iso_name) VALUES (115, 'Israel', 'IL');
        INSERT INTO country (id, name, iso_name) VALUES (116, 'Italy', 'IT');
        INSERT INTO country (id, name, iso_name) VALUES (117, 'Jamaica', 'JM');
        INSERT INTO country (id, name, iso_name) VALUES (118, 'Japan', 'JP');
        INSERT INTO country (id, name, iso_name) VALUES (119, 'Jersey', 'JE');
        INSERT INTO country (id, name, iso_name) VALUES (120, 'Jordan', 'JO');
        INSERT INTO country (id, name, iso_name) VALUES (121, 'Kazakhstan', 'KZ');
        INSERT INTO country (id, name, iso_name) VALUES (122, 'Kenya', 'KE');
        INSERT INTO country (id, name, iso_name) VALUES (123, 'Kiribati', 'KI');
        INSERT INTO country (id, name, iso_name) VALUES (124, 'Kuwait', 'KW');
        INSERT INTO country (id, name, iso_name) VALUES (125, 'Kyrgyzstan', 'KG');
        INSERT INTO country (id, name, iso_name) VALUES (126, 'Laos', 'LA');
        INSERT INTO country (id, name, iso_name) VALUES (127, 'Latvia', 'LV');
        INSERT INTO country (id, name, iso_name) VALUES (128, 'Lebanon', 'LB');
        INSERT INTO country (id, name, iso_name) VALUES (129, 'Lesotho', 'LS');
        INSERT INTO country (id, name, iso_name) VALUES (130, 'Liberia', 'LR');
        INSERT INTO country (id, name, iso_name) VALUES (131, 'Libya', 'LY');
        INSERT INTO country (id, name, iso_name) VALUES (132, 'Liechtenstein', 'LI');
        INSERT INTO country (id, name, iso_name) VALUES (133, 'Lithuania', 'LT');
        INSERT INTO country (id, name, iso_name) VALUES (134, 'Luxembourg', 'LU');
        INSERT INTO country (id, name, iso_name) VALUES (135, 'Macau SAR China', 'MO');
        INSERT INTO country (id, name, iso_name) VALUES (136, 'Macedonia', 'MK');
        INSERT INTO country (id, name, iso_name) VALUES (137, 'Madagascar', 'MG');
        INSERT INTO country (id, name, iso_name) VALUES (138, 'Malawi', 'MW');
        INSERT INTO country (id, name, iso_name) VALUES (139, 'Malaysia', 'MY');
        INSERT INTO country (id, name, iso_name) VALUES (140, 'Maldives', 'MV');
        INSERT INTO country (id, name, iso_name) VALUES (141, 'Mali', 'ML');
        INSERT INTO country (id, name, iso_name) VALUES (142, 'Malta', 'MT');
        INSERT INTO country (id, name, iso_name) VALUES (143, 'Marshall Islands', 'MH');
        INSERT INTO country (id, name, iso_name) VALUES (144, 'Martinique', 'MQ');
        INSERT INTO country (id, name, iso_name) VALUES (145, 'Mauritania', 'MR');
        INSERT INTO country (id, name, iso_name) VALUES (146, 'Mauritius', 'MU');
        INSERT INTO country (id, name, iso_name) VALUES (147, 'Mayotte', 'YT');
        INSERT INTO country (id, name, iso_name) VALUES (148, 'Mexico', 'MX');
        INSERT INTO country (id, name, iso_name) VALUES (149, 'Micronesia', 'FM');
        INSERT INTO country (id, name, iso_name) VALUES (150, 'Moldova', 'MD');
        INSERT INTO country (id, name, iso_name) VALUES (151, 'Monaco', 'MC');
        INSERT INTO country (id, name, iso_name) VALUES (152, 'Mongolia', 'MN');
        INSERT INTO country (id, name, iso_name) VALUES (153, 'Montenegro', 'ME');
        INSERT INTO country (id, name, iso_name) VALUES (154, 'Montserrat', 'MS');
        INSERT INTO country (id, name, iso_name) VALUES (155, 'Morocco', 'MA');
        INSERT INTO country (id, name, iso_name) VALUES (156, 'Mozambique', 'MZ');
        INSERT INTO country (id, name, iso_name) VALUES (157, 'Myanmar [Burma]', 'MM');
        INSERT INTO country (id, name, iso_name) VALUES (158, 'Namibia', 'NA');
        INSERT INTO country (id, name, iso_name) VALUES (159, 'Nauru', 'NR');
        INSERT INTO country (id, name, iso_name) VALUES (160, 'Nepal', 'NP');
        INSERT INTO country (id, name, iso_name) VALUES (161, 'Netherlands', 'NL');
        INSERT INTO country (id, name, iso_name) VALUES (162, 'Netherlands Antilles', 'AN');
        INSERT INTO country (id, name, iso_name) VALUES (163, 'New Caledonia', 'NC');
        INSERT INTO country (id, name, iso_name) VALUES (164, 'New Zealand', 'NZ');
        INSERT INTO country (id, name, iso_name) VALUES (165, 'Nicaragua', 'NI');
        INSERT INTO country (id, name, iso_name) VALUES (166, 'Niger', 'NE');
        INSERT INTO country (id, name, iso_name) VALUES (167, 'Nigeria', 'NG');
        INSERT INTO country (id, name, iso_name) VALUES (168, 'Niue', 'NU');
        INSERT INTO country (id, name, iso_name) VALUES (169, 'Norfolk Island', 'NF');
        INSERT INTO country (id, name, iso_name) VALUES (170, 'North Korea', 'KP');
        INSERT INTO country (id, name, iso_name) VALUES (171, 'Northern Mariana Islands', 'MP');
        INSERT INTO country (id, name, iso_name) VALUES (172, 'Norway', 'NO');
        INSERT INTO country (id, name, iso_name) VALUES (173, 'Oman', 'OM');
        INSERT INTO country (id, name, iso_name) VALUES (174, 'Outlying Oceania', 'QO');
        INSERT INTO country (id, name, iso_name) VALUES (175, 'Pakistan', 'PK');
        INSERT INTO country (id, name, iso_name) VALUES (176, 'Palau', 'PW');
        INSERT INTO country (id, name, iso_name) VALUES (177, 'Palestinian Territories', 'PS');
        INSERT INTO country (id, name, iso_name) VALUES (178, 'Panama', 'PA');
        INSERT INTO country (id, name, iso_name) VALUES (179, 'Papua New Guinea', 'PG');
        INSERT INTO country (id, name, iso_name) VALUES (180, 'Paraguay', 'PY');
        INSERT INTO country (id, name, iso_name) VALUES (181, 'Peru', 'PE');
        INSERT INTO country (id, name, iso_name) VALUES (182, 'Philippines', 'PH');
        INSERT INTO country (id, name, iso_name) VALUES (183, 'Pitcairn Islands', 'PN');
        INSERT INTO country (id, name, iso_name) VALUES (184, 'Poland', 'PL');
        INSERT INTO country (id, name, iso_name) VALUES (185, 'Portugal', 'PT');
        INSERT INTO country (id, name, iso_name) VALUES (186, 'Puerto Rico', 'PR');
        INSERT INTO country (id, name, iso_name) VALUES (187, 'Qatar', 'QA');
        INSERT INTO country (id, name, iso_name) VALUES (188, 'Réunion', 'RE');
        INSERT INTO country (id, name, iso_name) VALUES (189, 'Romania', 'RO');
        INSERT INTO country (id, name, iso_name) VALUES (190, 'Russia', 'RU');
        INSERT INTO country (id, name, iso_name) VALUES (191, 'Rwanda', 'RW');
        INSERT INTO country (id, name, iso_name) VALUES (192, 'Saint Barthélemy', 'BL');
        INSERT INTO country (id, name, iso_name) VALUES (193, 'Saint Helena', 'SH');
        INSERT INTO country (id, name, iso_name) VALUES (194, 'Saint Kitts and Nevis', 'KN');
        INSERT INTO country (id, name, iso_name) VALUES (195, 'Saint Lucia', 'LC');
        INSERT INTO country (id, name, iso_name) VALUES (196, 'Saint Martin', 'MF');
        INSERT INTO country (id, name, iso_name) VALUES (197, 'Saint Pierre and Miquelon', 'PM');
        INSERT INTO country (id, name, iso_name) VALUES (198, 'Saint Vincent and the Grenadines', 'VC');
        INSERT INTO country (id, name, iso_name) VALUES (199, 'Samoa', 'WS');
        INSERT INTO country (id, name, iso_name) VALUES (200, 'San Marino', 'SM');
        INSERT INTO country (id, name, iso_name) VALUES (201, 'São Tomé and Príncipe', 'ST');
        INSERT INTO country (id, name, iso_name) VALUES (202, 'Saudi Arabia', 'SA');
        INSERT INTO country (id, name, iso_name) VALUES (203, 'Senegal', 'SN');
        INSERT INTO country (id, name, iso_name) VALUES (204, 'Serbia', 'RS');
        INSERT INTO country (id, name, iso_name) VALUES (205, 'Seychelles', 'SC');
        INSERT INTO country (id, name, iso_name) VALUES (206, 'Sierra Leone', 'SL');
        INSERT INTO country (id, name, iso_name) VALUES (207, 'Singapore', 'SG');
        INSERT INTO country (id, name, iso_name) VALUES (208, 'Sint Maarten', 'SX');
        INSERT INTO country (id, name, iso_name) VALUES (209, 'Slovakia', 'SK');
        INSERT INTO country (id, name, iso_name) VALUES (210, 'Slovenia', 'SI');
        INSERT INTO country (id, name, iso_name) VALUES (211, 'Solomon Islands', 'SB');
        INSERT INTO country (id, name, iso_name) VALUES (212, 'Somalia', 'SO');
        INSERT INTO country (id, name, iso_name) VALUES (213, 'South Africa', 'ZA');
        INSERT INTO country (id, name, iso_name) VALUES (214, 'South Georgia and the South Sandwich Islands', 'GS');
        INSERT INTO country (id, name, iso_name) VALUES (215, 'South Korea', 'KR');
        INSERT INTO country (id, name, iso_name) VALUES (216, 'South Sudan', 'SS');
        INSERT INTO country (id, name, iso_name) VALUES (217, 'Spain', 'ES');
        INSERT INTO country (id, name, iso_name) VALUES (218, 'Sri Lanka', 'LK');
        INSERT INTO country (id, name, iso_name) VALUES (219, 'Sudan', 'SD');
        INSERT INTO country (id, name, iso_name) VALUES (220, 'Suriname', 'SR');
        INSERT INTO country (id, name, iso_name) VALUES (221, 'Svalbard and Jan Mayen', 'SJ');
        INSERT INTO country (id, name, iso_name) VALUES (222, 'Swaziland', 'SZ');
        INSERT INTO country (id, name, iso_name) VALUES (223, 'Sweden', 'SE');
        INSERT INTO country (id, name, iso_name) VALUES (224, 'Switzerland', 'CH');
        INSERT INTO country (id, name, iso_name) VALUES (225, 'Syria', 'SY');
        INSERT INTO country (id, name, iso_name) VALUES (226, 'Taiwan', 'TW');
        INSERT INTO country (id, name, iso_name) VALUES (227, 'Tajikistan', 'TJ');
        INSERT INTO country (id, name, iso_name) VALUES (228, 'Tanzania', 'TZ');
        INSERT INTO country (id, name, iso_name) VALUES (229, 'Thailand', 'TH');
        INSERT INTO country (id, name, iso_name) VALUES (230, 'Timor-Leste', 'TL');
        INSERT INTO country (id, name, iso_name) VALUES (231, 'Togo', 'TG');
        INSERT INTO country (id, name, iso_name) VALUES (232, 'Tokelau', 'TK');
        INSERT INTO country (id, name, iso_name) VALUES (233, 'Tonga', 'TO');
        INSERT INTO country (id, name, iso_name) VALUES (234, 'Trinidad and Tobago', 'TT');
        INSERT INTO country (id, name, iso_name) VALUES (235, 'Tristan da Cunha', 'TA');
        INSERT INTO country (id, name, iso_name) VALUES (236, 'Tunisia', 'TN');
        INSERT INTO country (id, name, iso_name) VALUES (237, 'Turkey', 'TR');
        INSERT INTO country (id, name, iso_name) VALUES (238, 'Turkmenistan', 'TM');
        INSERT INTO country (id, name, iso_name) VALUES (239, 'Turks and Caicos Islands', 'TC');
        INSERT INTO country (id, name, iso_name) VALUES (240, 'Tuvalu', 'TV');
        INSERT INTO country (id, name, iso_name) VALUES (241, 'U.S. Outlying Islands', 'UM');
        INSERT INTO country (id, name, iso_name) VALUES (242, 'U.S. Virgin Islands', 'VI');
        INSERT INTO country (id, name, iso_name) VALUES (243, 'Uganda', 'UG');
        INSERT INTO country (id, name, iso_name) VALUES (244, 'Ukraine', 'UA');
        INSERT INTO country (id, name, iso_name) VALUES (245, 'United Arab Emirates', 'AE');
        INSERT INTO country (id, name, iso_name) VALUES (246, 'United Kingdom', 'GB');
        INSERT INTO country (id, name, iso_name) VALUES (247, 'United States', 'US');
        INSERT INTO country (id, name, iso_name) VALUES (248, 'Uruguay', 'UY');
        INSERT INTO country (id, name, iso_name) VALUES (249, 'Uzbekistan', 'UZ');
        INSERT INTO country (id, name, iso_name) VALUES (250, 'Vanuatu', 'VU');
        INSERT INTO country (id, name, iso_name) VALUES (251, 'Vatican City', 'VA');
        INSERT INTO country (id, name, iso_name) VALUES (252, 'Venezuela', 'VE');
        INSERT INTO country (id, name, iso_name) VALUES (253, 'Vietnam', 'VN');
        INSERT INTO country (id, name, iso_name) VALUES (254, 'Wallis and Futuna', 'WF');
        INSERT INTO country (id, name, iso_name) VALUES (255, 'Western Sahara', 'EH');
        INSERT INTO country (id, name, iso_name) VALUES (256, 'Yemen', 'YE');
        INSERT INTO country (id, name, iso_name) VALUES (257, 'Zambia', 'ZM');
        INSERT INTO country (id, name, iso_name) VALUES (258, 'Zimbabwe', 'ZW');
    """
    sql += """
        ALTER TABLE public.test_result DROP test_recommendation_id;
        ALTER TABLE public.test_recommendation ADD test_result_id INT NULL;
        ALTER TABLE public.test_recommendation ADD CONSTRAINT test_recommendation_test_result_id_fk
        FOREIGN KEY (test_result_id) REFERENCES test_result (id);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DROP TABLE IF EXISTS public.country;
        ALTER TABLE public.test_result ADD test_recommendation_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_test_recommendation_id_fk
        FOREIGN KEY (test_recommendation_id) REFERENCES test_recommendation (id);
        ALTER TABLE public.test_recommendation DROP test_result_id;
    """
    op.execute(sql=sql)
