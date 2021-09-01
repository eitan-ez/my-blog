import { Button, ButtonGroup, TextField, ThemeProvider, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import "./ContactMe.scss";
import notify from "../../../Services/Notification";
import rtlTheme from "../MuiThemes/CreateMuiTheme";

class ContactMeModel {
    name: string;
    email: string;
    message: string;
    phone: string;
}

function ContactMe(): JSX.Element {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm<ContactMeModel>();

    const userId: string = process.env.REACT_APP_USER_ID;
    const templateId: string = process.env.REACT_APP_TEMPLATE_ID;
    const sercieId: string = process.env.REACT_APP_SERVICE_ID;


    async function send(contactInfo: ContactMeModel) {
        if(contactInfo.phone === undefined) {
            contactInfo.phone = "";
        }
        const infoToSend = {
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            message: contactInfo.message,
        }

        console.log(process.env);

        emailjs.send(sercieId ,templateId, infoToSend, userId)
        .then((response) => {
                notify.success("ההודעה נשלחה :) תודה על תגובתכם");
                history.push("/home");
            })
            .catch((error) => notify.error(error));
    }


    return (
        <ThemeProvider theme={rtlTheme}>
            <div className="ContactMe">
                <form className="SignForm Box" onSubmit={handleSubmit(send)}>
                    <Typography align="center" variant="h2" >
                        צרו קשר
                    </Typography>

                    <Typography>
                        הטופס ישלח לי מייל עם כל הפרטים שהכנסתם. אשתדל לשוב אליכם בהקדם
                    </Typography>
                    <TextField
                        {...register("name", {
                            required: "Missing Field",
                            minLength: {
                                value: 3,
                                message: "שם חייב להכיל לפחות 3 תווים.",
                            },
                        })}
                        label="שם"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                    />
                    {errors.name && (
                        <p className="ErrorMessage">{errors.name.message}</p>
                    )}
                    <br />

                    <TextField
                        {...register("email", {
                            required: "שדה חסר",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "יש להכניס אימייל תקני",
                            },
                        })}
                        label="דואר אלקטרוני"
                        variant="outlined"
                        required
                        fullWidth
                    />
                    {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}
                    <TextField
                        {...register("phone", {
                            pattern: {
                                value: /\d+/,
                                message: "מספר הטלפון חייב להיות, ובכן, מספר",
                            },
                        })}
                        label="טלפון (אופציונלי)"
                        variant="outlined"
                        fullWidth
                    />
                    {errors.phone && <p className="ErrorMessage">{errors.phone.message}</p>}
                    <TextField
                        {...register("message", {
                            required: "שדה חסר",
                            minLength: {
                                value: 10,
                                message: "ההודעה חייבת להיות לפחות 10 תווים.",
                            },
                        })}
                        label="הודעה"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        multiline
                    />
                    {errors.message && <p className="ErrorMessage">{errors.message.message}</p>}
                    <ButtonGroup variant="text" fullWidth>
                        <Button type="submit" color="primary">
                            שליחה
                        </Button>
                        <Button type="reset" color="secondary">
                            ביטול
                        </Button>
                    </ButtonGroup>

                </form>

            </div>
        </ThemeProvider>
    );
}

export default ContactMe;
