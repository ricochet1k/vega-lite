import * as tslib_1 from "tslib";
export function extractTitleConfig(titleConfig) {
    var 
    // These are non-mark title config that need to be hardcoded
    anchor = titleConfig.anchor, offset = titleConfig.offset, orient = titleConfig.orient, 
    // color needs to be redirect to fill
    color = titleConfig.color, 
    // The rest are mark config.
    titleMarkConfig = tslib_1.__rest(titleConfig, ["anchor", "offset", "orient", "color"]);
    var mark = tslib_1.__assign({}, titleMarkConfig, color ? { fill: color } : {});
    var nonMark = tslib_1.__assign({}, anchor ? { anchor: anchor } : {}, offset ? { offset: offset } : {}, orient ? { orient: orient } : {});
    return { mark: mark, nonMark: nonMark };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQXdDQSxNQUFNLDZCQUE2QixXQUEwQjtJQU16RDtJQURBLDREQUE0RDtJQUM1RCwyQkFBTSxFQUFFLDJCQUFNLEVBQUUsMkJBQU07SUFDdEIscUNBQXFDO0lBQ3JDLHlCQUFLO0lBQ0wsNEJBQTRCO0lBQzVCLHNGQUFrQixDQUNKO0lBRWhCLElBQU0sSUFBSSx3QkFDTCxlQUFlLEVBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM5QixDQUFDO0lBRUYsSUFBTSxPQUFPLHdCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzFCLENBQUM7SUFFRixPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmNob3IsIFRpdGxlT3JpZW50LCBWZ01hcmtDb25maWcsIFZnVGl0bGVDb25maWd9IGZyb20gJy4vdmVnYS5zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlQmFzZSB7XG4gIC8qKlxuICAgKiBUaGUgb3JpZW50YXRpb24gb2YgdGhlIHRpdGxlIHJlbGF0aXZlIHRvIHRoZSBjaGFydC4gT25lIG9mIGBcInRvcFwiYCAodGhlIGRlZmF1bHQpLCBgXCJib3R0b21cImAsIGBcImxlZnRcImAsIG9yIGBcInJpZ2h0XCJgLlxuICAgKi9cbiAgb3JpZW50PzogVGl0bGVPcmllbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBhbmNob3IgcG9zaXRpb24gZm9yIHBsYWNpbmcgdGhlIHRpdGxlLiBPbmUgb2YgYFwic3RhcnRcImAsIGBcIm1pZGRsZVwiYCwgb3IgYFwiZW5kXCJgLiBGb3IgZXhhbXBsZSwgd2l0aCBhbiBvcmllbnRhdGlvbiBvZiB0b3AgdGhlc2UgYW5jaG9yIHBvc2l0aW9ucyBtYXAgdG8gYSBsZWZ0LSwgY2VudGVyLSwgb3IgcmlnaHQtYWxpZ25lZCB0aXRsZS5cbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIGBcIm1pZGRsZVwiYCBmb3IgW3NpbmdsZV0oc3BlYy5odG1sKSBhbmQgW2xheWVyZWRdKGxheWVyLmh0bWwpIHZpZXdzLlxuICAgKiBgXCJzdGFydFwiYCBmb3Igb3RoZXIgY29tcG9zaXRlIHZpZXdzLlxuICAgKlxuICAgKiBfX05vdGU6X18gW0ZvciBub3ddKGh0dHBzOi8vZ2l0aHViLmNvbS92ZWdhL3ZlZ2EtbGl0ZS9pc3N1ZXMvMjg3NSksIGBhbmNob3JgIGlzIG9ubHkgY3VzdG9taXphYmxlIG9ubHkgZm9yIFtzaW5nbGVdKHNwZWMuaHRtbCkgYW5kIFtsYXllcmVkXShsYXllci5odG1sKSB2aWV3cy4gIEZvciBvdGhlciBjb21wb3NpdGUgdmlld3MsIGBhbmNob3JgIGlzIGFsd2F5cyBgXCJzdGFydFwiYC5cbiAgICovXG4gIGFuY2hvcj86IEFuY2hvcjtcblxuICAvKipcbiAgICogVGhlIG9ydGhvZ29uYWwgb2Zmc2V0IGluIHBpeGVscyBieSB3aGljaCB0byBkaXNwbGFjZSB0aGUgdGl0bGUgZnJvbSBpdHMgcG9zaXRpb24gYWxvbmcgdGhlIGVkZ2Ugb2YgdGhlIGNoYXJ0LlxuICAgKi9cbiAgb2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIFttYXJrIHN0eWxlIHByb3BlcnR5XShjb25maWcuaHRtbCNzdHlsZSkgdG8gYXBwbHkgdG8gdGhlIHRpdGxlIHRleHQgbWFyay5cbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIGBcImdyb3VwLXRpdGxlXCJgLlxuICAgKi9cbiAgc3R5bGU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvLyBUT0RPOiBuYW1lLCBlbmNvZGUsIGludGVyYWN0aXZlLCB6aW5kZXhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZVBhcmFtcyBleHRlbmRzIFRpdGxlQmFzZSB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdGV4dC5cbiAgICovXG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUaXRsZUNvbmZpZyh0aXRsZUNvbmZpZzogVmdUaXRsZUNvbmZpZyk6IHtcbiAgbWFyazogVmdNYXJrQ29uZmlnLFxuICBub25NYXJrOiBUaXRsZUJhc2Vcbn0ge1xuICBjb25zdCB7XG4gICAgLy8gVGhlc2UgYXJlIG5vbi1tYXJrIHRpdGxlIGNvbmZpZyB0aGF0IG5lZWQgdG8gYmUgaGFyZGNvZGVkXG4gICAgYW5jaG9yLCBvZmZzZXQsIG9yaWVudCxcbiAgICAvLyBjb2xvciBuZWVkcyB0byBiZSByZWRpcmVjdCB0byBmaWxsXG4gICAgY29sb3IsXG4gICAgLy8gVGhlIHJlc3QgYXJlIG1hcmsgY29uZmlnLlxuICAgIC4uLnRpdGxlTWFya0NvbmZpZ1xuICB9ID0gdGl0bGVDb25maWc7XG5cbiAgY29uc3QgbWFyazogVmdNYXJrQ29uZmlnID0ge1xuICAgIC4uLnRpdGxlTWFya0NvbmZpZyxcbiAgICAuLi5jb2xvciA/IHtmaWxsOiBjb2xvcn0gOiB7fVxuICB9O1xuXG4gIGNvbnN0IG5vbk1hcms6IFRpdGxlQmFzZSA9IHtcbiAgICAuLi5hbmNob3IgPyB7YW5jaG9yfSA6IHt9LFxuICAgIC4uLm9mZnNldCA/IHtvZmZzZXR9IDoge30sXG4gICAgLi4ub3JpZW50ID8ge29yaWVudH0gOiB7fVxuICB9O1xuXG4gIHJldHVybiB7bWFyaywgbm9uTWFya307XG59XG4iXX0=