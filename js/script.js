document.addEventListener("DOMContentLoaded", function () {
    // Datos de las materias
    const materias = {
        "MED100": { nombre: "MED 100 - ANATOMÍA HUMANA", grupos: 8, subgrupos: 3 },
        "MED101": { nombre: "MED 101 - HISTOLOGÍA Y EMBRIOLOGÍA", grupos: 8, subgrupos: 3 },
        "SAP100": { nombre: "SAP 100 - SALUD PÚBLICA I", grupos: 8, subgrupos: 1 },
        "MAF100": { nombre: "MAF 100 - FORMACIÓN SOCIOCULTURAL", grupos: 8, subgrupos: 1 }
    };

    // Horarios específicos para cada materia, grupo y subgrupo
        const horariosMaterias = {
        "MED100": { // Código de la materia
            "A1": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],  
            },
            "A2": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45" ],           
            },
            "A3": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15"],
       	},          
          "B1": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
		"Jueves": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
         },
           "B2": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
                "Miércoles": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
           },
        "B3": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"], 
           },
        "C1": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"], 
                "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
		"Sábado": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
        },
        "C2": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"], 
                "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
		"Sábado": ["10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"],
        },
        "C3": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30"], 
                "Viernes": ["07:00 - 07:45", "07:45 - 08:30"],
		"Jueves": ["18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15"],
        },
        "D1": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "11:30 - 12:15", "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30"], 
        },
        "D2": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45", "16:45 - 17:30"],
        },
        "D3": { 
                "Martes": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30"],
        },
          "E1": { 
                "Lunes": ["10:00 - 10:45", "10:45 - 11:30"], 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
        },
            "E2": { 
                "Lunes": ["10:00 - 10:45", "10:45 - 11:30"], 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
                "Jueves": ["12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"],
        },
          "E3": { 
                "Lunes": ["10:00 - 10:45", "10:45 - 11:30"], 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"],
		"Viernes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
        },
          "F1": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"], 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
        },
          "F2": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30"], 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30"],
		"Lunes": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
        },
          "F3": { 
                "Martes": ["10:00 - 10:45", "10:45 - 11:30", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"], 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30"],
	},
          "G1": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30", "10:00 - 10:45", "10:45 - 11:30"], 
                "Lunes": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
	},
          "G2": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30", "10:00 - 10:45", "10:45 - 11:30", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00"], 
      	},
          "G3": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30", "10:00 - 10:45", "10:45 - 11:30", "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00"], 
       	},
          "H1": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"], 
                "Viernes": ["11:30 - 12:15", "12:15 - 13:00"],
		"Jueves": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
	},
          "H2": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"], 
                "Viernes": ["11:30 - 12:15", "12:15 - 13:00"],
	},
          "H3": { 
                "Miércoles": ["07:00 - 07:45", "07:45 - 08:30"], 
                "Viernes": ["11:30 - 12:15", "12:15 - 13:00", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:00 - 16:45"],
        },
        },
            "MED101": { // Código de la materia
            "A1": { 
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"], 
                "Lunes": ["13:45 - 14:30", "14:30 - 15:15"], 
               },   
             "A2": { 
		"Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"], 
                "Lunes": ["15:15 - 16:00", "16:00 - 16:45"], 
         },
            "A3": { 
		"Miércoles": ["13:45 - 14:30", "14:30 - 15:15"], 
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"], 
                "Martes": ["16:45 - 17:30", "17:30 - 18:15"],
             },   
             "B1": { 
		"Lunes": ["18:15 - 19:00", "19:00 - 19:45"], 
		"Martes": ["13:45 - 14:30", "14:30 - 15:15"],
                "Miércoles": ["15:15 - 16:00", "16:00 - 16:45"],
               },   
             "B2": { 
		"Lunes": ["18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15"], 
		"Martes": ["13:45 - 14:30", "14:30 - 15:15"],
                },   
             "B3": { 
		"Lunes": ["18:15 - 19:00", "19:00 - 19:45"], 
		"Martes": ["13:45 - 14:30", "14:30 - 15:15"],
                "Jueves": ["15:15 - 16:00", "16:00 - 16:45"],
                },   
             "C1": { 
                "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "16:45 - 17:30", "17:30 - 18:15"],
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"],
               },
          "C2": { 
                "Lunes": ["13:45 - 14:30", "14:30 - 15:15", "18:15 - 19:00", "19:00 - 19:45"],
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"],
               },
          "C3": { 
                "Lunes": ["13:45 - 14:30", "14:30 - 15:15"],
                "Viernes": ["15:15 - 16:00", "16:00 - 16:45"],
                "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
               },
          "D1": { 
		"Lunes": ["19:45 - 20:30", "20:30 - 21:15"],
		"Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
                "Martes": ["16:45 - 17:30", "17:30 - 18:15"],
            },
          "D2": { 
		"Lunes": ["19:45 - 20:30", "20:30 - 21:15"],
		"Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
                "Martes": ["18:15 - 19:00", "19:00 - 19:45"],
            },
          "D3": { 
		"Lunes": ["19:45 - 20:30", "20:30 - 21:15"],
		"Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
		"Martes": ["19:45 - 20:30", "20:30 - 21:15"],
             },
          "E1": { 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
                "Martes": ["13:45 - 14:30", "14:30 - 15:15"],
            },
          "E2": { 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
                "Miércoles": ["13:45 - 14:30", "14:30 - 15:15"],
           },
          "E3": { 
                "Jueves": ["07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00"],
                "Viernes": ["13:45 - 14:30", "14:30 - 15:15"],           
	  },
          "F1": { 
                "Jueves": ["13:45 - 14:30", "14:30 - 15:15"],
                "Viernes": ["16:45 - 17:30", "17:30 - 18:15"],
                "Martes": ["15:15 - 16:00", "16:00 - 16:45"],
             },
          "F2": { 
		"Jueves": ["13:45 - 14:30", "14:30 - 15:15", "10:00 - 10:45", "10:45 - 11:30"],
                "Viernes": ["16:45 - 17:30", "17:30 - 18:15"],
             },
          "F3": { 
		"Jueves": ["13:45 - 14:30", "14:30 - 15:15", "16:45 - 17:30", "17:30 - 18:15"],
                "Viernes": ["16:45 - 17:30", "17:30 - 18:15"],
	},
          "G1": { 
                "Lunes": ["15:15 - 16:00", "16:00 - 16:45"],
                "Miércoles": ["18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15"],
             },
          "G2": { 
                "Lunes": ["15:15 - 16:00", "16:00 - 16:45"],
                "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
                "Jueves": ["19:45 - 20:30", "20:30 - 21:15"],
             },
          "G3": { 
                "Lunes": ["15:15 - 16:00", "16:00 - 16:45"],
                "Miércoles": ["18:15 - 19:00", "19:00 - 19:45"],
                "Viernes": ["19:45 - 20:30", "20:30 - 21:15"],
	},
          "H1": { 
          "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
          "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],
          "Viernes": ["16:45 - 17:30", "17:30 - 18:15"],
             },
          "H2": { 
          "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
          "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"],                         "Jueves": ["16:45 - 17:30", "17:30 - 18:15"],
             },
          "H3": { 
          "Lunes": ["16:45 - 17:30", "17:30 - 18:15"],
          "Miércoles": ["19:45 - 20:30", "20:30 - 21:15"], 
          "Jueves": ["15:15 - 16:00", "16:00 - 16:45"],
      },
           },
            "SAP100": { // Código de la materia
            "A1": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
              },
              "B1": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
                 },
              "C1": { 
            "Viernes": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
              },
              "D1": { 
            "Viernes": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
             },
              "E1": { 
            "Miércoles": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
            },
              "F1": { 
            "Miércoles": ["16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00", "19:00 - 19:45"],
	},
              "G1": { 
            "Sábado": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
	},
              "H1": { 
            "Sábado": ["08:30 - 09:15", "09:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
          },
           },
            "MAF100": { // Código de la materia
            "A1": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Jueves": ["21:15 - 22:00", "22:00 - 22:45"],       
            },
              "B1": { 
            "Lunes": ["07:00 - 07:45", "07:45 - 08:30"],
            "Jueves": ["21:15 - 22:00", "22:00 - 22:45"], 
             },
              "C1": { 
            "Viernes": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
              },
              "D1": { 
            "Miércoles": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
             },
              "E1": { 
            "Martes": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
            },
              "F1": { 
            "Martes": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
	},
              "G1": { 
            "Lunes": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
	},
              "H1": { 
            "Lunes": ["19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00", "22:00 - 22:45"],       
          }, 
        }
        
        // ... (resto de los horarios de las materias)
    };

    // Textos personalizados para cada materia, grupo y subgrupo
    const textosPersonalizados = {
        "MED100": {
            "A1": "Dr. Pedraza",
            "A2": "Dr. Pedraza",
            "A3": "Dr. Pedraza",
	    "B1": "Dr. Sossa Lino",
	    "B2": "Dr. Sossa Lino",
            "B3": "Dr. Sossa Lino",
            "C1": "Dr. Sempertegui",
	    "C2": "Dr. Sempertegui",
            "C3": "Dr. Sempertegui",
            "D1": "Dr. Oropeza",
            "D2": "Dr. Oropeza",
	    "D3": "Dr. Oropeza",
	    "E1": "Dr. Aguilar",
            "E2": "Dr. Aguilar",
            "E3": "Dr. Aguilar",
	    "F1": "Dr. Dorado",
	    "F2": "Dr. Dorado",
	    "F3": "Dr. Dorado",
	    "G1": "Dr. Sossa Lino",
	    "G2": "Dr. Sossa Lino",
	    "G3": "Dr. Sossa Lino",
            "H1": "Dr. Dorado",
	    "H2": "Dr. Dorado",
	    "H3": "Dr. Dorado",

            // Agrega más textos para otros grupos y subgrupos
        },
        "MED101": {
            "A1": "Dr. Sánchez",
            "A2": "Dr. Sánchez",
            "A3": "Dr. Sánchez",
	    "B1": "Dr. Sangüeza",
	    "B2": "Dr. Sangüeza",
            "B3": "Dr. Sangüeza",
            "C1": "Dr. Iriarte",
	    "C2": "Dr. Iriarte",
            "C3": "Dr. Iriarte",
            "D1": "Dr. Laguna",
            "D2": "Dr. Laguna",
	    "D3": "Dr. Laguna",
	    "E1": "Dr. Harold Rivero",
            "E2": "Dr. Harold Rivero",
            "E3": "Dr. Harold Rivero",
	    "F1": "Dr. Sangüeza",
	    "F2": "Dr. Sangüeza",
	    "F3": "Dr. Sangüeza",
	    "G1": "Dr. Iriarte",
	    "G2": "Dr. Iriarte",
	    "G3": "Dr. Iriarte",
            "H1": "Dr. Sánchez",
	    "H2": "Dr. Sánchez",
	    "H3": "Dr. Sánchez",

            // Agrega más textos para otros grupos y subgrupos
},
        "SAP100": {
            "A1": "Dr. Harold Rivero",
	    "B1": "Dr. Harold Rivero",
            "C1": "Dr. Harold Rivero",
            "D1": "Dr. Harold Rivero",
	    "E1": "Dr. Harold Rivero",
	    "F1": "Dr. Harold Rivero",
	    "G1": "Dr. Williams",
	    "H1": "Dr. Williams",
            // Agrega más textos para otros grupos y subgrupos
},
        "MAF100": {
            "A1": "Dr. Reymi Ferreira ",
	    "B1": "Dr. Reymi Ferreira",
            "C1": "Dr. Harold Rivero",
            "D1": "Dr. Harold Rivero",
	    "E1": "Dr. Harold Rivero",
	    "F1": "Dr. Harold Rivero",
	    "G1": "Dr. Harold Rivero",
	    "H1": "Dr. Harold Rivero",
            // Agrega más textos para otros grupos y subgrupos

            // Agrega más textos para otros grupos y subgrupos

        },
        // Agrega más materias y sus textos personalizados
    };

    // Horarios disponibles
    const horarios = [
        "07:00 - 07:45", "07:45 - 08:30", "08:30 - 09:15", "09:15 - 10:00",
        "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15", "12:15 - 13:00",
        "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00",
        "16:00 - 16:45", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00",
        "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00",
        "22:00 - 22:45"
    ];

    // Días de la semana (incluyendo Sábado)
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Elementos del DOM
    const seleccionMaterias = document.getElementById("seleccionMaterias");
    const botonMostrarHorario = document.getElementById("mostrarHorario");
    const tabla = document.getElementById("horario");

    // Generar checkboxes para seleccionar materias
    for (const codigo in materias) {
        const materia = materias[codigo];

        // Crear contenedor para la materia
        const contenedorMateria = document.createElement("div");
        contenedorMateria.classList.add("contenedor-materia");

        // Checkbox para la materia
        const labelMateria = document.createElement("label");
        const checkboxMateria = document.createElement("input");
        checkboxMateria.type = "checkbox";
        checkboxMateria.value = codigo;
        checkboxMateria.id = `materia-${codigo}`;
        checkboxMateria.addEventListener("change", function () {
            actualizarGrupos(codigo);
        });
        labelMateria.appendChild(checkboxMateria);
        labelMateria.appendChild(document.createTextNode(materia.nombre));
        contenedorMateria.appendChild(labelMateria);

        // Contenedor para grupos y subgrupos
        const contenedorGrupos = document.createElement("div");
        contenedorGrupos.id = `grupos-${codigo}`;
        contenedorGrupos.style.display = "none"; // Ocultar inicialmente
        contenedorMateria.appendChild(contenedorGrupos);

        seleccionMaterias.appendChild(contenedorMateria);
    }

    // Función para actualizar los grupos de una materia seleccionada
    function actualizarGrupos(codigo) {
        const contenedorGrupos = document.getElementById(`grupos-${codigo}`);
        const checkboxMateria = document.getElementById(`materia-${codigo}`);

        if (checkboxMateria.checked) {
            contenedorGrupos.innerHTML = ""; // Limpiar grupos anteriores

            const materia = materias[codigo];
            for (let i = 0; i < materia.grupos; i++) {
                const grupo = String.fromCharCode(65 + i); // A, B, C, ...

                // Checkbox para el grupo
                const labelGrupo = document.createElement("label");
                const checkboxGrupo = document.createElement("input");
                checkboxGrupo.type = "checkbox";
                checkboxGrupo.value = grupo;
                checkboxGrupo.id = `grupo-${codigo}-${grupo}`;
                checkboxGrupo.addEventListener("change", function () {
                    actualizarSubgrupos(codigo, grupo);
                });
                labelGrupo.appendChild(checkboxGrupo);
                labelGrupo.appendChild(document.createTextNode(`Grupo ${grupo}`));
                contenedorGrupos.appendChild(labelGrupo);

                // Contenedor para subgrupos
                const contenedorSubgrupos = document.createElement("div");
                contenedorSubgrupos.id = `subgrupos-${codigo}-${grupo}`;
                contenedorSubgrupos.style.display = "none"; // Ocultar inicialmente
                contenedorGrupos.appendChild(contenedorSubgrupos);
            }

            contenedorGrupos.style.display = "block"; // Mostrar grupos
        } else {
            contenedorGrupos.style.display = "none"; // Ocultar grupos si la materia no está seleccionada
        }
    }

    // Función para actualizar los subgrupos de un grupo seleccionado
    function actualizarSubgrupos(codigo, grupo) {
        const contenedorSubgrupos = document.getElementById(`subgrupos-${codigo}-${grupo}`);
        const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

        if (checkboxGrupo.checked) {
            contenedorSubgrupos.innerHTML = ""; // Limpiar subgrupos anteriores

            const materia = materias[codigo];
            for (let j = 1; j <= materia.subgrupos; j++) {
                const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...

                // Checkbox para el subgrupo
                const labelSubgrupo = document.createElement("label");
                const checkboxSubgrupo = document.createElement("input");
                checkboxSubgrupo.type = "checkbox";
                checkboxSubgrupo.value = subgrupo;
                checkboxSubgrupo.id = `subgrupo-${codigo}-${grupo}-${j}`;
                labelSubgrupo.appendChild(checkboxSubgrupo);
                labelSubgrupo.appendChild(document.createTextNode(subgrupo)); // Solo el código del subgrupo
                contenedorSubgrupos.appendChild(labelSubgrupo);
            }

            contenedorSubgrupos.style.display = "block"; // Mostrar subgrupos
        } else {
            contenedorSubgrupos.style.display = "none"; // Ocultar subgrupos si el grupo no está seleccionado
        }
    }

    // Función para generar la tabla de horarios
    function generarTabla() {
        tabla.innerHTML = ""; // Limpiar tabla

        // Crear fila de días
        const filaDias = document.createElement("tr");
        filaDias.appendChild(document.createElement("th")); // Celda vacía para los horarios
        dias.forEach(dia => {
            const th = document.createElement("th");
            th.textContent = dia;
            filaDias.appendChild(th);
        });
        tabla.appendChild(filaDias);

        // Crear filas de horarios
        horarios.forEach(horario => {
            const fila = document.createElement("tr");
            const th = document.createElement("th");
            th.textContent = horario;
            fila.appendChild(th);

            dias.forEach(dia => {
                const td = document.createElement("td");

                let contenido = "";
                let horariosCruzados = []; // Para detectar horarios cruzados

                for (const codigo in materias) {
                    const materia = materias[codigo];
                    const checkboxMateria = document.getElementById(`materia-${codigo}`);

                    if (checkboxMateria.checked) {
                        for (let i = 0; i < materia.grupos; i++) {
                            const grupo = String.fromCharCode(65 + i); // A, B, C, ...
                            const checkboxGrupo = document.getElementById(`grupo-${codigo}-${grupo}`);

                            if (checkboxGrupo.checked) {
                                for (let j = 1; j <= materia.subgrupos; j++) {
                                    const subgrupo = `${grupo}${j}`; // A1, A2, A3, ...
                                    const checkboxSubgrupo = document.getElementById(`subgrupo-${codigo}-${grupo}-${j}`);

                                    if (checkboxSubgrupo.checked) {
       // Verificar si hay horarios específicos para este subgrupo y día
 const horariosEspecificos = horariosMaterias[codigo]?.[subgrupo]?.[dia];
                                        if (horariosEspecificos && horariosEspecificos.includes(horario)) {
                                            contenido += `<strong>${materia.nombre}</strong><br>`;
                                            contenido += `${subgrupo}<br>`; // Solo el código del subgrupo

                                            // Agregar texto personalizado si existe
                                            const textoPersonalizado = textosPersonalizados[codigo]?.[subgrupo];
                                            if (textoPersonalizado) {
                                                contenido += `${textoPersonalizado}<br>`;
                                            }

                                            horariosCruzados.push({ materia: materia.nombre, subgrupo });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Si hay más de un horario cruzado, destacar en rojo
                if (horariosCruzados.length > 1) {
                    td.style.backgroundColor = "#ffcccc"; // Fondo rojo
                    contenido = horariosCruzados.map(h => `<strong>${h.materia}</strong><br>${h.subgrupo}`).join("<br>");
                }

                td.innerHTML = contenido;
                fila.appendChild(td);
            });

            tabla.appendChild(fila);
        });
    }

    // Event listener para el botón "Mostrar/Ocultar Horario"
    botonMostrarHorario.addEventListener("click", function () {
        generarTabla();
    });

    // Generar tabla inicial vacía
    generarTabla();
});
