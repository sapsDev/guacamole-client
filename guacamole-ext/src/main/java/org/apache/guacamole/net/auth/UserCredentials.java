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
 
package org.apache.guacamole.net.auth;

import java.util.Map;

/**
 * Defines a full set of valid credentials, including field
 * definitions and corresponding expected values.
 */ 
public class UserCredentials{

   /**
    * Any parameters which should be provided when these credentials are
    * submitted. If no such information is available, this will be null.
    */
   private Field[] expected;
   
   /**
    * A map of all field values by field name. The fields having the names
    * used within this map should be defined within the @link{Field} array
    * stored under the @link{expected} property.
    */  
   private Map<String, String> values;
}