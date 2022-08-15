import React, { useState } from "react";
import "./FicheSynthese.css";
import { pdd } from "../../constants";

const FICHE_INIT = {
  numero: "168",
  date: "",
  mois: "9",
  leduc: "MAH : Manifestation et Approche d'Humanoïde",
  hne: "01:30",
  hae: "02:30",
  annee: "1976",
  hynek: "RR3 : Rencontre d'un ufonaute",
  cote: "CE",
  credibilite: "3",
  etrangete: "2",
  site: "Face au 505, 70 ième avenue",
  nobj: "0",
  duree: "",
  lieu: "Laval",
  temoins: "Lefrancois Fernand",
  noname: "",
  cause: "Non identifié : être",
  codeHypothese: "E: Effet ou trace seule",
  forme: "T : être étrange",
  codeForme: "T: Êtres Étranges",
  description: `Un bruit violent fut entendu dans le milieu de la nuit.\n
Le lendemain, des traces de ... pas du diable ... furent découvertes.
Les pas du diable étaient espacés d'un mètre chacune, il fallait s'étirer pour les suivre.
Elles donnaient l'impression de sabots brulants.
Elles étaient incrustées dans le béton du trottoir, la peinture des fenêtres et l'asphalte de la rue.
On constata que, sortant de l'entrée de la maison où elles avaient grimpé le mur,
elles suivaient un trottoir, traversaient la rue, suivaient l'autre trottoir en revenant, sens opposé,
elles s'arrètaient net à l'intersection de la rue voisine.`,
};

const FicheSynthese = () => {
  const [fiche, setFiche] = useState(FICHE_INIT);

  const handleChange = ({ target: { name, value } }) => {
    setFiche({ ...fiche, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="block1 block">
            <p>Fiche synthèse du cas</p>
          </div>
          <div className="block2 block">
            <div className="block-grid">
              <label htmlFor="numero">Numéro</label>
              <input
                className="align-right"
                type="text"
                name="numero"
                id="numero"
                value={fiche.numero}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block3 block">
            <div className="block-grid">
              <label htmlFor="date">Date</label>
              <input
                className="align-right"
                type="text"
                name="date"
                id="date"
                value={fiche.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block4 block">
            <div className="block-grid">
              <label htmlFor="mois">Mois</label>
              <input
                className="align-right"
                type="text"
                name="mois"
                id="mois"
                value={fiche.mois}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block5 block">
            <div className="block-grid">
              <label htmlFor="leduc">Leduc</label>
              <input
                className="blue-bg"
                type="text"
                name="leduc"
                id="leduc"
                value={fiche.leduc}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block6 block">
            <img src={pdd} alt="pas du diable" />
          </div>
          <div className="block7 block">
            <p>7</p>
          </div>
          <div className="block8 block">
            <div className="block-grid">
              <label htmlFor="hne">H.n.e.</label>
              <input
                className="align-right"
                type="text"
                name="hne"
                id="hne"
                value={fiche.hne}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block9 block">
            <div className="block-grid">
              <label htmlFor="hae">H.a.e.</label>
              <input
                className="align-right"
                type="text"
                name="hae"
                id="hae"
                value={fiche.hae}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block10 block">
            <div className="block-grid">
              <label htmlFor="annee">Année</label>
              <input
                className="align-right"
                type="text"
                name="annee"
                id="annee"
                value={fiche.annee}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block11 block">
            <div className="block-grid">
              <label htmlFor="hynek">Hynek</label>
              <input
                className="blue-bg"
                type="text"
                name="hynek"
                id="hynek"
                value={fiche.hynek}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block12 block">
            <div className="block-grid">
              <label htmlFor="cote">Cote</label>
              <input
                className="blue-bg"
                type="text"
                name="cote"
                id="cote"
                value={fiche.cote}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block13 block">
            <div className="block-grid">
              <label htmlFor="credibilite">Crédibilité</label>
              <input
                className="blue-bg align-right"
                type="text"
                name="credibilite"
                id="credibilite"
                value={fiche.credibilite}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block14 block">
            <div className="block-grid">
              <label htmlFor="etrangete">Étrangeté</label>
              <input
                className="blue-bg align-right"
                type="text"
                name="etrangete"
                id="etrangete"
                value={fiche.etrangete}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block15 block">
            <label htmlFor="site">Site</label>
            <textarea
              className="maroon-bg"
              name="site"
              id="site"
              rows="6"
              value={fiche.site}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="block16 block">
            <div className="block-grid">
              <label htmlFor="nobj">N.Obj.</label>
              <input
                className="align-right lime-bg"
                type="text"
                name="nobj"
                id="nobj"
                value={fiche.nobj}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block17 block">
            <div className="block-grid">
              <label htmlFor="duree">Durée</label>
              <input
                className="align-right blue-bg"
                type="text"
                name="duree"
                id="duree"
                value={fiche.duree}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block18 block">
            <label htmlFor="lieu">Lieu</label>
            <textarea
              className="maroon-bg"
              name="lieu"
              id="lieu"
              rows="5"
              value={fiche.lieu}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="block19 block">
            <div className="block-grid">
              <label htmlFor="temoins">Témoins</label>
              <input
                className="font-small"
                type="text"
                name="temoins"
                id="temoins"
                value={fiche.temoins}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block20 block">
            <label htmlFor="noname"></label>
            <textarea
              name="noname"
              id="noname"
              rows="5"
              value={fiche.noname}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="block21 block">
            <div className="block-grid">
              <label htmlFor="cause">Cause</label>
              <input
                className="blue-bg"
                type="text"
                name="cause"
                id="cause"
                value={fiche.cause}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block22 block">
            <div className="block-grid">
              <label htmlFor="codeHypothese">Code hypothèse</label>
              <input
                className="blue-bg"
                type="text"
                name="codeHypothese"
                id="codeHypothese"
                value={fiche.codeHypothese}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block23 block">
            <div className="block-grid">
              <label htmlFor="forme">Forme</label>
              <input
                className="blue-bg"
                type="text"
                name="forme"
                id="forme"
                value={fiche.forme}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block24 block">
            <div className="block-grid">
              <label className="small-width" htmlFor="codeForme">
                Code forme
              </label>
              <input
                className="blue-bg"
                type="text"
                name="codeForme"
                id="codeForme"
                value={fiche.codeForme}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block25 block">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="20"
              value={fiche.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FicheSynthese;
