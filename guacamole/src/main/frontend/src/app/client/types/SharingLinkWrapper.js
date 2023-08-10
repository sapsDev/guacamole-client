/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * A service for defining the SharingLinkWrapper class.
 */
angular.module('client').factory('SharingLinkWrapper', [
    function defineSharingLinkWrapper() {

    /**
     * Wrapper for Sharing links at popup window 
     * which adds checked option.
     * 
     * @constructor
     * @param {SharingLinkWrapper|Object} template
     *      The object whose properties should be copied
     *      within the new SharingLinkWrapper
     */
    var SharingLinkWrapper = function SharingLinkWrapper(template) {

        /**
         * The unique identifier associated with this sharing profile.
         *
         * @type String
         */
        this.identifier = template.identifier;
        
        /**
         * The display name of this sharing link.
         * 
         * @type String
         */
        this.name = template.name;

        /**
         * A flag indicating that the sharing link has been selected.
         * 
         * @type Boolean
         */
        this.checked = template.checked || false;
        
    };
    
    return SharingLinkWrapper;
    
}]);