import React from 'react';
import Editor from '@toast-ui/editor';
import PropTypes from 'prop-types';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.editor = null;
  }

  componentDidMount() {
    this.editor = new Editor({
      el: this.myRef.current,
      hideModeSwitch: true,
    });

    this.editor.addHook('change', () => {
      const content = this.editor.getMarkdown();
      this.props.contentChange(content);
    });
  }

  componentWillUnmount() {
    this.editor.remove();
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

MarkdownEditor.propTypes = {
  contentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
