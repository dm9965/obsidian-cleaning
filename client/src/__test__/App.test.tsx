// src/__ tests __/App.test.tsx

import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import App from "../App.tsx";

test('Sanity Check', () => {
    expect(true).toBe(true);
});

test("Renders the main page", () => {
    render(<App/>);
    expect(true).toBeTruthy();
});