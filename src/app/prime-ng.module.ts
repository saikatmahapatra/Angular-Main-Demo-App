import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// PrimeNg modules need to imported (This prime-ng.module.ts need to be imported where we need primeNG features)
import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { DatePicker } from "primeng/datepicker";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { Select } from "primeng/select";
import { FileUploadModule } from "primeng/fileupload";
import { ToggleSwitch } from "primeng/toggleswitch";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from 'primeng/textarea';
import { KeyFilterModule } from "primeng/keyfilter";
import { ListboxModule } from "primeng/listbox";
import { Message, MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { Popover } from "primeng/popover";
import { PaginatorModule } from "primeng/paginator";
import { PasswordModule } from "primeng/password";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { SelectButtonModule } from "primeng/selectbutton";
import { SliderModule } from "primeng/slider";
import { SplitterModule } from "primeng/splitter";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { TooltipModule } from "primeng/tooltip";
import { TreeSelectModule } from "primeng/treeselect";
import { DividerModule } from 'primeng/divider';
import { StepsModule } from 'primeng/steps';
import { ChartModule } from 'primeng/chart';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputOtpModule } from 'primeng/inputotp';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Ripple } from "primeng/ripple";
import { EditorModule } from 'primeng/editor';
import { FluidModule } from "primeng/fluid";

// Add primeNG classess/interfaces here so that it can be used in both import, export
const data = [
  ButtonModule,
  Ripple,
  MessageModule,
  Message,
  ChipModule,
  CardModule,
  CheckboxModule,
  InputTextModule,
  KeyFilterModule,
  Popover,
  PaginatorModule,
  TableModule,
  MessageModule,
  PasswordModule,
  Select,
  RadioButtonModule,
  ProgressBarModule,
  BadgeModule,
  TextareaModule,
  DatePicker,
  SliderModule,
  RatingModule,
  ToggleSwitch,
  ListboxModule,
  AccordionModule,
  ToastModule,
  MultiSelectModule,
  TooltipModule,
  FileUploadModule,
  DialogModule,
  ContextMenuModule,
  SelectButtonModule,
  ConfirmPopupModule,
  AutoCompleteModule,
  SplitterModule,
  BreadcrumbModule,
  TreeSelectModule,
  DividerModule,
  StepsModule,
  ChartModule,
  ToggleSwitchModule,
  DatePickerModule,
  FloatLabelModule,
  InputNumberModule,
  InputMaskModule,
  InputOtpModule,
  InputGroupModule,
  InputGroupAddonModule,
  EditorModule, 
  FluidModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...data],
  exports: [...data],
})
export class PrimeNgModule {}
