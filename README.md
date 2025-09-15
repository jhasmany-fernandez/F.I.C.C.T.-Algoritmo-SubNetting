# 🌐 Calculadora de Subneteo - F.I.C.C.T.

Una calculadora web moderna y completa para el cálculo de subredes IPv4 con soporte básico para IPv6. Desarrollada con tecnologías web estándar y diseño responsive.

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

## ✨ Características Principales

### 🔢 Cálculos Avanzados
- **Subneteo IPv4 completo** con máscaras CIDR /8 a /30
- **Cálculo automático** de hosts válidos, desperdicio y rangos
- **Validación en tiempo real** de direcciones IP y listas de hosts
- **Soporte básico IPv6** con validación y expansión
- **Detección automática** de clase de red (A, B, C, D, E)
- **Identificación** de redes privadas vs públicas

### 📊 Tablas de Resultados Detalladas
- **Tablero principal** con toda la información de subredes
- **Resúmenes específicos** por categoría (hosts, CIDR, máscaras, etc.)
- **Cálculos binarios** expandibles para broadcast
- **Detalles paso a paso** de cada operación matemática
- **Manejo de errores** con mensajes específicos

### 🎨 Interfaz Moderna
- **Diseño responsive** que se adapta a dispositivos móviles
- **Interfaz intuitiva** con formularios organizados
- **Estados de carga** con spinner animado
- **Validación visual** con cambios de color en campos
- **Scroll suave** automático a resultados

### 📱 Experiencia de Usuario
- **Exportación a PDF** con formato profesional
- **Botón de limpieza** para realizar múltiples consultas
- **Atajos de teclado** (Enter para calcular)
- **Tooltips informativos** en encabezados de tabla
- **Mensajes contextuales** de error y advertencia

## 🚀 Uso Rápido

1. **Abrir** `index.html` en cualquier navegador web moderno
2. **Seleccionar** tipo de IP (IPv4/IPv6)
3. **Ingresar** la IP base (ej: `192.168.1.0`)
4. **Elegir** la máscara CIDR (ej: `/24`)
5. **Especificar** hosts requeridos separados por comas (ej: `100,50,25`)
6. **Hacer clic** en "Calcular Subredes"

## 📋 Ejemplos de Uso

### Ejemplo Básico
```
IP Base: 192.168.1.0
CIDR: /25
Hosts: 100,50,25
```

### Ejemplo Avanzado
```
IP Base: 10.0.0.0
CIDR: /16
Hosts: 1000,500,250,100,50
```

### Ejemplo IPv6 (Básico)
```
IP Base: 2001:db8::1
Tipo: IPv6
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica moderna
- **CSS3** - Diseño responsive con variables y grid
- **JavaScript ES6+** - Lógica modular y moderna
- **html2pdf.js** - Exportación a PDF

## 📁 Estructura del Proyecto

```
F.I.C.C.T.-Algoritmo-SubNetting/
├── index.html          # Aplicación principal
├── README.md          # Documentación del proyecto
└── assets/           # (Futuro: imágenes y recursos)
```

## 🧮 Algoritmos Implementados

### Conversión de Direcciones
- **Decimal a Binario** - Para cálculos de máscaras
- **Binario a Decimal** - Para conversiones de red
- **IPv4 a Entero** - Para operaciones matemáticas
- **Entero a IPv4** - Para mostrar resultados

### Cálculos de Subred
- **Determinación de bits necesarios** - `Math.ceil(Math.log2(hosts + 2))`
- **Cálculo de CIDR** - `32 - bits_necesarios`
- **Generación de máscara** - `0xFFFFFFFF << (32 - cidr)`
- **Cálculo de broadcast** - `red + tamaño_subred - 1`

### Validaciones
- **IPv4** - Formato x.x.x.x con octetos 0-255
- **IPv6** - Patrones regulares para formato estándar y comprimido
- **Lista de hosts** - Números positivos separados por comas

## 👥 Autores

- **Hebert Suarez Burgos** - Desarrollo y diseño
- **Jhasmany Fernandez Ortega** - Desarrollo y documentación

*Proyecto académico - F.I.C.C.T. (Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones)*

## 📄 Licencia

Este proyecto es de uso académico y educativo. Libre para uso en entornos de aprendizaje.

## 🔧 Funcionalidades Futuras

- [ ] Calculadora de VLSM (Variable Length Subnet Masking)
- [ ] Soporte completo para IPv6 con cálculos de prefijos
- [ ] Exportación a múltiples formatos (Excel, CSV)
- [ ] Modo oscuro/claro
- [ ] Historial de cálculos
- [ ] API REST para integración

## 🐛 Reportar Problemas

Si encuentras algún error o tienes sugerencias, por favor:
1. Verifica que tu navegador sea compatible (Chrome 60+, Firefox 60+, Safari 12+)
2. Asegúrate de ingresar datos en el formato correcto
3. Revisa la consola del navegador para errores de JavaScript

---

*Desarrollado con ❤️ para el aprendizaje de redes y subnetting*