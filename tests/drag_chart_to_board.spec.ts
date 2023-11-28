import { expect, test } from "@playwright/test";
import { HomePage } from "../pageObjects/home/home.po";
import { Timeout, Urls } from "../pageObjects/utils/enum";


test("Drag chart to board",async ({page}) => {

    const landingPage = new HomePage(page);

    await page.goto("/" + Urls.webstudioUrl, { timeout: Timeout.LOAD_TIMEOUT });
    await expect(page).toHaveURL(Urls.webstudioUrl);

    await landingPage.closeTourGuide();
    await expect(await landingPage.getGuideDialog()).not.toBeVisible();

    await landingPage.selectDrawingPanel();
    await landingPage.selectTemplate();
    await landingPage.dragChartToBoard();
})
