// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * javascript for a searchable select type element
 *
 * @package   formlib
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

M.form_searchableselector = {};

M.form_searchableselector.init = function(Y, options) {
    var id = options.selectinputid;
    var selector = Y.one('#' + id);

    var div = Y.Node.create('<div id="searchui"></div>');
    var input = Y.Node.create('<input type="text" id="' + id + '_search" />');
    var label = Y.Node.create('<label for="' + id + '_search" > ' + options.searchstr + ' </label>');
    
    // Keep a copy of all the nodes
    var allnodes = selector.all('option');
    
    // Handle keyup event
    input.on('keyup', function() {
        var searchtext = input.get('value').toLowerCase();
        var optionodes = selector.all('option');
        
        // Remove all nodes
        optionodes.each(function(node) {
            selector.removeChild(node);
        });
        
        // Add nodes that match...
        allnodes.each(function(node) {
            if(node.get('text').toLowerCase().indexOf(searchtext) >= 0) {
                selector.appendChild(node);
            }
        });
       
    });
    
    // Create the UI element
    div.appendChild(label);
    div.appendChild(input);
    selector.ancestor().prepend(div);
}

