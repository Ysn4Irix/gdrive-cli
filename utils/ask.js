const os = require("os");
const fs = require("fs");
const path = require("path");
const {
    Input
} = require("enquirer");
const to = require("await-to-js").default;
const handleError = require("cli-handle-error");
const shouldCancel = require("cli-should-cancel");
const store = require("data-store");

module.exports = async ({
    name,
    message,
    hint
}) => {
    let history = {
        autosave: true,
        store: new store({
            path: path.join(
                os.homedir(),
                `.gdrive/config/${name}.json`
            )
        })
    };

    const [err, response] = await to(
        new Input({
            name,
            message,
            hint,
            history,
            validate(value, state) {
                if (state && state.name === `name`) {
                    if (fs.existsSync(value)) {
                        return `Directory already exists: ./${value}`;
                    } else {
                        return true;
                    }
                }
                return !value ? `Please add a value.` : true;
            }
        })
        .on(`cancel`, () => shouldCancel())
        .run()
    );
    handleError(`INPUT`, err);

    return response;
};