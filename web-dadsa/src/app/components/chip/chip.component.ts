import {Component, NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import { MaterializeModule  } from 'angular2-materialize';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  private dateOptions = [{
    labelMonthNext: 'Proximo mes',
    labelMonthPrev: 'Mes anterior',
    labelMonthSelect: 'Seleccione mes',
    labelYearSelect: 'Seleccione año',
    monthsFull: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicciembre'],
    monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dec' ],
    weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    weekdaysShort: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
    weekdaysLetter: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ],
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Cerrar'
  }]

}
