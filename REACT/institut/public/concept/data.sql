CREATE TABLE prof(
   id_prof INT,
   nom VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   spec VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_prof),
   UNIQUE(email)
)ENGINE=InnoDB;

CREATE TABLE etudiant(
   id_etudiant INT,
   nom VARCHAR(50) NOT NULL,
   email VARCHAR(50),
   telephone VARCHAR(50),
   PRIMARY KEY(id_etudiant),
   UNIQUE(email),
   UNIQUE(telephone)
)ENGINE=InnoDB;

CREATE TABLE stage(
   id_satge INT,
   nom VARCHAR(50) NOT NULL,
   date_debut DATE,
   date_fin DATE,
   description TEXT,
   PRIMARY KEY(id_satge)
)ENGINE=InnoDB;

CREATE TABLE matiere(
   id_matiere INT,
   nom VARCHAR(50) NOT NULL,
   description TEXT,
   duree INT,
   id_prof INT NOT NULL,
   PRIMARY KEY(id_matiere),
   UNIQUE(nom),
   FOREIGN KEY(id_prof) REFERENCES prof(id_prof)
)ENGINE=InnoDB;

CREATE TABLE s_inscrire(
   id_etudiant INT,
   id_satge INT,
   PRIMARY KEY(id_etudiant, id_satge),
   FOREIGN KEY(id_etudiant) REFERENCES etudiant(id_etudiant),
   FOREIGN KEY(id_satge) REFERENCES stage(id_satge)
)ENGINE=InnoDB;

CREATE TABLE composer(
   id_matiere INT,
   id_satge INT,
   PRIMARY KEY(id_matiere, id_satge),
   FOREIGN KEY(id_matiere) REFERENCES matiere(id_matiere),
   FOREIGN KEY(id_satge) REFERENCES stage(id_satge)
)ENGINE=InnoDB;
