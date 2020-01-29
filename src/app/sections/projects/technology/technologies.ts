export class Technology {
  constructor(public name: string, public image: string) {}
}

export class Technologies {

  public static Unity: Technology = new Technology('Unity', 'assets/images/technologies/unity.png');
  public static CSharp: Technology = new Technology('C#', 'assets/images/technologies/c_sharp.png');

  private constructor() {}

}
