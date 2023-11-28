import { IPage } from "./page.in";
import { Page } from "@playwright/test";

export class BasePage implements IPage {

    protected page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    async waitForReadiness(): Promise<void> {
        return await this.page.waitForLoadState('load');
    }

    getElement (selector:string) {
        return this.page.locator(selector);
    }
}

