# Stvaranje turnira

Stvaranje turnira (primarna funkcija aplikacije) počinje sa upisom do osam timova u lijevi sidebar, klikom na 'Insert Team' se upisani timovi prebacuju u bracket i tablicu turnira. Rezultati se upisuju u tablicu, input za rezultate je striktan samo za brojeve od 0 naviše. Klikom na crticu (gumb) između rezultata, na osnovu rezultata se pobjednik upisuje u sljedeći krug turnira (i u bracketu i u tablici), a u polufinalu se pobjednici na isti način šalju u finale, a gubitnici u meč za treće mjesto. Ukoliko se upiše bilo koji neriješeni rezultat, server će poslati poruku da je rezultat neriješen te se iz tog meča u sljedeći krug ne može poslati pobjednik dok se ne upiše rezultat koji je pobjedonosan za bilo koju stranu. Jednom kada se upišu rezultati za meč za treće mjesto i finale, server će poslati poruku pobjednika budući da je riječ o tehnički najvažnijim mečevima na turniru.

# Upute za pokretanje i nastavak rada:

Otvaranje direktorija 'tournament-generator' i 'api' u zasebnim prozorima u Visual Studio Code

Pokretanje baze podataka: u cmd postaviti cd gdje se nalazi direktorij mongoDB:

C:\Program Files\MongoDB\Server\4.2\bin

U cmd upisati naredbu 'mongod', 
Zatim otvoriti novi cmd, ponovno navigirati u /bin mapu i upisati naredbu 'mongo' za pokretanje baze podataka 
Potom upisati naredbu 'db' za provjeru u kojoj se bazi podataka nalazimo,
Ukoliko ta baza nije 'tgenerator', upisati novu naredbu 'use tgenerator'

U prozoru u kojem je otvoren direktorij 'api', u terminal upisati 'nodemon index.js'

Poželjna je provjera upisanih podataka u mongoDB: 'db.users.find()' (u cmd, gdje je otvorena baza mongo)
    Brisanje SVIH podataka iz baze -> 'db.users.remove("")'

U prozoru u kojem je otvoren direktorij 'tournament-generator' (glavni prozor), u terminal upisati 'ng serve' za pokretanje Angular servera - za otvaranje aplikacije - 'http://localhost:4200/'

Jednom kada se završi sa radom, otvoreni serveri i baze podataka se mogu zatvoriti upisivanjem Ctrl+C u terminal (cmd), ali oni svi moraju biti otvoreni kako bi aplikacija normalno funkcionirala prilikom korištenja. 

# TournamentGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
