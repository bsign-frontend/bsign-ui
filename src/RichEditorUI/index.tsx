import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as EditorType } from 'tinymce';

interface PropsType {
  value?: string; // 当前值
  onChange?: (value: string) => void; // 回调函数
  placeholder?: string; // 占位符
  height?: number; // 编辑器高度
}

const RichEditorUI = (props: PropsType) => {
  const { value = '', onChange, placeholder, height = 500 } = props;
  const editorRef = useRef<EditorType | null>(null);

  return (
    <Editor
      value={value}
      onEditorChange={(newValue) => {
        if (onChange) {
          onChange(newValue);
        }
      }}
      // 指向 public 目录下的 tinymce 核心文件，启用自托管模式
      tinymceScriptSrc="https://file.51qianqian.cn/frontend-file/tinymce/tinymce.min.js"
      // 声明使用 GPL 协议，消除 v7+ 版本的无许可警告
      licenseKey="gpl"
      // 编辑器初始化完成后，将实例存储到 ref 中
      onInit={(_evt, editor) => (editorRef.current = editor)}
      // 初始化配置对象
      init={{
        // 确保 public/tinymce/langs/zh_CN.js 文件存在，启用中文界面
        language: 'zh_CN',
        // 设置编辑器高度
        height: height,
        // 设置默认占位符，如果组件未传入，则使用默认值
        placeholder: placeholder || '请输入详细内容...',
        // 显示顶部菜单栏（文件、编辑、插入等）
        menubar: true,
        // 隐藏右下角的 TinyMCE 品牌标志
        branding: false,
        // 隐藏右下角升级推广按钮
        promotion: false,

        // 插件列表
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'print',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
          'directionality',
          'emoticons',
          'codesample',
          'pagebreak',
        ],

        // 工具栏 (Toolbar) 配置
        toolbar:
          'undo redo | ' +
          'bold italic underline strikethrough | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'outdent indent | bullist numlist | ' +
          'link image media table codesample | ' +
          'forecolor backcolor emoticons | ' +
          'removeformat | fullscreen | print preview | code help' +
          'pagebreak',

        table_use_colgroups: true, // 使用 colgroups 提高表格宽度控制的准确性
        table_default_attributes: {
          border: '1', // 默认表格边框
        },
        table_appearance_options: true, // 启用表格外观选项
        table_grid: true, // 启用网格视图

        // 右键菜单和快速工具栏
        contextmenu: 'link image imagetools table', // 自定义右键菜单项
        // 选中文字时弹出的快速工具栏
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
        // 光标在空行时弹出的快速插入工具栏
        quickbars_insert_toolbar: 'quickimage quicktable',
      }}
    />
  );
};

export default RichEditorUI;
