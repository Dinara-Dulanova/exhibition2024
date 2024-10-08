import { Component } from '@angular/core';
import {AccordionItemComponent} from "../../components/ui/accordion-item/accordion-item.component";
// import itemsData from "../../../assets/api/serviceData.json"

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    AccordionItemComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  items = ['concept_design', 'class_drawings', 'workshop_design_documentation', '3d_modelling', 'nesting_documentation', 'operational_and_tests_trials_documentation',
    'designer_supervision', 'ship_reclassification', 'ship_upgrading_reequipment']
  // items = itemsData;
}
