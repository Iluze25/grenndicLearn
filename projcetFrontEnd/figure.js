const TumbnailVideo = 10;

for (let i = 0; i < TumbnailVideo; i++) {
  const FigureTumbnail = document.getElementById("figureTumbnail");

  //img
  const imgFigure = document.createElement("img");
  imgFigure.setAttribute("src", `image/tumbnail${i + 1}.jpg`);
  imgFigure.setAttribute("class", "Tumbnail");
  imgFigure.setAttribute("id", `Tumbnail${i}`);
  FigureTumbnail.appendChild(imgFigure);
}
