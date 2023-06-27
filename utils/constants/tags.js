// tags
const tags = {
    "Physics": {
        "Units": {
            "01P": "Measurement",
            "02P": "Kinematics",
            "03P": "Linear Dynamics",
            "04P": "Statics",
            "05P": "Energy and Momentum",
            "06P": "Rotational Dynamics",
            "07P": "Simple Machines",
            "08P": "Gravitation",
            "09P": "Fluids",
            "10P": "Oscillations",
            "11P": "Wave and Sound Basics",
            "12P": "Ray Optics",
            "13P": "Wave Optics",
            "14P": "Thermodynamics",
            "15P": "Modern Physics",
            "16P": "Nuclear and Particle Physics",
            "17P": "Electrostatics",
            "18P": "Electric Current and Conductors",
            "19P": "DC Circuits",
            "20P": "Induction and AC Circuits",
            "21P": "Magnetic Fields and Forces",
            "22P": "Electromagnetic Waves",
            "23P": "Astrophysics",
            "24P": "Lab Skills",
            "CALC": "Calculus-Based"
        },
        "Concepts": {
            "DIM": "Dimensional Analysis",
            "UNC": "Uncertainty and Error Propagation",
            "UNI": "Units and Unit Systems",

            "ONE": "1D Kinematics",
            "PRO": "Projectile Motion",
            "DIS": "Distance and Displacement",
            "VEK": "Vector Kinematics",

            "NEW": "Newton's Laws",
            "FRI": "Friction",
            "TEN": "Tension",
            "NOR": "Normal Force",
            "CTP": "Centripetal Force",
            "TDF": "Time-Dependent Forces",
            "FIC": "Fictitious Forces",

            "TOR": "Torque",
            "BAL": "Balancing Forces and Torques",
            "STC": "Harder Statics Problems",

            "WPW": "Work and Power",
            "UPE": "Potential Energy",
            "COE": "Conservation of Energy",
            "KIN": "Kinetic Energy",
            "COM": "Center of Mass",
            "IMP": "Impulse",
            "COL": "Collision Mechanics",
            "RMO": "Rocket Motion",
                        
            "MOI": "Moment of Inertia",
            "RKE": "Rotational Kinetic Energy",
            "AMO": "Angular Momentum",
            "RTD": "Combined Rotational and Translational Dynamics",
            
            "RAM": "Ramps",
            "PUL": "Pulleys",
            "LEV": "Levers",
            "MAD": "Mechanical Advantage",
            
            "ULG": "Universal Law of Gravitation",
            "GPE": "Gravitational Potential Energy",
            "GRF": "Gravitational Fields",
            "KEP": "Kepler's Laws of Planetary Motion",

            "DEN": "Density",
            "PRE": "Pressure",
            "BUO": "Buoyant Force",
            "PAS": "Pascal's Principle",
            "ARC": "Archimedes' Principle",
            "EOC": "Equation of Continuity",
            "BER": "Bernoulli's Equation",
            "POI": "Poiseuille's Law",
            "FLO": "Types of Fluid Flow",
            "AER": "Aerodynamics",

            "HOO": "Elastic Force and Potential Energy",
            "SHM": "Simple Harmonic Motion",
            "COC": "Coupled Oscillators",
            "DHM": "Damped and Driven Harmonic Motion",

            "WIS": "Wave Interference and Superposition",
            "STA": "Standing Waves",
            "SOU": "Properties of Sound Waves",
            "BEA": "Beats",
            "DOP": "The Doppler Effect",

            "EMS": "The Electromagnetic Spectrum",
            "RFL": "Reflection",
            "RFR": "Refraction",
            "THL": "Thin Lenses",
            "PLM": "Plane Mirrors",
            "SPM": "Spherical Mirrors",

            "DIF": "Diffraction",
            "TFI": "Thin-Film Interference",
            "DSI": "Double Silt Interference",
            "POL": "Polarization",
            "PHO": "The Photoelectric Effect",

            "TEM": "Temperature and its Scales",
            "IDG": "Ideal Gases",
            "TDP": "Thermodynamic Processes",
            "EXP": "Thermodynamic Expansion and Material Elasticity",
            "STT": "Statistical Thermodynamics",
            "FLT": "The First Law of Thermodynamics",
            "SLT": "Entropy and The Second Law of Thermodynamics",
            "MGU": "Heat Engines",

            "LOR": "Lorentz Transformation",
            "LAG": "The Lagrangian Method",
            "REK": "Relativistic Kinematics",
            "RED": "Relativistic Dynamics",
            "FVE": "4-Vectors",
            "GER": "General Relativity",

            "NUC": "Nucleic Structure",
            "RAD": "Radioactivity and Decay",
            "FUS": "Fusion Processes",
            "HEI": "Heisenberg's Uncertainty Principle",
            "EMC": "Mass-Energy Equivalence",
            "TFF": "The Fundamental Forces",
            "PHI": "The Wave Function",
            "QFT": "The Standard Model and QFT",

            "COU": "Coulomb's Law",
            "ELF": "Electric Fields and Flux",
            "GAU": "Gauss' Law",
            "STO": "Stoke's Theorem",
            "LAP": "The Laplacian",
            "CUR": "The Curl",
            "EPO": "Electric Potential",

            "CDT": "Conductors and Conductivity",
            "DSM": "Doped Semiconductors",
            "PNJ": "The p-n Junction",
            "RTY": "Resisitivity",
            "CAP": "Capacitance",
            "ELE": "Electrical Energy",
            "DIE": "Dielectrics",
            "DIP": "Electric Dipoles",

            "OHM": "Ohm's Law",
            "EMF": "Voltage, Potential Difference, and Electromotive Force",
            "KIR": "Kirchoff's Laws",
            "RCC": "RC Circuits",
            "SSP": "Simple Series/Parallel Circuits",

            "TRA": "Transformers",
            "ACP": "Power and Energy in AC Circuits",
            "FAR": "Faraday's Law of Induction",
            "LEN": "Lenz' Law",
            "GEN": "Generators",
            "IND": "Self-Inductance",
            "REA": "Reactance",
            "LRC": "LRC Circuits",
            "EMO": "Electromagnetic Oscillation",
            
            "HAL": "The Hall Effect",
            "LRF": "Lorentz Force",
            "MCH": "Magnetic forces and fields due to various configurations",
            "AMP": "Ampere's Law",
            "RHR": "The Right Hand Rule",
            "MDP": "Magnetic Dipoles",
            "MGN": "Magnetization",
            "GLM": "Gauss' Law for Magnetism",
            "FER": "Ferromagnetism",
            "SPI": "Spin and Magnetic Momentum",

            "MAX": "Maxwell's Equations",
            "POY": "Energy Transport in Travelling Waves",
            "DIC": "Displacement Current",

            "OBM": "Orbital Mechanics",
            "STP": "Stellar Physics",
            "SPC": "Spectroscopy",
            "TEL": "Telescopes",

            "LAB": "Lab Skills",

            "CALC": "Calculus-Based"
        }
    },
    "Chemistry": {
        "Units": {
            "01C": "Measurement",
            "02C": "Atomic Structure",
            "03C": "Compound Nomenclature",
            "04C": "Stoichiometry",
            "05C": "Solutions",
            "06C": "Types of Reactions",
            "07C": "Gases",
            "08C": "Thermochemistry",
            "09C": "Atomic Periodicity",
            "10C": "Atomic Bonding",
            "11C": "Liquids and Solids",
            "12C": "Kinetics",
            "13C": "Chemical Equilibria",
            "14C": "Acids and Bases",
            "15C": "Coordination Chemistry",
            "16C": "Electrochemistry",
            "17C": "Nuclear Chemistry",
            "18C": "Materials Chemistry",
            "19C": "Organic Chemistry",
            "20C": "Biochemistry",
            "21C": "Lab Skills",
        },
        "Concepts": {
            "DIMEN": "Dimensional Analysis",
            "SIGFG": "Significant Figures in Calculations",

            "ASPEC": "Atomic Spectrums",
            "BOHRM": "The Bohr Model",
            "DALTT": "Dalton's Atomic Theory",
            "QMMOA": "The Quantum Mechanical Model of the Atom",
            "ORBTL": "Orbital Shapes, Energies, and Principles",

            "COVCO": "Covalent Compounds",
            "IONCO": "Ionic Compounds",
            "ACICO": "Acids",

            "TMOLE": "The Mole",
            "MSPEC": "Mass Spectrometry",
            "ATOMM": "Atomic and Molar Mass",
            "PERCC": "Percent Composition",
            "BALEQ": "Balancing Equations",
            "LIMRE": "Limiting Reactant",
            "GSSTI": "Gas and Solution Stoichiometry",

            "SOLUB": "Solubility",
            "ELECT": "Electrolytes",
            "MOLAR": "Molarity",
            "ENESF": "Energies of Solution Formation",
            "COLGP": "Colligative Properties of Solution",
            "KAYSP": "Solubility Product",
            "QUALI": "Qualitative Analysis of Precipitation",

            "PRECI": "Precipitation Reactions",
            "PHREA": "Acid-Base Reactions",
            "REDOX": "Oxidation-Reduction Reactions",
            "COMBS": "Combustion Reactions",

            "PRESU": "Pressure",
            "BGLAL": "The Gas Laws of Boyle, Charles, Gay-Lussac, and Avogadro",
            "IDEAL": "The Ideal Gas Law",
            "DLOPP": "Dalton's Law of Partial Pressures",
            "KMTOG": "Kinetic Molecular Theory of Gases",
            "EFADF": "Effusion and Diffusion",
            "REALG": "Real Gases",
            "AVGKE": "Average Kinetic Energy and Temperature",

            "ENTHP": "Enthalpy",
            "CALOR": "Calorimetry",
            "HESSL": "Hess' Law",

            "PTABL": "The Periodic Table",
            "AUFBW": "The Aufbau Principle",
            "PTRND": "Periodic Trends",
            "REPEL": "The Representative Elements",

            "BTYPE": "Bond Types",
            "DPOLE": "Dipole Moment",
            "BONDE": "Bond Energies",
            "IOCHA": "Ionic Character of Bonds",
            "LEWIS": "Lewis Structures",
            "RESON": "Resonance Structures",
            "VSEPR": "The VSEPR Model",
            "HYBRD": "Hybridization",
            "MOGEO": "Molecular Geometry",
            "MOLOT": "Molecular Orbital Theory",

            "INTMF": "Intermolecular Forces",
            "METAL": "Metallic Solids",
            "NETSO": "Network Solids",
            "MOLSO": "Molecular Solids",
            "IONSO": "Ionic Solids",
            "VAPPS": "Vapor Pressure",
            "PHASC": "Phase Changes and Diagrams",

            "RATEL": "Rate Laws",
            "RMECH": "Reaction Mechanisms",
            "CATAL": "Catalysts",
            "INTEG": "Integrated Rate Laws",
            "KINMD": "The Collision Model for Kinetics",

            "EQLCS": "The Equilibrium Constant",
            "REQUO": "Reaction Quotients",
            "KAYPE": "Equilibrium Involving Pressure",
            "LECHA": "Le Chatellier's Principle",
            "ENTRP": "Entropy",
            "GIBBS": "Gibbs Free Energy",
            "GEQUI": "Free Energy and Equilibrium",

            "STREN": "Acid and Base Strength",
            "PHVAL": "The pH Scale",
            "CALCK": "Calculating equilibrium constants and pH for Acids and Bases",
            "POLYP": "Polyprotic Acids",
            "SALTS": "Acid-Base Properties of Salts",
            "ABMOD": "Acid-Base Models",
            "BUFFR": "Buffers",
            "ABTIT": "Titrations and pH Curves",
            "ABIND": "Acid-Base Indicators",
            
            "TRNSM": "Transition Metals and Their Properties",
            "COORC": "Coordination Compounds and Complex Ions",

            "BALRD": "Balancing Oxidation-Reduction Reactions",
            "GALVN": "Galvanic Cells",
            "SRPOC": "Standard Reduction Potentials",
            "GENFE": "Cell Potential and Free Energy",
            "NERNS": "Cell Potential and Concentration",
            "BATCO": "Batteries and Corrosion",
            "ELTRS": "Electrolysis",

            "RDDEC": "Types of Radioactive Decay",
            "HALFL": "Half Lives",
            "RDKIN": "Radioactive Decay Kinetics",
            "MDABE": "Mass Defect and Binding Energy",
            "FISFU": "Nuclear Fission and Fusion",
            
            "NANCH": "Nanochemistry",
            "SSCHE": "Solid State Chemistry",

            "ALKAN": "Alkanes and Cycloalkanes",
            "ISOMR": "Isomerism and Stereoisomerism",
            "ALKYL": "Alkyl Halide Reactions",
            "ALKEN": "Addition Reactions and Alkenes",
            "ALKYN": "Alkynes",
            "SUBEL": "Substitution and Elimination Reactions",
            "PLYMR": "Synthetic and Natural Polymers",
            "SPECC": "Spectroscopy",
            "AROSB": "Aromatic Compounds and Substitutions",
            "AMINE": "Amines",
            "FRDCL": "Free Radical Reactions",
            "ORGMT": "Organometallics",
            "ORGCF": "Organic Chemistry Foundations",
            "AETEP": "Alcohols, Ethers, and Epoxides",
            "CBNXE": "Carbonyls, Carboxyls, and Enols",
            "DIENE": "Dienes and their Reactions",

            "BIOMO": "Biomolecules",
            "METAB": "Metabolismic Processes",

            "LABSK": "Lab Skills"
        }
    },
    "Biology": {
        "Units": {
            "01B": "Molecular Biology",
            "02B": "Cell Biology",
            "03B": "Metabolism",
            "04B": "Heredity and Genetics",
            "05B": "Evolution",
            "06B": "Biosystematics and Biodiversity",
            "07B": "Ecology",
            "08B": "Human Anatomy and Physiology",
            "09B": "Plant Anatomy and Physiology",
            "10B": "Lab Skills"
        },
        "Concepts": {
            "MACM": "Macromolecules",
            "ENZY": "Enzymes",
            "SOLU": "Solutions",
            "WATE": "Properties of Water",

            "ORGL": "Organelles",
            "CMEM": "Membrane Structure and Function",
            "CELT": "Cell Transport",
            "CELC": "Cell Communication",
            "CELY": "Cell Cycle",

            "CELR": "Cellular Respiration",
            "PHOT": "Photosynthesis",
            "FERM": "Fermentation",

            "DNAR": "DNA Replication",
            "MUTA": "Mutations",
            "MITO": "Mitosis",
            "MEIO": "Meiosis",
            "INHT": "Inheritance",
            "CHRO": "Chromosomes",
            "PEDI": "Pedigrees",
            "TRSC": "Transcription",
            "TRSL": "Translation",
            "GEXP": "Gene Expression",
            "ELEC": "Electrophoresis and PCR",
            "EDIT": "Gene Editing",

            "NATS": "Natural Selection",
            "DIFF": "Differentiation",
            "SPEC": "Species Diversity",
            "ADAP": "Adaptation",
            "POPD": "Population Dynamics",

            "TAXO": "Taxonomy",
            "PHYL": "Phylogeny",
            "PLNT": "Plant Classification",
            "ANIM": "Animal Classification",
            "FNGI": "Fungi",
            "PROK": "Prokaryotes",
            "PROT": "Protists",
            "NHAP": "Non-Human Animal Physiology",

            "ECOS": "Ecosystems",
            "CLIM": "Climate Change",
            "POPE": "Population Ecology",

            "DIGT": "Digestive System",
            "RESP": "Respiratory System",
            "CARD": "Cardiovascular System",
            "INTG": "Integumentary System",
            "MUSK": "Musculoskeletal System",
            "IMMU": "Immune System",
            "LYMP": "Lymphatic System",
            "OSMO": "Osmoregulatory System",
            "ENCR": "Endocrine System",
            "REPR": "Reproductive System",
            "NERV": "Nervous System",
            "PATH": "Pathology",
            "ETHO": "Ethology",

            "PSTR": "Plant Structure",
            "PDEV": "Plant Development",
            "PPHY": "Plant Physiology",
            "PREP": "Plant Reproduction",

            "LABS": "Lab Skills"
        }
    },
    "USABO": {
        "Units": {
            "AAP": "Animal Anatomy and Physiology",
            "PAP": "Plant Anatomy and Physiology",
            "CB": "Cell Biology",
            "GE": "Genetics and Evolution",
            "ECO": "Ecology",
            "ETH": "Ethology",
            "BIOSYS": "Biosystematics"
        },
        "Concepts": {
            "DZNTS": "Deez Nuts"
        }
    },
    "ESS": {
        "Units": {
            "01E": "Rocks and Minerals",
            "02E": "Tectonics",
            "03E": "Landscapes",
            "04E": "Hydrology",
            "05E": "Astronomy",
            "06E": "Meteorology",
            "07E": "Geochronology"
        },
        "Concepts": {
            "MID": "ID",
            "CLS": "Classification",
            "MTF": "Metamorphic Facies",
            "MEC": "Ores and Minerals of Economic Value",

            "TEC": "Tectonics",
            "VOL": "Volcanoes",
            "EQU": "Earthquakes",

            "SOL": "Soil",
            "WEA": "Physical and Chemical Weathering",
            "MSW": "Mass Wasting",
            "GLC": "Glaciers",
            "DST": "Deserts",
            "CST": "Coastlines",

            "STR": "Streams",
            "GRD": "Groundwater and Karst Topography",
            "ICE": "Sea Ice",
            "LIM": "Limnology",
            "OCN": "Oceanography",
            
            "SYS": "Solar System",
            "SEV": "Stellar Evolution",
            "SNU": "Stellar Nucleosynthesis",
            "CON": "Constellations and DSOs",
            "GXY": "Galaxies",
            "COS": "Cosmology",
            "TLF": "Temperature, Luminosity, and Flux",

            "MIC": "Microscale Weather",
            "SCW": "Mesoscale/Synoptic Scale Weather",
            "CLI": "Climatology & Planetary Circulation",
            "EBA": "Energy Balance",

            "TIM": "Geologic Time/Stratigraphy",
            "DAT": "Radioactive Dating"
        }
    }
};

module.exports = { tags: tags };
