# Angular 20

- Nombre: Angular AF 75828 – GR 86430
- Duración: 30 horas
- Modalidad: On-line
- Fechas/Horario:
  - Días 24, 25, 26, 27 y 28 Noviembre 2025
  - Horario 9:00 – 15:00 hs

Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>

Repositorio: <https://github.com/IconoTC/Angular-AF-75828-GR-86430>

## Objetivos

- Día 1
  - Introducción a TypeScript y Angular (igual que antes)
  - Entrono de desarrollo y Angular CLI
  - Componentes básico (1)
- Día 2
  - Componentes básico (2). Testing de componentes
  - Componentes: estado. Zone v. Zoneless
  - Enrutamiento Pipes y localización
- Día 3
  - Comunicación entre componentes
  - Arquitectura
  - Formularios TD
- Día 4
  - Servicios. Providers e injectors
  - Formularios DD
- Día 5
  - Servicios HTTP
  - Servicios stateful: patrón Flux

## Día 1 (L-24): Introducción a Typescript y Angular

- Introducción a Angular y su ecosistema.
- Requisitos: Node.js y npm. Editor VSCode
- Instalación y configuración de TS
- Elementos básicos de TypeScript.

  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters de ES.
    - Herencia.
    - Clases abstractas.

- [Descanso]: 11:45 - 12:10 hs

- Elementos básicos de TypeScript. (continuación)

  - Promesas y genéricos
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados.
  - Decoradores en TypeScript.

- Entorno y proyectos en Angular
  - VSCode Extensiones recomendadas.
  - Instalación de Angular CLI.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Estructura de un workspace/proyecto Angular.
  - Añadiendo ESLint (`ng add`) y Prettier.
  - Angular CLI: Comandos básicos.
    - Servidor de desarrollo: `ng serve`.
    - Testing con Vitest: `ng test`.
    - Testing con Playwright: `ng e2e`.
    - Construcción del proyecto: `ng build`.
  - Generación de componentes: `ng generate component <nombre>`.
    - Elementos de un componente: HTML, CSS, TypeScript.
    - Template y estilos inline o en ficheros.
    - Guía de estilos actualizada
    - Programación declarativa en el template: {{}}, [], ()
    - Signals en el estado del componente y en la plantilla.

## Día 2 (M-25): Componentes y Rutas

- Testing de componentes. Pruebas unitarias

  - Test con Vitest. Conceptos básicos y ejemplo
  - Elementos de los test en Angular: TestBed, fixture, detectChanges()
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos.

- Scaffolding. Core

  - Componentes Header y Footer.
  - Componente Menu. Proyección de contenido
  - Componentes Card y Layout. Aspecto visual básico.
  - AppComponent como contenedor principal.

- Testing de todos los componentes

  - Test de Header, Footer, Menu, Card y Layout.

- [Descanso]: 11:50 - 12:15

- Scaffolding. Features

  - Componentes (pages): Home, Tasks, About.

- Componentes.
  - Componente Counter. Eventos. (click)
  - Componente Greeting. Input de usuario: data binding. [(ngModel)]
  - Componente Counter2. Condicionales @If. [class]
- Referencias locales

  - Componente GreetingRef. Referencias locales en el template.

- Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals

<!--

- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas

- Pipes. Location "es"

<!-- ## Día 3 (X-26). Comunicaciones y Arquitectura de componentes. Formularios TD

- Testing de componentes (continuación)
  - Pruebas unitarias para componentes con eventos y data binding.
- Debugging
- Comunicación entre componentes

  - Input. Decoradores @Input. función input(). Drilling del título
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores.
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.

- [Descanso]

- Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.
- Ejemplo: Notes List
  - Entidad Notes. Modelo y mock de datos asíncrono.
  - Componente Notes-List. Lógica del estado
  - Componente Notes-Item. Input y Output (Eventos)
  - Componente Notes-Create. Output (Eventos)
    - Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - viewChild(NgForm) y form.reset()
    - viewChild(Form), ElementRef.nativeElement y acceso al DOM -->

<!-- ## Día 4 (J-27). Servicios. Providers e injectors. Formularios DD

- Tests de Forms TD
- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)

  - Provider root v. provider en un componente / ruta
  - Ejemplo con un servicio simple: DateService
  - Injector jerárquico. Servicios singleton y no singleton.

- Servicios y patrón Repository

  - Servicio InMemoryTaskRepository. Mock de datos.
  - Uso en los componentes. Inyección de dependencias.
  - Métodos CRUD. getAll() y getById()

- [Descanso]

- Servicios y patrón Repository (continuación)

  - Métodos CRUD. add(), update(), delete()
  - Uso de promesas
  - Repositorio y lógica de negocio (estado). Estrategias
  - Repositorio y persistencia local (localStorage).
  - Testing de servicios.
    - Tests del servicio
      - Test de métodos CRUD.
      - Test de promesas (async, whenStable, expectAsync).
    - Testing de componentes con servicios (mocks y spies).

- Formularios reactivos (DD)
  - FormGroup, FormControl, FormBuilder
  - Binding desde el template -->

<!-- ## Día 5 (V-28). Servicios HTTP

- Formularios reactivos (review). Mensajes de validación

  - Validaciones síncronas y asíncronas.
  - Testing de formularios reactivos.

- Introducción a los servicios HTTP en Angular.ç
- Servicio fake basado en JSONServer.
  - Prueba con Postman
- Servicio HttpClientModule. Observables (RxJs).
  - Creación de un ApiRepositoryService.
  - Configuración del servicio HTTP: provider
  - Uso desde la feature Tasks.

- [Descanso]

- Servicio HttpClientModule. Observables (RxJs).
  - Tests de servicios HTTP con HttpTestingController
  - Test de componentes con servicios HTTP (mocks y spies).

- Servicios stateful: patrón Flux
  - Estado con RxJS: Subjects
  - Clonado de ToDo como ToDo-Flux
  - Uso del estado desde los componentes ToDo...
  - Uso desde cualquier parte de la aplicación. -->
