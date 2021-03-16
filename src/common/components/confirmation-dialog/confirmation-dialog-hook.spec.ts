import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('./confiramtion-dialog-hook', () => {
    it('should return an object with a property called isOpen equals false', () => {
      // Arrange
      // Act
      const { result } = renderHook(() => useConfirmationDialog());
      // Assert
      expect(result.current.isOpen).toBeFalsy();
    });

    it('should return an object with a property called itemToDelete than return and object with their two proporties equals to string empty', () => {
        // Arrange
        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        // Assert
        expect(result.current.itemToDelete.id).toEqual('');
        expect(result.current.itemToDelete.name).toEqual('');
      });

      it('should return an object with onAccept, onClose and onOpenDialog called them', () => {
        // Arrange
        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        // Assert
        expect(result.current.onAccept).toEqual(expect.any(Function));
        expect(result.current.onClose).toEqual(expect.any(Function));
        expect(result.current.onOpenDialog).toEqual(expect.any(Function));
      });

      it('should update on OpenDialog when recibed and not empty object, isOpen must be true and itemTo Delete equals to LookupObject', () => {
        // Arrange
        const LookupObject: Lookup = {
            id: 'Test Id',
            name: 'Test name'
        }
        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(LookupObject);
        })
        // Assert
        expect(result.current.isOpen).toBeTruthy();
        expect(result.current.itemToDelete).toEqual(LookupObject);
      });

      it('should update isOpen to false when onClose and itemToDelete must be an object with its properties equals empties', () => {
        // Arrange
    
        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        act(() => {
            result.current.onAccept();
            result.current.onClose()
        })
        // Assert
        expect(result.current.itemToDelete.id).toEqual('');
        expect(result.current.itemToDelete.name).toEqual('');
        expect(result.current.isOpen).toBeFalsy();
      });

  });
