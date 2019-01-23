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
.track:before{background:var(--spectrum-slider-track-color)}#labelContainer{color:var(--spectrum-label-text-color)}#buffer:after,#buffer:before{background:var(--spectrum-slider-player-track-buffer-color)}#ramp{path{fill:var(--spectrum-slider-track-color)}}#handle{border-color:var(--spectrum-slider-handle-border-color);background:var(--spectrum-alias-background-color-default)}#handle:hover{border-color:var(--spectrum-slider-handle-border-color-hover)}#handle.is-focused{border-color:var(--spectrum-slider-handle-border-color-key-focus);background:var(--spectrum-slider-handle-background-color-key-focus)}#handle.is-dragged,#handle:active{border-color:var(--spectrum-slider-handle-border-color-down)}#handle.is-dragged{background:var(--spectrum-slider-handle-background-color-down)}#input{background:transparent}#tick:after{background-color:var(--spectrum-slider-tick-mark-color)}:host([is-disabled]) #labelContainer{color:var(--spectrum-label-text-color-disabled)}:host([is-disabled]) #handle{border-color:var(--spectrum-slider-handle-border-color-disabled);background:var(--spectrum-alias-background-color-default)}:host([is-disabled]) #handle:active,:host([is-disabled]) #handle:hover{border-color:var(--spectrum-slider-handle-border-color-disabled);background:var(--spectrum-slider-handle-background-color)}:host([is-disabled]) .track:before{background:var(--spectrum-slider-track-color-disabled)}:host([is-disabled]):host[type=filled]{.track:first-child:before{background:var(--spectrum-slider-fill-track-color-disabled)}}:host([is-disabled]) #buffer:before{background:var(--spectrum-slider-player-track-buffer-color-disabled)}:host([is-disabled]) #ramp{path{fill:var(--spectrum-slider-ramp-track-color-disabled)}}
`;
