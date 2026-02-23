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

// portrait: height=280, landscape: width=320
const images = [
  { src: apoloYDafne, x: "40%", y: "13%", z: 0.8, height: 280, description: "Apolo y Dafne — Gian Lorenzo Bernini, 1622–25. One of Baroque sculpture's most dramatic moments: the instant Daphne transforms into a laurel tree to escape Apollo. Galleria Borghese, Rome." },
  { src: neilWelliver, x: "10%", y: "5%", z: 0.4, height: 280, description: "A work by Neil Welliver, the American realist painter known for his large-scale Maine landscapes. His canvases capture forest light and water with almost meditative precision." },
  { src: nuestraImagenActual, x: "42%", y: "3.5%", z: 0.9, height: 280, description: "Nuestra imagen actual — David Alfaro Siqueiros. One of the Mexican muralist movement's most confrontational painters, Siqueiros used art as a weapon of political awakening. This work asks us to look at ourselves honestly." },
  { src: retratoDeEfeGomez, x: "74%", y: "4%", z: 1.0, height: 280, description: "Retrato de Efe Gómez — Pedro Nel Gómez. A portrait of the Colombian writer and journalist Francisco Gómez Escobar by one of the great Colombian muralists, capturing intellectual intensity." },
  { src: amsterdamEnInvierno, x: "60%", y: "9%", z: 0.3, height: 280, description: "Amsterdam en Invierno — Claude Monet. A rare urban subject for Monet, capturing the canals and rooftops of Amsterdam under winter light with his signature loose brushwork." },
  { src: cabezaHombreLlorando, x: "28%", y: "7%", z: 0.6, height: 280, description: "Cabeza de hombre llorando — Oswaldo Guayasamín. Part of his series La Edad de la Ira, this work channels the pain of Latin American suffering through distorted, expressionist features." },
  { src: aLaHuelga, x: "70%", y: "16%", z: 0.1, height: 280, description: "A la huelga 100, a la huelga 1000 — Nirma Zárate. Colombian political graphic art from the 1970s, made as a call to labor resistance. Bold, confrontational, and unapologetically propagandistic." },
  { src: albertoGiacometti, x: "12%", y: "15%", z: 0.9, height: 280, description: "Alberto Giacometti, 1961. His elongated bronze figures capture existential isolation — thin, fragile forms that seem to be both reaching outward and dissolving into space." },
  { src: atlandeDeTula, x: "60%", y: "18%", z: 0.4, height: 280, description: "Atlante de Tula — Toltec, c. 900–1150 CE. These massive warrior columns once supported the roof of the Temple of Quetzalcóatl in Tula, Hidalgo. Among the most iconic pre-Columbian sculptures in Mexico." },
  { src: beyondFlesh, x: "36%", y: "22%", z: 0.7, height: 280, description: "Beyond Flesh and Humanity — Rafael Pascuale. A contemporary exploration of the boundary between the human body and something beyond it — visceral and unsettling in equal measure." },
  { src: cabezaSerpiente, x: "6%", y: "26%", z: 0.2, height: 280, description: "Cabeza de serpiente zapoteca. A ceremonial serpent head from the Zapotec civilization of Oaxaca, Mexico. Serpents held deep cosmological significance as links between earth, water, and the underworld." },
  { src: cabezaOlmeca, x: "68%", y: "27%", z: 0.5, height: 280, description: "Cabeza olmeca. The colossal heads of the Olmec civilization (1500–400 BCE) are among the most mysterious monuments of ancient America. Each one is believed to portray a specific ruler, carved from single basalt boulders." },
  { src: chacMool, x: "40%", y: "31%", z: 1.0, width: 320, description: "Chac Mool. A reclining figure found across Mesoamerican cultures from the Toltec to the Maya and Aztec. The bowl on the abdomen received offerings — possibly hearts. The name was coined by a 19th-century explorer." },
  { src: retratoDeJoven, x: "20%", y: "30%", z: 0.3, height: 280, description: "Retrato de joven — Ricardo Acevedo Bernal, late 19th century. A delicate portrait by one of Colombia's pioneering academic painters, who studied in Paris and brought European technique back to Bogotá." },
  { src: craneoCabra, x: "10%", y: "35%", z: 0.8, width: 320, description: "Cráneo de cabra sobre mesa — Pablo Picasso. A still life from Picasso's late period, where death and domesticity coexist. The skull becomes a meditation on time and mortality disguised as an everyday object." },
  { src: crucifixion, x: "55%", y: "37%", z: 0.8, height: 280, description: "Crucifixión — Fernando Botero. Botero's signature volumetric style applied to one of Western art's most sacred subjects. The swollen, monumental figures give the scene a strange mix of weight and tenderness." },
  { src: desnudoHombre, x: "26%", y: "41%", z: 0.1, height: 280, description: "Desnudo de hombre de cuerpo entero — Francisco Antonio Cano. A rare academic nude from one of Colombia's most important 19th-century painters, showing his mastery of classical technique." },
  { src: eclipseGuadalajara, x: "72%", y: "43%", z: 0.6, height: 280, description: "Eclipse solar total — Guadalajara, 2024. A rare total solar eclipse visible from parts of Mexico. One of those moments where the sky makes you feel genuinely small." },
  { src: elJuicioFinal, x: "4%", y: "47%", z: 0.9, height: 280, description: "El Juicio Final — Juan Pérez Mexía. A monumental colonial-era painting depicting the Last Judgment, blending European Baroque tradition with the visual vocabulary of New Spain." },
  { src: enLaPuerta, x: "36%", y: "50%", z: 0.4, height: 280, description: "En la puerta del Serrallo — Mariano Fortuny, 1869. A masterwork of Orientalist painting, capturing the entrance to an Ottoman palace with extraordinary detail and light. One of Fortuny's most celebrated works." },
  { src: espaldas, x: "22%", y: "53%", z: 0.7, height: 280, description: "Espaldas — Fernando Botero. Characteristic Botero backs — monumental, soft, powerful. There is something both intimate and monumental about viewing the human body from behind." },
  { src: eugeneBoudin, x: "65%", y: "55%", z: 0.2, width: 320, description: "A work by Eugène Boudin, the French painter who mentored the young Monet. Boudin was a pioneer of plein air painting, capturing skies and beaches with a lightness that foreshadowed Impressionism." },
  { src: reyCarlosII, x: "52%", y: "56%", z: 0.8, height: 280, description: "Rey Carlos II — Juan Carreño de Miranda, c. 1685. A hauntingly honest portrait of the last Habsburg king of Spain. Charles II suffered from severe genetic disorders from centuries of inbreeding — Carreño doesn't hide it." },
  { src: floresBotero, x: "8%", y: "59%", z: 0.5, height: 280, description: "Flores — Fernando Botero. Even flowers get the Botero treatment — oversized, lush, abundant. His still lifes carry the same quiet joy as his figures." },
  { src: gatoBarroco, x: "40%", y: "61%", z: 0.5, height: 280, description: "A Baroque cat — anonymous. Cats appeared in European painting as symbols of cunning, independence, and sometimes sin. This one looks entirely unbothered." },
  { src: gatoBotero, x: "30%", y: "65%", z: 0.3, height: 280, description: "Gato — Fernando Botero. A monumental, rotund cat rendered in Botero's unmistakable style. It manages to be both absurd and dignified." },
  { src: heraclito, x: "70%", y: "67%", z: 0.8, height: 280, description: "Heráclito — José de Ribera, c. 1630. Known as Lo Spagnoletto, Ribera depicts the weeping philosopher of ancient Greece. Heraclitus believed all is flux — everything changes, nothing stays. Ribera makes you feel it." },
  { src: homenajeMagritte, x: "14%", y: "71%", z: 0.1, height: 280, description: "Homenaje a Magritte — Gelsen Gas. A tribute to the Belgian surrealist René Magritte, whose work questioned the relationship between images and reality. Gelsen Gas was a key figure in Mexican surrealism." },
  { src: indigenaContraElMito, x: "58.5%", y: "72%", z: 0.4, width: 320, description: "Indígena contra el mito — Héctor Ayala. A powerful work confronting the romanticized and mythologized image of indigenous peoples in Latin American art and culture." },
  { src: jesusSinHogar, x: "3%", y: "77%", z: 0.9, height: 280, description: "Jesús sin hogar — Tim Schmalz, 2013. A bronze sculpture of a homeless figure sleeping on a bench, feet bearing nail wounds. Installed outside churches worldwide, it has sparked both controversy and reflection." },
  { src: laEternaPrimavera, x: "38%", y: "79%", z: 0.4, height: 280, description: "La Eterna Primavera — Auguste Rodin, 1881. Two figures locked in an embrace, rising from rough stone. For Rodin, the unfinished surface was intentional — the figures emerge from matter as if from unconsciousness." },
  { src: laminasDeOro, x: "74%", y: "81%", z: 0.7, height: 280, description: "Láminas de oro sobre caracol marino — Valle del Cauca, Colombia. Pre-Columbian goldwork from the Museo del Oro. Gold for these cultures wasn't wealth — it was light, divinity, and transformation." },
  { src: losDerechos, x: "20%", y: "80%", z: 0.2, height: 280, description: "Los derechos de la mujer — Débora Arango, c. 1944. One of Colombia's most radical painters, Arango used her work to challenge gender norms and political power at a time when such voices were actively silenced." },
  { src: miHijo, x: "58%", y: "85%", z: 0.5, height: 280, description: "Mi hijo Rafael — Alfredo Valenzuela Puelma, 1890. An intimate portrait by the Chilean painter of his own son. The tenderness in the gaze makes it transcend its time." },
  { src: modernTribalArt, x: "6%", y: "88%", z: 1.0, height: 280, description: "Modern Tribal Art. A contemporary work engaging with tribal aesthetics and their reinterpretation in a modern context — raising questions about cultural appropriation, preservation, and identity." },
  { src: modoDeVolar, x: "44%", y: "89%", z: 0.3, height: 280, description: "Modo de volar — Francisco de Goya, from Los Disparates (Follies), c. 1815–23. A darkly satirical print from Goya's late period, depicting figures in grotesque flight. Part of a series that resists any single interpretation." },
  { src: museoBotero, x: "36%", y: "46%", z: 1, width: 320, description: "Interior of the Museo Botero, Bogotá. Fernando Botero donated over 200 works to the people of Colombia, housed in a colonial mansion in La Candelaria. One of Latin America's most visited museums." },
  { src: museoDelOro1, x: "18%", y: "89%", z: 0.1, height: 280, description: "Colección general — Museo del Oro, Bogotá. The world's largest collection of pre-Columbian goldwork. For the Muisca and other cultures, gold represented the sun, fertility, and the sacred — never mere currency." },
  { src: museoDelOro2, x: "79%", y: "90%", z: 0.6, height: 280, description: "Pectoral ceremonial — Museo del Oro. Worn during ritual ceremonies, these chest ornaments transformed the wearer into a divine intermediary. The craftsmanship rivals anything produced in the ancient world." },
  { src: museoDelOro3, x: "30%", y: "75%", z: 0.9, height: 280, description: "Poporo femenino — Museo del Oro. The poporo is a lime container used by the Muisca for chewing coca. This rare feminine form challenges assumptions about gender in pre-Columbian society." },
  { src: museoDelOro4, x: "36%", y: "97%", z: 0.4, height: 280, description: "Colgante Tairona — Museo del Oro. A pendant from the Tairona culture of the Sierra Nevada de Santa Marta. Tairona goldwork is renowned for its zoomorphic forms and extraordinary technical complexity." },
  { src: museoDelOro5, x: "48%", y: "65%", z: 0.1, height: 280, description: "Ocarina en forma de oso — Tairona, Museo del Oro. A functional musical instrument and sacred object in one. The bear held spiritual significance as a powerful animal spirit in Tairona cosmology." },
  { src: tbhIdk, x: "56.5%", y: "78%", z: 0.6, height: 280, description: "Honestly? I cant remember where this was." },
  { src: urabaFigura, x: "32%", y: "87%", z: 0.6, height: 280, description: "Figura de Urabá — pre-Columbian, northwestern Colombia. A ceremonial figure from the Urabá region, where distinct indigenous cultures developed sophisticated ceramic and goldwork traditions." },
  { src: urbanismo, x: "13%", y: "67%", z: 0.9, height: 280, description: "Urbanismo — David Alfaro Siqueiros. Siqueiros was fascinated by the modern city as both a site of progress and oppression. This work turns urban structure into something monumental and charged." },
]

export default function MuseumsBlock() {
  return (
    <ParallaxScene height={4000} className="bg-neutral-950" overlay={
      <div className="flex flex-col items-center gap-4">
        <p className="label text-white/30">004 / Museums</p>
        <h1 className="text-white text-6xl font-bold">What I've seen.</h1>
      </div>
    }>
      {images.map(({ src, description, x, y, z, width, height }, i) => (
        <ParallaxItem key={i} z={z} x={x} y={y}>
          <ClickableImage
            src={src}
            alt={description}
            description={description}
            width={width}
            height={height}
            className="rounded-xl shadow-2xl cursor-pointer"
          />
        </ParallaxItem>
      ))}
    </ParallaxScene>
  )
}
