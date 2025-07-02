Playwright:
-----------
Applications supported: 
	web browser apps,
	Mobile web apps, 
	API

Languages supported:
	JavaScript, TypeScript, Java, Python & .Net(C#)

Browsers supported:
	Chromium, WebKit(Safari) and Firefox(headed/headless)

Os supported:
	Windows, MacOs, Linux, Support CI Runs
	
Features of Playwright:
-----------------------
Free & open source,
Multi-browser, Mult-Languages,
Easy setup and configuration,
Functional, API, accessibilty testing,
Built-in reporters, custom reports,
CI, CD, Docker,
Parallel testing, 
Auto wait,
Built-in assertions,
Multi tab & multi windows,
Frames, shodow dom,
Test parameter,
Emulate mobile devices,
Fast.


Playwright installation:
------------------------
1) Node js
2) VS Code
3) Create project folder --> open it in VSCode
4) Install playwright using terminal
	npm init playwright@latest
	
structure of the project:
	package.json --> node project management file (adding dependencies).
	playwright.config.js --> playwright configuration.
	tests --> we can create all the playwright tests.
	
	npm playwright -v  --> return installed version of playwright.
	
5) Install playwright using vs code extension
		go to vscode extension -->search for playwright --> click on install
		go to vscode View then command palatte --> search for playwright 
		--> select test playwright option in the list
		--> select the check box JavaScript --> then click ok. 
		

Run the playwright test:
------------------------
npx playwright test:
	-->(execute or run all the tests in the tests folder in headless mode )

npx playwright test --headed:
	-->(execute or run all the tests in the tests folder in headed mode )
	
npx playwright test HomePageTest.spec.js:				
	-->(execute only the test wich is specified)
	
npx playwright test HomePageTest.sp --project=chromium:
	-->(execute only the test wich is specified in the browser specified)
	
npx playwright test HomePageTest.spec.js --project chromium --debug
	-->(execute only the test wich is specified in the browser specified in debug mode)
	
npx playwright show-report: 
	-->(show the report int the html page)
	

Locators:
locating elements in Playwright
	property/attributes
	CSS
	XPath

Locate single element:
	link/button:
		await page.locator('locator').click()
		await page.click('locator')
	inputbox:
		await page.locator('locator').fill('value')
		await page.locator('locator').type('value')
		
		await page.fill('locator', 'value')
		await page.type('locator', 'value')

Locate multiple elements:
	const elements = await page.$$('locator')
	
	
Built-in locators:
	page.getByRole() to locate by explicit and implicit accessibility attributes.
	page.getByText() to locate by text content.
	page.getByLabel() to locate a form control by associated label's text.
	page.getByPlaceholder() to locate an input by placeholder.
	page.getByAltText() to locate an element, usually image, by its text alternative.
	page.getByTitle() to locate an element by its title attribute.
	page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


Playwright codegen:

	To genenrate automatically the automation script, we have to type this command in the terminal.
	-->npx playwright codegen
	
	For more options:
	-->npx playwright codegen --help
	
	To generate & save automatically the script in a file:
	-->npx playwright codegen -o tests/mytestbyCodeGen.spec.js
	
	To generate the script in other languages:
	-->npx playwright codegen --target javascript
	
	To genenrate the script for a specific device:
	-->npx playwright codegen --device "iPhone 13"
	
	To generate script in this particular window pixel size configuration:
	-->npx playwright codegen --viewport-size "1280, 720"

Assertions:
	Playwright includes test assertions in the form of expect function.
	https://playwright.dev/docs/test-assertions

await expect(locator).toBeAttached()				-->Element is attached
await expect(locator).toBeChecked()	   				-->Checkbox is checked
await expect(locator).toBeDisabled()				-->Element is disabled
await expect(locator).toBeEditable()				-->Element is editable
await expect(locator).toBeEmpty()					-->Container is empty
await expect(locator).toBeEnabled()					-->Element is enabled
await expect(locator).toBeFocused()					-->Element is focused
await expect(locator).toBeHidden()					-->Element is not visible
await expect(locator).toBeInViewport()				-->Element intersects viewport
await expect(locator).toBeVisible()					-->Element is visible
await expect(locator).toContainText()				-->Element contains text
await expect(locator).toContainClass()				-->Element has specified CSS classes
await expect(locator).toHaveAccessibleDescription()	-->Element has a matching accessible description
await expect(locator).toHaveAccessibleName()		-->Element has a matching accessible name
await expect(locator).toHaveAttribute()				-->Element has a DOM attribute
await expect(locator).toHaveClass()					-->Element has specified CSS class property
await expect(locator).toHaveCount()					-->List has exact number of children
await expect(locator).toHaveCSS()					-->Element has CSS property
await expect(locator).toHaveId()					-->Element has an ID
await expect(locator).toHaveJSProperty()			-->Element has a JavaScript property
await expect(locator).toHaveRole()					-->Element has a specific ARIA role
await expect(locator).toHaveScreenshot()			-->Element has a screenshot
await expect(locator).toHaveText()					-->Element matches text
await expect(locator).toHaveValue()					-->Input has a value
await expect(locator).toHaveValues()				-->Select has options selected
await expect(locator).toMatchAriaSnapshot()			-->Element matches the Aria snapshot
await expect(page).toHaveScreenshot()				-->Page has a screenshot
await expect(page).toHaveTitle()					-->Page has a title
await expect(page).toHaveURL()						-->Page has a URL
await expect(response).toBeOK()						-->Response has an OK status
	
Playwright Hooks:

beforeEach: This hook is executed before each individual test.
afterEach: This hook is executed after each individual test.

beforeAll: This hook is executed once before any of the tests start runing.
afterAll: This hook is executed once after all the tests have been run.


Trace viewer:

Playwright Trace Viewer is a GUI tool that lets you explore recorded Playwright traces of your tests
meaning you can go back and forward through each action of your test and visually see what was 
happening during each action.

source: https://playwright.dev/docs/trace-viewer-intro


Tag tests:

Sometimes you want to tag your tests as @fast or @slow, and then filter by tag in the test 
report. Or you might want to only run tests that have a certain tag.

To tag a test, either provide an additional details object when declaring a test, or add @-token to
the test title. Note that tags must start with @ symbol.
 
You can now run tests that have a particular tag with --grep command line option.

	npx playwright test --grep @fast

Or if you want the opposite, you can skip the tests with a certain tag:

	npx playwright test --grep-invert @fast
 
 source: https://playwright.dev/docs/test-annotations#tag-tests



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	