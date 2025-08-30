declare module '/lib/live2d/Framework/src/cubismmodelsettingjson' {
       export class CubismModelSettingJson {
         static createFromUrl(url: string): Promise<CubismModelSettingJson>;
       }
     }

     declare module '/lib/live2d/Framework/src/live2dcubismframework' {
       export class CubismFramework {
         static startUp(): void;
         static initialize(): void;
         static dispose(): void;
       }
     }

     declare module '/lib/live2d/Framework/src/model/cubismmodel' {
       export class CubismModel {
         static create(settings: unknown): Promise<CubismModel>;
         scale: { set(x: number, y: number): void };
         position: { set(x: number, y: number): void };
         update(): void;
         release(): void;
       }
     }