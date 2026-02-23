import { ParallaxScene, ParallaxItem } from "@/components/ui/parallax-scene"
import { ClickableImage } from "@/components/ui/clickable-image"

import aLaHuelga from "@/assets/images/about/museums/a-la-huelga-100-a-la-huelga-1000-nirma-zarate.webp"
import albertoGiacometti from "@/assets/images/about/museums/alberto-giacometti-1961.webp"
import amsterdamEnInvierno from "@/assets/images/about/museums/amsterdam-en-invierno-Monet.webp"
import apoloYDafne from "@/assets/images/about/museums/apolo-y-dafne-bernini.webp"
import atlandeDeTula from "@/assets/images/about/museums/atlante-de-tula.webp"
import beyondFlesh from "@/assets/images/about/museums/beyond-flesh-and-humanity-rafael-pascuale.webp"
import cabezaSerpiente from "@/assets/images/about/museums/cabeza-de-serpiente-zapoteca.webp"
import cabezaHombreLlorando from "@/assets/images/about/museums/cabeza-hombre-llorando-guayasamin.webp"
import cabezaOlmeca from "@/assets/images/about/museums/cabeza-olmeca.webp"
import chacMool from "@/assets/images/about/museums/chac-mool.webp"
import craneoCabra from "@/assets/images/about/museums/craneo-de-cabra-sobre-mesa-pablo-picasso.webp"
import crucifixion from "@/assets/images/about/museums/crucifixion-botero.webp"
import desnudoHombre from "@/assets/images/about/museums/desnudo-de-hombre-de-cuerpo-entero-francisco-antonio-cano.webp"
import eclipseGuadalajara from "@/assets/images/about/museums/eclipse-guadalajara-2024.webp"
import elJuicioFinal from "@/assets/images/about/museums/el-juicio-final-juan-perez-mexia.webp"
import enLaPuerta from "@/assets/images/about/museums/en-la-puerta-del-serrallo-mariano-fortuny.webp"
import espaldas from "@/assets/images/about/museums/espaldas-botero.webp"
import eugeneBoudin from "@/assets/images/about/museums/eugene-boudin.webp"
import floresBotero from "@/assets/images/about/museums/flores-botero.webp"
import gatoBarroco from "@/assets/images/about/museums/gato-barroco.webp"
import gatoBotero from "@/assets/images/about/museums/gato-botero.webp"
import heraclito from "@/assets/images/about/museums/heraclito-jose-de-ribera.webp"
import homenajeMagritte from "@/assets/images/about/museums/homenaje-magritte-gelsen-gas.webp"
import indigenaContraElMito from "@/assets/images/about/museums/indigena-contra-el-mito-hector-ayala.webp"
import jesusSinHogar from "@/assets/images/about/museums/jesus-sin-hogar.webp"
import laEternaPrimavera from "@/assets/images/about/museums/la-eterna-primavera-auguste-rodin.webp"
import laminasDeOro from "@/assets/images/about/museums/laminas-de-oro-sobre-caracol-marino-valle-de-cauca.webp"
import losDerechos from "@/assets/images/about/museums/los-derechos-de-la-mujer-debora-arango.webp"
import miHijo from "@/assets/images/about/museums/mi-hijo-rafael-alfredo-valenzuela-puelma.webp"
import modernTribalArt from "@/assets/images/about/museums/modern-tribal-art.webp"
import modoDeVolar from "@/assets/images/about/museums/modo-de-volar-goya.webp"
import museoBotero from "@/assets/images/about/museums/museo-botero.webp"
import museoDelOro1 from "@/assets/images/about/museums/museo-del-oro-1-coleccion.webp"
import museoDelOro2 from "@/assets/images/about/museums/museo-del-oro-2-pectoral-ceremonial.webp"
import museoDelOro3 from "@/assets/images/about/museums/museo-del-oro-3-poporo-femenino.webp"
import museoDelOro4 from "@/assets/images/about/museums/museo-del-oro-4-colgante-tairona.webp"
import museoDelOro5 from "@/assets/images/about/museums/museo-del-oro-5-ocarina-oso-tairona.webp"
import neilWelliver from "@/assets/images/about/museums/neil-welliver.webp"
import nuestraImagenActual from "@/assets/images/about/museums/nuestra-imagen-actual-siqueiros.webp"
import retratoDeEfeGomez from "@/assets/images/about/museums/retrato-de-efe-gomez-pedro-nel-gomez.webp"
import retratoDeJoven from "@/assets/images/about/museums/retrato-de-joven-ricardo-acevedo-bernal.webp"
import reyCarlosII from "@/assets/images/about/museums/rey-carlos-ii-juan-carreno-de-miranda.webp"
import tbhIdk from "@/assets/images/about/museums/tbh-idk.webp"
import urabaFigura from "@/assets/images/about/museums/uraba-figura.webp"
import urbanismo from "@/assets/images/about/museums/urbanismo-siqueiros.webp"

