export class Technology {
  constructor(public name: string, public image: string) {}
}

export class Technologies {

  private static basePath = 'assets/images/technologies/';

  // GAME DEV
  public static Unity: Technology = new Technology('Unity', `${Technologies.basePath}unity.png`);
  public static UnrealEngine: Technology = new Technology('Unreal Engine', `${Technologies.basePath}unreal_engine.png`);
  public static WebGL: Technology = new Technology('WebGL', `${Technologies.basePath}webgl.svg`);
  public static Godot: Technology = new Technology('Godot', `${Technologies.basePath}godot.svg`);

  // BACKEND
  public static Spring: Technology = new Technology('Spring', `${Technologies.basePath}spring.svg`);
  public static PostgreSQL: Technology = new Technology('PostgreSQL', `${Technologies.basePath}postgresql.svg`);
  public static Mongo: Technology = new Technology('Mongo DB', `${Technologies.basePath}mongo.png`);
  public static Node: Technology = new Technology('Node', `${Technologies.basePath}node.png`);

  // FRONTEND
  public static HTML: Technology = new Technology('HTML5', `${Technologies.basePath}html.png`);
  public static Flutter: Technology = new Technology('Flutter', `${Technologies.basePath}flutter.png`);
  public static JavaScript: Technology = new Technology('JavaScript', `${Technologies.basePath}js.png`);

  // LANGUAGES
  public static CSharp: Technology = new Technology('C#', `${Technologies.basePath}c_sharp.png`);
  public static Cpp: Technology = new Technology('C++', `${Technologies.basePath}cpp.png`);
  public static Java: Technology = new Technology('Java', `${Technologies.basePath}java.png`);
  public static Kotlin: Technology = new Technology('Kotlin', `${Technologies.basePath}kotlin.png`);

  // OTHERS
  public static Facebook: Technology = new Technology('Facebook API', `${Technologies.basePath}facebook.png`);
  public static Android: Technology = new Technology('Android', `${Technologies.basePath}android.png`);
  public static Firebase: Technology = new Technology('Firebase', `${Technologies.basePath}firebase.svg`);
}
