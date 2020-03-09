import 'bootstrap';
import Swal from 'sweetalert2';

import './index.scss';
import './styleAdmin.scss';
var $ = require('jquery');
var dt = require('datatables.net')(window, $);
var editor = require('datatables.net-editor')(window, $);
$('#example').DataTable();