export default function Email() {
    return (
        <>
            {/* <div className="container text-black ">
                <form action="http://localhost:8081/send-email" method="post" >
                    <div className="fieldTo d-flex justify-content-between">
                        <label className="w-25">To</label>
                        <input type="text" name="email" className="w-100" />
                    </div>
                    <div className="fieldSubject d-flex justify-content-between">
                        <label className="w-25 ">Subject</label>
                        <input type="text" name="subject" className="w-100" />
                    </div>
                    <div className="fieldSubject d-flex justify-content-between">
                        <label className="w-25">Text</label>
                        <textarea id="w3review" name="text" rows="4" cols="50" className="w-100"></textarea>
                    </div>
                        <input type="submit" value={"submit"} className="rounded border-0" />
                </form>



            </div> */}
            <div class="container text-black ">
                <form action="http://localhost:8081/send-email" method="post" >
                    <div class="fieldTo d-flex justify-content-between">
                        <label class="w-25">To</label>
                        <input type="text" name="email" class="w-100" />
                    </div>
                    <div class="fieldSubject d-flex justify-content-between">
                        <label class="w-25 ">Subject</label>
                        <input type="text" name="subject" class="w-100" />
                    </div>
                    <div class="fieldSubject d-flex justify-content-between">
                        <label class="w-25">Text</label>
                        <textarea id="w3review" name="text" rows="4" cols="50" class="w-100"></textarea>
                    </div>
                        <input type="submit" value="submit" class="rounded border-0" />
                </form>



            </div>

        </>
    )
}