const images: { src: string; alt: string; description: string; width?: number; height?: number }[] = [
  { src: apoloYDafne, alt: "Apolo y Dafne", height: 340, description: "Apolo y Dafne — Gian Lorenzo Bernini, 1622–25. One of Baroque sculpture's most dramatic moments: the instant Daphne transforms into a laurel tree to escape Apollo. Galleria Borghese, Rome." },
  { src: amsterdamEnInvierno, alt: "Amsterdam en Invierno", width: 300, description: "Amsterdam en Invierno — Claude Monet. A rare urban subject for Monet, capturing the canals and rooftops of Amsterdam under winter light with his signature loose brushwork." },
  { src: cabezaHombreLlorando, alt: "Cabeza de hombre llorando", height: 320, description: "Cabeza de hombre llorando — Oswaldo Guayasamín. Part of his series La Edad de la Ira, this work channels the pain of Latin American suffering through distorted, expressionist features." },
  { src: aLaHuelga, alt: "A la huelga", width: 300, description: "A la huelga 100, a la huelga 1000 — Nirma Zárate. Colombian political graphic art from the 1970s, made as a call to labor resistance. Bold, confrontational, and unapologetically propagandistic." },
  { src: albertoGiacometti, alt: "Alberto Giacometti", height: 360, description: "Alberto Giacometti, 1961. His elongated bronze figures capture existential isolation — thin, fragile forms that seem to be both reaching outward and dissolving into space." },
  { src: atlandeDeTula, alt: "Atlante de Tula", height: 380, description: "Atlante de Tula — Toltec, c. 900–1150 CE. These massive warrior columns once supported the roof of the Temple of Quetzalcóatl in Tula, Hidalgo. Among the most iconic pre-Columbian sculptures in Mexico." },
  { src: beyondFlesh, alt: "Beyond Flesh and Humanity", width: 280, description: "Beyond Flesh and Humanity — Rafael Pascuale. A contemporary exploration of the boundary between the human body and something beyond it — visceral and unsettling in equal measure." },
  { src: cabezaSerpiente, alt: "Cabeza de serpiente zapoteca", height: 300, description: "Cabeza de serpiente zapoteca. A ceremonial serpent head from the Zapotec civilization of Oaxaca, Mexico. Serpents held deep cosmological significance as links between earth, water, and the underworld." },
  { src: cabezaOlmeca, alt: "Cabeza olmeca", height: 300, description: "Cabeza olmeca. The colossal heads of the Olmec civilization (1500–400 BCE) are among the most mysterious monuments of ancient America. Each one is believed to portray a specific ruler, carved from single basalt boulders." },
  { src: chacMool, alt: "Chac Mool", height: 300, description: "Chac Mool. A reclining figure found across Mesoamerican cultures from the Toltec to the Maya and Aztec. The bowl on the abdomen received offerings — possibly hearts. The name was coined by a 19th-century explorer." },
  { src: craneoCabra, alt: "Cráneo de cabra sobre mesa", height: 300, description: "Cráneo de cabra sobre mesa — Pablo Picasso. A still life from Picasso's late period, where death and domesticity coexist. The skull becomes a meditation on time and mortality disguised as an everyday object." },
  { src: crucifixion, alt: "Crucifixión", height: 340, description: "Crucifixión — Fernando Botero. Botero's signature volumetric style applied to one of Western art's most sacred subjects. The swollen, monumental figures give the scene a strange mix of weight and tenderness." },
  { src: desnudoHombre, alt: "Desnudo de hombre de cuerpo entero", height: 360, description: "Desnudo de hombre de cuerpo entero — Francisco Antonio Cano. A rare academic nude from one of Colombia's most important 19th-century painters, showing his mastery of classical technique." },
  { src: eclipseGuadalajara, alt: "Eclipse Guadalajara 2024", width: 320, description: "Eclipse solar total — Guadalajara, 2024. A rare total solar eclipse visible from parts of Mexico. One of those moments where the sky makes you feel genuinely small." },
  { src: elJuicioFinal, alt: "El Juicio Final", width: 300, description: "El Juicio Final — Juan Pérez Mexía. A monumental colonial-era painting depicting the Last Judgment, blending European Baroque tradition with the visual vocabulary of New Spain." },
  { src: enLaPuerta, alt: "En la puerta del Serrallo", width: 320, description: "En la puerta del Serrallo — Mariano Fortuny, 1869. A masterwork of Orientalist painting, capturing the entrance to a Ottoman palace with extraordinary detail and light. One of Fortuny's most celebrated works." },
  { src: espaldas, alt: "Espaldas", height: 300, description: "Espaldas — Fernando Botero. Characteristic Botero backs — monumental, soft, powerful. There is something both intimate and monumental about viewing the human body from behind." },
  { src: eugeneBoudin, alt: "Eugène Boudin", width: 300, description: "A work by Eugène Boudin, the French painter who mentored the young Monet. Boudin was a pioneer of plein air painting, capturing skies and beaches with a lightness that foreshadowed Impressionism." },
  { src: floresBotero, alt: "Flores", height: 300, description: "Flores — Fernando Botero. Even flowers get the Botero treatment — oversized, lush, abundant. His still lifes carry the same quiet joy as his figures." },
  { src: gatoBarroco, alt: "Gato barroco", height: 300, description: "A Baroque cat — anonymous. Cats appeared in European painting as symbols of cunning, independence, and sometimes sin. This one looks entirely unbothered." },
  { src: gatoBotero, alt: "Gato", width: 280, description: "Gato — Fernando Botero. A monumental, rotund cat rendered in Botero's unmistakable style. It manages to be both absurd and dignified." },
  { src: heraclito, alt: "Heráclito", height: 340, description: "Heráclito — José de Ribera, c. 1630. Known as Lo Spagnoletto, Ribera depicts the weeping philosopher of ancient Greece. Heraclitus believed all is flux — everything changes, nothing stays. Ribera makes you feel it." },
  { src: homenajeMagritte, alt: "Homenaje a Magritte", width: 300, description: "Homenaje a Magritte — Gelsen Gas. A tribute to the Belgian surrealist René Magritte, whose work questioned the relationship between images and reality. Gelsen Gas was a key figure in Mexican surrealism." },
  { src: indigenaContraElMito, alt: "Indígena contra el mito", width: 300, description: "Indígena contra el mito — Héctor Ayala. A powerful work confronting the romanticized and mythologized image of indigenous peoples in Latin American art and culture." },
  { src: jesusSinHogar, alt: "Jesús sin hogar", height: 320, description: "Jesús sin hogar — Tim Schmalz, 2013. A bronze sculpture of a homeless figure sleeping on a bench, feet bearing nail wounds. Installed outside churches worldwide, it has sparked both controversy and reflection." },
  { src: laEternaPrimavera, alt: "La Eterna Primavera", height: 340, description: "La Eterna Primavera — Auguste Rodin, 1881. Two figures locked in an embrace, rising from rough stone. For Rodin, the unfinished surface was intentional — the figures emerge from matter as if from unconsciousness." },
  { src: laminasDeOro, alt: "Láminas de oro sobre caracol marino", width: 300, description: "Láminas de oro sobre caracol marino — Valle del Cauca, Colombia. Pre-Columbian goldwork from the Museo del Oro. Gold for these cultures wasn't wealth — it was light, divinity, and transformation." },
  { src: losDerechos, alt: "Los derechos de la mujer", height: 320, description: "Los derechos de la mujer — Débora Arango, c. 1944. One of Colombia's most radical painters, Arango used her work to challenge gender norms and political power at a time when such voices were actively silenced." },
  { src: miHijo, alt: "Mi hijo Rafael", height: 340, description: "Mi hijo Rafael — Alfredo Valenzuela Puelma, 1890. An intimate portrait by the Chilean painter of his own son. The tenderness in the gaze makes it transcend its time." },
  { src: modernTribalArt, alt: "Modern Tribal Art", width: 300, description: "Modern Tribal Art. A contemporary work engaging with tribal aesthetics and their reinterpretation in a modern context — raising questions about cultural appropriation, preservation, and identity." },
  { src: modoDeVolar, alt: "Modo de volar", width: 300, description: "Modo de volar — Francisco de Goya, from Los Disparates (Follies), c. 1815–23. A darkly satirical print from Goya's late period, depicting figures in grotesque flight. Part of a series that resists any single interpretation." },
  { src: museoBotero, alt: "Museo Botero", width: 320, description: "Interior of the Museo Botero, Bogotá. Fernando Botero donated over 200 works to the people of Colombia, housed in a colonial mansion in La Candelaria. One of Latin America's most visited museums." },
  { src: museoDelOro1, alt: "Colección Museo del Oro", width: 320, description: "Colección general — Museo del Oro, Bogotá. The world's largest collection of pre-Columbian goldwork. For the Muisca and other cultures, gold represented the sun, fertility, and the sacred — never mere currency." },
  { src: museoDelOro2, alt: "Pectoral ceremonial", height: 300, description: "Pectoral ceremonial — Museo del Oro. Worn during ritual ceremonies, these chest ornaments transformed the wearer into a divine intermediary. The craftsmanship rivals anything produced in the ancient world." },
  { src: museoDelOro3, alt: "Poporo femenino", height: 320, description: "Poporo femenino — Museo del Oro. The poporo is a lime container used by the Muisca for chewing coca. This rare feminine form challenges assumptions about gender in pre-Columbian society." },
  { src: museoDelOro4, alt: "Colgante Tairona", height: 300, description: "Colgante Tairona — Museo del Oro. A pendant from the Tairona culture of the Sierra Nevada de Santa Marta. Tairona goldwork is renowned for its zoomorphic forms and extraordinary technical complexity." },
  { src: museoDelOro5, alt: "Ocarina oso Tairona", height: 300, description: "Ocarina en forma de oso — Tairona, Museo del Oro. A functional musical instrument and sacred object in one. The bear held spiritual significance as a powerful animal spirit in Tairona cosmology." },
  { src: neilWelliver, alt: "Neil Welliver", width: 300, description: "A work by Neil Welliver, the American realist painter known for his large-scale Maine landscapes. His canvases capture forest light and water with almost meditative precision." },
  { src: nuestraImagenActual, alt: "Nuestra imagen actual", width: 300, description: "Nuestra imagen actual — David Alfaro Siqueiros. One of the Mexican muralist movement's most confrontational painters, Siqueiros used art as a weapon of political awakening. This work asks us to look at ourselves honestly." },
  { src: retratoDeEfeGomez, alt: "Retrato de Efe Gómez", height: 320, description: "Retrato de Efe Gómez — Pedro Nel Gómez. A portrait of the Colombian writer and journalist Francisco Gómez Escobar by one of the great Colombian muralists, capturing intellectual intensity." },
  { src: retratoDeJoven, alt: "Retrato de joven", height: 320, description: "Retrato de joven — Ricardo Acevedo Bernal, late 19th century. A delicate portrait by one of Colombia's pioneering academic painters, who studied in Paris and brought European technique back to Bogotá." },
  { src: reyCarlosII, alt: "Rey Carlos II", height: 360, description: "Rey Carlos II — Juan Carreño de Miranda, c. 1685. A hauntingly honest portrait of the last Habsburg king of Spain. Charles II suffered from severe genetic disorders from centuries of inbreeding — Carreño doesn't hide it." },
  { src: tbhIdk, alt: "Tbh idk", width: 280, description: "Honestly? No idea. But it was compelling enough to photograph." },
  { src: urabaFigura, alt: "Urabá figura", height: 300, description: "Figura de Urabá — pre-Columbian, northwestern Colombia. A ceremonial figure from the Urabá region, where distinct indigenous cultures developed sophisticated ceramic and goldwork traditions." },
  { src: urbanismo, alt: "Urbanismo", width: 300, description: "Urbanismo — David Alfaro Siqueiros. Siqueiros was fascinated by the modern city as both a site of progress and oppression. This work turns urban structure into something monumental and charged." },
]

