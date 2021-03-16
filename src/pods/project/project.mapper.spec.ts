import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('mapper specs', () => {
  it('Should return empty Project when it feeds undefined', () => {
    // Arrange
    const employees: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it('Should return empty Project when it feeds null', () => {
    // Arrange
    const employees: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it('should return empty array when employees feeds undefined', () => {
    // Arrange
    const employees: apiModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: undefined,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    const employeesVm: viewModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(employeesVm);
  });
  it('should return empty array when employees feeds null', () => {
    // Arrange
    const employees: apiModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: null,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    const employeesVm: viewModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(employeesVm);
  });

  it('should return empty array when employees feeds empty array', () => {
    // Arrange
    const employees: apiModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: undefined,
    };

    const employeesVm: viewModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    expect(result).toEqual(employeesVm);
  });

  it('should return array one mapped item when it feed array with one item', () => {
    // Arrange
    const employees: apiModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: [
        { id: 'Id Imployed Test', isAssigned: false, employeeName: 'Manolo' },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees);

    // Assert
    const employeesVm: viewModel.Project = {
      id: 'Id Test',
      name: 'Name Test',
      isActive: false,
      employees: [
        {
          id: 'Id Imployed Test',
          isAssigned: false,
          employeeName: 'Manolo',
        },
      ],
    };
    expect(result).toEqual(employeesVm);
  });
  
});
