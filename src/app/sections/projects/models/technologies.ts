export class Technology {
  constructor(public name: string, public image: string) {}
}

export class Technologies {

  public static Unity: Technology = new Technology('Unity', 'assets/images/technologies/unity.png');
  public static CSharp: Technology = new Technology('C#', 'assets/images/technologies/c_sharp.png');
  public static Facebook: Technology = new Technology('Facebook API', 'assets/images/technologies/facebook.png');
  public static JavaScript: Technology = new Technology('JavaScript', 'assets/images/technologies/js.png');
  public static HTML: Technology = new Technology('HTML5', 'assets/images/technologies/html.png');
  public static WebGL: Technology = new Technology('WebGL', 'assets/images/technologies/webgl.svg');
}
