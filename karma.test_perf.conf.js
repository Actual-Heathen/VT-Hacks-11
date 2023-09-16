/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: [],
        files: ['out/test_perf.js'],
        exclude: [],
        preprocessors: {},
        reporters: ['dots'],
        port: 19876,
        colors: true,
        browserNoActivityTimeout: 30000,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome', 'Firefox'],
        singleRun: true
    });
};
