/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
export default /* css */ `
slot[name=cover-photo]::slotted(*){height:var(--spectrum-card-coverphoto-height);box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-bottom-color:transparent;border-radius:calc(var(--spectrum-card-border-radius) - 1px) calc(var(--spectrum-card-border-radius) - 1px) 0 0;background-size:cover;background-position:50%;background-color:var(--spectrum-card-coverphoto-background-color);border-bottom:var(--spectrum-card-coverphoto-border-bottom-size) solid var(--spectrum-card-coverphoto-border-color)}#footer{padding-top:var(--spectrum-card-footer-padding-top);margin-right:var(--spectrum-card-body-padding-right);padding-bottom:var(--spectrum-card-body-padding-bottom);margin-left:var(--spectrum-card-body-padding-left);border-top:var(--spectrum-card-footer-border-top-size) solid;border-color:var(--spectrum-card-border-color)}
`;
