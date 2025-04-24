import * as vscode from 'vscode';

type Alignment = 'left' | 'center' | 'right';

export function activate(context: vscode.ExtensionContext) {
  // 注册三个独立命令
  registerAlignmentCommand(context, 'left');
  registerAlignmentCommand(context, 'center');
  registerAlignmentCommand(context, 'right');
}

function registerAlignmentCommand(context: vscode.ExtensionContext, align: Alignment) {
  const command = vscode.commands.registerCommand(`parentheses-center.${align}`, () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

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

function alignParenthesesContent(text: string, align: Alignment): string {
  return text.replace(/\(([^)]+)\)/g, (match, content) => {
    const trimmed = content.trim();
    if (!trimmed) return match;

    const availableSpace = content.length;
    const contentLength = trimmed.length;

    let alignedContent: string;
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
