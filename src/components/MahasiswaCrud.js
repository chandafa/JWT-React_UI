// src/components/MahasiswaCrud.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MahasiswaCrud = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const navigate = useNavigate(); // gunakan useNavigate alih-alih useHistory

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/'); // Redirect ke login jika tidak ada token
        }

        fetch('http://localhost:4000/mahasiswa', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setMahasiswa(result.data);
            })
            .catch((error) => {
                console.error('Error fetching mahasiswa:', error);
            });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Hapus token dari localStorage
        navigate('/');  // Arahkan ke halaman login
    };

    return (
        <div>
            <h1>Daftar Mahasiswa</h1>
            <button onClick={handleLogout}>Logout</button>
            {mahasiswa.length > 0 ? (
                <ul>
                    {mahasiswa.map((mhs) => (
                        <li key={mhs.id}>
                            {mhs.nama} - {mhs.nim} - {mhs.jenis_kelamin} - {mhs.jurusan}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MahasiswaCrud;
