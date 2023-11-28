import { BasePage } from "../base/base_page.po";
import { Locator } from "@playwright/test";

export class HomePage extends BasePage {

    private readonly guideDialog = ".tour-container";
    private readonly closeGuide = ".tour-container span.fa-close";
    private readonly drawingPanel = "#draw-drawing-panel.active";
    private readonly template = "[name='Desktop Template1']";
    private readonly section = "#section1:first-child";
    private readonly chart = "#elementImagesbox[src*='Chart']";

    async getGuideDialog(): Promise<Locator> {
        return this.getElement(this.guideDialog);
    }

    async closeTourGuide(): Promise<void> {
        await this.getElement(this.closeGuide).click();
    }

    async selectDrawingPanel(): Promise<void> {
        await this.getElement(this.drawingPanel).click();
    }

    async selectTemplate(): Promise<void> {
        await this.getElement(this.template).click();
    }

    async dragChartToBoard(): Promise<void> {
        await this.page.dragAndDrop(this.chart, this.section)
    }
}
