import { Application } from 'express';

export class AppModule {
    constructor(private app: Application) {}

    init() {
        // Load modules
        // new ExampleModule(this.app).init();
    }
}
