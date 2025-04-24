"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    // 注册三个独立命令
    registerAlignmentCommand(context, 'left');
    registerAlignmentCommand(context, 'center');
    registerAlignmentCommand(context, 'right');
}
function registerAlignmentCommand(context, align) {
    const command = vscode.commands.registerCommand(`parentheses-center.${align}`, () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const document = editor.document;
        const selection = editor.selection;
        const text = selection.isEmpty
            ? document.lineAt(selection.active.line).text
            : document.getText(selection);
        editor.edit(editBuilder => {
            const range = selection.isEmpty
                ? document.lineAt(selection.active.line).range
                : selection;
            editBuilder.replace(range, alignParenthesesContent(text, align));
        });
    });
    context.subscriptions.push(command);
}
function alignParenthesesContent(text, align) {
    return text.replace(/\(([^)]+)\)/g, (match, content) => {
        const trimmed = content.trim();
        if (!trimmed)
            return match;
        const availableSpace = content.length;
        const contentLength = trimmed.length;
        let alignedContent;
        switch (align) {
            case 'left':
                alignedContent = trimmed + ' '.repeat(availableSpace - contentLength);
                break;
            case 'right':
                alignedContent = ' '.repeat(availableSpace - contentLength) + trimmed;
                break;
            case 'center':
            default:
                const left = Math.floor((availableSpace - contentLength) / 2);
                alignedContent = ' '.repeat(left) + trimmed + ' '.repeat(availableSpace - contentLength - left);
        }
        return `(${alignedContent})`;
    });
}
//# sourceMappingURL=extension.js.map