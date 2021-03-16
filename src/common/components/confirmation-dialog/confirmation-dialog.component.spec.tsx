import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('confirmation-dialog text', () => {
  it('should display a Dialog with title and labels it feeds a title and 2 labels in the buttons', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: { closeButton: 'close', acceptButton: 'accept' },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByText(props.title);
    const labelCloseButton = screen.getByText(props.labels.closeButton);
    const labelOpenButton = screen.getByText(props.labels.acceptButton);

    // Assert 
    expect(titleElement).toBeInTheDocument();
    expect(labelCloseButton).toBeInTheDocument();
    expect(labelOpenButton).toBeInTheDocument();
  });

  it('Should display the buttons when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const buttonElement = screen.getAllByRole('button');

    // Assert
    expect(buttonElement[0]).toBeEnabled();
    expect(buttonElement[1]).toBeEnabled();
    expect(buttonElement).toHaveLength(2);

  });

  it('Should not display the buttons when isOpen is false they must be unefined', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const buttonElement = screen.queryAllByRole('button');

    // Assert
    expect(buttonElement[0]).toBeUndefined();
    expect(buttonElement[1]).toBeUndefined();
    expect(buttonElement).toHaveLength(0);

  });

  it('should call onClick property when it clicks on "Aceptar" button and clicks in "Cancelar Button"', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: { closeButton: 'close', acceptButton: 'accept' },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonCloseElement = screen.getByRole('button', {name: 'close'});
    const buttonOpenElement = screen.getByRole('button', {name: 'accept'});
    userEvent.click(buttonCloseElement);
    userEvent.click(buttonOpenElement);

    // Assert 
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('Should render modal when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('Should not render modal when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const dialogElement = screen.queryByRole('dialog');

    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });
});
