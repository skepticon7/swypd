import {useEffect, useState} from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox.tsx";

const ContactModal = ({ isOpen, onClose }) => {

    const  [loading , setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1023 && isOpen) {
                onClose();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen, onClose]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid =
        form.name.trim() !== "" &&
        form.message.trim() !== "" &&
        isValidEmail(form.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch('/api/sendContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (response.ok) {
                setForm({ name: '', email: '', message: '' });
            } else {
                console.error('Error:', result.error);
            }
        } catch (error) {
            console.error('Network error:', error);
        }finally {
            setLoading(false);
        }

    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-secondary-black/50 w-full">
                    <motion.div
                        key="modal"
                        initial={{ x: "200%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "200%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                        className="bg-tertiary-white/50 backdrop-blur-lg shadow-lg rounded-sm relative xs:w-[50%] md:w-[40%]"
                    >
                        <div
                            className="md:px-10 md:py-5 lg:px-15 lg:py-10 xl:px-20 xl:py-15 flex flex-col gap-10 items-center justify-center">
                            <div className="flex items-center justify-between w-full">
                                <p className="oswald-semibold lg:text-2xl xl:text-3xl ">Contact us</p>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 duration-200 transition-all cursor-pointer"
                                >
                                    <X className="text-secondary-black/60 hover:text-secondary-black duration-200 transition-colors lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"/>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                                <input
                                    autoComplete="off"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="flex-grow oswald-light text-tertiary-white  lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs border focus:ring-1 focus:ring-tertiary-white  border-tertiary-white/60
                                            bg-transparent px-3 py-2 h-full"
                                    placeholder="Your full name"
                                />
                                <input
                                    autoComplete="off"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    type="text"
                                    className="flex-grow oswald-light  text-tertiary-white  lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs focus:ring-1 focus:ring-tertiary-white border border-tertiary-white/60
                                            bg-transparent px-3 py-2 h-full"
                                    placeholder="your email"
                                />
                                <textarea
                                    autoComplete="off"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="flex-grow oswald-light text-tertiary-white  lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs border focus:ring-1 focus:ring-tertiary-white border-tertiary-white/60
                                            bg-transparent px-2 py-3 max-h-40 "
                                    placeholder="Let us hear from you..."
                                ></textarea>
                                <div className='flex items-center justify-start gap-2'>
                                    <Checkbox
                                        checked={form.agree}
                                        onCheckedChange={(checked) =>
                                            setForm({ ...form, agree: checked })
                                        }
                                        className='
                                            w-4.5 h-4.5
                                          data-[state=checked]:bg-primary-red
                                          data-[state=checked]:border-tertiary-white
                                          data-[state=checked]:text-tertiary-white
                                          cursor-pointer
                                          '
                                    />
                                    <p className='oswald-regular xs:text-xs sm:text-sm md:text-base text-secondary-black '>I
                                        agree to receive news, updates, and offers by email.</p>
                                </div>
                                <button
                                    disabled={!isFormValid}
                                    className={`akira mt-3 cursor-pointer rounded-xs transition-colors py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                text-[0.7rem] xs:text-[0.75rem] disabled:cursor-not-allowed text-tertiary-white sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                ${
                                        isFormValid
                                            ? "bg-primary-red/90 hover:bg-primary-red "
                                            : "bg-primary-red/60  "
                                    }`}
                                >
                                    {loading ? (
                                        <div className='flex items-center justify-center gap-2'>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            <p>Sending...</p>
                                        </div>
                                    ) : (
                                        'send message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
