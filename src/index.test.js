import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Board from './index';
import Header from './index';
import Instructions from './index';
import Credits from './index';

it("renders squares", () => {
    act(() => {
      render(<Board />, container);
    });
    expect(container.textContent).toBe("");
  
    act(() => {
      render(<Header />, container);
    });
    expect(container.textContent).toBe("Connect Four!");
  
    act(() => {
      render(<Instructions />, container);
    });
    expect(container.textContent).toBe("Red plays first, picking a square to change to their color");

    act(() => {
        render(<Credits />, container);
      });
      expect(container.textContent).toBe("Made by David Sanders for CSCI 310: JavaScript");
  });
  