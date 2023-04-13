// A GeoJSON FeatureCollection representing hawker centres in Singapore. Data is retrieved from data.gov.sg
// @typedef {Object} HawkerCentreCollection
// @property {string} type - The type of the GeoJSON object, always "FeatureCollection".
// @property {Object} crs - The coordinate reference system for the GeoJSON object.
// @property {Object} crs.properties - The properties of the coordinate reference system.
// @property {Object[]} features - An array of GeoJSON Feature objects, each representing a hawker centre.

export const hawker = 
{
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok North Street 4 Blk 85 (85 Fengshan Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 85, Bedok North Street 4, Singapore 460085",
                "ADDRESSBLOCKHOUSENUMBER": "85",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok North Street 4",
                "LANDXADDRESSPOINT": "39731.49",
                "LANDYADDRESSPOINT": "34910.13",
                "ADDRESSPOSTALCODE": "460085",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.938732580554,
                    1.33198706861747,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Redhill Lane Blk 85 (Redhill Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 85, Redhill Lane, Singapore 150085",
                "ADDRESSBLOCKHOUSENUMBER": "85",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Redhill Lane",
                "LANDXADDRESSPOINT": "26332.89",
                "LANDYADDRESSPOINT": "29972.02",
                "ADDRESSPOSTALCODE": "150085",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818338919994,
                    1.28733076703987,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Sembawang Hills Food Centre (Jalan Leban Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "590, Upper Thomson Road, Singapore 574419",
                "ADDRESSBLOCKHOUSENUMBER": "590",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Upper Thomson Road",
                "LANDXADDRESSPOINT": "27518.75",
                "LANDYADDRESSPOINT": "39376.87",
                "ADDRESSPOSTALCODE": "574419",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.828994204342,
                    1.37238494002145,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Serangoon Garden Market",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "49A, Serangoon Garden Way, Singapore 555945",
                "ADDRESSBLOCKHOUSENUMBER": "49A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Serangoon Garden Way",
                "LANDXADDRESSPOINT": "31719.13",
                "LANDYADDRESSPOINT": "38356.53",
                "ADDRESSPOSTALCODE": "555945",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.866737484646,
                    1.3631571201113,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Shunfu Road Blk 320 (Shunfu Mart)",
                "description": "Not eligible for HUP",
                "ADDRESS_MYENV": "Blk 320, Shunfu Road, Singapore 570320",
                "ADDRESSBLOCKHOUSENUMBER": "320",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Shunfu Road",
                "LANDXADDRESSPOINT": "28413.24",
                "LANDYADDRESSPOINT": "37123.63",
                "ADDRESSPOSTALCODE": "570320",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.837031803823,
                    1.35200744198417,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Sims Place Blk 49 (Sims Vista Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 49, Sims Place, Singapore 380049",
                "ADDRESSBLOCKHOUSENUMBER": "49",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Sims Place",
                "LANDXADDRESSPOINT": "33130.31",
                "LANDYADDRESSPOINT": "33261.95",
                "ADDRESSPOSTALCODE": "380049",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.879417030673,
                    1.31708335109103,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Smith Street Blk 335 (Chinatown Complex Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 335, Smith Street, Singapore 050335",
                "ADDRESSBLOCKHOUSENUMBER": "335",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Smith Street",
                "LANDXADDRESSPOINT": "29097.23",
                "LANDYADDRESSPOINT": "29408.57",
                "ADDRESSPOSTALCODE": "50335",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843177616296,
                    1.28223514826381,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Taman Jurong Market and Food Centre",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "3, Yung Sheng Road, Singapore 618499",
                "ADDRESSBLOCKHOUSENUMBER": "3",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Yung Sheng Road",
                "LANDXADDRESSPOINT": "15557.970000000001",
                "LANDYADDRESSPOINT": "35197.91",
                "ADDRESSPOSTALCODE": "618499",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.721519868629,
                    1.33458935951076,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tampines Street 11 Blk 137 (Tampines Round Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 137, Tampines Street 11, Singapore 521137",
                "ADDRESSBLOCKHOUSENUMBER": "137",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Tampines Street 11",
                "LANDXADDRESSPOINT": "40387.13",
                "LANDYADDRESSPOINT": "36419.78",
                "ADDRESSPOSTALCODE": "521137",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.944624481151,
                    1.3456395210229,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tanglin Halt Market",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "48A, Tanglin Halt Road, Singapore 148813",
                "ADDRESSBLOCKHOUSENUMBER": "48A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Tanglin Halt Road",
                "LANDXADDRESSPOINT": "24027.71",
                "LANDYADDRESSPOINT": "31460.22",
                "ADDRESSPOSTALCODE": "148813",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.797625756738,
                    1.30078931480841,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tanjong Pagar Plaza Blk 6 (Blk 6 Tanjong Pagar Plaza Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 6, Tanjong Pagar Plaza, Singapore 081006",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Tanjong Pagar Plaza",
                "LANDXADDRESSPOINT": "29096.05",
                "LANDYADDRESSPOINT": "28787.08",
                "ADDRESSPOSTALCODE": "81006",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843166992138,
                    1.27661461066321,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Teban Gardens Road Blk 37A (Teban Gardens Market and Food Centre)",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "Blk 37A, Teban Garden Road, Singapore 601037",
                "ADDRESSBLOCKHOUSENUMBER": "37A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Teban Gardens Road",
                "LANDXADDRESSPOINT": "17936.37",
                "LANDYADDRESSPOINT": "33678.4",
                "ADDRESSPOSTALCODE": "601037",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.742891623681,
                    1.32084835041654,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Telok Blangah Crescent Blk 11 (11 Telok Blangah Crescent Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 11, Telok Blangah Crescent, Singapore 090011",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Telok Blangah Crescent",
                "LANDXADDRESSPOINT": "26366.58",
                "LANDYADDRESSPOINT": "28870.260000000002",
                "ADDRESSPOSTALCODE": "90011",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818641695106,
                    1.27736683810318,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Telok Blangah Drive Blk 79 (Telok Blangah Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 79, Telok Blangah Drive, Singapore 100079",
                "ADDRESSBLOCKHOUSENUMBER": "79",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Telok Blangah Drive",
                "LANDXADDRESSPOINT": "25140.71",
                "LANDYADDRESSPOINT": "28428.13",
                "ADDRESSPOSTALCODE": "100079",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.807626838954,
                    1.27336828250285,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Telok Blangah Drive Blk 82 (Telok Blangah Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 82, Telok Blangah Drive, Singapore 100082",
                "ADDRESSBLOCKHOUSENUMBER": "82",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Telok Blangah Drive",
                "LANDXADDRESSPOINT": "25175.96",
                "LANDYADDRESSPOINT": "28488.45",
                "ADDRESSPOSTALCODE": "100082",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.807943567416,
                    1.27391379857001,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Telok Blangah Rise Blk 36 (Telok Blangah Rise Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 36, Telok Blangah Rise, Singapore 090036",
                "ADDRESSBLOCKHOUSENUMBER": "36",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Telok Blangah Rise",
                "LANDXADDRESSPOINT": "26753.38",
                "LANDYADDRESSPOINT": "28355.97",
                "ADDRESSPOSTALCODE": "90036",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82211725658,
                    1.27271579716508,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tiong Bahru Market",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "30, Seng Poh Road, Singapore 168898",
                "ADDRESSBLOCKHOUSENUMBER": "30",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Seng Poh Road",
                "LANDXADDRESSPOINT": "27892.07",
                "LANDYADDRESSPOINT": "29724.05",
                "ADDRESSPOSTALCODE": "168898",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.832348785334,
                    1.28508825756819,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 1 Blk 127 (Toa Payoh West Market and Food Court)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 127, Lorong 1 Toa Payoh, Singapore 310127",
                "ADDRESSBLOCKHOUSENUMBER": "127",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 1 Toa Payoh",
                "LANDXADDRESSPOINT": "29270.15",
                "LANDYADDRESSPOINT": "35585.01",
                "ADDRESSPOSTALCODE": "310127",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.84473162196,
                    1.33809268551386,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 4 Blk 74 (Toa Payoh Vista Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 74, Lorong 4 Toa Payoh, Singapore 310074",
                "ADDRESSBLOCKHOUSENUMBER": "74",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 4 Toa Payoh",
                "LANDXADDRESSPOINT": "30078.95",
                "LANDYADDRESSPOINT": "35193.08",
                "ADDRESSPOSTALCODE": "310074",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.851999137527,
                    1.33454816495637,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 4 Blk 93",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 93, Lorong 4 Toa Payoh, Singapore 310093",
                "ADDRESSBLOCKHOUSENUMBER": "93",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 4 Toa Payoh",
                "LANDXADDRESSPOINT": "29802.32",
                "LANDYADDRESSPOINT": "35627.26",
                "ADDRESSPOSTALCODE": "310093",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.849513484035,
                    1.3384747524617,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 5 Blk 75",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 75, Lorong 5 Toa Payoh, Singapore 310075",
                "ADDRESSBLOCKHOUSENUMBER": "75",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 5 Toa Payoh",
                "LANDXADDRESSPOINT": "30183.83",
                "LANDYADDRESSPOINT": "35357.91",
                "ADDRESSPOSTALCODE": "310075",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.852941556275,
                    1.33603882157063,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 7 Blk 22 (Kim Keat Palm Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 22, Lorong 7 Toa Payoh, Singapore 310022",
                "ADDRESSBLOCKHOUSENUMBER": "22",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 7 Toa Payoh",
                "LANDXADDRESSPOINT": "30639.5",
                "LANDYADDRESSPOINT": "35268.64",
                "ADDRESSPOSTALCODE": "310022",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.857036007166,
                    1.33523145909678,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Toa Payoh Lorong 8 Blk 210",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 210, Lorong 8 Toa Payoh, Singapore 310210",
                "ADDRESSBLOCKHOUSENUMBER": "210",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong 8 Toa Payoh",
                "LANDXADDRESSPOINT": "30345.61",
                "LANDYADDRESSPOINT": "35824.76",
                "ADDRESSPOSTALCODE": "310210",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.854395279214,
                    1.3402608349586,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Upper Boon Keng Road Blk 17 (Blk 17 Upper Boon Keng Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 17, Upper Boon Keng Road, Singapore 380017",
                "ADDRESSBLOCKHOUSENUMBER": "17",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Upper Boon Keng Road",
                "LANDXADDRESSPOINT": "32262.61",
                "LANDYADDRESSPOINT": "33034.67",
                "ADDRESSPOSTALCODE": "380017",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.871620273635,
                    1.31502804429519,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Upper Cross Street Blk 531A (Hong Lim Food Centre and Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 531A, Upper Cross Street, Singapore 051531",
                "ADDRESSBLOCKHOUSENUMBER": "531A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Upper Cross Street",
                "LANDXADDRESSPOINT": "29391.18",
                "LANDYADDRESSPOINT": "29741.54",
                "ADDRESSPOSTALCODE": "51531",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845818885585,
                    1.28524640047048,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "West Coast Drive Blk 502 (Ayer Rajah Market)",
                "description": "Not eligible for HUP",
                "ADDRESS_MYENV": "Blk 502, West Coast Drive, Singapore 120502",
                "ADDRESSBLOCKHOUSENUMBER": "502",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "West Coast Drive",
                "LANDXADDRESSPOINT": "19747.53",
                "LANDYADDRESSPOINT": "32687.74",
                "ADDRESSPOSTALCODE": "120502",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.759166093858,
                    1.31188972115897,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "West Coast Drive Blk 503 (Ayer Rajah Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 503, West Coast Drive, Singapore 120503",
                "ADDRESSBLOCKHOUSENUMBER": "503",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "West Coast Drive",
                "LANDXADDRESSPOINT": "19812.66",
                "LANDYADDRESSPOINT": "32678.15",
                "ADDRESSPOSTALCODE": "120503",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.759751321019,
                    1.31180301004196,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Whampoa Drive Blk 90 (Whampoa Drive Makan Place/Whampoa Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 90, Whampoa Drive, Singapore 320090",
                "ADDRESSBLOCKHOUSENUMBER": "90",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Whampoa Drive",
                "LANDXADDRESSPOINT": "30428.25",
                "LANDYADDRESSPOINT": "33909.85",
                "ADDRESSPOSTALCODE": "320090",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.855137696535,
                    1.32294306204189,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Whampoa Drive Blk 91/92 (Whampoa Drive Makan Place/Whampoa Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 91/92, Whampoa Drive, Singapore 320091/320092",
                "ADDRESSBLOCKHOUSENUMBER": "91/92",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Whampoa Drive",
                "LANDXADDRESSPOINT": "30309.21",
                "LANDYADDRESSPOINT": "33962.78",
                "ADDRESSPOSTALCODE": "320091",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.85406806286,
                    1.32342175143826,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Yishun Park Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "Blk 51, Yishun Avenue 11, Singapore 768867",
                "ADDRESSBLOCKHOUSENUMBER": "51",
                "ADDRESSBUILDINGNAME": "Yishun Park Hawker Centre",
                "ADDRESSSTREETNAME": "Yishun Avenue 11",
                "LANDXADDRESSPOINT": "29271.88",
                "LANDYADDRESSPOINT": "45196.73",
                "ADDRESSPOSTALCODE": "768867",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.844747581861,
                    1.42501763803265,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Yishun Ring Road Blk 104/105 (Chong Pang Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 104/105, Yishun Ring Road, Singapore 760104/760105",
                "ADDRESSBLOCKHOUSENUMBER": "104/105",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Yishun Ring Road",
                "LANDXADDRESSPOINT": "27467.95",
                "LANDYADDRESSPOINT": "45907.73",
                "ADDRESSPOSTALCODE": "760104",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.828537609942,
                    1.43144768831222,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Zion Riverside Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "70, Zion Road, Singapore 247792",
                "ADDRESSBLOCKHOUSENUMBER": "70",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Zion Road",
                "LANDXADDRESSPOINT": "27763.03",
                "LANDYADDRESSPOINT": "30526.15",
                "ADDRESSPOSTALCODE": "247792",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831189303546,
                    1.29234216757957,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Margaret Drive Hawker Centre",
                "description": "New Replacement Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "38A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Margaret Drive",
                "LANDXADDRESSPOINT": "24816.7",
                "LANDYADDRESSPOINT": "31094.91",
                "ADDRESSPOSTALCODE": "142038",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.804715225285,
                    1.29748567106686,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Woodleigh Village Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "202C",
                "ADDRESSBUILDINGNAME": "Woodleigh Village",
                "ADDRESSSTREETNAME": "Woodleigh Link",
                "LANDXADDRESSPOINT": "32314.87",
                "LANDYADDRESSPOINT": "35773.4",
                "ADDRESSPOSTALCODE": "363202",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.872090241567,
                    1.3397961360031,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Anchorvale Village Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "339",
                "ADDRESSBUILDINGNAME": "Anchorvale Village",
                "ADDRESSSTREETNAME": "Anchorvale Road",
                "LANDXADDRESSPOINT": "34139.8",
                "LANDYADDRESSPOINT": "42089.26",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.888489618777,
                    1.39691417603694,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Fernvale Hawker Centre & Market",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "21",
                "ADDRESSBUILDINGNAME": "Fernvale Hub",
                "ADDRESSSTREETNAME": "Sengkang West Avenue",
                "LANDXADDRESSPOINT": "32867.9",
                "LANDYADDRESSPOINT": "41500.770000000004",
                "ADDRESSPOSTALCODE": "797650",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.877060478847,
                    1.39159232727757,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Punggol Town Hub Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "Punggol Town Hub",
                "ADDRESSSTREETNAME": "",
                "LANDXADDRESSPOINT": "35955.520000000004",
                "LANDYADDRESSPOINT": "43336.13",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.904805657576,
                    1.40818996870647,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Punggol Digital District Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ponggol Seventeenth Avenue",
                "LANDXADDRESSPOINT": "36339.12",
                "LANDYADDRESSPOINT": "44041.270000000004",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.908252830309,
                    1.41456688638677,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Senja Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Senja Road",
                "LANDXADDRESSPOINT": "19981.13",
                "LANDYADDRESSPOINT": "41006.57",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.76126288878,
                    1.38712226320812,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Batok Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bukit Batok West Avenue 6",
                "LANDXADDRESSPOINT": "17817.9",
                "LANDYADDRESSPOINT": "37478.450000000004",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.741825836536,
                    1.35521457121361,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Market Street Hawker Centre",
                "description": "New Replacement Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "50",
                "ADDRESSBUILDINGNAME": "CapitaSpring",
                "ADDRESSSTREETNAME": "Market Street",
                "LANDXADDRESSPOINT": "29874.82",
                "LANDYADDRESSPOINT": "29650.7",
                "ADDRESSPOSTALCODE": "48940",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.850164578087,
                    1.2844248503218,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Buangkok Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "Sengkang Grand",
                "ADDRESSSTREETNAME": "Sengkang Central",
                "LANDXADDRESSPOINT": "34575.37",
                "LANDYADDRESSPOINT": "40482.99",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.892403203249,
                    1.38238755827879,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok Reservoir Road Blk 630",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "Blk 630, Bedok Reservoir Road, Singapore 470630",
                "ADDRESSBLOCKHOUSENUMBER": "630",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok Reservoir Road",
                "LANDXADDRESSPOINT": "36985",
                "LANDYADDRESSPOINT": "35039.64",
                "ADDRESSPOSTALCODE": "470630",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.91405388831,
                    1.33315924777343,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok South Road Blk 16",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 16, Bedok South Road, Singapore 460016",
                "ADDRESSBLOCKHOUSENUMBER": "16",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok South Road",
                "LANDXADDRESSPOINT": "39376.14",
                "LANDYADDRESSPOINT": "33645.7",
                "ADDRESSPOSTALCODE": "460016",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.93553909635,
                    1.32055216480957,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bendemeer Road Blk 29 (Bendemeer Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 29, Bendemeer Road, Singapore 330029",
                "ADDRESSBLOCKHOUSENUMBER": "29",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bendemeer Road",
                "LANDXADDRESSPOINT": "31305.63",
                "LANDYADDRESSPOINT": "33497.85",
                "ADDRESSPOSTALCODE": "330029",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.863021377531,
                    1.31921699786807,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Beo Crescent Market",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "38A, Beo Crescent, Singapore 169982",
                "ADDRESSBLOCKHOUSENUMBER": "38A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Beo Crescent",
                "LANDXADDRESSPOINT": "27336.64",
                "LANDYADDRESSPOINT": "30136.920000000002",
                "ADDRESSPOSTALCODE": "169982",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.827358017197,
                    1.28882210205212,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Berseh Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "166, Jalan Besar, Singapore 208877",
                "ADDRESSBLOCKHOUSENUMBER": "166",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jalan Besar",
                "LANDXADDRESSPOINT": "30619.27",
                "LANDYADDRESSPOINT": "32184.16",
                "ADDRESSPOSTALCODE": "208877",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.856853966617,
                    1.30733651651517,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Boon Lay Place Blk 221A/B (Boon Lay Place Market and Food Village)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 221A/B, Boon Lay Place, Singapore 641221/642221",
                "ADDRESSBLOCKHOUSENUMBER": "221A/B",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Boon Lay Place",
                "LANDXADDRESSPOINT": "14587.57",
                "LANDYADDRESSPOINT": "36373.79",
                "ADDRESSPOSTALCODE": "641221",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.712799765872,
                    1.3452231627967,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Buffalo Road Blk 665 (Tekka Centre/Zhu Jiao Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 665, Buffalo Road, Singapore 210665",
                "ADDRESSBLOCKHOUSENUMBER": "665",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Buffalo Road",
                "LANDXADDRESSPOINT": "29915.58",
                "LANDYADDRESSPOINT": "32059.13",
                "ADDRESSPOSTALCODE": "210665",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.850530969624,
                    1.30620584090733,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Merah Central Blk 163 (Bukit Merah Central Food Centre)",
                "description": "Opted out of HUP",
                "ADDRESS_MYENV": "Blk 163, Bukit Merah Central, Singapore 150163",
                "ADDRESSBLOCKHOUSENUMBER": "163",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bukit Merah Central",
                "LANDXADDRESSPOINT": "26183.03",
                "LANDYADDRESSPOINT": "29569.73",
                "ADDRESSPOSTALCODE": "150163",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.816992390295,
                    1.28369258928085,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Merah Lane 1 Blk 120 (Alexandra Village Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 120, Bukit Merah Lane, Singapore 150120",
                "ADDRESSBLOCKHOUSENUMBER": "120",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bukit Merah Lane 1",
                "LANDXADDRESSPOINT": "24791.54",
                "LANDYADDRESSPOINT": "29857.81",
                "ADDRESSPOSTALCODE": "150120",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.804489277779,
                    1.28629777221659,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Merah View Blk 115 (Blk 115 Bukit Merah View Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 115, Bukit Merah View, Singapore 151115",
                "ADDRESSBLOCKHOUSENUMBER": "115",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bukit Merah View",
                "LANDXADDRESSPOINT": "26745.83",
                "LANDYADDRESSPOINT": "29770.11",
                "ADDRESSPOSTALCODE": "151115",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.822049361292,
                    1.28550478314618,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Panjang Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "2 Bukit Panjang Ring Road, Singapore 679947",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bukit Panjang Ring Road",
                "LANDXADDRESSPOINT": "21230.49",
                "LANDYADDRESSPOINT": "39953.67",
                "ADDRESSPOSTALCODE": "679947",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.772489583206,
                    1.37760053528611,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Canberra Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "Bukit Canberra",
                "ADDRESSSTREETNAME": "",
                "LANDXADDRESSPOINT": "26784.850000000002",
                "LANDYADDRESSPOINT": "47872.53",
                "ADDRESSPOSTALCODE": "",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.822399230842,
                    1.44921660555282,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Market Street Interim Hawker Centre",
                "description": "Interim Centre",
                "ADDRESS_MYENV": "5, Cross Street, Singapore 048148",
                "ADDRESSBLOCKHOUSENUMBER": "5",
                "ADDRESSBUILDINGNAME": "Market Street Interim Hawker Centre",
                "ADDRESSSTREETNAME": "Cross Street",
                "LANDXADDRESSPOINT": "29742.29",
                "LANDYADDRESSPOINT": "29337.86",
                "ADDRESSPOSTALCODE": "48418",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848973726501,
                    1.28159564281228,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Marsiling Lane Blk 20/21",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 20/21, Marsiling Lane, Singapore 730020/730021",
                "ADDRESSBLOCKHOUSENUMBER": "20/21",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Marsiling Lane",
                "LANDXADDRESSPOINT": "21755.23",
                "LANDYADDRESSPOINT": "47282.71",
                "ADDRESSPOSTALCODE": "730020",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.777203165702,
                    1.44388181695611,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Marsiling Mall Hawker Centre",
                "description": "New Replacement Centre",
                "ADDRESS_MYENV": "Blk 4,Woodlands St 12,Singapore\u00a0738623",
                "ADDRESSBLOCKHOUSENUMBER": "4",
                "ADDRESSBUILDINGNAME": "Marsiling Mall",
                "ADDRESSSTREETNAME": "Woodlands Street 12",
                "LANDXADDRESSPOINT": "22042.510000000002",
                "LANDYADDRESSPOINT": "46139.03",
                "ADDRESSPOSTALCODE": "738623",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.779784899996,
                    1.43353885680037,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Maxwell Food Centre (Kim Hua Market)",
                "description": "Upgraded prior to HUP",
                "ADDRESS_MYENV": "1, Kadayanallur Street, Singapore 069184",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Kadayanallur Street",
                "LANDXADDRESSPOINT": "29280.89",
                "LANDYADDRESSPOINT": "29173.83",
                "ADDRESSPOSTALCODE": "69184",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.844827863123,
                    1.28011223513205,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Mei Chin Road Blk 159 (Mei Chin Road Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 159, Mei Chin Road, Singapore 140159",
                "ADDRESSBLOCKHOUSENUMBER": "159",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Mei Chin Road",
                "LANDXADDRESSPOINT": "24615.11",
                "LANDYADDRESSPOINT": "30625.03",
                "ADDRESSPOSTALCODE": "140159",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.802903901116,
                    1.29323622090658,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "New Market Road Blk 32 (People's Park Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 32, New Market Road, Singapore 050032",
                "ADDRESSBLOCKHOUSENUMBER": "32",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "New Market Road",
                "LANDXADDRESSPOINT": "29030.58",
                "LANDYADDRESSPOINT": "29713.3",
                "ADDRESSPOSTALCODE": "50032",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.842578750107,
                    1.28499102169498,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "New Upper Changi Road Blk 208B",
                "description": "New Replacement Centre",
                "ADDRESS_MYENV": "Blk 208B, New Upper Changi Road, Singapore 462208",
                "ADDRESSBLOCKHOUSENUMBER": "208B",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "New Upper Changi Road",
                "LANDXADDRESSPOINT": "38822.05",
                "LANDYADDRESSPOINT": "34108.62",
                "ADDRESSPOSTALCODE": "462208",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.93056047823,
                    1.32473884451035,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "New Upper Changi Road Blk 58",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 58, New Upper Changi Road, Singapore 461058",
                "ADDRESSBLOCKHOUSENUMBER": "58",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "New Upper Changi Road",
                "LANDXADDRESSPOINT": "39998.6",
                "LANDYADDRESSPOINT": "34047.74",
                "ADDRESSPOSTALCODE": "461058",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.941132372619,
                    1.32418782817919,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Newton Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "500, Clemenceau Ave North, Singapore 229495",
                "ADDRESSBLOCKHOUSENUMBER": "500",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Clemenceau Ave North",
                "LANDXADDRESSPOINT": "28694.91",
                "LANDYADDRESSPOINT": "32687.91",
                "ADDRESSPOSTALCODE": "229495",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839562687644,
                    1.31189235691653,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "North Bridge Road Market",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "861, North Bridge Road, Singapore 198783",
                "ADDRESSBLOCKHOUSENUMBER": "861",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "North Bridge Road",
                "LANDXADDRESSPOINT": "31402.43",
                "LANDYADDRESSPOINT": "32010.440000000002",
                "ADDRESSPOSTALCODE": "198783",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.863891012338,
                    1.30576537802761,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Old Airport Road Blk 51 (51 Old Airport Road Food Centre and Shopping Mall)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 51, Old Airport Road, Singapore 390051",
                "ADDRESSBLOCKHOUSENUMBER": "51",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Old Airport Road",
                "LANDXADDRESSPOINT": "33844.39",
                "LANDYADDRESSPOINT": "32285.39",
                "ADDRESSPOSTALCODE": "390051",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.885833217727,
                    1.30825156309798,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Our Tampines Hub",
                "description": "New Centre",
                "ADDRESS_MYENV": "1 Tampines Walk, Singapore 528523",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSBUILDINGNAME": "Our Tampines Hub",
                "ADDRESSSTREETNAME": "Tampines Walk",
                "LANDXADDRESSPOINT": "39841.96",
                "LANDYADDRESSPOINT": "37328.97",
                "ADDRESSPOSTALCODE": "528523",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.939726160039,
                    1.35386211773287,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pasir Panjang Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "121, Pasir Panjang Road, Singapore 118543",
                "ADDRESSBLOCKHOUSENUMBER": "121",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Pasir Panjang Road",
                "LANDXADDRESSPOINT": "23335.09",
                "LANDYADDRESSPOINT": "28708.93",
                "ADDRESSPOSTALCODE": "118543",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.791402660553,
                    1.27590752450201,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pasir Ris Central Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "Blk 110, Pasir Ris Central, Singapore 519641",
                "ADDRESSBLOCKHOUSENUMBER": "110",
                "ADDRESSBUILDINGNAME": "Pasir Ris Central Hawker Centre",
                "ADDRESSSTREETNAME": "Pasir Ris Central",
                "LANDXADDRESSPOINT": "41156.94",
                "LANDYADDRESSPOINT": "39493.21",
                "ADDRESSPOSTALCODE": "519641",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.951543034782,
                    1.37343413973246,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Queen Street Blk 270 (Albert Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 270, Queen Street, Singapore 180270",
                "ADDRESSBLOCKHOUSENUMBER": "270",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Queen Street",
                "LANDXADDRESSPOINT": "30325.21",
                "LANDYADDRESSPOINT": "31483.66",
                "ADDRESSPOSTALCODE": "180270",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.854211645499,
                    1.30100146521405,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Adam Road Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "2, Adam Road, Singapore 289876",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Adam Road",
                "LANDXADDRESSPOINT": "25868.4",
                "LANDYADDRESSPOINT": "34041.56",
                "ADDRESSPOSTALCODE": "289876",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.814165010384,
                    1.32413422253318,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Aljunied Ave 2 Blk 117 (Blk 117 Aljunied Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 117, Aljunied Ave 2, Singapore 380117",
                "ADDRESSBLOCKHOUSENUMBER": "117",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Aljunied Ave 2",
                "LANDXADDRESSPOINT": "33976.33",
                "LANDYADDRESSPOINT": "33656.16",
                "ADDRESSPOSTALCODE": "380117",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.88701902611,
                    1.32064829234987,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Amoy Street Food Centre (Telok Ayer Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "National Development Building, Annex B, Telok Ayer Street, Singapore 069111",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "National Development Building",
                "ADDRESSSTREETNAME": "Telok Ayer Street",
                "LANDXADDRESSPOINT": "29478.87",
                "LANDYADDRESSPOINT": "29075",
                "ADDRESSPOSTALCODE": "69111",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.846606784092,
                    1.27921844263269,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 1 Blk 226D (Kebun Baru Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 226D, Ang Mo Kio Ave 1, Singapore 564226",
                "ADDRESSBLOCKHOUSENUMBER": "226D",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 1",
                "LANDXADDRESSPOINT": "28658.02",
                "LANDYADDRESSPOINT": "38757.950000000004",
                "ADDRESSPOSTALCODE": "564226",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839231344066,
                    1.36678764523637,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 1 Blk 341 (Teck Ghee Court)",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "Blk 341, Ang Mo Kio Ave 1, Singapore 560341",
                "ADDRESSBLOCKHOUSENUMBER": "341",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 1",
                "LANDXADDRESSPOINT": "29662.16",
                "LANDYADDRESSPOINT": "38461.340000000004",
                "ADDRESSPOSTALCODE": "560341",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848254220438,
                    1.36410517096399,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 10 Blk 409 (Teck Ghee Square)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 409, Ang Mo Kio Ave 10, Singapore 560409",
                "ADDRESSBLOCKHOUSENUMBER": "409",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 10",
                "LANDXADDRESSPOINT": "30454.04",
                "LANDYADDRESSPOINT": "38313.590000000004",
                "ADDRESSPOSTALCODE": "560409",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.855369790045,
                    1.36276891777383,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 10 Blk 453A (Chong Boon Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 453A, Ang Mo Kio Ave 10, Singapore 561453",
                "ADDRESSBLOCKHOUSENUMBER": "453A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 10",
                "LANDXADDRESSPOINT": "30563.28",
                "LANDYADDRESSPOINT": "38918.61",
                "ADDRESSPOSTALCODE": "561453",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.856351437414,
                    1.36824049310006,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 10 Blk 527 (Cheng San Market and Cooked Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 527, Ang Mo Kio Ave 10, Singapore 560527",
                "ADDRESSBLOCKHOUSENUMBER": "527",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 10",
                "LANDXADDRESSPOINT": "30355.32",
                "LANDYADDRESSPOINT": "39419.450000000004",
                "ADDRESSPOSTALCODE": "560527",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.854482811591,
                    1.37276992816898,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 4 Blk 160/162 (Mayflower Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 160/162, Ang Mo Kio Ave 4, Singapore 560160/560162",
                "ADDRESSBLOCKHOUSENUMBER": "160/162",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 4",
                "LANDXADDRESSPOINT": "28656.12",
                "LANDYADDRESSPOINT": "39609.54",
                "ADDRESSPOSTALCODE": "560160",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839214290038,
                    1.37448912101909,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 4 Blk 628 (Ang Mo Kio 628 Market)",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "Blk 628, Ang Mo Kio Ave 4, Singapore 560628",
                "ADDRESSBLOCKHOUSENUMBER": "628",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 4",
                "LANDXADDRESSPOINT": "28819.49",
                "LANDYADDRESSPOINT": "40332.23",
                "ADDRESSPOSTALCODE": "560628",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.840682307297,
                    1.38102486670548,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Ave 6 Blk 724 (Blk 724 Ang Mo Kio Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 724, Ang Mo Kio Ave 6, Singapore 560724",
                "ADDRESSBLOCKHOUSENUMBER": "724",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Ave 6",
                "LANDXADDRESSPOINT": "29469.07",
                "LANDYADDRESSPOINT": "39356.14",
                "ADDRESSPOSTALCODE": "560724",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.846519219268,
                    1.37219743270045,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ang Mo Kio Street 22 Blk 226H (Kebun Baru Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 226H, Ang Mo Kio Street 22, Singapore 568226",
                "ADDRESSBLOCKHOUSENUMBER": "226H",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ang Mo Kio Street 22",
                "LANDXADDRESSPOINT": "28738.350000000002",
                "LANDYADDRESSPOINT": "38806.88",
                "ADDRESSPOSTALCODE": "568226",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839953165936,
                    1.36723014879667,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok Food Centre",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "1, Bedok Road, Singapore 469572",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok Road",
                "LANDXADDRESSPOINT": "41594.72",
                "LANDYADDRESSPOINT": "33624.11",
                "ADDRESSPOSTALCODE": "469572",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.955474150677,
                    1.32035600765426,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok North Street 1 Blk 216",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 216, Bedok North Street 1, Singapore 460216",
                "ADDRESSBLOCKHOUSENUMBER": "216",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok North Street 1",
                "LANDXADDRESSPOINT": "39118.19",
                "LANDYADDRESSPOINT": "34365.56",
                "ADDRESSPOSTALCODE": "460216",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.933221544751,
                    1.32706240888967,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok North Street 3 Blk 511 (Kaki Bukit 511 Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 511, Bedok North Street 3, Singapore 460511",
                "ADDRESSBLOCKHOUSENUMBER": "511",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok North Street 3",
                "LANDXADDRESSPOINT": "38826.65",
                "LANDYADDRESSPOINT": "35049.33",
                "ADDRESSPOSTALCODE": "460511",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.930602144469,
                    1.33324627868937,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bedok North Street 3 Blk 538",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 538, Bedok North Street 3, Singapore 460538",
                "ADDRESSBLOCKHOUSENUMBER": "538",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Bedok North Street 3",
                "LANDXADDRESSPOINT": "38185.86",
                "LANDYADDRESSPOINT": "34887.31",
                "ADDRESSPOSTALCODE": "460538",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.924844235398,
                    1.33178125123252,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Redhill Lane Blk 79 (Redhill Market)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 79, Redhill Lane, Singapore 150079",
                "ADDRESSBLOCKHOUSENUMBER": "79",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Redhill Lane",
                "LANDXADDRESSPOINT": "26339.98",
                "LANDYADDRESSPOINT": "30030.33",
                "ADDRESSPOSTALCODE": "150079",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818402623449,
                    1.2878581025663,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Bukit Timah Market",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "51, Upper Bukit Timah Road, Singapore 588215",
                "ADDRESSBLOCKHOUSENUMBER": "51",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Upper Bukit Timah Road",
                "LANDXADDRESSPOINT": "21620.5",
                "LANDYADDRESSPOINT": "35726.98",
                "ADDRESSPOSTALCODE": "588215",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.775995008012,
                    1.33937596351523,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Cambridge Road Blk 41A (Pek Kio Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 41A, Cambridge Road, Singapore 211041",
                "ADDRESSBLOCKHOUSENUMBER": "41A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Cambridge Road",
                "LANDXADDRESSPOINT": "29881.53",
                "LANDYADDRESSPOINT": "33159.8",
                "ADDRESSPOSTALCODE": "211041",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.850225081031,
                    1.31615991374589,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Changi Village Blk 2 and 3",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 2/3, Changi Village Road, Singapore 500002/500003",
                "ADDRESSBLOCKHOUSENUMBER": "2&3",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Changi Village Road",
                "LANDXADDRESSPOINT": "45241.4",
                "LANDYADDRESSPOINT": "41231.42",
                "ADDRESSPOSTALCODE": "500002",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.988245749103,
                    1.38915172065006,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Chomp Chomp Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "20, Kensington Park Road, Singapore 557269",
                "ADDRESSBLOCKHOUSENUMBER": "20",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Kensington Park Road",
                "LANDXADDRESSPOINT": "31696.72",
                "LANDYADDRESSPOINT": "38475",
                "ADDRESSPOSTALCODE": "557269",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.866536130299,
                    1.36422852315868,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ci Yuan Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "51 Hougang Avenue 9, Singapore 538776",
                "ADDRESSBLOCKHOUSENUMBER": "51",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Hougang Avenue 9",
                "LANDXADDRESSPOINT": "33526.48",
                "LANDYADDRESSPOINT": "39713.520000000004",
                "ADDRESSPOSTALCODE": "538776",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.882977999397,
                    1.37542896666561,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Circuit Road Blk 79/79A",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 79/79A, Circuit Road, Singapore 370079/371079",
                "ADDRESSBLOCKHOUSENUMBER": "79/79A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Circuit Road",
                "LANDXADDRESSPOINT": "33756.46",
                "LANDYADDRESSPOINT": "34297.67",
                "ADDRESSPOSTALCODE": "370079",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.885043500019,
                    1.32644992167231,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Circuit Road Blk 80 (80 Circuit Road Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 80, Circuit Road, Singapore 370080",
                "ADDRESSBLOCKHOUSENUMBER": "80",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Circuit Road",
                "LANDXADDRESSPOINT": "33988.5",
                "LANDYADDRESSPOINT": "34452.44",
                "ADDRESSPOSTALCODE": "370080",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.887128535137,
                    1.32784956142548,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Circuit Road Blk 89",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 89, Circuit Road, Singapore 370089",
                "ADDRESSBLOCKHOUSENUMBER": "89",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Circuit Road",
                "LANDXADDRESSPOINT": "33801.62",
                "LANDYADDRESSPOINT": "33965.43",
                "ADDRESSPOSTALCODE": "370089",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.885449224256,
                    1.32344525333847,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Clementi Ave 2 Blk 353 (Clementi Ave 2 Market/Cooked Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 353, Clementi Ave 2, Singapore 120353",
                "ADDRESSBLOCKHOUSENUMBER": "353",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Clementi Ave 2",
                "LANDXADDRESSPOINT": "21046.37",
                "LANDYADDRESSPOINT": "32961.71",
                "ADDRESSPOSTALCODE": "120353",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.770836740843,
                    1.31436772839327,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Clementi Ave 3 Blk 448",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 448, Clementi Ave 3, Singapore 120448",
                "ADDRESSBLOCKHOUSENUMBER": "448",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Clementi Ave 3",
                "LANDXADDRESSPOINT": "20342.32",
                "LANDYADDRESSPOINT": "32839.78",
                "ADDRESSPOSTALCODE": "120448",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.764510533078,
                    1.31326486994113,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Clementi West Street 2 Blk 726",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 726, Clementi West Street 2, Singapore 120726",
                "ADDRESSBLOCKHOUSENUMBER": "726",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Clementi West Street 2",
                "LANDXADDRESSPOINT": "20314.9",
                "LANDYADDRESSPOINT": "31791.21",
                "ADDRESSPOSTALCODE": "120726",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.764264410293,
                    1.3037819726711,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Commonwealth Crescent Market",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "31, Commonwealth Crescent, Singapore 149644",
                "ADDRESSBLOCKHOUSENUMBER": "31",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Commonwealth Crescent",
                "LANDXADDRESSPOINT": "24332.33",
                "LANDYADDRESSPOINT": "32135.05",
                "ADDRESSPOSTALCODE": "149644",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.800362825517,
                    1.3068922760844,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Commonwealth Drive Blk 1A/2A/3A (Tanglin Halt Food Centre/Commonwealth Drive Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 1A/ 2A/ 3A, Commonwealth Drive, Singapore 140001/140002/140003",
                "ADDRESSBLOCKHOUSENUMBER": "1A/2A/3A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Commonwealth Drive",
                "LANDXADDRESSPOINT": "24055.5",
                "LANDYADDRESSPOINT": "31341.24",
                "ADDRESSPOSTALCODE": "141001",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.797875477439,
                    1.29971330531884,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Dunman Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "271, Onan Road, Singapore 424768",
                "ADDRESSBLOCKHOUSENUMBER": "271",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Onan Road",
                "LANDXADDRESSPOINT": "35624.14",
                "LANDYADDRESSPOINT": "32413.99",
                "ADDRESSPOSTALCODE": "424768",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.90182514721,
                    1.30941418731185,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "East Coast Lagoon Food Village",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "1220, East Coast Parkway, Singapore 468960",
                "ADDRESSBLOCKHOUSENUMBER": "1220",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "East Coast Parkway",
                "LANDXADDRESSPOINT": "39318.07",
                "LANDYADDRESSPOINT": "32112.260000000002",
                "ADDRESSPOSTALCODE": "468960",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.935016747249,
                    1.30668431820832,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Empress Road Blk 7 (Empress Road Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 7, Empress Road, Singapore 260007",
                "ADDRESSBLOCKHOUSENUMBER": "7",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Empress Road",
                "LANDXADDRESSPOINT": "24919.24",
                "LANDYADDRESSPOINT": "33169.3",
                "ADDRESSPOSTALCODE": "260007",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.805636386821,
                    1.31624573118373,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Eunos Crescent Blk 4A",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 4A, Eunos Crescent, Singapore 402004",
                "ADDRESSBLOCKHOUSENUMBER": "4A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Eunos Crescent",
                "LANDXADDRESSPOINT": "35895.18",
                "LANDYADDRESSPOINT": "33621.21",
                "ADDRESSPOSTALCODE": "402004",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.904260878989,
                    1.32033178221424,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Geylang Bahru Blk 69 (Blk 69 Geylang Bahru Market and Food Centre)",
                "description": "Opted out of HUP",
                "ADDRESS_MYENV": "Blk 69, Geylang Bahru, Singapore 330069",
                "ADDRESSBLOCKHOUSENUMBER": "69",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Geylang Bahru",
                "LANDXADDRESSPOINT": "32082.77",
                "LANDYADDRESSPOINT": "33746.13",
                "ADDRESSPOSTALCODE": "330069",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.870004415152,
                    1.32146226027018,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Geylang Serai Market",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "1, Geylang Serai, Singapore 402001",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Geylang Serai",
                "LANDXADDRESSPOINT": "35223.38",
                "LANDYADDRESSPOINT": "33222.72",
                "ADDRESSPOSTALCODE": "402001",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.898224315881,
                    1.3167281476983,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ghim Moh Road Blk 20",
                "description": "Opted out of HUP",
                "ADDRESS_MYENV": "Blk 20, Ghim Moh Road, Singapore 270020",
                "ADDRESSBLOCKHOUSENUMBER": "20",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Ghim Moh Road",
                "LANDXADDRESSPOINT": "22982.14",
                "LANDYADDRESSPOINT": "32588.87",
                "ADDRESSPOSTALCODE": "270020",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.788230657145,
                    1.31099627311591,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Golden Mile Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "505, Beach Road, Singapore 199583",
                "ADDRESSBLOCKHOUSENUMBER": "505",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Beach Road",
                "LANDXADDRESSPOINT": "31401.57",
                "LANDYADDRESSPOINT": "31690.89",
                "ADDRESSPOSTALCODE": "199583",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.863883249985,
                    1.30287548090781,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Haig Road Blk 13/14 (Haig Road Market and Cooked Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 13/14, Haig Road, Singapore 430013/430014",
                "ADDRESSBLOCKHOUSENUMBER": "13/14",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Haig Road",
                "LANDXADDRESSPOINT": "34932.38",
                "LANDYADDRESSPOINT": "33047.33",
                "ADDRESSPOSTALCODE": "430013",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.895609494855,
                    1.3151420505272,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Havelock Road Blk 22A/B (Havelock Road Cooked Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 22A/B, Havelock Road, Singapore 161022/162022",
                "ADDRESSBLOCKHOUSENUMBER": "22A/B",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Havelock Road",
                "LANDXADDRESSPOINT": "27589.14",
                "LANDYADDRESSPOINT": "30043.3",
                "ADDRESSPOSTALCODE": "161022",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.829626834637,
                    1.28797543998733,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Holland Drive Blk 44 (Holland Drive Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 44, Holland Drive, Singapore 270044",
                "ADDRESSBLOCKHOUSENUMBER": "44",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Holland Drive",
                "LANDXADDRESSPOINT": "23487.74",
                "LANDYADDRESSPOINT": "32270.57",
                "ADDRESSPOSTALCODE": "270044",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.792773765463,
                    1.30811775909823,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Holland Village Market and Food Centre",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "1, Lorong Mambong, Singapore 277700",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Lorong Mambong",
                "LANDXADDRESSPOINT": "23720.25",
                "LANDYADDRESSPOINT": "32579.100000000002",
                "ADDRESSPOSTALCODE": "277700",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.794862936127,
                    1.31090802808558,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Hougang Ave 1 Blk 105 (Hougang 105 Hainanese Village Centre)",
                "description": "HUP Rebuilding",
                "ADDRESS_MYENV": "Blk 105, Hougang Ave 1, Singapore 530105",
                "ADDRESSBLOCKHOUSENUMBER": "105",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Hougang Ave 1",
                "LANDXADDRESSPOINT": "34317.020000000004",
                "LANDYADDRESSPOINT": "37326.05",
                "ADDRESSPOSTALCODE": "530105",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.890081064953,
                    1.35383739101169,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Hougang Street 21 Blk 209 (Kovan Hougang Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 209, Hougang Street 21, Singapore 530209",
                "ADDRESSBLOCKHOUSENUMBER": "209",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Hougang Street 21",
                "LANDXADDRESSPOINT": "33860.340000000004",
                "LANDYADDRESSPOINT": "37910.1",
                "ADDRESSPOSTALCODE": "530209",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.885977616903,
                    1.35911942212642,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jalan Batu Blk 4A (Blk 4A Jalan Batu Hawker Centre/Market)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 4A, Jalan Batu, Singapore 432004",
                "ADDRESSBLOCKHOUSENUMBER": "4A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jalan Batu",
                "LANDXADDRESSPOINT": "33633.770000000004",
                "LANDYADDRESSPOINT": "31640.43",
                "ADDRESSPOSTALCODE": "432004",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.88394058022,
                    1.30241881353449,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jalan Bukit Merah Blk 112 (Blk 112 Jalan Bukit Merah Market and Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 112, Jalan Bukit Merah, Singapore 160112",
                "ADDRESSBLOCKHOUSENUMBER": "112",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jalan Bukit Merah",
                "LANDXADDRESSPOINT": "27186.98",
                "LANDYADDRESSPOINT": "29161.95",
                "ADDRESSPOSTALCODE": "160112",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.826013285715,
                    1.28000481198881,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jalan Bukit Merah Blk 6 (ABC Brickworks Market/Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 6, Jalan Bukit Merah, Singapore 150006",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jalan Bukit Merah",
                "LANDXADDRESSPOINT": "25196.5",
                "LANDYADDRESSPOINT": "29930.23",
                "ADDRESSPOSTALCODE": "150006",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.808127999318,
                    1.28695275198944,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jalan Kukoh Blk 1 (Kukoh 21 Food Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 1, Jalan Kukoh, Singapore 161001",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jalan Kukoh",
                "LANDXADDRESSPOINT": "28737.57",
                "LANDYADDRESSPOINT": "30071.510000000002",
                "ADDRESSPOSTALCODE": "161001",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839945947186,
                    1.28823055540002,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong East Ave 1 Blk 347 (Yuhua Market and Hawker Centre)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 347, Jurong East Ave 1, Singapore 600347",
                "ADDRESSBLOCKHOUSENUMBER": "347",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jurong East Ave 1",
                "LANDXADDRESSPOINT": "16677.58",
                "LANDYADDRESSPOINT": "36383.57",
                "ADDRESSPOSTALCODE": "600347",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.731579747132,
                    1.34531247026793,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong East Street 24 Blk 254 (Yuhua Village Market and Food Centre)",
                "description": "HUP Reconfiguration",
                "ADDRESS_MYENV": "Blk 254, Jurong East Street 24, Singapore 600254",
                "ADDRESSBLOCKHOUSENUMBER": "254",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jurong East Street 24",
                "LANDXADDRESSPOINT": "17367.73",
                "LANDYADDRESSPOINT": "36176.73",
                "ADDRESSPOSTALCODE": "600254",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.737781231485,
                    1.34344213770991,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong West Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "Blk 50, Jurong West St 61, Singapore 648202",
                "ADDRESSBLOCKHOUSENUMBER": "50",
                "ADDRESSBUILDINGNAME": "Jurong West Hawker Centre",
                "ADDRESSSTREETNAME": "Jurong West Street 61",
                "LANDXADDRESSPOINT": "12874.19",
                "LANDYADDRESSPOINT": "35935.62",
                "ADDRESSPOSTALCODE": "648202",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.697404254467,
                    1.3412597060095,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong West Street 52 Blk 505",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 505, Jurong West Street 52, Singapore 640505",
                "ADDRESSBLOCKHOUSENUMBER": "505",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Jurong West Street 52",
                "LANDXADDRESSPOINT": "15216.130000000001",
                "LANDYADDRESSPOINT": "36862.4",
                "ADDRESSPOSTALCODE": "640505",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.71844754363,
                    1.34964224318434,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Kallang Estate Fresh Market and Food Centre",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "17, Old Airport Road, Singapore 397972",
                "ADDRESSBLOCKHOUSENUMBER": "17",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Old Airport Road",
                "LANDXADDRESSPOINT": "33654.86",
                "LANDYADDRESSPOINT": "32190.8",
                "ADDRESSPOSTALCODE": "397972",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.884130183315,
                    1.30739616009942,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Kampung Admiralty Hawker Centre",
                "description": "New Centre",
                "ADDRESS_MYENV": "Blk 676, Woodlands Drive 71, Singapore 730676",
                "ADDRESSBLOCKHOUSENUMBER": "676",
                "ADDRESSBUILDINGNAME": "Kampung Admiralty",
                "ADDRESSSTREETNAME": "Woodlands Drive 71",
                "LANDXADDRESSPOINT": "24369.66",
                "LANDYADDRESSPOINT": "46846",
                "ADDRESSPOSTALCODE": "730676",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.800696448529,
                    1.43993283228134,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Marine Parade Central Blk 84 (84 Marine Parade Central Market and Food Centre)",
                "description": "Opted out of HUP",
                "ADDRESS_MYENV": "Blk 84, Marine Parade Central, Singapore 440084",
                "ADDRESSBLOCKHOUSENUMBER": "84",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Marine Parade Central",
                "LANDXADDRESSPOINT": "36126.46",
                "LANDYADDRESSPOINT": "31625.71",
                "ADDRESSPOSTALCODE": "440084",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.906338526157,
                    1.30228513841822,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Marine Terrace Blk 50A (50A Marine Terrace)",
                "description": "HUP Standard Upgrading",
                "ADDRESS_MYENV": "Blk 50A, Marine Terrace, Singapore 441050",
                "ADDRESSBLOCKHOUSENUMBER": "50A",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "Marine Terrace",
                "LANDXADDRESSPOINT": "37175.19",
                "LANDYADDRESSPOINT": "32011.65",
                "ADDRESSPOSTALCODE": "441050",
                "ADDRESSFLOORNUMBER": "",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.915761950557,
                    1.30577514781108,
                    0.0
                ]
            }
        }
    ]
}