export default function MuseumsBlock() {
  return (
    <ParallaxScene height={4000} className="bg-neutral-950" overlay={<h1 className="text-white text-6xl font-bold">What I've seen.</h1>}>
      <ParallaxItem z={0.8} x="5%"  y="1%">  <ClickableImage src={apoloYDafne}        alt={images[0].alt}  height={340} description={images[0].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.3} x="52%" y="2%">  <ClickableImage src={amsterdamEnInvierno} alt={images[1].alt}  width={300}  description={images[1].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.6} x="28%" y="7%">  <ClickableImage src={cabezaHombreLlorando} alt={images[2].alt} height={320} description={images[2].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.1} x="70%" y="10%"> <ClickableImage src={aLaHuelga}           alt={images[3].alt}  width={300}  description={images[3].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.9} x="12%" y="15%"> <ClickableImage src={albertoGiacometti}   alt={images[4].alt}  height={360} description={images[4].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.4} x="60%" y="18%"> <ClickableImage src={atlandeDeTula}       alt={images[5].alt}  height={380} description={images[5].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.7} x="36%" y="22%"> <ClickableImage src={beyondFlesh}         alt={images[6].alt}  width={280}  description={images[6].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.2} x="6%"  y="26%"> <ClickableImage src={cabezaSerpiente}     alt={images[7].alt}  height={300} description={images[7].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.5} x="68%" y="27%"> <ClickableImage src={cabezaOlmeca}        alt={images[8].alt}  height={300} description={images[8].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={1.0} x="40%" y="31%"> <ClickableImage src={chacMool}            alt={images[9].alt}  height={300} description={images[9].description}  className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.3} x="10%" y="35%"> <ClickableImage src={craneoCabra}         alt={images[10].alt} height={300} description={images[10].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.8} x="55%" y="37%"> <ClickableImage src={crucifixion}         alt={images[11].alt} height={340} description={images[11].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.1} x="26%" y="41%"> <ClickableImage src={desnudoHombre}       alt={images[12].alt} height={360} description={images[12].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.6} x="72%" y="43%"> <ClickableImage src={eclipseGuadalajara}  alt={images[13].alt} width={320}  description={images[13].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.9} x="4%"  y="47%"> <ClickableImage src={elJuicioFinal}       alt={images[14].alt} width={300}  description={images[14].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.4} x="46%" y="49%"> <ClickableImage src={enLaPuerta}          alt={images[15].alt} width={320}  description={images[15].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.7} x="22%" y="53%"> <ClickableImage src={espaldas}            alt={images[16].alt} height={300} description={images[16].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.2} x="65%" y="55%"> <ClickableImage src={eugeneBoudin}        alt={images[17].alt} width={300}  description={images[17].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.5} x="8%"  y="59%"> <ClickableImage src={floresBotero}        alt={images[18].alt} height={300} description={images[18].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={1.0} x="50%" y="61%"> <ClickableImage src={gatoBarroco}         alt={images[19].alt} height={300} description={images[19].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.3} x="30%" y="65%"> <ClickableImage src={gatoBotero}          alt={images[20].alt} width={280}  description={images[20].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.8} x="70%" y="67%"> <ClickableImage src={heraclito}           alt={images[21].alt} height={340} description={images[21].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.1} x="14%" y="71%"> <ClickableImage src={homenajeMagritte}    alt={images[22].alt} width={300}  description={images[22].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.6} x="54%" y="73%"> <ClickableImage src={indigenaContraElMito} alt={images[23].alt} width={300} description={images[23].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.9} x="3%"  y="77%"> <ClickableImage src={jesusSinHogar}       alt={images[24].alt} height={320} description={images[24].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.4} x="38%" y="79%"> <ClickableImage src={laEternaPrimavera}   alt={images[25].alt} height={340} description={images[25].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.7} x="68%" y="81%"> <ClickableImage src={laminasDeOro}        alt={images[26].alt} width={300}  description={images[26].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.2} x="20%" y="84%"> <ClickableImage src={losDerechos}         alt={images[27].alt} height={320} description={images[27].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.5} x="58%" y="85%"> <ClickableImage src={miHijo}              alt={images[28].alt} height={340} description={images[28].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={1.0} x="6%"  y="88%"> <ClickableImage src={modernTribalArt}     alt={images[29].alt} width={300}  description={images[29].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.3} x="44%" y="89%"> <ClickableImage src={modoDeVolar}         alt={images[30].alt} width={300}  description={images[30].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.8} x="72%" y="91%"> <ClickableImage src={museoBotero}         alt={images[31].alt} width={320}  description={images[31].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.1} x="18%" y="93%"> <ClickableImage src={museoDelOro1}        alt={images[32].alt} width={320}  description={images[32].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.6} x="52%" y="94%"> <ClickableImage src={museoDelOro2}        alt={images[33].alt} height={300} description={images[33].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.9} x="4%"  y="96%"> <ClickableImage src={museoDelOro3}        alt={images[34].alt} height={320} description={images[34].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.4} x="36%" y="97%"> <ClickableImage src={museoDelOro4}        alt={images[35].alt} height={300} description={images[35].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.7} x="66%" y="97%"> <ClickableImage src={museoDelOro5}        alt={images[36].alt} height={300} description={images[36].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.2} x="14%" y="3%">  <ClickableImage src={neilWelliver}        alt={images[37].alt} width={300}  description={images[37].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.5} x="42%" y="14%"> <ClickableImage src={nuestraImagenActual} alt={images[38].alt} width={300}  description={images[38].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={1.0} x="74%" y="5%">  <ClickableImage src={retratoDeEfeGomez}  alt={images[39].alt} height={320} description={images[39].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.3} x="20%" y="33%"> <ClickableImage src={retratoDeJoven}     alt={images[40].alt} height={320} description={images[40].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.8} x="48%" y="56%"> <ClickableImage src={reyCarlosII}        alt={images[41].alt} height={360} description={images[41].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.1} x="76%" y="74%"> <ClickableImage src={tbhIdk}             alt={images[42].alt} width={280}  description={images[42].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.6} x="32%" y="87%"> <ClickableImage src={urabaFigura}        alt={images[43].alt} height={300} description={images[43].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
      <ParallaxItem z={0.9} x="62%" y="90%"> <ClickableImage src={urbanismo}          alt={images[44].alt} width={300}  description={images[44].description} className="rounded-xl shadow-2xl cursor-pointer" /></ParallaxItem>
    </ParallaxScene>
  )
}
