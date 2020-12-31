class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    // devicePixelRatio 속성은 HiDPI/Retina 디스플레이처럼 같은 객체를 그릴 때 더 많은 픽셀을 사용해 보다 선명한 이미지를 표현하는 화면과, 표준 디스플레이의 렌더링 차이에 대응할 때 유용합니다.
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }
  resize() {}
}

window.onload = () => {
  new App();
};
