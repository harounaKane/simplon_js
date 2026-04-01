import Personne from "./Personne";

export default class Prof extends Personne {
  constructor(id, nom, email, spec) {
    super(id, nom, email);
    this.spec = spec;
  }
}
