// A GeoJSON FeatureCollection representing pharmacies in Singapore. Data is retrieved from data.gov.sg
// @typedef {Object} PharmacyCollection
// @property {string} type - The type of the GeoJSON object, always "FeatureCollection".
// @property {Object} crs - The coordinate reference system for the GeoJSON object.
// @property {Object} crs.properties - The properties of the coordinate reference system.
// @property {Object[]} features - An array of GeoJSON Feature objects, each representing a pharmacy.

export const pharmacy = 
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
                "Name": "Guardian Pharmacy (Chinatown Point 4)",
                "ADDRESSBLOCKHOUSENUMBER": "34",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Chinatown Point 4",
                "ADDRESSSTREETNAME": "NEW BRIDGE ROAD",
                "ADDRESSPOSTALCODE": "59413",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.844697087192,
                    1.28499883313915,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (City Link)",
                "ADDRESSBLOCKHOUSENUMBER": "67",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "City Link",
                "ADDRESSSTREETNAME": "RAFFLES LINK",
                "ADDRESSPOSTALCODE": "39393",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.854173508666,
                    1.29277773939561,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (City Square Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "18/19",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "City Square Mall",
                "ADDRESSSTREETNAME": "KITCHENER ROAD",
                "ADDRESSPOSTALCODE": "208539",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.856487115197,
                    1.31139350343283,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Clementi Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "59/60/61",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "Clementi Mall",
                "ADDRESSSTREETNAME": "COMMONWEALTH AVENUE WEST",
                "ADDRESSPOSTALCODE": "129588",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.764248204763,
                    1.31485323068366,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Clifford Centre 2)",
                "ADDRESSBLOCKHOUSENUMBER": "19/20/21",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Clifford Centre 2",
                "ADDRESSSTREETNAME": "RAFFLES PLACE",
                "ADDRESSPOSTALCODE": "48621",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.852128179258,
                    1.2838569939881,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Compass One)",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Compass One",
                "ADDRESSSTREETNAME": "SENGKANG SQUARE",
                "ADDRESSPOSTALCODE": "545078",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.89498002896,
                    1.39209415560853,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Departure Transit Lounge East)",
                "ADDRESSBLOCKHOUSENUMBER": "69",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Departure Transit Lounge East",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819642",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.989707256049,
                    1.3624910006739,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Departure Transit West T1)",
                "ADDRESSBLOCKHOUSENUMBER": "16",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Departure Transit West T1",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819642",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.989707256049,
                    1.3624910006739,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Departure/Check In Hall North)",
                "ADDRESSBLOCKHOUSENUMBER": "12",
                "ADDRESSFLOORNUMBER": "26",
                "ADDRESSBUILDINGNAME": "Departure/Check In Hall North",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819643",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.988750980352,
                    1.35519094499408,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Departure/Transit Lounge North Terminal 2)",
                "ADDRESSBLOCKHOUSENUMBER": "095A",
                "ADDRESSFLOORNUMBER": "26",
                "ADDRESSBUILDINGNAME": "Departure/Transit Lounge North Terminal 2",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819643",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.988750980352,
                    1.35519094499408,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Departure/Transit Lounge South)",
                "ADDRESSBLOCKHOUSENUMBER": "115-01",
                "ADDRESSFLOORNUMBER": "26",
                "ADDRESSBUILDINGNAME": "Departure/Transit Lounge South",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819643",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.988750980352,
                    1.35519094499408,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Gleneagles)",
                "ADDRESSBLOCKHOUSENUMBER": "6-Aug",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Gleneagles",
                "ADDRESSSTREETNAME": "NAPIER ROAD",
                "ADDRESSPOSTALCODE": "258499",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.820124456725,
                    1.30706156876825,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Great World City)",
                "ADDRESSBLOCKHOUSENUMBER": "18/19",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Great World City",
                "ADDRESSSTREETNAME": "KIM SENG PROMENADE",
                "ADDRESSPOSTALCODE": "237994",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831757914599,
                    1.29380235820186,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (H205)",
                "ADDRESSBLOCKHOUSENUMBER": "129",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "H205",
                "ADDRESSSTREETNAME": "HOUGANG STREET 21",
                "ADDRESSPOSTALCODE": "530205",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.885079921543,
                    1.35949664734933,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Harbourfront Centre)",
                "ADDRESSBLOCKHOUSENUMBER": "111/112",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Harbourfront Centre",
                "ADDRESSSTREETNAME": "MARITIME SQUARE",
                "ADDRESSPOSTALCODE": "99253",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818625583667,
                    1.26206337173976,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Holland Shopping Centre)",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Holland Shopping Centre",
                "ADDRESSSTREETNAME": "HOLLAND AVE",
                "ADDRESSPOSTALCODE": "278967",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.795350445461,
                    1.31025541990594,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Hougang Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "31",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Hougang Mall",
                "ADDRESSSTREETNAME": "HOUGANG AVENUE 10",
                "ADDRESSPOSTALCODE": "538766",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.893661609335,
                    1.37231185733402,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (IMM2)",
                "ADDRESSBLOCKHOUSENUMBER": "56/57",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "IMM2",
                "ADDRESSSTREETNAME": "JURONG EAST ST 21",
                "ADDRESSPOSTALCODE": "609601",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.74663823992,
                    1.33502430217022,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (ION)",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSFLOORNUMBER": "B4",
                "ADDRESSBUILDINGNAME": "ION",
                "ADDRESSSTREETNAME": "ORCHARD TURN",
                "ADDRESSPOSTALCODE": "238801",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831395138107,
                    1.30403578206272,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (JEM)",
                "ADDRESSBLOCKHOUSENUMBER": "16/17",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JEM",
                "ADDRESSSTREETNAME": "JURONG GATEWAY ROAD",
                "ADDRESSPOSTALCODE": "608549",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743170429104,
                    1.33320021580922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Jelita)",
                "ADDRESSBLOCKHOUSENUMBER": "10",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Jelita",
                "ADDRESSSTREETNAME": "HOLLAND RD",
                "ADDRESSPOSTALCODE": "278628",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.785840618421,
                    1.31756196835634,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Jurong Point 2)",
                "ADDRESSBLOCKHOUSENUMBER": "27/28",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Jurong Point 2",
                "ADDRESSSTREETNAME": "JURONG WEST CENTRAL 3",
                "ADDRESSPOSTALCODE": "648331",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.705308194381,
                    1.33936402101731,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Jurong West Blk 503)",
                "ADDRESSBLOCKHOUSENUMBER": "845",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Jurong West Blk 503",
                "ADDRESSSTREETNAME": "JURONG WEST AVENUE 1",
                "ADDRESSPOSTALCODE": "640503",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.717704811505,
                    1.34995540028616,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Kallang Leisure Park 2)",
                "ADDRESSBLOCKHOUSENUMBER": "23",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Kallang Leisure Park 2",
                "ADDRESSSTREETNAME": "STADIUM WALK",
                "ADDRESSPOSTALCODE": "397693",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.876152670397,
                    1.3022217738606,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Katong Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "7",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Katong Mall",
                "ADDRESSSTREETNAME": "EAST COAST ROAD",
                "ADDRESSPOSTALCODE": "428802",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.905014935834,
                    1.3052347202485,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (LOT 1)",
                "ADDRESSBLOCKHOUSENUMBER": "26/27",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "LOT 1",
                "ADDRESSSTREETNAME": "CHOA CHU KANG AVENUE 4",
                "ADDRESSPOSTALCODE": "689812",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.744950386857,
                    1.38506836029318,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Lavender MRT Station)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Lavender MRT Station",
                "ADDRESSSTREETNAME": "KALLANG ROAD",
                "ADDRESSPOSTALCODE": "208699",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.862767638972,
                    1.307377508298,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Marina Bay Sands)",
                "ADDRESSBLOCKHOUSENUMBER": "49",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "Marina Bay Sands",
                "ADDRESSSTREETNAME": "BAYFRONT AVENUE",
                "ADDRESSPOSTALCODE": "18972",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.858505752034,
                    1.28355872902487,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Mount Elizabeth)",
                "ADDRESSBLOCKHOUSENUMBER": "10-Nov",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Mount Elizabeth",
                "ADDRESSSTREETNAME": "MOUNT ELIZABETH",
                "ADDRESSPOSTALCODE": "228510",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835439347424,
                    1.30516521414743,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Pagoda Street)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "Pagoda Street",
                "ADDRESSSTREETNAME": "PAGODA STREET",
                "ADDRESSPOSTALCODE": "59221",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.844086263705,
                    1.28376231214434,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Paragon)",
                "ADDRESSBLOCKHOUSENUMBER": "20/24",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Paragon",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238859",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835240316416,
                    1.30372321734212,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Parkway Parade)",
                "ADDRESSBLOCKHOUSENUMBER": "147-149/155A",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Parkway Parade",
                "ADDRESSSTREETNAME": "MARINE PARADE ROAD",
                "ADDRESSPOSTALCODE": "449269",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.905113594951,
                    1.30119132286102,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Plaza Singapura)",
                "ADDRESSBLOCKHOUSENUMBER": "13/14",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "Plaza Singapura",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238839",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845047624011,
                    1.30074756196425,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Raffles City)",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Raffles City",
                "ADDRESSSTREETNAME": "NORTH BRIDGE RD",
                "ADDRESSPOSTALCODE": "179103",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.853119913433,
                    1.29389358572057,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Raffles Place MRT 3)",
                "ADDRESSBLOCKHOUSENUMBER": "37-40/43-45",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Raffles Place MRT 3",
                "ADDRESSSTREETNAME": "RAFFLES PLACE",
                "ADDRESSPOSTALCODE": "48618",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.851379782035,
                    1.28433393431627,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Seletar Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "10-Nov",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Seletar Mall",
                "ADDRESSSTREETNAME": "SENGKANG WEST AVENUE",
                "ADDRESSPOSTALCODE": "797653",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.87606766308,
                    1.39139305906039,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Serangoon Garden)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "Serangoon Garden",
                "ADDRESSSTREETNAME": "SERANGOON GARDEN WAY",
                "ADDRESSPOSTALCODE": "555962",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.865452652785,
                    1.36414322114501,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Serangoon NEX)",
                "ADDRESSBLOCKHOUSENUMBER": "62/63",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Serangoon NEX",
                "ADDRESSSTREETNAME": "SERANGOON CENTRAL",
                "ADDRESSPOSTALCODE": "556083",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.8718616202,
                    1.35067551423922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Star Vista)",
                "ADDRESSBLOCKHOUSENUMBER": "16",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Star Vista",
                "ADDRESSSTREETNAME": "VISTA EXCHANGE GREEN",
                "ADDRESSPOSTALCODE": "138617",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.788214532235,
                    1.3068488257737,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Sun Plaza 2)",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Sun Plaza 2",
                "ADDRESSSTREETNAME": "SEMBAWANG DRIVE",
                "ADDRESSPOSTALCODE": "757713",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.819462112616,
                    1.44822653003392,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Suntec City)",
                "ADDRESSBLOCKHOUSENUMBER": "328/329",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Suntec City",
                "ADDRESSSTREETNAME": "TEMASEK BOULEVARD",
                "ADDRESSPOSTALCODE": "38983",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.857675495254,
                    1.2948790592606,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Tai Seng Street)",
                "ADDRESSBLOCKHOUSENUMBER": "19-21",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Tai Seng Street",
                "ADDRESSSTREETNAME": "TAI SENG STREET",
                "ADDRESSPOSTALCODE": "539775",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.888762712133,
                    1.3365386711551,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Takashimaya S. C. )",
                "ADDRESSBLOCKHOUSENUMBER": "15-23",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "Takashimaya S. C.",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238872",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.834676130167,
                    1.30242417909429,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Tampines MRT)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Tampines MRT",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 1",
                "ADDRESSPOSTALCODE": "529538",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.944838297789,
                    1.35364657681096,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Tampines Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "18/19",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Tampines Mall",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 5",
                "ADDRESSPOSTALCODE": "529510",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94438799002,
                    1.35267231861995,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Tanglin Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "18",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Tanglin Mall",
                "ADDRESSSTREETNAME": "TANGLIN ROAD",
                "ADDRESSPOSTALCODE": "247933",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82385280368,
                    1.30484344306554,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (The Centrepoint)",
                "ADDRESSBLOCKHOUSENUMBER": "01/02/03/04",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "The Centrepoint",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238843",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839758893919,
                    1.30197804806506,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Thomson Plaza 2)",
                "ADDRESSBLOCKHOUSENUMBER": "48",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "Thomson Plaza 2",
                "ADDRESSSTREETNAME": "UPPER THOMSON ROAD",
                "ADDRESSPOSTALCODE": "574408",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.830919790223,
                    1.3546690242467,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Tiong Bahru Plaza)",
                "ADDRESSBLOCKHOUSENUMBER": "125",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Tiong Bahru Plaza",
                "ADDRESSSTREETNAME": "TIONG BAHRU ROAD",
                "ADDRESSPOSTALCODE": "168732",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82693508249,
                    1.28646346132616,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Toa Payoh Blk 190)",
                "ADDRESSBLOCKHOUSENUMBER": "578",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Toa Payoh Blk 190",
                "ADDRESSSTREETNAME": "LORONG 6 TOA PAYOH",
                "ADDRESSPOSTALCODE": "310190",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.847965424321,
                    1.33297561827727,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (United Square 2)",
                "ADDRESSBLOCKHOUSENUMBER": "28",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "United Square 2",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "307591",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843463176991,
                    1.31733463710903,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Vivo City)",
                "ADDRESSBLOCKHOUSENUMBER": "23",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Vivo City",
                "ADDRESSSTREETNAME": "HARBOURFRONT WALK",
                "ADDRESSPOSTALCODE": "98585",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.821589252212,
                    1.26389582040559,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (WRS)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "WRS",
                "ADDRESSSTREETNAME": "TAMPINES NORTH DRIVE 2",
                "ADDRESSPOSTALCODE": "528765",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931999894938,
                    1.37210169899061,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (West Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "27",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "West Mall",
                "ADDRESSSTREETNAME": "BUKIT BATOK CENTRAL LINK",
                "ADDRESSPOSTALCODE": "658713",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.749021980031,
                    1.35018915711658,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Westgate)",
                "ADDRESSBLOCKHOUSENUMBER": "20",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Westgate",
                "ADDRESSSTREETNAME": "GATEWAY DRIVE",
                "ADDRESSPOSTALCODE": "608532",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.742586016848,
                    1.33402528926324,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Yew Tee MRT)",
                "ADDRESSBLOCKHOUSENUMBER": "02A",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Yew Tee MRT",
                "ADDRESSSTREETNAME": "CHOA CHU KANG DRIVE",
                "ADDRESSPOSTALCODE": "689715",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.747329722792,
                    1.39712885562235,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Zhongsan Park)",
                "ADDRESSBLOCKHOUSENUMBER": "20/21",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Zhongsan Park",
                "ADDRESSSTREETNAME": "AH HOOD ROAD",
                "ADDRESSPOSTALCODE": "329984",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.84647646119,
                    1.32708486276788,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Healing Hub @ Ang Mo Kio - Thye Hua Kwan Hospital",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Thye Hua Kwan Hospital",
                "ADDRESSSTREETNAME": "ANG MO KIO AVE 9",
                "ADDRESSPOSTALCODE": "569766",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.840172119463,
                    1.38427915854095,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Johns Hopkins Singapore International Medical Centre Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JALAN TAN TOCK SENG",
                "ADDRESSPOSTALCODE": "308433",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845389010681,
                    1.32171598577179,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong Community Hospital Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Jurong Community Hospital",
                "ADDRESSSTREETNAME": "JURONG EAST STREET 21",
                "ADDRESSPOSTALCODE": "609606",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743865457667,
                    1.33553382005591,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Jurong Medical Centre Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "8",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JURONG WEST CENTRAL 3",
                "ADDRESSPOSTALCODE": "648346",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.70445268171,
                    1.3404695704551,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "KK Emergency Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "OV92A",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUKIT TIMAH ROAD",
                "ADDRESSPOSTALCODE": "229899",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.846650080461,
                    1.3104485343334,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "KK Outpatient Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "1R20A",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUKIT TIMAH ROAD",
                "ADDRESSPOSTALCODE": "229899",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.846650080461,
                    1.3104485343334,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Khoo Teck Puat Hospital Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "YISHUN CENTRAL",
                "ADDRESSPOSTALCODE": "768828",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.837853670556,
                    1.4238775983318,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MANAPHARMA",
                "ADDRESSBLOCKHOUSENUMBER": "799",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "HOUGANG AVENUE 7",
                "ADDRESSPOSTALCODE": "530356",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.898813152707,
                    1.37259313275845,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MEDI-LINK PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "182",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "KING GEORGE'S AVENUE",
                "ADDRESSPOSTALCODE": "200803",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.860912790695,
                    1.30836526479411,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MOHAMED MUSTAFA & SAMSUDDIN CO PTE LTD (MUSTAFA CENTRE)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "MUSTAFA CENTRE",
                "ADDRESSSTREETNAME": "SYED ALWI RD",
                "ADDRESSPOSTALCODE": "207704",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.85499981962,
                    1.31053196208373,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MOUNT ELIZABETH NOVENA HOSPITAL PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "4",
                "ADDRESSBUILDINGNAME": "MOUNT ELIZABETH NOVENA HOSPITAL",
                "ADDRESSSTREETNAME": "IRRAWADDY ROAD",
                "ADDRESSPOSTALCODE": "329563",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.84422625836,
                    1.3221465582724,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MT ALVERNIA HOSPITAL RETAIL PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "MT ALVERNIA HOSPITAL",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "574623",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.837524327839,
                    1.34180969642913,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Mount Alvernia Hospital (Main Pharmacy)",
                "ADDRESSBLOCKHOUSENUMBER": "29",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Mount Alvernia Hospital",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "574623",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.837524327839,
                    1.34180969642913,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Mount Elizabeth Hospital",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Mount Elizabeth Hospital",
                "ADDRESSSTREETNAME": "MOUNT ELIZABETH",
                "ADDRESSPOSTALCODE": "228510",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835439347424,
                    1.30516521414743,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NATIONAL CANCER CENTRE PHARMACY (LEVEL 1)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "NATIONAL CANCER CENTRE",
                "ADDRESSSTREETNAME": "HOSPITAL DR",
                "ADDRESSPOSTALCODE": "169610",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.836531564343,
                    1.27929090033647,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NATIONAL CANCER CENTRE PHARMACY (LEVEL 3)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "NATIONAL CANCER CENTRE",
                "ADDRESSSTREETNAME": "HOSPITAL DR",
                "ADDRESSPOSTALCODE": "169610",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.836531564343,
                    1.27929090033647,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NATIONAL SKIN CENTRE (S) PTE LTD (PHARMACY)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "MANDALAY RD",
                "ADDRESSPOSTALCODE": "308205",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.849006945923,
                    1.31968290585282,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NATIONAL UNIVERSITY HOSPITAL (S) PTE LTD (RETAIL PHARMACY)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LOWER KENT RIDGE ROAD",
                "ADDRESSPOSTALCODE": "119074",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.782710306478,
                    1.29395579048752,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NATIONAL UNIVERSITY HOSPITAL(S) PTE LTD (MEDICAL CENTRE PHARMACY)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LOWER KENT RIDGE ROAD",
                "ADDRESSPOSTALCODE": "119082",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.784084013897,
                    1.29277432153154,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NHG Pharmacy (CCK Polyclinic)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "TECK WHYE CRESCENT",
                "ADDRESSPOSTALCODE": "688846",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.750776877796,
                    1.38234138480857,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NHG Pharmacy (Yishun)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "YISHUN CENTRAL 1",
                "ADDRESSPOSTALCODE": "768796",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.8383334142,
                    1.42653750597707,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NTUC Healthcare (BTP)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JALAN ANAK BUKIT",
                "ADDRESSPOSTALCODE": "588996",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.778560469301,
                    1.33865677365242,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "NTUC Healthcare - The Living Pharmacy (TSP)",
                "ADDRESSBLOCKHOUSENUMBER": "102",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "UPPER THOMSON ROAD",
                "ADDRESSPOSTALCODE": "574408",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.830919790223,
                    1.3546690242467,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Addiction Management Services (NAMS) Clinic Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "BLK 9",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUANGKOK VIEW",
                "ADDRESSPOSTALCODE": "539747",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.883348795228,
                    1.38158954889555,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Ang Mo Kio)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ANG MO KIO CENTRAL 2",
                "ADDRESSPOSTALCODE": "569666",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845608355592,
                    1.3743114848527,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Ang Mo Kio)",
                "ADDRESSBLOCKHOUSENUMBER": "4136",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ANG MO KIO AVENUE 8",
                "ADDRESSPOSTALCODE": "560723",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.847182023169,
                    1.37231859836598,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Bukit Batok)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUKIT BATOK WEST AVE 3",
                "ADDRESSPOSTALCODE": "659164",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.747822269279,
                    1.35201516757708,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Clementi)",
                "ADDRESSBLOCKHOUSENUMBER": "307",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "CLEMENTI AVENUE 3",
                "ADDRESSPOSTALCODE": "120451",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.765476761292,
                    1.31248298606182,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Geylang)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "GEYLANG POLYCLINIC",
                "ADDRESSSTREETNAME": "GEYLANG EAST CENTRAL",
                "ADDRESSPOSTALCODE": "389707",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.88716604212,
                    1.31949366288669,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Hougang)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "HOUGANG AVE 4",
                "ADDRESSPOSTALCODE": "538829",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.888996393185,
                    1.37001805225518,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Jurong)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JURONG EAST AVE 1",
                "ADDRESSPOSTALCODE": "609788",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.730717872533,
                    1.34971979274729,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Pioneer)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JURONG WEST STREET 61",
                "ADDRESSPOSTALCODE": "648201",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.698979343273,
                    1.33856225076873,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Queenstown)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "STIRLING ROAD",
                "ADDRESSPOSTALCODE": "148958",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.800957799118,
                    1.29847548246501,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Toa Payoh)",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LORONG 8 TOA PAYOH",
                "ADDRESSPOSTALCODE": "319260",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.858956450507,
                    1.33448028001705,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Woodlands)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "WOODLANDS STREET 31",
                "ADDRESSPOSTALCODE": "738579",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.775212924656,
                    1.43089322864369,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Healthcare Group Pharmacy (Yishun)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "YISHUN AVENUE 9",
                "ADDRESSPOSTALCODE": "768898",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.839190702134,
                    1.43035851618124,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National Heart Centre Singapore",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "HOSPITAL DRIVE",
                "ADDRESSPOSTALCODE": "169609",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835954422994,
                    1.27863260741604,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National University Hosital - Kent Ridge Wing Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LOWER KENT RIDGE ROAD",
                "ADDRESSPOSTALCODE": "119074",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.782710306478,
                    1.29395579048752,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "National University Hospital (s) Pte Ltd (Pharmacy @ NCIS)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "9",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LOWER KENT RIDGE ROAD",
                "ADDRESSPOSTALCODE": "119082",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.784084013897,
                    1.29277432153154,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Ng Teng Fong General Hospital Outpatient & Retail Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "L2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JURONG EAST STREET 21",
                "ADDRESSPOSTALCODE": "609606",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743865457667,
                    1.33553382005591,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Nishino Pharmacy (Shaw House)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238868",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831507327539,
                    1.30580979402183,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Nishino Pharmacy (Takashimaya)",
                "ADDRESSBLOCKHOUSENUMBER": "17",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238873",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.834676130167,
                    1.30242417909429,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "P & L Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "40",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "TANGLIN ROAD",
                "ADDRESSPOSTALCODE": "247909",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.827036521629,
                    1.30637275109892,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "PARKWAY EAST HOSPITAL PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JOO CHIAT PLACE",
                "ADDRESSPOSTALCODE": "427990",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.908756860126,
                    1.3150882403844,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "PHARMACY @ CGH MEDICAL CENTRE",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SIMEI STREET 3",
                "ADDRESSPOSTALCODE": "529906",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949280034146,
                    1.33948749359899,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pacific Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "37",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "JALAN JURONG KECHIL",
                "ADDRESSPOSTALCODE": "596180",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.773649138565,
                    1.34054847027196,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pharmacy A  Changi General Hospital",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SIMEI STREET 3",
                "ADDRESSPOSTALCODE": "529889",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949294393687,
                    1.34068473250176,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pharmacy Services Centre  NHG (Blk 9)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUANGKOK VIEW",
                "ADDRESSPOSTALCODE": "539747",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.883348795228,
                    1.38158954889555,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Pharmacy@IB  CGH (The Integrated Building)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "J1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SIMEI STREET 3",
                "ADDRESSPOSTALCODE": "529889",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949294393687,
                    1.34068473250176,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Princeton Pharmacy (S) Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSFLOORNUMBER": "5",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "CLEMENTI LOOP",
                "ADDRESSPOSTALCODE": "129808",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.763539550591,
                    1.32518140385333,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "R & D PHARMACEUTICAL PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "267",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SERANGOON CENTRAL DRIVE",
                "ADDRESSPOSTALCODE": "550265",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.871472213275,
                    1.35296373463347,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Raffles Health Holland V",
                "ADDRESSBLOCKHOUSENUMBER": "4",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "HOLLAND AVENUE",
                "ADDRESSPOSTALCODE": "278997",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.796105204144,
                    1.31052978566284,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SGH Retail Pharmacy (Blk 4)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "HOSPITAL DRIVE",
                "ADDRESSPOSTALCODE": "169608",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.830721779428,
                    1.27993969513111,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SINGAPORE NATIONAL EYE CENTRE PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "THIRD HOSPITAL AVE",
                "ADDRESSPOSTALCODE": "168751",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835736520938,
                    1.2810802595994,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SINGHEALTH POLY-OUTRAM",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "HEALTH PROMOTION BOARD",
                "ADDRESSSTREETNAME": "SECOND HOSPITAL AVENUE",
                "ADDRESSPOSTALCODE": "168937",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.838315051332,
                    1.27933147000029,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SMITH PHARMACY PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "416",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "KIM KEAT VIEW",
                "ADDRESSSTREETNAME": "KIM KEAT AVENUE",
                "ADDRESSPOSTALCODE": "310194",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.858181911662,
                    1.33093934294921,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "ST ANDREW'S COMMUNITY HOSPITAL PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "SAINT ANDREW'S HOSPITAL",
                "ADDRESSSTREETNAME": "SIMEI STREET 3",
                "ADDRESSPOSTALCODE": "529895",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94875944263,
                    1.34177633813431,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "ST LUKE'S HOSPITAL BLOCK A",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "ST LUKE'S HOSPITAL",
                "ADDRESSSTREETNAME": "BUKIT BATOK STREET 11",
                "ADDRESSPOSTALCODE": "659674",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.741877626648,
                    1.34953606994152,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SUMANG FAMILY PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SUMANG WALK",
                "ADDRESSPOSTALCODE": "820218",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.895387026654,
                    1.40322711689378,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Sengkang Pharmacy (Main Building Blk1)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "ALEXANDRA HOSPITAL",
                "ADDRESSSTREETNAME": "ALEXANDRA ROAD",
                "ADDRESSPOSTALCODE": "159964",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.799444847104,
                    1.2881222150317,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singapore General Hospital Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "SINGAPORE GENERAL HOSPITAL",
                "ADDRESSSTREETNAME": "OUTRAM RD",
                "ADDRESSPOSTALCODE": "169608",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.830721779428,
                    1.27993969513111,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Bedok",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "HEARTBEAT @ BEDOK",
                "ADDRESSSTREETNAME": "BEDOK NORTH STREET 1",
                "ADDRESSPOSTALCODE": "469662",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931663531574,
                    1.32699717215909,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Bukit Merah",
                "ADDRESSBLOCKHOUSENUMBER": "3565 & 3575",
                "ADDRESSFLOORNUMBER": "4",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUKIT MERAH CENTRAL",
                "ADDRESSPOSTALCODE": "150163",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.816939548696,
                    1.28388121594126,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "A.M. Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSFLOORNUMBER": "4",
                "ADDRESSBUILDINGNAME": "ORCHARD PLAZA",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238841",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.84115014506,
                    1.30125729612723,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "ALPS PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "1-Feb",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "LIAN SOON AMENITY CENTRE",
                "ADDRESSSTREETNAME": "ALPS AVENUE",
                "ADDRESSPOSTALCODE": "498787",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.002513658565,
                    1.37576196236282,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Admiralty Medical Centre Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "WOODLANDS DRIVE 71",
                "ADDRESSPOSTALCODE": "730676",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.800701210433,
                    1.43991608082307,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Airport Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "55/56",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 4",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819665",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.983569030385,
                    1.33826733905461,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Alchemy Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "14",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "LOYANG POINT",
                "ADDRESSSTREETNAME": "PASIR RIS STREET 21",
                "ADDRESSPOSTALCODE": "510258",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.964617783723,
                    1.36700053331185,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Amber Compounding Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SOUTH BRIDGE ROAD",
                "ADDRESSPOSTALCODE": "58770",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845873082146,
                    1.28289735579849,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "CGH Pharmacy B",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SIMEI STREET 3 CHANGI GENERAL HOSPITAL",
                "ADDRESSPOSTALCODE": "529889",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949294393687,
                    1.34068473250176,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Child Guidance Clinic  Health Promotion Board",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "HEALTH PROMOTION BOARD",
                "ADDRESSSTREETNAME": "SECOND HOSPITAL AVENUE",
                "ADDRESSPOSTALCODE": "168937",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.838315051332,
                    1.27933147000029,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Clinic B Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "BLK 1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "INSTITUTE OF MENTAL HEALTH",
                "ADDRESSSTREETNAME": "BUANGKOK VIEW",
                "ADDRESSPOSTALCODE": "539747",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.883348795228,
                    1.38158954889555,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "E+MED PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "422",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BISHAN STREET 11",
                "ADDRESSPOSTALCODE": "572505",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848526719408,
                    1.34870136449109,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "E+MED Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "5",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "BEAUTY WORLD CENTRE",
                "ADDRESSSTREETNAME": "UPPER BUKIT TIMAH ROAD",
                "ADDRESSPOSTALCODE": "588177",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.776250535845,
                    1.34239283575288,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Essentials Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "23",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "PEOPLE'S PARK CENTRE",
                "ADDRESSSTREETNAME": "UPPER CROSS STREET",
                "ADDRESSPOSTALCODE": "58357",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843852004525,
                    1.28549527251536,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Farrer Park Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "3",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "CONNEXION",
                "ADDRESSSTREETNAME": "FARRER PARK STATION ROAD",
                "ADDRESSPOSTALCODE": "217562",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.853842191627,
                    1.3127566809207,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "GLENEAGLES HOSPITAL",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "NAPIER ROAD GLENEAGLES HOSPITAL",
                "ADDRESSPOSTALCODE": "258500",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.819420895066,
                    1.30736473965355,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "GRACE HEALTHCARE",
                "ADDRESSBLOCKHOUSENUMBER": "110",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BUKIT BATOK CENTRAL",
                "ADDRESSPOSTALCODE": "650634",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.751531282871,
                    1.34973961735749,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy ( Waterway Point)",
                "ADDRESSBLOCKHOUSENUMBER": "4",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Waterway Point",
                "ADDRESSSTREETNAME": "PUNGGOL CENTRAL",
                "ADDRESSPOSTALCODE": "828761",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.902073301521,
                    1.40648143230247,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (313 @ Somerset)",
                "ADDRESSBLOCKHOUSENUMBER": "13/14",
                "ADDRESSFLOORNUMBER": "B3",
                "ADDRESSBUILDINGNAME": "313 @ Somerset",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238895",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.837684360221,
                    1.30138510756215,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Admiralty)",
                "ADDRESSBLOCKHOUSENUMBER": "39",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Admiralty",
                "ADDRESSSTREETNAME": "WOODLANDS AVENUE 6",
                "ADDRESSPOSTALCODE": "731678",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.801537360417,
                    1.4403636667802,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Amara Hotel)",
                "ADDRESSBLOCKHOUSENUMBER": "9",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Amara Hotel",
                "ADDRESSSTREETNAME": "TRAS STREET",
                "ADDRESSPOSTALCODE": "79027",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843470745358,
                    1.27458821970543,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Ang Mo Kio 3)",
                "ADDRESSBLOCKHOUSENUMBER": "2559",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Ang Mo Kio 3",
                "ADDRESSSTREETNAME": "ANG MO KIO AVENUE 8",
                "ADDRESSPOSTALCODE": "560704",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.847230719199,
                    1.37040711481372,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bedok Central)",
                "ADDRESSBLOCKHOUSENUMBER": "715",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Bedok Central",
                "ADDRESSSTREETNAME": "NEW UPPER CHANGI ROAD",
                "ADDRESSPOSTALCODE": "460210",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931819172592,
                    1.32460705860301,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bedok Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "45/47",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "Bedok Mall",
                "ADDRESSSTREETNAME": "NEW UPPER CHANGI ROAD",
                "ADDRESSPOSTALCODE": "467360",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.929267657363,
                    1.32477208083125,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bishan Place)",
                "ADDRESSBLOCKHOUSENUMBER": "8",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Bishan Place",
                "ADDRESSSTREETNAME": "BISHAN PLACE",
                "ADDRESSPOSTALCODE": "579837",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848477635059,
                    1.35023942096603,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bugis Junction 3)",
                "ADDRESSBLOCKHOUSENUMBER": "20/21",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Bugis Junction 3",
                "ADDRESSSTREETNAME": "VICTORIA STREET",
                "ADDRESSPOSTALCODE": "188021",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.85532795899,
                    1.29906798897959,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bugis MRT)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Bugis MRT",
                "ADDRESSSTREETNAME": "VICTORIA STREET",
                "ADDRESSPOSTALCODE": "188022",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.855614760659,
                    1.30026469884522,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Bukit Panjang Plaza)",
                "ADDRESSBLOCKHOUSENUMBER": "1/2/2003",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Bukit Panjang Plaza",
                "ADDRESSSTREETNAME": "JELEBU ROAD",
                "ADDRESSPOSTALCODE": "677743",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.763993946246,
                    1.38054245503335,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Causeway Point)",
                "ADDRESSBLOCKHOUSENUMBER": "28/30",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Causeway Point",
                "ADDRESSSTREETNAME": "WOODLANDS SQUARE",
                "ADDRESSPOSTALCODE": "738099",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.785688738337,
                    1.43600784336274,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Changi T3 Basement 2 North)",
                "ADDRESSBLOCKHOUSENUMBER": "24",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "Changi T3 Basement 2 North",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Northpoint)",
                "ADDRESSBLOCKHOUSENUMBER": "2-Mar",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Northpoint",
                "ADDRESSSTREETNAME": "YISHUN AVENUE 2",
                "ADDRESSPOSTALCODE": "769098",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835776493093,
                    1.42969847788612,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Novena Hospital)",
                "ADDRESSBLOCKHOUSENUMBER": "08/09/10/11",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Novena Hospital",
                "ADDRESSSTREETNAME": "IRRAWADDY ROAD",
                "ADDRESSPOSTALCODE": "329563",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.84422625836,
                    1.3221465582724,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Novena Square)",
                "ADDRESSBLOCKHOUSENUMBER": "31",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Novena Square",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "307683",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843656768213,
                    1.32021101149494,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (Our Tampines Hub)",
                "ADDRESSBLOCKHOUSENUMBER": "29",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "Our Tampines Hub",
                "ADDRESSSTREETNAME": "TAMPINES WALK",
                "ADDRESSPOSTALCODE": "528523",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.939683598938,
                    1.35349615381357,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Marine Parade",
                "ADDRESSBLOCKHOUSENUMBER": "792",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "MARINE PARADE CENTRAL",
                "ADDRESSPOSTALCODE": "440080",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.907738801213,
                    1.30248203604475,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Pasir Ris",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "PASIR RIS DRIVE 4",
                "ADDRESSPOSTALCODE": "519457",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.959198003863,
                    1.36858703758161,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Punggol",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "PUNGGOL DRIVE",
                "ADDRESSPOSTALCODE": "820681",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.913195749734,
                    1.40287845229054,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Sengkang",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "SENGKANG COMMUNITY HUB",
                "ADDRESSSTREETNAME": "SENGKANG SQUARE",
                "ADDRESSPOSTALCODE": "545025",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.893906100079,
                    1.39278559039214,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Singhealth Poly - Tampines",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "TAMPINES POLYCLINIC",
                "ADDRESSSTREETNAME": "TAMPINES STREET 41",
                "ADDRESSPOSTALCODE": "529203",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.945849474749,
                    1.35730995455714,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Specialist Compounding Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "5",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "CENTROS",
                "ADDRESSSTREETNAME": "BIOPOLIS WAY",
                "ADDRESSPOSTALCODE": "138668",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.791792664273,
                    1.30381616023544,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "TAN TOCK SENG HOSPITAL PTE LTD (EMERGENCY PHARMACY)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TAN TOCK SENG HOSPITAL",
                "ADDRESSSTREETNAME": "JALAN TAN TOCK SENG",
                "ADDRESSPOSTALCODE": "308433",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845389010681,
                    1.32171598577179,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "THE DENTAL PHARM",
                "ADDRESSBLOCKHOUSENUMBER": "3",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "TANJONG PAGAR PLAZA",
                "ADDRESSPOSTALCODE": "82001",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.842393173168,
                    1.27559620000156,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "TTSH (CDC Pharmacy - Blk 810 Moulmein Road)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "TAN TOCK SENG HOSPITAL",
                "ADDRESSSTREETNAME": "JALAN TAN TOCK SENG",
                "ADDRESSPOSTALCODE": "308433",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845389010681,
                    1.32171598577179,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tan Tock Seng Hospital (Outpatient & Retail Pharmacy)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "TAN TOCK SENG HOSPITAL",
                "ADDRESSSTREETNAME": "JALAN TAN TOCK SENG",
                "ADDRESSPOSTALCODE": "308433",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845389010681,
                    1.32171598577179,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Tan Tock Seng Hospital (Pharmacy  Level 2)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "TAN TOCK SENG HOSPITAL",
                "ADDRESSSTREETNAME": "JALAN TAN TOCK SENG",
                "ADDRESSPOSTALCODE": "308433",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845389010681,
                    1.32171598577179,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "The Dental Pharm",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "NATIONAL DENTAL CENTRE",
                "ADDRESSSTREETNAME": "SECOND HOSPITAL AVENUE",
                "ADDRESSPOSTALCODE": "168938",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.838232481914,
                    1.27975902406242,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "The Japanese Association Clinic  Singapore",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ADAM ROAD JAPANESE CLUB",
                "ADDRESSPOSTALCODE": "289899",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.815584351821,
                    1.3302286871655,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Thomson Medical Centre",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "THOMSON ROAD THOMSON MEDICAL CENTRE",
                "ADDRESSPOSTALCODE": "307677",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.841448453641,
                    1.3253640685869,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (HBF)",
                "ADDRESSBLOCKHOUSENUMBER": "118",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "HARBOURFRONT CENTRE",
                "ADDRESSSTREETNAME": "MARITIME SQUARE",
                "ADDRESSPOSTALCODE": "99253",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818625583667,
                    1.26206337173976,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (HLC)",
                "ADDRESSBLOCKHOUSENUMBER": "35/36",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "HOUGANG MALL",
                "ADDRESSSTREETNAME": "HOUGANG AVENUE 10",
                "ADDRESSPOSTALCODE": "538766",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.893661609335,
                    1.37231185733402,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (JEM)",
                "ADDRESSBLOCKHOUSENUMBER": "37",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JEM",
                "ADDRESSSTREETNAME": "JURONG GATEWAY ROAD",
                "ADDRESSPOSTALCODE": "608549",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743170429104,
                    1.33320021580922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (PSG)",
                "ADDRESSBLOCKHOUSENUMBER": "20A",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "PLAZA SINGAPURA",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238839",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845047624011,
                    1.30074756196425,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (TBR) Tiong Bahru Plaza",
                "ADDRESSBLOCKHOUSENUMBER": "117",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TIONG BAHRU PLAZA",
                "ADDRESSSTREETNAME": "TIONG BAHRU ROAD",
                "ADDRESSPOSTALCODE": "168732",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82693508249,
                    1.28646346132616,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (TPO)",
                "ADDRESSBLOCKHOUSENUMBER": "11-Dec",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TAMPINES ONE",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 1",
                "ADDRESSPOSTALCODE": "529536",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94501945797,
                    1.3543155616697,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY (YTP)",
                "ADDRESSBLOCKHOUSENUMBER": "8-Sep",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "YEWTEE POINT",
                "ADDRESSSTREETNAME": "CHOA CHU KANG NORTH 6",
                "ADDRESSPOSTALCODE": "689578",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.746558068394,
                    1.39730190678225,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (BN(A))",
                "ADDRESSBLOCKHOUSENUMBER": "147",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "BEDOK NORTH STREET 1",
                "ADDRESSPOSTALCODE": "460212",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931640026857,
                    1.32594069863812,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (EPT)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "5",
                "ADDRESSBUILDINGNAME": "EASTPOINT MALL",
                "ADDRESSSTREETNAME": "SIMEI STREET 6",
                "ADDRESSPOSTALCODE": "528833",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.953024502927,
                    1.3427061855347,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (HAMK)",
                "ADDRESSBLOCKHOUSENUMBER": "21/25",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "AMK HUB",
                "ADDRESSSTREETNAME": "ANG MO KIO AVENUE 3",
                "ADDRESSPOSTALCODE": "569933",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848399227484,
                    1.36924891643767,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (HGLS)",
                "ADDRESSBLOCKHOUSENUMBER": "35/36",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "HOUGANG MALL",
                "ADDRESSSTREETNAME": "HOUGANG AVENUE 10",
                "ADDRESSPOSTALCODE": "538766",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.893661609335,
                    1.37231185733402,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (HGPT)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "HOUGANG 1",
                "ADDRESSSTREETNAME": "HOUGANG STREET 91",
                "ADDRESSPOSTALCODE": "538692",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.879450259184,
                    1.37566727538473,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (HNEX)",
                "ADDRESSBLOCKHOUSENUMBER": "37/38",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "NEX",
                "ADDRESSSTREETNAME": "SERANGOON CENTRAL",
                "ADDRESSPOSTALCODE": "556083",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.8718616202,
                    1.35067551423922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (JPT)",
                "ADDRESSBLOCKHOUSENUMBER": "9",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JURONG POINT",
                "ADDRESSSTREETNAME": "JURONG WEST CENTRAL 2",
                "ADDRESSPOSTALCODE": "648886",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.70646088413,
                    1.33983015348378,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (LOT1)",
                "ADDRESSBLOCKHOUSENUMBER": "4-May",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "LOT ONE SHOPPERS MALL",
                "ADDRESSSTREETNAME": "CHOA CHU KANG AVENUE 4",
                "ADDRESSPOSTALCODE": "689812",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.744950386857,
                    1.38506836029318,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (MP)",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "MARINE PARADE BRANCH LIBRARY",
                "ADDRESSSTREETNAME": "MARINE PARADE CENTRAL",
                "ADDRESSPOSTALCODE": "449411",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.907112661381,
                    1.30141955163034,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (OKM)",
                "ADDRESSBLOCKHOUSENUMBER": "23/24",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "ONE KM",
                "ADDRESSSTREETNAME": "TANJONG KATONG ROAD",
                "ADDRESSPOSTALCODE": "437157",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.894480534166,
                    1.31469214206398,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (PGOL)",
                "ADDRESSBLOCKHOUSENUMBER": "1-Feb",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "PUNGGOL PLAZA",
                "ADDRESSSTREETNAME": "PUNGGOL FIELD",
                "ADDRESSPOSTALCODE": "820168",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.912976447074,
                    1.39418408936854,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (PGWW)",
                "ADDRESSBLOCKHOUSENUMBER": "26",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "WATERTOWN",
                "ADDRESSSTREETNAME": "PUNGGOL CENTRAL",
                "ADDRESSPOSTALCODE": "828761",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.902073301521,
                    1.40648143230247,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (PSG)",
                "ADDRESSBLOCKHOUSENUMBER": "20A",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "PLAZA SINGAPURA",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238839",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845047624011,
                    1.30074756196425,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (RVAL)",
                "ADDRESSBLOCKHOUSENUMBER": "16",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "RIVERVALE PLAZA",
                "ADDRESSSTREETNAME": "RIVERVALE DRIVE",
                "ADDRESSPOSTALCODE": "540118",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.901558023969,
                    1.38493201852065,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (SPO)",
                "ADDRESSBLOCKHOUSENUMBER": "122",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "SINGAPORE POST CENTRE",
                "ADDRESSSTREETNAME": "EUNOS ROAD 8",
                "ADDRESSPOSTALCODE": "408600",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.894731356004,
                    1.3188694092953,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (TAML)",
                "ADDRESSBLOCKHOUSENUMBER": "12",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TAMPINES MALL",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 5",
                "ADDRESSPOSTALCODE": "529510",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94438799002,
                    1.35267231861995,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (TBRU)",
                "ADDRESSBLOCKHOUSENUMBER": "117",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TIONG BAHRU PLAZA",
                "ADDRESSSTREETNAME": "TIONG BAHRU ROAD",
                "ADDRESSPOSTALCODE": "168732",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82693508249,
                    1.28646346132616,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (TGP)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "TANJONG PAGAR PLAZA",
                "ADDRESSPOSTALCODE": "81005",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843006119406,
                    1.27624052704306,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (THDB)",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TOA PAYOH MRT STATION",
                "ADDRESSSTREETNAME": "LORONG 6 TOA PAYOH",
                "ADDRESSPOSTALCODE": "319398",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.847128319359,
                    1.33289113559556,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (THPZ)",
                "ADDRESSBLOCKHOUSENUMBER": "102",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "THOMSON PLAZA",
                "ADDRESSSTREETNAME": "UPPER THOMSON ROAD",
                "ADDRESSPOSTALCODE": "574408",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.830919790223,
                    1.3546690242467,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (TMA)",
                "ADDRESSBLOCKHOUSENUMBER": "13",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TANGLIN MALL",
                "ADDRESSSTREETNAME": "TANGLIN ROAD",
                "ADDRESSPOSTALCODE": "247933",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82385280368,
                    1.30484344306554,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (TPO)",
                "ADDRESSBLOCKHOUSENUMBER": "11-Dec",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TAMPINES ONE",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 1",
                "ADDRESSPOSTALCODE": "529536",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94501945797,
                    1.3543155616697,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UARC)",
                "ADDRESSBLOCKHOUSENUMBER": "4/5/2006",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "PSA BUILDING",
                "ADDRESSSTREETNAME": "ALEXANDRA ROAD",
                "ADDRESSPOSTALCODE": "119963",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.801126952741,
                    1.27367658025915,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UBMC)",
                "ADDRESSBLOCKHOUSENUMBER": "3531",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "BUKIT MERAH AREA OFFICE",
                "ADDRESSSTREETNAME": "BUKIT MERAH CENTRAL",
                "ADDRESSPOSTALCODE": "150166",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.817642878697,
                    1.28311949916043,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UBPP)",
                "ADDRESSBLOCKHOUSENUMBER": "6",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "BUKIT PANJANG PLAZA",
                "ADDRESSSTREETNAME": "JELEBU ROAD",
                "ADDRESSPOSTALCODE": "677743",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.763993946246,
                    1.38054245503335,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UBTPZ)",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "BUKIT TIMAH PLAZA",
                "ADDRESSSTREETNAME": "JALAN ANAK BUKIT",
                "ADDRESSPOSTALCODE": "588996",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.778560469301,
                    1.33865677365242,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UGWC)",
                "ADDRESSBLOCKHOUSENUMBER": "14/15",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "GREAT WORLD CITY",
                "ADDRESSSTREETNAME": "KIM SENG PROMENADE",
                "ADDRESSPOSTALCODE": "237994",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831757914599,
                    1.29380235820186,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UHBF)",
                "ADDRESSBLOCKHOUSENUMBER": "118/119",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "HARBOURFRONT CENTRE",
                "ADDRESSSTREETNAME": "MARITIME SQUARE",
                "ADDRESSPOSTALCODE": "99253",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.818625583667,
                    1.26206337173976,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UHJPT )Hyper Jurong Point",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "JURONG POINT",
                "ADDRESSSTREETNAME": "JURONG WEST CENTRAL 3",
                "ADDRESSPOSTALCODE": "648331",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.705308194381,
                    1.33936402101731,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UHLM)",
                "ADDRESSBLOCKHOUSENUMBER": "64/65",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "HILLION MALL",
                "ADDRESSSTREETNAME": "PETIR ROAD",
                "ADDRESSPOSTALCODE": "678278",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.76274117629,
                    1.37834971441738,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UJEM)",
                "ADDRESSBLOCKHOUSENUMBER": "37",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JEM",
                "ADDRESSSTREETNAME": "JURONG GATEWAY ROAD",
                "ADDRESSPOSTALCODE": "608549",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743170429104,
                    1.33320021580922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UJX8)",
                "ADDRESSBLOCKHOUSENUMBER": "16",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JUNCTION 8 SHOPPING CENTRE",
                "ADDRESSSTREETNAME": "BISHAN PLACE",
                "ADDRESSPOSTALCODE": "579837",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848477635059,
                    1.35023942096603,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UNPCT) North Point City",
                "ADDRESSBLOCKHOUSENUMBER": "103-107",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "NORTHPOINT CITY",
                "ADDRESSSTREETNAME": "NORTHPOINT DRIVE",
                "ADDRESSPOSTALCODE": "768019",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.83614203513,
                    1.42799995648726,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (USMA)",
                "ADDRESSBLOCKHOUSENUMBER": "16/17/18",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "THE SELETAR MALL",
                "ADDRESSSTREETNAME": "SENGKANG WEST AVENUE",
                "ADDRESSPOSTALCODE": "797653",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.87606766308,
                    1.39139305906039,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UYSH)",
                "ADDRESSBLOCKHOUSENUMBER": "3703",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "KHATIB CENTRAL",
                "ADDRESSSTREETNAME": "YISHUN RING ROAD",
                "ADDRESSPOSTALCODE": "760849",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835218185047,
                    1.41698316124314,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (WGA)",
                "ADDRESSBLOCKHOUSENUMBER": "21",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "WESTGATE",
                "ADDRESSSTREETNAME": "GATEWAY DRIVE",
                "ADDRESSPOSTALCODE": "608532",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.742586016848,
                    1.33402528926324,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By Fairprice (CIA3)",
                "ADDRESSBLOCKHOUSENUMBER": "57",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 3",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By Fairprice (CLML)",
                "ADDRESSBLOCKHOUSENUMBER": "11",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "THE CLEMENTI MALL",
                "ADDRESSSTREETNAME": "COMMONWEALTH AVENUE WEST",
                "ADDRESSPOSTALCODE": "129588",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.764248204763,
                    1.31485323068366,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By Fairprice (YTP)",
                "ADDRESSBLOCKHOUSENUMBER": "8-Sep",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "YEWTEE POINT",
                "ADDRESSSTREETNAME": "CHOA CHU KANG NORTH 6",
                "ADDRESSPOSTALCODE": "689578",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.746558068394,
                    1.39730190678225,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY Waterway Point (WWP)",
                "ADDRESSBLOCKHOUSENUMBER": "26",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "WATERTOWN",
                "ADDRESSSTREETNAME": "PUNGGOL CENTRAL",
                "ADDRESSPOSTALCODE": "828761",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.902073301521,
                    1.40648143230247,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Unity (HLM) Hillion Mall",
                "ADDRESSBLOCKHOUSENUMBER": "64/65",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "HILLION MALL",
                "ADDRESSSTREETNAME": "PETIR ROAD",
                "ADDRESSPOSTALCODE": "678278",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.76274117629,
                    1.37834971441738,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Unity By FairPrice (HSPH) Sports Hub",
                "ADDRESSBLOCKHOUSENUMBER": "29",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Sports Hub",
                "ADDRESSSTREETNAME": "STADIUM PLACE",
                "ADDRESSPOSTALCODE": "397628",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.872750703245,
                    1.30384327307314,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UrbanRx Compounding Pharmacy Pte Ltd",
                "ADDRESSBLOCKHOUSENUMBER": "38",
                "ADDRESSFLOORNUMBER": "5",
                "ADDRESSBUILDINGNAME": "LUCKY PLAZA",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238863",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.833941937816,
                    1.30448580007632,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "VERTEX PHARMACY PTE. LTD.",
                "ADDRESSBLOCKHOUSENUMBER": "",
                "ADDRESSFLOORNUMBER": "",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "SERANGOON ROAD",
                "ADDRESSPOSTALCODE": "328201",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.865499315882,
                    1.3242810282521,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Vivahealth Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "850",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "THE BEO CRESCENT",
                "ADDRESSSTREETNAME": "JALAN BUKIT HO SWEE",
                "ADDRESSPOSTALCODE": "160034",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.827081283638,
                    1.28807687668717,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "WATSON'S PERSONAL CARE STORES PTE LTD (WATERWAY POINT)",
                "ADDRESSBLOCKHOUSENUMBER": "31 TO 32",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "WATERTOWN",
                "ADDRESSSTREETNAME": "PUNGGOL CENTRAL",
                "ADDRESSPOSTALCODE": "828761",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.902073301521,
                    1.40648143230247,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "WATSONS PERSONAL CARE STORES (TIONG BAHRU PLAZA)",
                "ADDRESSBLOCKHOUSENUMBER": "131 TO 132",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "TIONG BAHRU PLAZA",
                "ADDRESSSTREETNAME": "TIONG BAHRU ROAD",
                "ADDRESSPOSTALCODE": "168732",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.82693508249,
                    1.28646346132616,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "WESTMEAD PHARMACY PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "10",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "LIAN SOON AMENITY CENTRE",
                "ADDRESSSTREETNAME": "ALPS AVENUE",
                "ADDRESSPOSTALCODE": "498787",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.002513658565,
                    1.37576196236282,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "WOODS PHARMACY PTE LTD",
                "ADDRESSBLOCKHOUSENUMBER": "19",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "WOODLANDS STREET 12",
                "ADDRESSPOSTALCODE": "738623",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.779746869404,
                    1.43351253440852,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Store Pte Ltd (Lucky Plaza)",
                "ADDRESSBLOCKHOUSENUMBER": "26-30/39-42",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "LUCKY PLAZA",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238863",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.833941937816,
                    1.30448580007632,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Bedok Central)",
                "ADDRESSBLOCKHOUSENUMBER": "735/737",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "Bedok Central",
                "ADDRESSSTREETNAME": "NEW UPPER CHANGI ROAD",
                "ADDRESSPOSTALCODE": "460211",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931967583215,
                    1.32550084935603,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Bedok Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "Dec-13",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "BEDOK MALL",
                "ADDRESSSTREETNAME": "NEW UPPER CHANGI ROAD",
                "ADDRESSPOSTALCODE": "467360",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.929267657363,
                    1.32477208083125,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Bugis Junction)",
                "ADDRESSBLOCKHOUSENUMBER": "27 TO 33/33A",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "BUGIS JUNCTION",
                "ADDRESSSTREETNAME": "VICTORIA STREET",
                "ADDRESSPOSTALCODE": "188021",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.85532795899,
                    1.29906798897959,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Bukit Panjang Plaza)",
                "ADDRESSBLOCKHOUSENUMBER": "30/31",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "BUKIT PANJANG PLAZA",
                "ADDRESSSTREETNAME": "JELEBU ROAD",
                "ADDRESSPOSTALCODE": "677743",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.763993946246,
                    1.38054245503335,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Causeway Point)",
                "ADDRESSBLOCKHOUSENUMBER": "14/15",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "CAUSEWAY POINT",
                "ADDRESSSTREETNAME": "WOODLANDS SQUARE",
                "ADDRESSPOSTALCODE": "738099",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.785688738337,
                    1.43600784336274,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Changi Airport T3 Basement)",
                "ADDRESSBLOCKHOUSENUMBER": "24",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 3",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Changi Airport T3 Check in Hall)",
                "ADDRESSBLOCKHOUSENUMBER": "95/96",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 3",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Changi Airport T4 Check in Hall)",
                "ADDRESSBLOCKHOUSENUMBER": "7",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 4",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819665",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.983569030385,
                    1.33826733905461,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Changi Airport Terminal 3 Transit North)",
                "ADDRESSBLOCKHOUSENUMBER": "66",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 3",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Changi Airport Terminal 3 Transit)",
                "ADDRESSBLOCKHOUSENUMBER": "29",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "CHANGI AIRPORT TERMINAL 3",
                "ADDRESSSTREETNAME": "AIRPORT BOULEVARD",
                "ADDRESSPOSTALCODE": "819663",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.98516964608,
                    1.35437073436533,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Clementi Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "37/38/39",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "THE CLEMENTI MALL",
                "ADDRESSSTREETNAME": "COMMONWEALTH AVENUE WEST",
                "ADDRESSPOSTALCODE": "129588",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.764248204763,
                    1.31485323068366,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Compass One)",
                "ADDRESSBLOCKHOUSENUMBER": "9",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "COMPASS ONE",
                "ADDRESSSTREETNAME": "SENGKANG SQUARE",
                "ADDRESSPOSTALCODE": "545078",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.89498002896,
                    1.39209415560853,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Great World City)",
                "ADDRESSBLOCKHOUSENUMBER": "53A/54",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "GREAT WORLD CITY",
                "ADDRESSSTREETNAME": "KIM SENG PROMENADE",
                "ADDRESSPOSTALCODE": "237994",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831757914599,
                    1.29380235820186,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Heartbeat@bedok)",
                "ADDRESSBLOCKHOUSENUMBER": "08 TO 10",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "HEARTBEAT @ BEDOK",
                "ADDRESSSTREETNAME": "BEDOK NORTH STREET 1",
                "ADDRESSPOSTALCODE": "469662",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.931663531574,
                    1.32699717215909,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Hougang Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSFLOORNUMBER": "3",
                "ADDRESSBUILDINGNAME": "HOUGANG MALL",
                "ADDRESSSTREETNAME": "HOUGANG AVENUE 10",
                "ADDRESSPOSTALCODE": "538766",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.893661609335,
                    1.37231185733402,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (IMM)",
                "ADDRESSBLOCKHOUSENUMBER": "54/55",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "IMM BUILDING",
                "ADDRESSSTREETNAME": "JURONG EAST STREET 21",
                "ADDRESSPOSTALCODE": "609601",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.74663823992,
                    1.33502430217022,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (International Plaza)",
                "ADDRESSBLOCKHOUSENUMBER": "62-67",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "INTERNATIONAL PLAZA",
                "ADDRESSSTREETNAME": "ANSON ROAD",
                "ADDRESSPOSTALCODE": "79903",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.845703221284,
                    1.2757356907569,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Jem)",
                "ADDRESSBLOCKHOUSENUMBER": "7",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JEM",
                "ADDRESSSTREETNAME": "JURONG GATEWAY ROAD",
                "ADDRESSPOSTALCODE": "608549",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.743170429104,
                    1.33320021580922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Junction 8)",
                "ADDRESSBLOCKHOUSENUMBER": "45/46",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "JUNCTION 8 SHOPPING CENTRE",
                "ADDRESSSTREETNAME": "BISHAN PLACE",
                "ADDRESSPOSTALCODE": "579837",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.848477635059,
                    1.35023942096603,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Jurong Point)",
                "ADDRESSBLOCKHOUSENUMBER": "Dec-13",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "JURONG POINT",
                "ADDRESSSTREETNAME": "JURONG WEST CENTRAL 2",
                "ADDRESSPOSTALCODE": "648886",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.70646088413,
                    1.33983015348378,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Marina Bay Financial Centre)",
                "ADDRESSBLOCKHOUSENUMBER": "57/58/59",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "MARINA BAY LINK MALL",
                "ADDRESSSTREETNAME": "MARINA BOULEVARD",
                "ADDRESSPOSTALCODE": "18984",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.853349299215,
                    1.28022768611889,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Marina Square)",
                "ADDRESSBLOCKHOUSENUMBER": "212",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "MARINA SQUARE",
                "ADDRESSSTREETNAME": "RAFFLES BOULEVARD",
                "ADDRESSPOSTALCODE": "39594",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.857007334718,
                    1.29145527172639,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (NEX)",
                "ADDRESSBLOCKHOUSENUMBER": "57",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "NEX",
                "ADDRESSSTREETNAME": "SERANGOON CENTRAL",
                "ADDRESSPOSTALCODE": "556083",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.8718616202,
                    1.35067551423922,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Ngee Ann City)",
                "ADDRESSBLOCKHOUSENUMBER": "6-Sep",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "NGEE ANN CITY",
                "ADDRESSSTREETNAME": "ORCHARD RD",
                "ADDRESSPOSTALCODE": "238872",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.834676130167,
                    1.30242417909429,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (North Point)",
                "ADDRESSBLOCKHOUSENUMBER": "161/162/163/164",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "NORTHPOINT CITY",
                "ADDRESSSTREETNAME": "NORTHPOINT DRIVE",
                "ADDRESSPOSTALCODE": "768019",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.83614203513,
                    1.42799995648726,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Novena Square)",
                "ADDRESSBLOCKHOUSENUMBER": "6/7/2009",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "NOVENA SQUARE",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "307683",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843656768213,
                    1.32021101149494,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (One@Kentridge)",
                "ADDRESSBLOCKHOUSENUMBER": "33",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "NUH MEDICAL CENTRE",
                "ADDRESSSTREETNAME": "LOWER KENT RIDGE ROAD",
                "ADDRESSPOSTALCODE": "119082",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.784084013897,
                    1.29277432153154,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Paragon)",
                "ADDRESSBLOCKHOUSENUMBER": "32/33/37",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "THE PARAGON",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238859",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.835240316416,
                    1.30372321734212,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Parkway Parade)",
                "ADDRESSBLOCKHOUSENUMBER": "14/15/16",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "PARKWAY PARADE",
                "ADDRESSSTREETNAME": "MARINE PARADE ROAD",
                "ADDRESSPOSTALCODE": "449269",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.905113594951,
                    1.30119132286102,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Raffles City)",
                "ADDRESSBLOCKHOUSENUMBER": "42",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "RAFFLES CITY SHOPPING CENTRE",
                "ADDRESSSTREETNAME": "NORTH BRIDGE ROAD",
                "ADDRESSPOSTALCODE": "179103",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.853119913433,
                    1.29389358572057,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Resort World Sentosa)",
                "ADDRESSBLOCKHOUSENUMBER": "71",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "RESORTS WORLD SENTOSA",
                "ADDRESSSTREETNAME": "SENTOSA GATEWAY",
                "ADDRESSPOSTALCODE": "98138",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.819935358828,
                    1.25629973367949,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Royal Square)",
                "ADDRESSBLOCKHOUSENUMBER": "2-Apr",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "Royal Square",
                "ADDRESSSTREETNAME": "IRRAWADDY ROAD",
                "ADDRESSPOSTALCODE": "329566",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843219262774,
                    1.32057156809253,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Tampines Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "7/8/2009",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "TAMPINES MALL",
                "ADDRESSSTREETNAME": "TAMPINES CENTRAL 5",
                "ADDRESSPOSTALCODE": "529510",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.94438799002,
                    1.35267231861995,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Toa Payoh HDB Hub)",
                "ADDRESSBLOCKHOUSENUMBER": "510",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "LORONG 6 TOA PAYOH",
                "ADDRESSPOSTALCODE": "310190",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.847965424321,
                    1.33297561827727,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (United Square)",
                "ADDRESSBLOCKHOUSENUMBER": "53",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "UNITED SQUARE",
                "ADDRESSSTREETNAME": "THOMSON ROAD",
                "ADDRESSPOSTALCODE": "307591",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.843463176991,
                    1.31733463710903,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (Vivo City)",
                "ADDRESSBLOCKHOUSENUMBER": "15-17",
                "ADDRESSFLOORNUMBER": "B2",
                "ADDRESSBUILDINGNAME": "VIVO CITY",
                "ADDRESSSTREETNAME": "HARBOURFRONT WALK",
                "ADDRESSPOSTALCODE": "98585",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.821589252212,
                    1.26389582040559,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd (West Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "26/27",
                "ADDRESSFLOORNUMBER": "2",
                "ADDRESSBUILDINGNAME": "WEST MALL",
                "ADDRESSSTREETNAME": "BUKIT BATOK CENTRAL LINK",
                "ADDRESSPOSTALCODE": "658713",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.749021980031,
                    1.35018915711658,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Watson's Personal Care Stores Pte Ltd Ion Orchard",
                "ADDRESSBLOCKHOUSENUMBER": "12",
                "ADDRESSFLOORNUMBER": "B4",
                "ADDRESSBUILDINGNAME": "ION ORCHARD",
                "ADDRESSSTREETNAME": "ORCHARD TURN",
                "ADDRESSPOSTALCODE": "238801",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831395138107,
                    1.30403578206272,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Welcia-BHG Bugis Junction",
                "ADDRESSBLOCKHOUSENUMBER": "18",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "BUGIS JUNCTION",
                "ADDRESSSTREETNAME": "VICTORIA STREET",
                "ADDRESSPOSTALCODE": "188024",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.855786974721,
                    1.3001424905036,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Welcia-BHG Northpoint City",
                "ADDRESSBLOCKHOUSENUMBER": "149",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "NORTHPOINT CITY",
                "ADDRESSSTREETNAME": "NORTHPOINT DRIVE",
                "ADDRESSPOSTALCODE": "768019",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.83614203513,
                    1.42799995648726,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "West Point Hospital Pharmacy",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "WESTPOINT FAMILY HOSPITAL",
                "ADDRESSSTREETNAME": "CORPORATION DR",
                "ADDRESSPOSTALCODE": "619771",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.72300155644,
                    1.33105591829525,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "CONCORD HEALTHCARE RETAIL PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "1",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "ADAM ROAD",
                "ADDRESSPOSTALCODE": "289891",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.813318182192,
                    1.32680246385575,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (White Sands Mall)",
                "ADDRESSBLOCKHOUSENUMBER": "12",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "White Sands Mall",
                "ADDRESSSTREETNAME": "PASIR RIS CENTRAL STREET 3",
                "ADDRESSPOSTALCODE": "518457",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949715696944,
                    1.37244980890777,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "MUSTAFA PHARMACY",
                "ADDRESSBLOCKHOUSENUMBER": "0",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "MUSTAFA",
                "ADDRESSSTREETNAME": "SYED ALWI ROAD",
                "ADDRESSPOSTALCODE": "207713",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.856508109061,
                    1.30906470546815,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Guardian Pharmacy (International Building)",
                "ADDRESSBLOCKHOUSENUMBER": "18",
                "ADDRESSFLOORNUMBER": "1",
                "ADDRESSBUILDINGNAME": "International Building",
                "ADDRESSSTREETNAME": "ORCHARD ROAD",
                "ADDRESSPOSTALCODE": "238869",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.831003324156,
                    1.30607516858878,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "UNITY By FairPrice (UWSA)",
                "ADDRESSBLOCKHOUSENUMBER": "2",
                "ADDRESSFLOORNUMBER": "B1",
                "ADDRESSBUILDINGNAME": "",
                "ADDRESSSTREETNAME": "PASIR RIS CENTRAL STREET 3",
                "ADDRESSPOSTALCODE": "518457",
                "HYPERLINK": "",
                "PHOTOURL": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.949715696944,
                    1.37244980890777,
                    0.0
                ]
            }
        }
    ]
}