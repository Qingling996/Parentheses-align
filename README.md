
## **Parentheses Align**  
![Version](https://img.shields.io/badge/version-1.0.2-blue)  
![License](https://img.shields.io/badge/license-MIT-green)  

**Parentheses Align** 是一个 **VS Code 插件**，用于将括号内的内容快速对齐为 **左对齐**、**居中对齐** 或 **右对齐**，同时保持括号的位置不变。支持中英文混合排版，是代码格式化或文档排版的利器！

---

## **功能特性**
- **三种对齐方式**：
  - **左对齐**  ：`(content    )`
  - **居中对齐**：`(  content  )`
  - **右对齐**  ：`(    content)`
- **智能空格处理**：支持中英文混合排版，自动计算对齐位置。
- **快捷键支持**：快速对齐，提升效率。
- **用户配置**：可设置默认对齐方式。

---

## **安装**
1. 打开 VS Code。
2. 进入 **Extensions** 面板（快捷键：`Ctrl+Shift+X`）。
3. 搜索 **Parentheses Center**。
4. 点击 **Install** 安装插件。

---

## **使用方式**
### **1. 命令面板**
1. 打开命令面板（快捷键：`Ctrl+Shift+P`）。
2. 输入以下命令之一：
   - `Parentheses Align: Left`
   - `Parentheses Align: Center`
   - `Parentheses Align: Right`
3. 执行命令后，当前选中文本或光标所在行的括号内容将自动对齐。

### **2. 快捷键**
| 功能       |  快捷键  |
|----------- |---------|
| 左对齐     | `Alt+L` |
| 居中对齐   | `Alt+C` |
| 右对齐     | `Alt+R` |

### **3. 默认对齐方式**
在 `settings.json` 中配置默认对齐方式：
```json
{
  "parenthesesAlign.defaultAlignment": "center" // 可选值：left, center, right
}
```

---

## **示例**
### **输入文本**
```text
(   content   )  ( text )  (  demo  )
```

### **执行命令后**
| 命令       | 输出                          |
|------------|-------------------------------|
| **Left**   | `(content   )  (text )  (demo  )` |
| **Center** | `( content )  ( text )  ( demo )` |
| **Right**  | `(   content)  ( text)  (  demo)` |

---

## **配置项**
| 配置项名称                     | 描述                          | 默认值  | 可选值          |
|--------------------------------|-------------------------------|---------|-----------------|
| `parenthesesAlign.defaultAlignment` | 默认对齐方式                  | `center` | `left`, `center`, `right` |

---

## **开发说明**
### **项目结构**
```
parentheses-align/
├── src/
│   ├── extension.ts          // 插件核心逻辑
│   └── utils.ts              // 工具函数（如getVisualLength）
├── package.json              // 插件配置
├── tsconfig.json             // TypeScript 配置
└── README.md                 // 用户文档
```
---

## **版本**
- *1.0.0*: 创建
- *1.0.1*: 更新icon.png
- *1.0.2*: 1-优化功能，修复跨行括号格式不正确的问题。 2-忽略每有用的依赖包，减少插件大小
---

## **贡献**
欢迎提交 Issue 或 Pull Request！  
- **Issue**：报告问题或提出新功能建议。
- **Pull Request**：贡献代码，改进插件功能。

---

## **作者**
- **Adolph**  
  - GitHub: [@Qinging996](https://github.com/Qingling996/Parentheses-align?tab=readme-ov-file)  
  - Email: adolph1354238998@gmail.com

---

## **致谢**
感谢以下开源项目的启发：
- [VS Code API](https://code.visualstudio.com/api)
- [TypeScript](https://www.typescriptlang.org/)
