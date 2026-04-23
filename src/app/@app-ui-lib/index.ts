import { ButtonComponent } from "./button/button.component";
import { ChartsComponent } from "./charts/charts.component";
import { IconComponent } from "./icon/icon.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { InputComponent } from "./input/input.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { RadioComponent } from "./radio/radio.component";
import { SelectComponent } from "./select/select.component";


// Group them for easy legacy importing
export const APP_UI_COMPONENTS = [
  ButtonComponent,
  ChartsComponent,
  IconComponent,
  DataTableComponent,
  InputComponent,
  FileUploadComponent,
  RadioComponent,
  SelectComponent
] as const;

export * from "./button/button.component";
export * from "./charts/charts.component";
export * from "./icon/icon.component";
export * from "./data-table/data-table.component";
export * from "./input/input.component";
export * from "./file-upload/file-upload.component";
export * from "./radio/radio.component";
export * from "./select/select.component";