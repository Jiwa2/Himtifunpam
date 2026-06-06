// ErrorBoundary.jsx
import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMsg: "" };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMsg: error.message };
    }
    render() {
        if (this.state.hasError) {
            return <div style={{ padding: "2rem", color: "red" }}>
                <h2>Terjadi Kesalahan</h2>
                <p>{this.state.errorMsg}</p>
            </div>;
        }
        return this.props.children;
    }
}
